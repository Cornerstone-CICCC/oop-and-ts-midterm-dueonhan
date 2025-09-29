import { Component } from "../common/Component.js";

export class HomeReviewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products || [],
    };
  }

  render() {
    const item = document.createElement("div");
    item.className = "reviews";

    const generateStars = (rating) => {
      const fullStarts = Math.floor(rating);
      const halfStar = rating - fullStarts >= 0.5;
      const emptyStars = 5 - fullStarts - (halfStar ? 1 : 0);

      let starsString = "";
      for (let i = 0; i < fullStarts; i++) {
        starsString += `<img src="../imgs/Star-full.png" alt="Full star">`;
      }

      if (halfStar) {
        starsString += `<img src="../imgs/Star-half.png" alt="Half star">`;
      }

      return starsString;
    };

    const rating = this.props.product.rating.rate;
    const stars = generateStars(rating);

    item.innerHTML = `
    
        
        <p class="review-rate">${stars}</p>
        <h3 class="user-name">${this.props.product.review.writer} ✅</h3>
        <p class="review-content">
            ${this.props.product.review.content}
        </p>
        
    
      `;

    return item;
  }
}
