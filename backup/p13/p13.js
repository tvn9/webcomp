customElements.define('tn-p', class extends HTMLElement {
   constructor() {
      super();

      const template = document.getElementById('tn-p')
      const templateContent = template.content;

      this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));
   }
});

const slottedSpan = document.querySelector('tn-p span');

console.log(slottedSpan.assignedSlot);
console.log(slottedSpan.slot);
