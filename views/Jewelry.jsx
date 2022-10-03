const React = require("react");
const DefaultLayout = require("./layouts/default");

class Jewelry extends React.Component {
  render() {
    const { jewelry } = this.props;
    return (
      <DefaultLayout title={"Jewelry"}>
        <a href={"/jewelry/new"}>Add New Jewelry listing</a>
        {jewelry.map((jewelry, i) => {
          return (
            <div className="product-container" key={i}>
              <p className="product-title">{jewelry.title}</p>
              <img className="product-img" src={`${jewelry.image}`}></img>
              <p className="product-price">${jewelry.price}</p>
              <form action={`/cart/?_method=POST`} method="POST">
                <input
                  className="display-none"
                  type="text"
                  name="title"
                  defaultValue={jewelry.title}
                />
                <input
                  className="display-none"
                  type="text"
                  name="price"
                  defaultValue={jewelry.price}
                />
                <input
                  className="display-none"
                  type="text"
                  name="image"
                  defaultValue={jewelry.image}
                />

                <input
                  className="add-to-cart"
                  type="submit"
                  value="Add to Cart"
                />
              </form>
              <a href={`jewelry/${jewelry._id}/edit`}>
                <button>Edit</button>{" "}
              </a>
              <form
                action={`/jewelry/${jewelry._id}?_method=DELETE`}
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
module.exports = Jewelry;
