function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

let FlagIcon = function (_CustomElement2) {
  _inherits(FlagIcon, _CustomElement2);

  function FlagIcon() {
    _classCallCheck(this, FlagIcon);

    var _this = _possibleConstructorReturn(this, (FlagIcon.__proto__ || Object.getPrototypeOf(FlagIcon)).call(this));

    _this._countryCode = null;
    return _this;
  }

  return FlagIcon;
}(_CustomElement);

customElements.define("flag-icon", FlagIcon);

let TacoButton = function (_CustomElement3) {
  _inherits(TacoButton, _CustomElement3);

  function TacoButton() {
    _classCallCheck(this, TacoButton);

    var _this2 = _possibleConstructorReturn(this, (TacoButton.__proto__ || Object.getPrototypeOf(TacoButton)).call(this));

    _this2.addEventListener("keydown", e => {
      if (e.keyCode === 32 || e.keyCode === 13) {
        _this2.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        }));
      }
    });

    _this2.addEventListener("click", e => {
      if (_this2.disabled) {
        e.preventDefault();
        e.stopPropagation();
      }
    });

    _this2._observer = new MutationObserver(() => {
      _this2.setAttribute("aria-label", _this2.textContent);
    });
    return _this2;
  }

  return TacoButton;
}(_CustomElement);

customElements.define("taco-button", TacoButton);
