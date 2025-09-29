import { Component } from "../common/Component.js";
import { productsData } from "../data/productData.js";
import { ProductList } from "../components/ProductList.js";
import { ReviewList } from "./ReviewList.js";

export class Home extends Component {
  render() {
    const home = document.createElement("div");
    home.classList.add("header-conianer");

    home.innerHTML = `
            <!--Home banner start-->
            <div class="home-banner">
                <div class="home-banner-top">
                    <div class="text-wrap">
                    <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p>
                        Browse through our dierse range of melticulously crafted garments,
                        designed to bring out your individuality and cater to your sense of
                        style.
                    </p>
                    <input type="button" class="shop-now-btn" value="Shop-Now" />

                    <div class="second-text-wrap">
                        <div class="main-text">
                        <h1>200+</h1>
                        <p>international Brands</p>
                        </div>
                        <div class="main-text">
                        <h1>2,000+</h1>
                        <p>High-Quality Products</p>
                        </div>
                        <div class="main-text">
                        <h1>30,000+</h1>
                        <p>Happy Customers</p>
                        </div>
                    </div>
                    </div>

                    <div class="home-banner-right">
                    <img src="../imgs/home-banner.png" alt="" />
                    </div>
                </div>

                <div class="home-banner-bottom">
                    <div class="brand-info">
                    <ul>
                        <li>
                        <a href="#"
                            ><img src="../imgs/versace-logo.png" alt="versace-lgo"
                        /></a>
                        </li>
                        <li>
                        <a href="#"
                            ><img src="../imgs/zara-logo-1 1.png" alt="versace-lgo"
                        /></a>
                        </li>
                        <li>
                        <a href="#"
                            ><img src="../imgs/gucci-logo-1 1.png" alt="versace-lgo"
                        /></a>
                        </li>
                        <li>
                        <a href="#"
                            ><img src="../imgs/prada-logo-1 1.png" alt="versace-lgo"
                        /></a>
                        </li>
                        <li>
                        <a href="#"
                            ><img src="../imgs/ck-logo.png" alt="versace-lgo"
                        /></a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <!--Home banner end-->

                <!--Home first category start-->
                <div class="first-cate-container">
                    <h2>NEW ARRIVALS</h2>
                    <div class="first-card-container"></div>
                    <button class="new-arrivals-btn">View All</button> 
                </div>
                <!--Home first category end-->

                <!--Home second category start-->
                <div class="second-cate-container">
                    <h2>TOP SELLING</h2>
                    <div class="second-card-container"></div>
                    <button class="top-selling-btn">View All</button>
                </div>
                <!--Home second category end-->

                <!--Home third category start-->
                <div class="third-cate-container">
                <h2>BROWSE BY DRESS STYLE</h2>
                <div class="cate-main">
                    <div class="categories-grid">
                    <div class="row row-1">
                        <div class="category-item casual">
                        <img src="../imgs/cate-1.png" alt="" />
                        </div>
                        <div class="category-item formal">
                        <img src="../imgs/cate-2.png" alt="" />
                        </div>
                    </div>

                    <div class="row row-2">
                        <div class="category-item party">
                        <img src="../imgs/cate-3.png" alt="" />
                        </div>
                        <div class="category-item gym">
                        <img src="../imgs/cate-4.png" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <!--Home third category end-->

                <!-- costomers review start-->
                <div class="review-container">
                    
                    <div class="rivew-header">
                        <h2>OUR HAPPY CUSTOMERS</h2>
                        <div class="riview-btn-wrap">
                        <button class="slider-next-btn"><img src="../imgs/review-slider-next.png" alt="" /></button>
                        <button class="slider-prev-btn"><img src="../imgs/review-slider-prev.png" alt="" /></button>
                        </div>
                    </div>
                    
                    <div class="review-wrap">

                    </div>
                </div>        
            </div>
            <!-- costomers review end-->

            
        `;

    const searchResults = document.createElement("div");
    searchResults.className = "search-results";
    home.insertBefore(
      searchResults,
      home.querySelector(".first-cate-container")
    );

    searchResults.style.display = "none";

    document.addEventListener("searchProducts", (e) => {
      const keyword = e.detail.toLowerCase().trim();

      if (!keyword) {
        searchResults.style.display = "none";
        return;
      }
      searchResults.style.display = "block";
      const filtered = productsData.filter((p) => {
        console.log("p", p);
        return p.title.toLowerCase().includes(keyword);
      });

      searchResults.innerHTML = `
        <h2>Search Result</h2>
        <div class="search-card-container"></div>
      `;
      console.log("filtered", filtered);

      const cardContainer = searchResults.querySelector(
        ".search-card-container"
      );

      if (filtered.length > 0) {
        const productList = new ProductList({ products: filtered });

        productList.mount(cardContainer);
      } else {
        searchResults.innerHTML = "<p>No results found</p>";
      }
    });

    //newArrivalsList
    const newArrivalsList = new ProductList({ products: productsData });
    console.log("newArrivalsList", newArrivalsList);
    const newArrivalsContainer = home.querySelector(".first-card-container");
    const newArrivalsBtn = home.querySelector(".new-arrivals-btn");
    let isExpanded = false;

    if (newArrivalsContainer) {
      newArrivalsList.mount(newArrivalsContainer);
    }

    if (newArrivalsBtn) {
      newArrivalsBtn.addEventListener("click", (e) => {
        e.preventDefault();

        isExpanded = !isExpanded;
        const hiddenCards = home.querySelectorAll(
          ".first-cate-container .card:nth-of-type(n + 5)"
        );

        if (isExpanded) {
          hiddenCards.forEach((card) => {
            card.style.display = "block";
          });
          newArrivalsBtn.textContent = "View Less";
        } else {
          hiddenCards.forEach((card) => {
            card.style.display = "none";
          });
          newArrivalsBtn.textContent = "View All";
          newArrivalsContainer.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    const topSellingList = new ProductList();
    const topSellingListContainer = home.querySelector(
      ".second-card-container"
    );
    const topSellingBtn = home.querySelector(".top-selling-btn");
    let isExpanded2 = false;
    console.log("topSellingListContainer", topSellingListContainer);
    if (topSellingListContainer) {
      const sortedProducts = [...productsData].sort(
        (a, b) => b.rating.rate - a.rating.rate
      );
      console.log("sortedProducts:", sortedProducts);
      topSellingList.mount(topSellingListContainer, sortedProducts);
    }

    if (topSellingBtn) {
      topSellingBtn.addEventListener("click", (e) => {
        e.preventDefault();

        isExpanded2 = !isExpanded2;
        const hiddenCards = home.querySelectorAll(
          ".second-card-container .card:nth-of-type(n + 5)"
        );

        if (isExpanded2) {
          hiddenCards.forEach((card) => {
            card.style.display = "block";
          });
          topSellingBtn.textContent = "View Less";
        } else {
          hiddenCards.forEach((card) => {
            card.style.display = "none";
          });
          topSellingBtn.textContent = "View All";
          topSellingListContainer.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    const reviewList = new ReviewList({ products: productsData });
    const reviewWrap = home.querySelector(".review-wrap");
    if (reviewWrap) {
      reviewList.mount(reviewWrap);
    }

    const nextBtn = home.querySelector(".slider-next-btn");
    const prevBtn = home.querySelector(".slider-prev-btn");
    function getReviewWidth() {
      const review = reviewWrap.querySelector(".reviews");
      return (
        review.offsetWidth + parseInt(getComputedStyle(reviewWrap).gap || 0)
      );
    }

    nextBtn.addEventListener("click", () => {
      reviewWrap.scrollBy({ left: -getReviewWidth(), behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      reviewWrap.scrollBy({ left: getReviewWidth(), behavior: "smooth" });
    });

    return home;
  }
}
