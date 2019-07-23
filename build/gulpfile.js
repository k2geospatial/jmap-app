/**
 * @author : Laurent Mignonat
 * @copyright (c) 2004-2019 K2 Geospatial, Inc. All Rights Reserved.
 */
const path = require('path')
const join = path.join // shortcut
const fs = require('fs')
const gulp = require('gulp')
const execSync = require('child_process').execSync
const typedoc = require("gulp-typedoc")

// __dirname is the directory witch contains the gulpfile.js file
const ROOT_DIR = join(__dirname, '..')
const DOC_ROOT_DIR = join(__dirname, '../docs')
const SRC_DIR = join(ROOT_DIR, '/src/public')
const packageJSON = JSON.parse(fs.readFileSync("../package.json"))
const newNpmVersion = packageJSON.version
const DOC_DIR = process.env.DOC_DIR ? join(ROOT_DIR, process.env.DOC_DIR) : join(DOC_ROOT_DIR, `v${newNpmVersion}`)

console.log('Directories :')
console.log(`  Doc dir  => ${DOC_ROOT_DIR}`)
console.log(`  Src dir => ${SRC_DIR}`)

/************************************* PUBLISH ************************************/

gulp.task('publish-npm', cb => {
  execSync(`npm publish`, { cwd: ROOT_DIR })
  console.log(`NPM : version="${newNpmVersion}" has been published`)
  cb()
})

/*********************************** COMMIT ************************************/

gulp.task('commit', cb => {
  execSync(`git add .`, { cwd: ROOT_DIR })
  console.log(`GIT : all documentation files staged for commit`)
  const commitMessage = `Publish version '${newNpmVersion}' of documentation`
  execSync(`git commit -m "${commitMessage}"`, { cwd: ROOT_DIR })
  console.log(`GIT : commit done (message="${commitMessage}")`)
  execSync(`git push`, { cwd: ROOT_DIR })
  console.log(`Git : all documentation files has been committed and pushed on origin`)
  cb()
})

/******************************** DOCUMENTATION ********************************/

// https://typedoc.org/api/
gulp.task("typedoc", cb => {
  console.log(`DOC : generating doc in directory "${DOC_DIR}"`)
  console.log(`DOC : file://${DOC_DIR}/index.html`)
  return gulp
      .src([
        "../public/**/*.ts",
        "../node_modules/jmap-api-ng/public/**/*.ts",
      ])
      .pipe(typedoc({
          readme: "./public-doc-readme.md",
          mode: "file",
          excludeExternals: true,
          excludePrivate: true,
          tsconfig: "./tsconfig.json",
          includeDeclarations: true,
          out: DOC_DIR,
          name: "jmap-api",
          hideGenerator: true,
          version: false,
          ignoreCompilerErrors: false,
      }))
})

/********************************** PUBLIC TASKS **********************************/

// Use it when you only want to modify the doc (but not publish)
gulp.task('commit-doc', gulp.series('typedoc', 'commit'))

// Main task
gulp.task('publish', gulp.series('commit-doc', 'publish-npm'))

gulp.task('default', gulp.series('publish'))
