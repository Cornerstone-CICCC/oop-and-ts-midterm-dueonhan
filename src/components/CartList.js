import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: props.carts || [],
    };
  }

  render() {
    const fragment = document.createDocumentFragment();

    this.state.carts.forEach((cart) => {
      const cartItem = new CartItem({ cart });
      fragment.appendChild(cartItem.render());
    });

    return fragment;
  }

  mount(container) {
    container.appendChild(this.render());
  }
}
