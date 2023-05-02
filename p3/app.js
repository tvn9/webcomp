class Tooltip extends HTMLElement {
   constructor() {
      super();
      this._tooltipBox;
      this._tooltipText = 'Default tooltip text'
      this.attachShadow({ mode: 'open' }) 
   }
   connectedCallback() {
      if (this.hasAttribute('text')) {
         this._tooltipText = this.getAttribute('text')
      }
      const icon = document.createElement('span')
      icon.textContent = ' (?)'
      icon.addEventListener('mouseenter', this._showToolTip.bind(this))
      icon.addEventListener('mouseleave', this._hideToolTip.bind(this))
      this.shadowRoot.appendChild(icon)
      console.log('It is working!')
   }

   _showToolTip() {
      this._tooltipBox = document.createElement('div')
      this._tooltipBox.textContent = this._tooltipText
      this.shadowRoot.appendChild(this._tooltipBox)
   }

   _hideToolTip() {
      this.shadowRoot.removeChild(this._tooltipBox)
   }

}
customElements.define('tn-tooltip', Tooltip)