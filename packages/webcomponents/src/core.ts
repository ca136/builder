// this file is for legacy browsers that require the custom-element polyfill
// modern browsers should use the core-list.ts file
import './polyfills/custom-element-es5-adapter.js'
import { builder, Builder } from '@builder.io/sdk'
import { version } from '../package.json'
import './elements'

export const VERSION = version
export { builder, Builder }
