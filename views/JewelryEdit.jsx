const React = require("react");
const DefaultLayout = require("./layouts/default");

class JewelryEdit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Jewelry Page">
        <form
          action={`/art/${this.props.jewelry._id}?_method=PUT`}
          method="POST"
        >
          Title:{" "}
          <input
            type="text"
            name="name"
            defaultValue={this.props.jewelry.name}
          />
          <br />
          Price:{" "}
          <input
            type="text"
            name="price"
            defaultValue={this.props.jewelry.price}
          />
          <br />
          Image:{" "}
          <input
            type="text"
            name="image"
            defaultValue={this.props.jewelry.image}
          />
          <br />
          Sold Out:
          {this.props.jewelry.soldOut ? (
            <input type="checkbox" name="soldOut" defaultChecked />
          ) : (
            <input type="checkbox" name="soldOut" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = JewelryEdit;
