const React = require("react");
const DefaultLayout = require("./layouts/default");

class FiberEdit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Fiber Art Page">
        <form action={`/art/${this.props.fiber._id}?_method=PUT`} method="POST">
          Title:{" "}
          <input
            type="text"
            name="title"
            defaultValue={this.props.fiber.title}
          />
          <br />
          Price:{" "}
          <input
            type="text"
            name="price"
            defaultValue={this.props.fiber.price}
          />
          <br />
          Image:{" "}
          <input
            type="text"
            name="image"
            defaultValue={this.props.fiber.image}
          />
          <br />
          Sold Out:
          {this.props.fiber.soldOut ? (
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
module.exports = FiberEdit;
