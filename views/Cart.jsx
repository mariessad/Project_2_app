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
                Education: {cartItem.image} <br />
                
                  <a href={`cart/${cartItem._id}/edit`}> Edit Teacher</a>
                
                {/* ======Delete */}
                <form
                  action={`/cart/${cartItem._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Cart;
