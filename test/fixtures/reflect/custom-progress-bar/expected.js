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

// https://webkit.org/wp-content/uploads/custom-element-demo.html
let CustomProgressBar = function (_CustomElement2) {
  _inherits(CustomProgressBar, _CustomElement2);

  function CustomProgressBar() {
    _classCallCheck(this, CustomProgressBar);

    var _this = _possibleConstructorReturn(this, (CustomProgressBar.__proto__ || Object.getPrototypeOf(CustomProgressBar)).call(this));

    const shadowRoot = _this.attachShadow({ mode: 'closed' });
    shadowRoot.innerHTML = `
      <style>
        :host { display: inline-block; width: 5rem; height: 1rem; }
        .progress { display: inline-block; position: relative; border: solid 1px #000; padding: 1px; width: 100%; height: 100%; }
        .progress > .bar { background: #9cf; height: 100%; }
        .progress > .label { position: absolute; top: 0; left: 0; width: 100%;
          text-align: center; font-size: 0.8rem; line-height: 1.1rem; }
      </style>
      <div class="progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
        <div class="bar" style="width: 0px;"></div>
        <div class="label">0%</div>
      </div>
    `;
    _this._progressElement = shadowRoot.querySelector('.progress');
    _this._label = shadowRoot.querySelector('.label');
    _this._bar = shadowRoot.querySelector('.bar');
    return _this;
  }

  _createClass(CustomProgressBar, [{
    key: 'progress',
    get: function () {
      return this._progressElement.getAttribute('aria-valuenow');
    },
    set: function (newPercentage) {
      this._progressElement.setAttribute('aria-valuenow', newPercentage);
      this._label.textContent = newPercentage + '%';
      this._bar.style.width = newPercentage + '%';
    }
  }]);

  return CustomProgressBar;
}(_CustomElement);

;
customElements.define('custom-progress-bar', CustomProgressBar);
