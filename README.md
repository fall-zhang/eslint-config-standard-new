# eslint-plugin-new-standard

## Introduction 介绍

The replacement of eslint-plugin-standard for eslint v9.

eslint-plugin-standard 的 v9 版本，尽可能兼容所有配置项。

## How to use 如何使用

```bash
pnpm i eslint-config-standard-new -D
```

```js
// eslint.config.js
import standardConfig from 'eslint-config-standard-new'

export default defineConfig([
  // global ignores
  {
    name: 'app/files-to-ignore',
    ignores: ['**/temp.js', '**/.nuxt/**', '**/node_modules/**', '**/dist/**']
  },
  // add standard config
  standardConfig
  // other config
  // ...
])
```
