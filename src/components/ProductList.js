import { productsData } from "../data/productData.js";
import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor(props = {}) {
    super(props);
    this.state = {
      products: props.products || [],
    };
  }

  mount(container, products) {
    const productsToRender = products || this.state.products;

    if (!productsToRender.length) return;

    const fragment = document.createDocumentFragment();

    productsToRender.forEach((product) => {
      const productItem = new ProductItem({
        product,
      }).render();
      fragment.appendChild(productItem);
    });

    container.appendChild(fragment);
  }

  render() {
    return document.createElement("div");
  }
}
