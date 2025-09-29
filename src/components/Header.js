import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
    const header = document.createElement("header");
    header.innerHTML = `
        <div class="desktop-header">
          <div class="logo-section">
            <a href="./index.html">
                <img src="../imgs/SHOP.CO.png" alt="Logo 1">
            </a>
          </div>

          <nav>
            <ul class="menu">
              <li><a href="#">On Sale</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Brands</a></li>
              <li>
                <div class="search-wrap">
                  <form id="searchForm" class="search-form" role="search" aria-label="search">
                    <input
                      id="c"
                      class="search-input"
                      type="search"
                      name="q"
                      placeholder="Search for products..."
                      autocomplete="off"
                      aria-autocomplete="list"
                      aria-controls="suggestionList"
                      aria-expanded="false"
                    />
                  </form>
                </div>
              </li>
            </ul>
          </nav>

          <div class="profile-section">
            <div class="cart">
                <a href="./cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div class="profile">
                <a href=""><i class="fa-solid fa-user"></i></a>
            </div>
          </div>
        </div>

        <div class="mobile-menu">
          <div class="logo-section">
            <a href="#" class="mobile-menu-button"><i class="fa-solid fa-bars"></i></a>
            <a href="./index.html">
              <img src="../imgs/SHOP.CO.png" alt="Logo 1">
            </a>
          </div>

          <div class="profile-section">
            <div class="search">
              <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
            </div>
            <div class="cart">
              <a href="./cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div class="profile">
              <a href="#"><i class="fa-solid fa-user"></i></a>
            </div>
          </div>
        </div>

        <div class="mobile-toggle-menu">
          <button class="mobile-toggle-close-button">
            <img src="../imgs/icon-close.svg" alt="Close" />
          </button>
            <nav>
                <menu>
                    <li><a href="#">On Sale</a></li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Brands</a></li>
                </menu>
            </nav>
        </div>
      
    `;

    const searchInput = header.querySelector(".search-input");

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const keyword = e.target.value;
        // 검색 이벤트 발행
        document.dispatchEvent(
          new CustomEvent("searchProducts", { detail: keyword })
        );
      });
    }

    requestAnimationFrame(() => {
      const menuBtn = header.querySelector(".mobile-menu-button");
      const mobileToggleMenu = header.querySelector(".mobile-toggle-menu");
      const closeBtn = header.querySelector(".mobile-toggle-close-button");

      menuBtn?.addEventListener("click", (event) => {
        event.preventDefault();
        mobileToggleMenu?.classList.add("open");
      });

      closeBtn?.addEventListener("click", () => {
        mobileToggleMenu?.classList.remove("open");
      });
    });

    return header;
  }
}
