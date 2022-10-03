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
              <li key={i}>
                {/* each cart item */}
                <a href={`/cart/${cartItem.id}`}> {cartItem.name} </a>
                <img className="product-img" src={cartItem.image} />
                <br />
                <p className="product-price">${cartItem.price}</p>
                {/* Delete item from cart */}
                <form
                  action={`/cart/${cartItem._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
                {/* calculate total + display */}
              </li>
            );
          })}
          <button>Checkout & Pay</button>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Cart;
