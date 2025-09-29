import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cart } = this.props;

    const totalPrice = cart.price * cart.quantity;

    const item = document.createElement("div");
    item.className = "cart-card";
    item.innerHTML = `
            
              <a href="./detail.html?id=${cart.id}"><img src="${
      cart.image
    }" alt="" /></a>  
              <div class="product-details-wrap">
                  <div class="row">
                      <h4 class="product-title">${
                        cart.title.substring(0, 30) + "..."
                      }</h4>
                      <button class="cart-del-btn" data-id="${cart.id}">
                          <img src="../imgs/delete-btn.png" alt="Delete" />
                      </button>
                  </div>
                  <div class="row">
                      <p class="product-price" data-price="${cart.price.toFixed(
                        2
                      )}">$${cart.price * cart.quantity.toFixed(2)}</p>
                      <div class="product-actions">
                          <button class="minus-btn" data-id="${
                            cart.id
                          }">-</button>
                          <span class="cart-count" data-id="${cart.id}">${
      cart.quantity
    }</span>
                          <button class="plus-btn" data-id="${
                            cart.id
                          }">+</button>
                      </div>
                  </div>
              </div>
      
    </div>
    `;

    return item;
  }
}
