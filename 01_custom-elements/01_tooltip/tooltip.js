class Tooltip extends HTMLElement {
   // constructor creates the element and basic initialization
   constructor() {
      super();
      console.log('It is working!');

   }
}

customElements.define('tn-tooltip', Tooltip);
