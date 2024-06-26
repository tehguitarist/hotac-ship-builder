'use strict';

const gulp = require('gulp');
const path = require('path');
const fs = require('fs-extra');
const assetPackageNames = [
    'xwing-data',
    'xwing-miniatures-font'
];

const gulpPath = process.cwd();

module.exports = function () {
    gulp.task('copyXwingAssets', function () {
        assetPackageNames.forEach(function (packageName) {
            const srcPackagePath = path.dirname(require.resolve(packageName + '/package.json'));
            const assetPath = gulpPath + '/app/components/' + packageName;
            fs.copySync(srcPackagePath, assetPath);
        });
    });
};
