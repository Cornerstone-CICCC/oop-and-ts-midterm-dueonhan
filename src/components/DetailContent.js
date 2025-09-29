import { Component } from "../common/Component.js";
import { productsData } from "../data/productData.js";
import { ProductList } from "../components/ProductList.js";
import { DetailReviewList } from "./DetailReviewList.js";
import { ProductDetailItem } from "./ProductDetailItem.js";
import { cartContext } from "../contexts/CartContext.js";

export class DetailContent extends Component {
  render() {
    //const cartContext = new CartContext();
    const detailContnet = document.createElement("div");
    detailContnet.classList.add("product-detail-container");

    detailContnet.innerHTML = `
            <div class="product-info-container">
                
            </div>

            <div class="reviews-container">
                <h3 class="rate-reviews">Rating & Reviews</h3>
                <div class="reviews-section">
                    <h3>All Reviews </span></h3>
                    <div class="reviews-info">

                    </div>
                    <button class="loadmore-btn">Load More Reviews</button>
                </div>

                <div class="youlike-container">
                    <h2>YOU MIGHT ALSO LIKE</h2>
                    <div class="youlike-card-container">
                         
                    </div>
                </div>

            </div>

            
        `;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const product = productsData.find((p) => p.id === parseInt(productId));

    const productDetailItem = new ProductDetailItem({ product }).render();

    const productInfo = detailContnet.querySelector(".product-info-container");
    productInfo.appendChild(productDetailItem);

    const addToCartBtn = detailContnet.querySelector(".cart-add-btn");

    addToCartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (product) {
        const orderQuantitySpan =
          detailContnet.querySelector(".order-quantity");
        const quantity = parseInt(orderQuantitySpan.textContent, 10) || 1;

        cartContext.addcart(product, quantity);
        console.log("getCart()", cartContext.getCart());
      }
    });

    const youlikeWrap = detailContnet.querySelector(".youlike-card-container");

    if (youlikeWrap) {
      const youlikeList = new ProductList({
        products: productsData.slice(0, 4),
      });
      youlikeList.mount(youlikeWrap);
    }

    const reviewWrap = detailContnet.querySelector(".reviews-info");
    if (reviewWrap) {
      const reviewList = new DetailReviewList({ products: productsData });
      reviewList.mount(reviewWrap);
    }

    const loadmoreBtn = detailContnet.querySelector(".loadmore-btn");
    let isExpanded = false;

    if (loadmoreBtn) {
      loadmoreBtn.addEventListener("click", (e) => {
        e.preventDefault();

        isExpanded = !isExpanded;

        const hiddenReviews = detailContnet.querySelectorAll(
          ".reviews-info .review-card:nth-of-type(n + 7)"
        );

        if (isExpanded) {
          hiddenReviews.forEach((review) => {
            review.style.display = "block";
          });
          loadmoreBtn.textContent = "View Less";
        } else {
          hiddenReviews.forEach((review) => {
            review.style.display = "none";
          });
          loadmoreBtn.textContent = "Load More Reviews";
          detailContnet.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    const minusBtn = detailContnet.querySelector(".order-minus-btn");
    const plusBtn = detailContnet.querySelector(".order-plus-btn");
    const orderQuantity = detailContnet.querySelector(".order-quantity");
    if (minusBtn && plusBtn && orderQuantity) {
      minusBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let quantity = parseInt(orderQuantity.textContent, 10);
        if (quantity > 1) orderQuantity.textContent = quantity - 1;
      });

      plusBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let quantity = parseInt(orderQuantity.textContent, 10);
        orderQuantity.textContent = quantity + 1;
      });
    }

    return detailContnet;
  }
}
