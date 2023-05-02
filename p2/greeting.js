// Register a custom tag
class Greeting extends HTMLElement {
   constructor() {
      super();
      this.innerText = `Hello ${this.getAttribute("name")}`;
   }
}
customElements.define("tn-greeting", Greeting );

class CoolCheckBox extends HTMLElement {
   constructor() {
      super();
      this.attachShadow({mode: "open"});
   }

   connectedCallback() {
      this.innerHTML = '<input type="checkbox" id="checkbox" /><label for="checkbox">Label</label>';
      this.shadowRoot.appendChild(templateContent);
   }
}
customElements.define("tn-checkbox", CoolCheckBox);