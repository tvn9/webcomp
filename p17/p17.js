customElements.define("el-details", class extends HTMLElement {
   constructor() {
      super();
      const template = document.getElementById('el-template').content;
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.cloneNode(true));
   }
});
