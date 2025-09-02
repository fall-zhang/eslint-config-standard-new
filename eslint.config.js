import standard from './config.js'
import jslint from '@eslint/js'
// import tailwind from 'eslint-plugin-tailwindcss'
import tslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

const tsLintConfig = {
  name: 'ts-files-lint',
  rules: {
    // typescript
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
    '@typescript-eslint/no-unused-expressions': 'off'
  }
}

export default defineConfig([
  // global ignores
  {
    name: 'app/files-to-ignore',
    ignores: ['**/temp.js', '**/.nuxt/**', '**/node_modules/**', '**/dist/**']
  },
  jslint.configs.recommended,
  standard, // js 标准配置
  ...tslint.configs.recommended,
  tsLintConfig
])