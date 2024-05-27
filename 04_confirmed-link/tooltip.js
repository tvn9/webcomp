class Tooltip extends HTMLElement {
   constructor() {
      super();
      this._tooltipPopup;
      this._tooltipText = 'Detault text.';
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
         <style>
            div {
               background-color: #1E1E1E;
               color: #ffffff;
               max-width: fit-content;
               border: 2px solid red;
            }
         </style>
         <slot> Default text value can be used in slot</slot><span> (?) </span>
      `;
   }

   connectedCallback() {
      if (this.hasAttribute('text')) {
         this._tooltipText = this.getAttribute('text');
      }
      const tooltipIcon = this.shadowRoot.querySelector('span');
      tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
      tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
      this.shadowRoot.appendChild(tooltipIcon);
   }

   _showTooltip() {
      this._tooltipPopup = document.createElement('div');
      this._tooltipPopup.textContent = this._tooltipText;
      this.shadowRoot.appendChild(this._tooltipPopup);
   }

   _hideTooltip() {
      this.shadowRoot.removeChild(this._tooltipPopup);
   }
}

customElements.define('tn-tooltip', Tooltip);
