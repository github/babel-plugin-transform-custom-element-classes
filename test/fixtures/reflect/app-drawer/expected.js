var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

let AppDrawer = function (_CustomElement2) {
  _inherits(AppDrawer, _CustomElement2);

  _createClass(AppDrawer, [{
    key: 'open',


    // A getter/setter for an open property.
    get: function () {
      return this.hasAttribute('open');
    },
    set: function (val) {
      // Reflect the value of the open property as an HTML attribute.
      if (val) {
        this.setAttribute('open', '');
      } else {
        this.removeAttribute('open');
      }
      this.toggleDrawer();
    }

    // A getter/setter for a disabled property.

  }, {
    key: 'disabled',
    get: function () {
      return this.hasAttribute('disabled');
    },
    set: function (val) {
      // Reflect the value of the disabled property as an HTML attribute.
      if (val) {
        this.setAttribute('disabled', '');
      } else {
        this.removeAttribute('disabled');
      }
    }

    // Can define constructor arguments if you wish.

  }]);

  function AppDrawer() {
    _classCallCheck(this, AppDrawer);

    // Setup a click listener on <app-drawer> itself.
    var _this = _possibleConstructorReturn(this, (AppDrawer.__proto__ || Object.getPrototypeOf(AppDrawer)).call(this));
    // If you define a ctor, always call super() first!
    // This is specific to CE and required by the spec.


    _this.addEventListener('click', e => {
      // Don't toggle the drawer if it's disabled.
      if (_this.disabled) {
        return;
      }
      _this.toggleDrawer();
    });
    return _this;
  }

  _createClass(AppDrawer, [{
    key: 'toggleDrawer',
    value: function toggleDrawer() {}
  }]);

  return AppDrawer;
}(_CustomElement);

customElements.define('app-drawer', AppDrawer);