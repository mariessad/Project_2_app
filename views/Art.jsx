const React = require("react");
const DefaultLayout = require("./layouts/default");

class Art extends React.Component {
  render() {
    const { art } = this.props;
    return (
      <DefaultLayout title={"Art"}>
        <a href={"/art/new"}>Add New Art listing</a>
        {/* <img
          className="jewelry-img"
          src="https://mariessa-d.weebly.com/uploads/1/4/0/4/14047316/img-0557_orig.jpg"
        ></img> */}
        {art.map((arts, i) => {
          return (
            <div className="product-container" key={i}>
              <p className="product-title">{arts.title}</p>
              <img className="product-img" src={`${arts.image}`}></img>
              <p className="product-price">${arts.price}</p>
              <form action={`/cart/?_method=POST`} method="POST">
                <input
                  className="display-none"
                  type="text"
                  name="title"
                  defaultValue={arts.title}
                />
                <input
                  className="display-none"
                  type="text"
                  name="price"
                  defaultValue={arts.price}
                />
                <input
                  className="display-none"
                  type="text"
                  name="image"
                  defaultValue={arts.image}
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
              <form action={`/art/${arts._id}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE" />
              </form>
            </div>
          );
        })}
      </DefaultLayout>
    );
  }
}
module.exports = Art;
