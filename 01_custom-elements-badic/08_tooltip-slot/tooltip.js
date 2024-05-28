class Tooltip extends HTMLElement {
   // constructor creates the element and basic initialization
   constructor() {
      super();
      this._tooltipPopup;
      this._tooltipText = 'Detault text.';
      // Enable shadow DOM 
      this.attachShadow({ mode: 'open' });

      // using html template inside JS file
      this.shadowRoot.innerHTML = `
         <slot><span> (!) </span></slot>
         <style>
            div {
               background: #E2E2E2;
               color: #000000;
               width: fit-content;
            }
         </style>
      `;


   }

   // DOM initialization
   connectedCallback() {
      if (this.hasAttribute('text')) {
         this._tooltipText = this.getAttribute('text');
      }
      const tooltipIcon = this.shadowRoot.querySelector('span');
      tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
      tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
      this.shadowRoot.appendChild(tooltipIcon);
   }

   // _showTooltip is a local method by using conventional leading underscore following with method name
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