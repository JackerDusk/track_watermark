   module.exports= {
    "env": {
        "browser": true,
        "es2021": true,
         "vue/setup-compiler-macros":true
    },
    "extends": [
        "eslint:recommended",
         "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended"

    ],

    "overrides": [
    ],
  
    "parser": "vue-eslint-parser",
    "parserOptions":{"parser":"@typescript-eslint/parser"},
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "vue/multi-word-component-names":"off",
    }

   }