module.exports = {
    sourceMap: true,
    plugins: {
        'autoprefixer': ({
            cascade: false,
            grid: true
        }),
        'postcss-partial-import': {},
        'postcss-short': {},
        'postcss-apply': {},
        'postcss-nested': {},
        'postcss-extend': {},
        'postcss-mixins': {},
        'postcss-cssnext': {
            features: {
                autoprefixer: false,
                applyRule: false,
                rem: false,
                colorRgba: false
            }
        },
        'postcss-assets': {
            loadPaths: ['./public/assets/images/'],
            relative: './public/assets/css'
        },
        'postcss-at2x': {
            detectImageSize: false
        },
        'postcss-inline-svg': {},
        'css-mqpacker': {
            sort: true
        },
        'perfectionist': {
            cascade: false,
            colorCase: 'lower',
            colorShorthand: true,
            format: 'expanded',
            indentChar: '\t',
            indentSize: 1,
            trimLeadingZero: false,
            trimTrailingZeros: true,
            zeroLengthNoUnit: true
        },
        'postcss-reporter': {}
    }
};