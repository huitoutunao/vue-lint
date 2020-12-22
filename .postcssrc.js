module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'postcss-aspect-ratio-mini': {},
        'postcss-write-svg': {
            utf8: false
        },
        'postcss-cssnext': {},
        'postcss-px-to-viewport': {
            // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
            viewportWidth: 750,

            // 指定`px`转换为视窗单位值的小数位数
            unitPrecision: 4,

            // 指定需要转换成的视窗单位，建议使用vw
            viewportUnit: 'vw',

            // 自定义不转换为视窗单位的类，建议定义一至两个通用的类名
            selectorBlackList: ['.ignore', '.hairlines'],

            // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            minPixelValue: 1,

            // 允许在媒体查询中转换`px`
            mediaQuery: false
        },
        'cssnano': {
            "cssnano-preset-advanced": {
                zindex: false,
                autoprefixer: false
            }
        }
    }
}
