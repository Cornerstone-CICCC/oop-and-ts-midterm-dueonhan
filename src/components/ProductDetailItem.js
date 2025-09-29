import { Component } from "../common/Component.js";

export class ProductDetailItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = document.createElement("div");
    item.className = `product-info`;

    const generateStars = (rating) => {
      const fullStarts = Math.floor(rating);
      const halfStar = rating - fullStarts >= 0.5;
      const emptyStars = 5 - fullStarts - (halfStar ? 1 : 0);

      let starsString = "";

      for (let i = 0; i < fullStarts; i++) {
        starsString += `<img src="../imgs/Star-full.png" alt="Full star" style="width: 20px; height: 20px; display: inline-block;">`;
      }

      if (halfStar) {
        starsString += `<img src="../imgs/Star-half.png" alt="Half star" style="width: 10px; height: 20px; display: inline-block;">`;
      }
      return starsString;
    };

    const rating = this.props.product.rating.rate;
    const stars = generateStars(rating);

    item.innerHTML = `
    <div class="product-info-left">
        <div class="img-wrap">
            <img src="${this.props.product.image}" alt="" />
        </div>
    </div>

    <div class="product-info-right">
        <h3>${this.props.product.title}</h3>
        <p>${stars} <span class="product-rate">${this.props.product.rating.rate}/5</span></p>
        <h3 class="product-price">$${this.props.product.price}</h3>
        <p class="product-description">
            ${this.props.product.description}
        </p>

        <div class="spacer"></div>
        
        <div class="order-section">
            <div class="order-wrap">
                <button class="order-minus-btn">-</button>
                <span class="order-quantity">1</span>
                <button class="order-plus-btn">+</button>
            </div>
            <button class="cart-add-btn">Add to Cart</button>
        </div>
    </div>

    <div id="snackbar">Product has been added to your cart</div>
    `;

    const addBtn = item.querySelector(".cart-add-btn");
    const snackbar = item.querySelector("#snackbar");

    addBtn.addEventListener("click", () => {
      snackbar.classList.add("show");
      setTimeout(() => {
        snackbar.classList.remove("show");
      }, 3000);
    });

    return item;
  }
}
