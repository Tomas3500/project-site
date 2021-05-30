const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp');

const browsersync = require("browser-sync").create();
const cssnano = require('gulp-cssnano');
const changed = require("gulp-changed");
const imagemin = require("gulp-imagemin");
const clean = require("gulp-clean");
const autoprefixer = require('gulp-autoprefixer');
const concatCss = require('gulp-concat-css');
const sass = require('gulp-sass');
const concat = require('gulp-concat');


//cssnano
function css() {
    const source = './style/css.css';
    return src(source)
        .pipe(autoprefixer({
            cascade:false,
        }))
        .pipe(cssnano())
        .pipe(dest('./build/css'))
        .pipe(browsersync.stream());
}
//concat js
function js() {
    const source = './main.js';
    return src(source)
        .pipe(concat('all.js'))
        .pipe(dest('./build/js'))
        .pipe(browsersync.stream());
}

//imagemin

function img() {
    const source = './img/*';
    return src(source)
        .pipe(imagemin())
        .pipe(dest('build/images'))
}

//changed
function html() {
    return src('./*.html')
        .pipe(dest('./build'))
        .pipe(browsersync.stream());
}

function clear() {
    return src('build', {read: false})
        .pipe(clean());
}

function watchFiles() {
    watch('./style/*', css);
    watch('./*html', html);
    watch('./img/*', img);

}

function browS() {
    browsersync.init({
        server: {
            baseDir: "./"
        },
    });

}

exports.watch = parallel(watchFiles, browS);
exports.default = series( parallel(css, html, img,js));