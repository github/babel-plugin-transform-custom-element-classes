class FlagIcon extends HTMLElement {
  constructor() {
    super();
    this._countryCode = null;
  }
}

customElements.define("flag-icon", FlagIcon);


class TacoButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener("keydown", e => {
      if (e.keyCode === 32 || e.keyCode === 13) {
        this.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        }));
      }
    });

    this.addEventListener("click", e => {
      if (this.disabled) {
        e.preventDefault();
        e.stopPropagation();
      }
    });

    this._observer = new MutationObserver(() => {
      this.setAttribute("aria-label", this.textContent);
    });
  }
}
customElements.define("taco-button", TacoButton);
