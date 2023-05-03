class Tooltip extends HTMLElement {
   constructor() {
      super();
      this._tooltipBox;
      this._tooltipText = 'Default tooltip text'
      this.attachShadow({ mode: 'open' }) 
      this.shadowRoot.innerHTML = `
         <style>
            div {
               width: 15rem;
               background-color: #1460F7;
               color: #ffffff;
               padding: 1rem;
               margin: 0.5rem;
               border-radius: 0.5rem;
               box-shadow: 0px 5px 29px 0px #0c0e1020;
            }
         
            body {
               background-color: #f7f7f7;
            }
         </style>
         <slot>Some Text inside slot tag</slot><span>( ?)</span>
         `;
   }
   connectedCallback() {
      if (this.hasAttribute('text')) {
         this._tooltipText = this.getAttribute('text')
      }
      const icon = this.shadowRoot.querySelector('span')
      icon.addEventListener('mouseenter', this._showToolTip.bind(this))
      icon.addEventListener('mouseleave', this._hideToolTip.bind(this))
      this.shadowRoot.appendChild(icon)
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