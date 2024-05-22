class Tooltip extends HTMLElement {
   constructor() {
      super();
      this._tooltipBox;
      this._tooltipText = 'This is the default tooltip text';
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
         <style>
            div {
               background-color: #222222;
               color: #ffffff;
            }
         </style>
         <slot>Some default</slot><span> (?)</span>
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
      const tooltipP = document.createElement('p');
      tooltipP.textContent = this._tooltipText;
      this.appendChild(this._tooltipBox);
      this._tooltipBox.appendChild(tooltipP);
   }

   _hideTooltip() {
      this.removeChild(this._tooltipBox);
   }
}
customElements.define('tn-tooltip', Tooltip);