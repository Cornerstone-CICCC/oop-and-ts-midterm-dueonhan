import { Component } from "../common/Component.js";

export class DetailReviewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products || [],
    };
  }

  render() {
    const item = document.createElement("div");
    item.className = "review-card";

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
        <p class="rates">${stars}</p>
        <p class="writer">${this.props.product.review.writer}✅</p>
        <p class="content">
            ${this.props.product.review.content}
        </p>
        <br />
        <p class="date">${this.props.product.review.date}</p>
    `;

    return item;
  }
}
