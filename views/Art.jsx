const React = require("react");
const DefaultLayout = require("./layouts/default");

class Art extends React.Component {
  render() {
    const { art } = this.props;
    return (
      <DefaultLayout title={"Art"}>
        <a href={"/art/new"}>Add New Art listing</a>
        {art.map((arts, i) => {
          return (
            <div className="product-container" key={i}>
              <p className="product-title">{arts.title}</p>
              <img className="product-img" src={`${arts.image}`}></img>
              <p className="product-price">${arts.price}</p>
              <button className="add-to-cart">Add to Cart</button>
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
