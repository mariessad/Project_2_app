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
            </div>
          );
        })}
      </DefaultLayout>
    );
  }
}
module.exports = Jewelry;
