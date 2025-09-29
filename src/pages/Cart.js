import { Component } from "../common/Component.js";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { CartContent } from "../components/CartContent.js";

export class Cart extends Component {
  render() {
    const cartPage = document.createElement("div");

    const header = new Header().render();
    cartPage.appendChild(header);

    const cartcontent = new CartContent().render();
    cartPage.appendChild(cartcontent);

    const footer = new Footer().render();
    cartPage.appendChild(footer);

    return cartPage;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("cart");
  if (root) {
    const cartPage = new Cart().render();
    root.appendChild(cartPage);
  }
});
