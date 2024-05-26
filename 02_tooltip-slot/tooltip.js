class Tooltip extends HTMLElement {
   constructor() {
      super();
      this._tooltipPopup;
      this._tooltipText = 'Detault text.';
      this.attachShadow({ mode: 'open' });
      const template = document.querySelector('#tooltip-template');
      this.shadowRoot.appendChild(template.content.cloneNode(true));
   }

   connectedCallback() {
      if (this.hasAttribute('text')) {
         this._tooltipText = this.getAttribute('text');
      }
      const tooltipIcon = this.shadowRoot.querySelector('span');
      tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
      tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
      this.shadowRoot.appendChild(tooltipIcon);
      this.style.position = 'relative';
   }

   _showTooltip() {
      this._tooltipPopup = document.createElement('div');
      this._tooltipPopup.textContent = this._tooltipText;
      this._tooltipPopup.style.backgroundColor = '#E2E2E2';
      this._tooltipPopup.style.color = '#000000';
      this._tooltipPopup.style.position = 'absolute';
      this._tooltipPopup.style.width = '20em';
      this._tooltipPopup.style.zIndex = '10';

      this.shadowRoot.appendChild(this._tooltipPopup);
   }

   _hideTooltip() {
      this.shadowRoot.removeChild(this._tooltipPopup);
   }
}

customElements.define('tn-tooltip', Tooltip);
