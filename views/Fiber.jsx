const React = require("react");
const DefaultLayout = require("./layouts/default");

class Fiber extends React.Component {
  render() {
    const { fiber } = this.props;
    return (
      <DefaultLayout title={"Fiber Art"}>
        <div>
          <a href={"/fiber/new"}>Add New Fiber Art listing</a>
        </div>
        {fiber.map((fibers, i) => {
          return (
            <div className="product-container" key={i}>
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
              <a href={`art/${fibers._id}/edit`}>
                <button>Edit</button>{" "}
              </a>
              <form
                action={`/fiber/${fibers._id}?_method=DELETE`}
                method="POST"
              >
                <input type="submit" value="DELETE" />
              </form>
            </div>
          );
        })}
      </DefaultLayout>
    );
  }
}
module.exports = Fiber;
