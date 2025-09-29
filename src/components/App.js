import { Component } from "../common/Component.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { Home } from "./Home.js";

export class App extends Component {
  render() {
    const app = document.createElement("div");

    const header = new Header().render();

    app.appendChild(header);

    const home = new Home().render();

    app.appendChild(home);

    const footer = new Footer().render();
    app.appendChild(footer);

    return app;
  }
}
