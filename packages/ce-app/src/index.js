const template = document.createElement("template");
template.innerHTML = `
    <h2>Custom Element App</h2>
  `;

class App extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    console.log("Custom Element App connected");
  }

  disconnectedCallback() {
    console.log("Custom Element App disconnected");
  }
}

window.customElements.define("ce-app", App);

const host = document.createElement("host");
host.innerHTML = `<ce-app />`;
document.body.appendChild(host);
