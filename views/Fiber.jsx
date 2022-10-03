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
              <p className="product-title">{fibers.title}</p>
              <img className="product-img" src={`${fibers.image}`}></img>
              <p className="product-price">${fibers.price}</p>
              <form action={`/cart/?_method=POST`} method="POST">
                <input
                  className="display-none"
                  type="text"
                  name="title"
                  defaultValue={fibers.title}
                />
                <input
                  className="display-none"
                  type="text"
                  name="price"
                  defaultValue={fibers.price}
                />
                <input
                  className="display-none"
                  type="text"
                  name="image"
                  defaultValue={fibers.image}
                />

                <input
                  className="add-to-cart"
                  type="submit"
                  value="Add to Cart"
                />
              </form>
              {/* <button >
                Add to Cart
              </button> */}
              <a href={`art/${arts._id}/edit`}>
                <button>Edit</button>{" "}
              </a>
            </div>
          );
        })}
      </DefaultLayout>
    );
  }
}
module.exports = Fiber;
