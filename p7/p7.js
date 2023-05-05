class Tooltip extends HTMLElement {
   constructor() {
      super();
      this._tooltipBox;
      this._tooltipP;
      this._tooltipText = 'This is the default tooltip text';
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
         <style>
            p {
               width: max-content;
               padding: 1rem;
               border-radius: 5px;
               background: #3F63E0;
               color: #ffffff;
            }

         </style>
         <span> (?)</span>
         <slot>Some Default</slot>
      `;
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
      this._tooltipP = document.createElement('p');
      this.shadowRoot.appendChild(this._tooltipBox);
      this._tooltipBox.appendChild(this._tooltipP);
      this._tooltipP.textContent = this._tooltipText;
   }

   _hideTooltip() {
      this.shadowRoot.removeChild(this._tooltipBox);
   }
}
customElements.define('tn-tooltip', Tooltip);