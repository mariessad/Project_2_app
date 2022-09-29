const React = require("react");
const DefaultLayout = require("./layouts/default");

class Art extends React.Component {
  render() {
    const { art } = this.props;
    return (
      <DefaultLayout title={"Art"}>
      
        {art.map((arts, i) => {
          return (
            <div key={i}>
              <p>{arts.title}</p>
              <p>${arts.price}</p>
              <img className="product-img" src={`${arts.image}`}></img>
              <button>Add to Cart</button>
            </div>
          );
        })}
      </DefaultLayout>
    );
  }
}
module.exports = Art;
