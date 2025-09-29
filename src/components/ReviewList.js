import { productsData } from "../data/productData.js";
import { Component } from "../common/Component.js";
import { HomeReviewItem } from "./HomeReviewItem.js";

export class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products || [],
    };
  }

  render() {
    const fragment = document.createDocumentFragment();

    this.state.products.forEach((product) => {
      if (product.review) {
        const reviewItem = new HomeReviewItem({ product }).render();
        fragment.appendChild(reviewItem);
      }
    });

    return fragment;
  }

  mount(container) {
    container.innerHTML = "";
    container.appendChild(this.render());
  }
}
