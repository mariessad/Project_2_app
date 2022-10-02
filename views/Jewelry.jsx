const React = require("react");
const DefaultLayout = require("./layouts/default");

class Jewelry extends React.Component {
  render() {
    const { jewelry } = this.props;
    return (
      <DefaultLayout title={"Jewelry"}>
        {jewelry.map((jewelry, i) => {
          return (
            <div key={i}>
              <p>{jewelry.title}</p>
              <p>${jewelry.price}</p>
              <img className="product-img" src={`${jewelry.image}`}></img>
              <button>Add to Cart</button>
              <a href={`jewelry/${jewelry._id}/edit`}>
                <button>Edit</button>{" "}
              </a>
            </div>
          );
        })}
      </DefaultLayout>
    );
  }
}
module.exports = Jewelry;
