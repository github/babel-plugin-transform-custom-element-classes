const babelTemplate = require('babel-template')

const buildHelper = babelTemplate(`
  function CLASS() { return Reflect.construct(HTMLElement, [], this.__proto__.constructor); };
  Object.setPrototypeOf(CLASS.prototype, HTMLElement.prototype);
  Object.setPrototypeOf(CLASS, HTMLElement);
`)

module.exports = function() {
  return {
    visitor: {
      Class: function Class(path) {
        const superClass = path.get('superClass')
        const match = superClass.isIdentifier({ name: 'HTMLElement' })
        if (!match) return

        const helperClass = path.scope.generateUidIdentifier('CustomElement')
        const helper = buildHelper({CLASS: helperClass})
        path.scope.getProgramParent().path.unshiftContainer('body', helper)

        superClass.replaceWith({ type: 'Identifier', name: helperClass.name })
      }
    }
  }
}
