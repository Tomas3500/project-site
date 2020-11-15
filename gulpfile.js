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

//cssnano
function css() {
    const source = './style/css.css';
    return src(source)
        .pipe(cssnano())
        .pipe(dest('./build/css'))
        .pipe(browsersync.stream());
}

//autoprefixer
// function ConcatCss() {
//     const source = './style/**/*.css';
//     return src(source)
//         .pipe(autoprefixer({
//             overrideBrowserslist: ['last 2 versions'],
//             cascade: false
//         }))
//
//         .pipe(concatCss('styles/bundle.css'))
//         .pipe(dest('build'))
// }

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
    // watch('./style/*.scss', ConcatCss);
}

function browS() {
    browsersync.init({
        server: {
            baseDir: "./"
        },
    });

}

exports.watch = parallel(watchFiles, browS);
exports.default = series(clear, parallel(css, html, img));