customElements.define('tn-p', class extends HTMLElement {
   constructor() {
      super();

      const template = document.getElementById('tn-p')
      const templateContent = template.content;

      this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));

      // Using external stylesheet link
      const linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'stylesheet');
      linkEl.setAttribute('href', 'style.css');

      this.shadowRoot.appendChild(linkEl);
   }
});

const slottedSpan = document.querySelector('tn-p span');

console.log(slottedSpan.assignedSlot);
console.log(slottedSpan.slot);
