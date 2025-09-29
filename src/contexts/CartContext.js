export class CartContext {
  static id = 1;

  constructor() {
    const saved = localStorage.getItem("carts");
    this.carts = saved ? JSON.parse(saved) : [];

    this.listeners = [];
  }

  addcart(cart, quantity) {
    const existing = this.carts.find((item) => item.id === cart.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      const newAddCart = {
        id: cart.id,
        title: cart.title,
        image: cart.image,
        quantity: quantity,
        price: cart.price,
      };
      this.carts.push(newAddCart);
      this.notifyListeners();
    }
    localStorage.setItem("carts", JSON.stringify(this.carts));
    this.notifyListeners();
  }

  getCart() {
    const saved = localStorage.getItem("carts");
    if (saved) {
      this.carts = JSON.parse(saved);
    }
    return this.carts;
  }

  updateCart(id, quantity) {
    this.carts = this.carts.map((cart) => {
      if (cart.id === id) {
        return { ...cart, quantity };
      }
      return cart;
    });

    localStorage.setItem("carts", JSON.stringify(this.carts));
    this.notifyListeners();
  }

  deleteCart(id) {
    const saved = localStorage.getItem("carts");
    if (!saved) return;

    const carts = JSON.parse(saved);

    const updatedCarts = carts.filter((cart) => cart.id !== id);

    this.carts = updatedCarts;
    localStorage.setItem("carts", JSON.stringify(updatedCarts));

    this.notifyListeners();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.carts));
  }
}

export const cartContext = new CartContext();
