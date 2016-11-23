# babel-plugin-transform-custom-element-classes

Compile Custom Element classes that extend `HTMLElement` for ES5 environments.

### Problem

Custom Elements were designed for native ES6 classes that can extend host objects in ways prototypical inheritance can not. Using the Babel `transform-es2015-classes` transform will not work as is. You'll likely see a runtime error like `"Uncaught TypeError: Failed to construct 'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function."` when attempting to extend `HTMLElement` in a Babel transpiled class.

### Solution

A workaround is to use `Reflect.construct` to build a new `HTMLElement` instance expected by the constructor. This transform wraps any ES6 classes extending `HTMLElement` with an intermediary class that shims this behavior.

## Compatibility

* **Chrome** Works as is
* **Safari 10.1 Technology Preview** Works as is
* **Safari 10 Stable** Requires [Custom Elements V1 polyfill](https://github.com/webcomponents/custom-elements)
* **Firefox** Requires [Custom Elements V1 polyfill](https://github.com/webcomponents/custom-elements)
* **Edge** Requires [Custom Elements V1 polyfill](https://github.com/webcomponents/custom-elements)
* **IE11** Requires [Custom Elements V1 polyfill](https://github.com/webcomponents/custom-elements) and `Reflect.construct` polyfill

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
