# Vite Base Starter Template - Vue

This is an initial starter template for Vite and Vue3.

There are the base setup of plugins and config to get started on a project quicker without having to initially import, configure and add plugins.

## Pre-Installed and configured plugins

- autoprefixer
- axios
- eslint
- eslint-config-prettier
- eslint-plugin-vue
- lodash
- postcss
- prettier
- sass
- sass-loader
- tailwindcss
- vee-validate
- vue-axios
- vue-router
- vue3-mq
- vuex

## Customisable Cofigurations

### eslint

Within the main folder there is a file called `.eslintrc.js` and this has the configurations for eslint that can be adjusted according to your preferences.

The initial linting rules that are set are:
```
rules: {
    // override/add rules settings here, such as:
    'vue/script-setup-uses-vars': 'error',
    'vue/require-default-prop': 'off',
    'vue/no-unused-vars': 'warn',
    // disabled the no-undef because kept leading to error in eslint
    'vue/no-undef': 'off',
    'no-undef': 'warn',
    'no-unused-vars': 'warn',
    'vue/multi-word-component-names': 'off',
  },
```

You can find a full list of the eslint rules and configuration here: [eslint configuration rules](https://eslint.org/docs/user-guide/configuring/rules)

### prettier

The prettier configuration can be found within the `.prettierrc.json` file within the root of the project.

The initial configuration consists of:
```
{
  "singleQuote": true,
  "semi": false
}
```

You can find further prettier configuration settings here: [prettier options for config](https://prettier.io/docs/en/options.html)

### Tailwindcss

This base project only has the base inital setup for tailwind css.

You can find the main configuration within the `tailwind.config.js` file within the root folder.

The initial configuration for tailwindcss consists of:
```
// an array of the colour classes to add to the safelist so they do not get purged in
// production compile
const tailwindCssPurgeSafelist = require('./src/config/tailwind-safelist.js')
module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safeList: tailwindCssPurgeSafelist,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

You may notice there is a purge safelist included and relates to `./src/config/tailwind-safelist.js` .

This file allows you to add tailwind classes that may sometimes be rendered dynamically within your project and so are not inline in the code when the project builds.
When the project builds using tailwindcss, if the classes are not inline then on build those classes are purged from the project and not included in the build.

By adding them to the safelist file it still includes them in the final build and prevents them from being purged.

`tailwind-safelist.js` example:
```
// list tailwind classes here that are dynamically loaded in code and are not inline
// so they do not get purged on build

module.exports = [
  // Alert notification color style classes e.g:
  'bg-green-100',
]

```

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
