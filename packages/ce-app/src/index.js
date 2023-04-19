const template = document.createElement("template");
template.innerHTML = `
    <div><h2>This is a Custom Element</h2><a href="/ce-app">Access App</a></div>
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

(function () {
  const initialize = (hostId) => {
    console.log(`Initialize CustomElementApp in ${hostId}`);
    const host = document.getElementById(hostId);
    host.innerHTML = `<ce-app />`;
  };

  window[process.env.VITE_APP_ID || "ce-app"] = { initialize };
})();
