const insertTemplate = () => {
  const template = document.createElement("template");
  template.id = "base-card";
  template.innerHTML = `
  <style>
  .card {
      border: 1px solid #ccc;
      padding: 10px;
  }
</style>
<div class="card">
  <slot></slot>
</div>
    `;
  document.body.appendChild(template);
};
insertTemplate();

class BaseCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // this.shadowRoot.innerHTML = `
    //   <style>
    //     :host {
    //       display: block;
    //       border: 1px solid #ccc;
    //       padding: 16px;
    //       margin: 16px;
    //     }
    //   </style>
    //   <slot></slot>
    // `;
    this.shadowRoot.appendChild(
      document.getElementById("base-card").content.cloneNode(true)
    );
  }
}
window.customElements.define("base-card", BaseCard);
