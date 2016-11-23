const babelTemplate = require('babel-template')

const buildHelper = babelTemplate(`
  function CLASS() { return Reflect.construct(HTMLElement, [], this.__proto__.constructor); };
  Object.setPrototypeOf(CLASS.prototype, HTMLElement.prototype);
  Object.setPrototypeOf(CLASS, HTMLElement);
`)

const helpers = new WeakMap()

function programCustomElementHelper(program) {
  let helperClass = helpers.get(program)
  if (!helperClass) {
    helperClass = program.scope.generateUidIdentifier('CustomElement')
    const helper = buildHelper({CLASS: helperClass})
    program.unshiftContainer('body', helper)
    helpers.set(program, helperClass)
  }
  return helperClass.name
}

module.exports = function() {
  return {
    visitor: {
      Class: function(path) {
        const superClass = path.get('superClass')
        const match = superClass.isIdentifier({ name: 'HTMLElement' })
        if (!match) return

        const name = programCustomElementHelper(path.scope.getProgramParent().path)
        superClass.replaceWith({ type: 'Identifier', name: name })
      }
    }
  }
}
