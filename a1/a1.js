class ShowInfoBox extends HTMLElement {
   constructor() {
      super();
      this._btn;
      this._infoBox;
      this._isHidden;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
         <style>
            p {
               width: max-content;
               padding: 2rem;
               background-color: #2D18DB;
               color: #ffffff;
               font-size: 2rem;
               border-radius: 10px;
               box-shadow: 3px 3px 20px 3px #00000080;
            }
            button {
               width: 100px;
               background-color: #2D18DB;
               color: #ffffff;
               font-size: 16px;
               font-weight: medium;
               padding: 10px 20px;
               border-style: none;
               border-radius: 10px;
               box-shadow: 0px 2px 10px 3px #22222250;
            }
         </style>
         <slot></slot>
         <p>Welcome to Web Component!</p>
         <button></button>
      `;
   }
   connectedCallback() {
      this._isHidden = false;

      this._infoBox = this.shadowRoot.querySelector('p');
      this._btn = this.shadowRoot.querySelector('button');

      this._infoBox.style.display = 'none';
      this._btn.textContent = 'Show';

      this._btn.addEventListener('click', () => {
         if (this._isHidden) {
            this._infoBox.style.display = 'none';
            this._btn.textContent = 'Show';
            this._isHidden = false;
         } else {
            this._infoBox.style.display = 'block';
            this._btn.textContent = 'Hide';
            this._isHidden = true;
         }
      });
   }
}
customElements.define('tn-info-box', ShowInfoBox);