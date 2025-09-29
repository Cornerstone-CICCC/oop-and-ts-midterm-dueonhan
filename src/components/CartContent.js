import { Component } from "../common/Component.js";
import { cartContext } from "../contexts/CartContext.js";
import { CartList } from "./CartList.js";

export class CartContent extends Component {
  render() {
    const cartcontent = document.createElement("div");
    cartcontent.classList.add("cart-container");

    cartcontent.innerHTML = `
      <div class="cart-content">
        <h1>YOUR CART</h1>
        <div class="cart-list-container">
          <div class="cart-sections-wrapper">
            <div class="cart-left-section"></div> 

              <div class="cart-right-section">    
                <h3>Order Summary</h3>
                <p><span>Total</span> <span class="total-price">$0.00</span></p>
                <button class="checkout-btn">Go to Checkout</button>
              </div>
            </div>
          </div>
      </div>
      <div id="snackbar">Your order has been completed.</div>
    `;

    const cartLeftSection = cartcontent.querySelector(".cart-left-section");
    const cartRightSection = cartcontent.querySelector(".cart-right-section");

    const checkoutBtn = cartcontent.querySelector(".checkout-btn");
    const snackbar = cartcontent.querySelector("#snackbar");

    checkoutBtn.addEventListener("click", () => {
      snackbar.classList.add("show");
      setTimeout(() => {
        snackbar.classList.remove("show");
      }, 3000);

      const carts = cartContext.getCart();
      carts.forEach((cart) => {
        cartContext.deleteCart(cart.id);
      });

      cartLeftSection.innerHTML = `
    <div class="empty-cart-message" style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 300px;
        font-size: 24px;
        color: #555;
        font-weight: bold;
        text-align: center;
    ">
        <p>🛒 Your Cart is Empty</p>
        <p>Add some products to get started!</p>
    </div>
  `;
      cartRightSection.remove();
    });

    const cartListContainer = cartcontent.querySelector(".cart-list-container");

    cartListContainer.addEventListener("click", (e) => {
      const deleteBtn = e.target.closest(".cart-del-btn");
      const plusBtn = e.target.closest(".plus-btn");
      const minusBtn = e.target.closest(".minus-btn");

      if (deleteBtn) {
        e.preventDefault();
        const id = parseInt(deleteBtn.dataset.id, 10);
        cartContext.deleteCart(id);
        updateTotalPrice();
      }

      if (plusBtn) {
        e.preventDefault();
        const id = parseInt(plusBtn.dataset.id, 10);
        const countSpan = cartListContainer.querySelector(
          `.cart-count[data-id="${id}"]`
        );
        const card = plusBtn.closest(".cart-card");
        const priceSpan = card.querySelector(".product-price");
        const unitPrice = parseFloat(priceSpan.dataset.price);

        let quantity = parseInt(countSpan.textContent, 10);
        quantity += 1;
        countSpan.textContent = quantity;
        priceSpan.textContent = `$${(unitPrice * quantity).toFixed(2)}`;
        updateTotalPrice();
        cartContext.updateCart(id, quantity);
      }

      if (minusBtn) {
        e.preventDefault();
        const id = parseInt(minusBtn.dataset.id, 10);
        const card = minusBtn.closest(".cart-card");
        const countSpan = card.querySelector(`.cart-count[data-id="${id}"]`);
        const priceSpan = card.querySelector(".product-price");
        const unitPrice = parseFloat(priceSpan.dataset.price);

        let quantity = parseInt(countSpan.textContent, 10);
        if (quantity > 1) {
          quantity -= 1;
          countSpan.textContent = quantity;
          priceSpan.textContent = `$${(unitPrice * quantity).toFixed(2)}`;
          updateTotalPrice();
          cartContext.updateCart(id, quantity);
        }
      }
    });

    function renderCart() {
      const carts = cartContext.getCart();

      cartLeftSection.innerHTML = "";

      if (!carts || carts.length === 0) {
        cartLeftSection.innerHTML = `
          <div class="empty-cart-message" style="
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              height: 300px;
              font-size: 24px;
              color: #555;
              font-weight: bold;
              text-align: center;
          ">
              <p>🛒 Your Cart is Empty</p>
              <p>Add some products to get started!</p>
          </div>
        `;
        if (cartRightSection) cartRightSection.remove();
      } else {
        const cartList = new CartList({ carts });
        cartList.mount(cartLeftSection);
      }

      updateTotalPrice();
    }

    cartContext.subscribe(() => {
      renderCart();
    });

    function updateTotalPrice() {
      const productPrices = cartcontent.querySelectorAll(".product-price");
      const totalPriceEl = cartcontent.querySelector(".total-price");

      let sumPrice = 0;
      productPrices.forEach((priceEl) => {
        const price = parseFloat(priceEl.textContent.replace("$", ""));
        sumPrice += price;
      });

      if (totalPriceEl) totalPriceEl.textContent = `$${sumPrice.toFixed(2)}`;
    }

    renderCart();

    return cartcontent;
  }
}
