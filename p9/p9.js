class PopupInfo extends HTMLElement {
   constructor() {
      // Always call super first in constructor
      super();

      // Create a shadow root
      const shadow = this.attachShadow({ mode: "open" });

      // Create (nested) span elements
      const wrapper = document.createElement("span");
      wrapper.setAttribute("class", "wrapper");

      const icon = document.createElement("span");
      icon.setAttribute("class", "icon");
      icon.setAttribute("tabindex", 0);

      const info = document.createElement("span");
      info.setAttribute("class", "info");

      // Take attribute content and put it inside the info span
      const text = this.getAttribute("data-text");
      info.textContent = text;

      // Insert icon
      let imgURL;
      if (this.hasAttribute("img")) {
         imgURL = this.getAttribute("img");
      } else {
         imgURL = "./img/helpv1.svg";
      }

      const img = document.createElement("img");
      img.src = imgURL;
      icon.appendChild(img);

      // Create some CSS to apply to the shadow DOM
      const style = document.createElement("style");
      console.log(style.isConnected);

      style.textContent = `
         .wrapper {
            position: relative;
         }

         .info {
            font-size: 0.8rem;
            width: 200px;
            display: inline-block;
            border: 1px, solid black;
            padding: 10px;
            background: white;
            border-radius: 10px;
            opacity: 0;
            transition: 0.6s all;
            position: absolute;
            bottom: 20px;
            left: 10px;
            z-index: 3;
         }

         img {
            width: 1.2rem;
         }

         .icon:hover + .info, .icon:focus + .info {
            opacity: 1;
         }
      `;

      // Attach the created elements to the shadow DOM
      shadow.appendChild(style);
      console.log(style.isConnected);
      shadow.appendChild(wrapper);
      wrapper.appendChild(icon);
      wrapper.appendChild(info);
   }
}
customElements.define("popup-info", PopupInfo);