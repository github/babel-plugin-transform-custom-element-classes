suite("FlagIcon", function() {
  class FlagIcon extends HTMLElement {
    constructor() {
      super()
      this._constructorDidRun = true
    }
  }
  customElements.define("flag-icon", FlagIcon)

  test("createElement", function() {
    var icon = document.createElement("flag-icon")
    chai.assert(icon instanceof HTMLElement)
    chai.assert(icon instanceof FlagIcon)
    chai.assert.equal(icon.tagName, "FLAG-ICON")
    chai.assert.equal(icon._constructorDidRun, true)
  })

  test("constructor", function() {
    var icon = new FlagIcon()
    chai.assert(icon instanceof HTMLElement)
    chai.assert(icon instanceof FlagIcon)
    chai.assert.equal(icon.tagName, "FLAG-ICON")
    chai.assert.equal(icon._constructorDidRun, true)
  })

  test("innerHTML", function() {
    var div = document.createElement("div")
    div.innerHTML = "<flag-icon></flag-icon>"
    var icon = div.querySelector("flag-icon")

    chai.assert(icon instanceof HTMLElement)
    chai.assert(icon instanceof FlagIcon)
    chai.assert.equal(icon.tagName, "FLAG-ICON")
    chai.assert.equal(icon._constructorDidRun, true)
  })
})
