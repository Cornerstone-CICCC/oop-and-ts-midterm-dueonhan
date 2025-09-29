import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    footer.innerHTML = `
        <div class="footer-top" >
          <div class="footer-column">
            <p><img src="../imgs/SHOP.CO.png" alt=""></p>
            <p>We have Clothes that suits your style and which yor're to wear. From women to men</p>
            <div class="logo-wrap">
              <span><a href="#"><img src="../imgs/logo-fb-simple 2.png" alt=""></a></span>  
              <span><a href="#"><img src="../imgs/logo-twitter 2.png" alt=""></a></span>  
              <span><a href="#"><img src="../imgs/logo-instagram 1.png" alt=""></a></span>
              <span><a href="#"><img src="../imgs/logo-github 1.png" alt=""></a></span>
            </div>
          </div>
         
          <div class="footer-column">
            <h3>C O M P A N Y</h3>
            <ul>
              <li><a hre="#">About</a></li>
              <li><a hre="#">Features</a></li>
              <li><a hre="#">Works</a></li>
              <li><a hre="#">Career</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>H E L P</h3>
            <ul>
              <li><a hre="#">Customer Support</a></li>
              <li><a hre="#">Delievery</a></li>
              <li><a hre="#">Terms & Conditions</a></li>
              <li><a hre="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>F A Q</h3>
            <ul>
              <li><a hre="#">Account</a></li>
              <li><a hre="#">Manage Deliveries</a></li>
              <li><a hre="#">Orders</a></li>
              <li><a hre="#">Payments</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>R E S O U R C E S</h3>
            <ul>
              <li><a hre="#">Free eBooks</a></li>
              <li><a hre="#">Development Tutorial</a></li>
              <li><a hre="#">How to - Blog</a></li>
              <li><a hre="#">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>Shop.co &copy; 2025 My Website. All rights reserved.</p>
        </div>
      
    `;
    return footer;
  }
}
