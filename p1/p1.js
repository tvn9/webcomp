class Tooltip extends HTMLElement {
   constructor() {
      super();
      
   }

   connectedCallback() {
      const spanIcon = document.createElement('span');
      spanIcon.textContent = ' (?)';
      this.appendChild(spanIcon);
   }
}
customElements.define('tn-tooltip', Tooltip);