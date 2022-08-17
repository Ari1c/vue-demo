module.exports = {
    "env": {
        "node": true,
        'vue/setup-compiler-macros': true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "parserOptions": {
        // ecmaVersion: 'latest',
        //把 latest 这里修改一下就好了
        "ecmaVersion": 12,
        allowImportExportEverywhere: true, // 不限制eslint对import使用位置
        ecmaFeatures: {
            modules: true,
            legacyDecorators: true
        },
        "sourceType": "module",
        parser: '@babel/eslint-parser',
        "requireConfigFile": false
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "no-unused-vars": "off"
    }
}
