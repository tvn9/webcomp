class Tooltip extends HTMLElement {
   // constructor creates the element and basic initialization
   constructor() {
      super();
      // The element here are created, but has not been added to the DOM yet.
      const tooltipIcon = document.createElement('span'); // this will not work inside constructor
      tooltipIcon.textContent = ' (!) '; // because base on web components lifecycle, the custom component
      this.appendChild(tooltipIcon);  // cannot be add to the DOM from the constructor
   }

   // connectedCallback adds the custom component to the DOM
   connectedCallback() {
      // move initialzed element from constructor to connectedCallback function.
   }
}

customElements.define('tn-tooltip', Tooltip);
