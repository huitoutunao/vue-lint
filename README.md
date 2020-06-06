# uweb前端vue项目eslint、stylelint以及一些项目要求说明文档

> 包含项目中的eslint、stylelint、editorconfig、gitignore配置文件，以及安装步骤

## 安装步骤

首先需要把依赖的插件都安装好，需要安装如下：

```
// 安装eslint依赖以及vue的插件
npm install --save-dev eslint eslint-plugin-vue

// 安装eslint-loader
npm install --save-dev eslint-loader

// 安装eslint-friendly-formatter
npm install --save-dev eslint-friendly-formatter

// 安装babel-eslint
npm install --save-dev babel-eslint

// 安装stylelint-webpack-plugin
npm install --save-dev stylelint-webpack-plugin stylelint
```

我们先配置`eslint`，将仓库中的配置文件`.eslintrc.js`放到项目根目录。

当我们在开发进行时需要实时使用`eslint`就需要配置`eslint-loader`了，配置也很简单，在`webpack.base.config.js`中配置如下代码：

```javascript
// ……省略的config代码
rules: [{
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src'), resolve('test')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
    }
}]
```

接下来到配置`stylelint`，将仓库中的配置文件`.stylelintrc.js`放到项目根目录。

因为已经有一个可以直接使用的插件了，所以我们可以[参考文档](https://vue-loader.vuejs.org/zh/guide/linting.html#stylelint)，代码如下：

```javascript
// webpack.config.js

const StyleLintPlugin = require('stylelint-webpack-plugin');
module.exports = {
  // ... 其它选项
  plugins: [
    new StyleLintPlugin({
      files: ['../src/**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    })
  ]
}
```

> **注意：files中的路径根据自己项目目录来配置，只用检验`src`目录内的文件就好了**

最后，当我们开发运行`npm run dev`的时候，开发目录有不符合规范的

## 注意事项

- 编辑器的格式配置就是仓库中的`.editorconfig`，需要放在根目录下。

- 并且`.gitignore`文件也需要在一开始新建仓库的时候就有，在里面配置我们的忽略文件。

- 在运行时并不是什么文件都会检测，当你这个组件或者这个文件没有被引用的时候是不会检测的。
