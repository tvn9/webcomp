class ConfirmedLink extends HTMLAnchorElement {
   connectedCallback() {
      this.addEventListener('click', event => {
         if (!confirm('You are about to navigate away from the current site!')) {
            event.preventDefault();
         }
      });
   }
}

customElements.define('tn-confirm-link', ConfirmedLink, { extends: 'a' });