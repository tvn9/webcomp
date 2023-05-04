class Tooltip extends HTMLElement {
   constructor() {
      super();
      this._tooltipBox; 
   }

   connectedCallback() {
      const spanIcon = document.createElement('span');
      spanIcon.textContent = ' (?)';
      spanIcon.addEventListener('mouseover', this._showTooltip.bind(this));
      spanIcon.addEventListener('mouseout', this._hideTooltip.bind(this));
      this.appendChild(spanIcon);
   }

   _showTooltip() {
      this._tooltipBox = document.createElement('div');
      const tooltipP = document.createElement('p');
      tooltipP.textContent = 'This is the tooltip text!';
      this.appendChild(this._tooltipBox);
      this._tooltipBox.appendChild(tooltipP);

   }

   _hideTooltip() {
      this.removeChild(this._tooltipBox);
   }
}
customElements.define('tn-tooltip', Tooltip);