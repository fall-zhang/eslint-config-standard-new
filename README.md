# eslint-plugin-new-standard

## Introduction 介绍

The replacement of eslint-plugin-standard.

eslint-plugin-standard 的 v9 版本，尽可能兼容所有配置项。

## How to use 如何使用


```js
import standardConfig from 'eslint-plugin-new-standard'

export default defineConfig([
  // global ignores
  {
    name: 'app/files-to-ignore',
    ignores: ['**/temp.js', '**/.nuxt/**', '**/node_modules/**', '**/dist/**']
  },
  standardConfig
  // other config
])

```
