// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    
  },
  globals: {
    $: true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    'arrow-body-style': 0,
    'no-console': 0,
    'vars-on-top': 0,
    'prefer-arrow-callback': 0,
    'max-len': [2, 180],
    'space-before-function-paren': 0,
    'no-unused-vars': 0,
    'no-mixed-operators': 0,
    'import/first': 0,
    // 强制对象字面量缩写语法
    'object-shorthand': 0,
    // 禁止使用++，--
    'no-plusplus': 0,
    'prefer-template': 0,
    // 箭头函数用小括号括起来
    'arrow-parens': 0,
    'global-require': 0,
    // 对象字面量中的属性名是否强制双引号
    'quote-props': 0,
    'no-restricted-syntax': 0,
    // for in循环要用if语句过滤
    'guard-for-in': 0,
    // 禁止给参数重新赋值
    'no-param-reassign': 0,
    // 首选const
    'prefer-const': 0,
    // 函数表达式必须有名字
    'func-names': 0,
    // 禁用var，用let和const代替
    'no-var': 0,
    // 一行结束后面不要有空格
    'no-trailing-spaces': 0,
    // 定义数组或对象最后多余的逗号
    'comma-dangle': ['error', 'never'],
    // 换行风格 CRLF
    'linebreak-style': [0, 'windows'],
    'quotes': ['error', 'single'],
    // 代码缩进
    'indent': [2, 4, { 'SwitchCase': 1 }],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
