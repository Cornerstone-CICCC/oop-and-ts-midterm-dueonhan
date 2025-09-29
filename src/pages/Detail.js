import { Component } from "../common/Component.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { DetailContent } from "../components/DetailContent.js";

export class Detail extends Component {
  render() {
    const detail = document.createElement("div");

    const header = new Header().render();
    detail.appendChild(header);

    const detailContent = new DetailContent().render();
    detail.appendChild(detailContent);

    const footer = new Footer().render();
    detail.appendChild(footer);

    return detail;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("detail");
  if (root) {
    const detailPage = new Detail().render();
    root.appendChild(detailPage);
  }
});
