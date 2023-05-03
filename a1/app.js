class ProductCard extends HTMLElement {
   constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      

   }

   connectCallback() {
      
   }
}
customElements.define('tn-card', ProductCard)