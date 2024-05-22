class Tooltip extends HTMLElement {
   constructor() {
      super();
      this._tooltipBox;
      this._tooltipText = 'This is the default tooltip text';
      this.attachShadow({ mode: 'open' });
      const template = document.querySelector('#tooltip-template');
      this.shadowRoot.appendChild(template.textContent.cloneNote(true));
   }

   connectedCallback() {
      if (this.hasAttribute('text')) {
         this._tooltipText = this.getAttribute('text');
      }
      const spanIcon = this.shadowRoot.querySelector('span');
      spanIcon.addEventListener('mouseover', this._showTooltip.bind(this));
      spanIcon.addEventListener('mouseout', this._hideTooltip.bind(this));
      this.shadowRoot.appendChild(spanIcon);
   }

   _showTooltip() {
      this._tooltipBox = document.createElement('div');
      const tooltipP = document.createElement('p');
      tooltipP.textContent = this._tooltipText;
      this.shadowRoot.appendChild(this._tooltipBox);
   }

   _hideTooltip() {
      this.shadowRoot.removeChild(this._tooltipBox);
   }
}
customElements.define('tn-tooltip', Tooltip);