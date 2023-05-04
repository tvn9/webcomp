class PromptLink extends HTMLAnchorElement {
   connectedCallback() {
      this.addEventListener('click', event => {
         if (!confirm('You are about to leave the page.')) {
            event.preventDefault();
         }
      });
   }
}
customElements.define('tn-prompt-link', PromptLink, { extends: 'a' });
