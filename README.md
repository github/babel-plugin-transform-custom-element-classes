# babel-plugin-transform-custom-element-classes

Compile Custom Element classes that extend `HTMLElement` for ES5 environments.

### Problem

Custom Elements were designed for native ES6 classes that can extend host objects in ways prototypical inheritance can not. Using the Babel `transform-es2015-classes` transform will not work as is. You'll likely see a runtime error like `"Uncaught TypeError: Failed to construct 'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function."` when attempting to extend `HTMLElement` in a Babel transpiled class.

### Solution

A workaround is to use `Reflect.construct` to build a new `HTMLElement` instance expected by the constructor. This transform wraps any ES6 classes extending `HTMLElement` with an intermediary class that shims this behavior.

## Compatibility

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
Latest ✅ | ❌ | ❌ | ❌ | 10.1+ TP ✅ |

### With [Custom Elements V1 polyfill](https://github.com/webcomponents/custom-elements)

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
Latest ✅ | Latest ✅ | 11 ✅ | Latest ✅ | 9.1+ ✅ |

## Installation

```sh
$ npm install babel-plugin-transform-custom-element-classes
```

## Usage

### Via `.babelrc`

**.babelrc**

```js
// include before transform-es2015-classes
{
  "plugins": [
    "transform-custom-element-classes",
    "transform-es2015-classes"
  ]
}
```
