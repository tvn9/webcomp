class Tooltip extends HTMLElement {
   constructor() {
      super();
      this._tooltipContainer;
      this._tooltipText = 'This is the default tooltip text';
      this.attachShadow({ mode: 'open' });
   }
   
   connectedCallback() {
      if (this.hasAttribute('text')) {
         this._tooltipText = this.getAttribute('text');
      }
      const tooltipIcon = document.createElement('span');
      tooltipIcon.textContent = ' (?)';
      this.appendChild(tooltipIcon);
      tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
      tooltipIcon.addEventListener('mouseleave', this._removeTooltip.bind(this));
      this.shadowRoot.appendChild(tooltipIcon);
      this.style.position = 'relative';
      console.log('It is working!');
   }

   _showTooltip() {
      this._tooltipContainer = document.createElement('div');
      this._tooltipContainer.textContent = this._tooltipText;
      this.shadowRoot.appendChild(this._tooltipContainer);
   }

   _removeTooltip() {
      this.shadowRoot.removeChild(this._tooltipContainer);
   }
}

// define custom html tag  
customElements.define('tn-tooltip', Tooltip);