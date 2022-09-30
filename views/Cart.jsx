const React = require("react");
const DefaultLayout = require("./layouts/default");
class Cart extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <DefaultLayout title={"Cart"}>
        <div></div>
      </DefaultLayout>
    );
  }
}
module.exports = Cart;
