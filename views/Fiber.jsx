const React = require("react");
const DefaultLayout = require("./layouts/default");

class Fiber extends React.Component {
  render() {
    const { fiber } = this.props;
    return (
      <DefaultLayout title={"Fiber Art"}>
        {fiber.map((fibers, i) => {
          return (
            <div key={i}>
              <p>{fibers.title}</p>
              <p>${fibers.price}</p>
              <img className="product-img" src={`${fibers.image}`}></img>
              <button>Add to Cart</button>
            </div>
          );
        })}
      </DefaultLayout>
    );
  }
}
module.exports = Fiber;
