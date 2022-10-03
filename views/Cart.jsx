const React = require("react");
const DefaultLayout = require("./layouts/default");
class Cart extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <DefaultLayout title={"Cart"}>
        <div>
          {cart.map((cartItem, i) => {
            return (
              <div className="cart-item" key={i}>
                {/* each cart item */}
                <div className="product-title">{cartItem.title}</div>
                <img className="product-img" src={cartItem.image} />
                <br />
                <p className="product-price">${cartItem.price}</p>
                {/* Delete item from cart */}
                <form
                  action={`/cart/${cartItem._id}?_method=DELETE`}
                  method="POST"
                >
                  <input
                    className="remove"
                    type="submit"
                    value="remove from cart"
                  />
                </form>
              </div>
            );
          })}
          {/* calculate total + display */}
          <button className="checkout-pay">Checkout & Pay</button>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Cart;
