const React = require("react");
const DefaultLayout = require("./layouts/default");

class ArtEdit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Art Page">
        <form action={`/art/${this.props.art._id}?_method=PUT`} method="POST">
          Title:{" "}
          <input type="text" name="title" defaultValue={this.props.art.title} />
          <br />
          Price:{" "}
          <input type="text" name="price" defaultValue={this.props.art.price} />
          <br />
          Image:{" "}
          <input type="text" name="image" defaultValue={this.props.art.image} />
          <br />
          Sold Out:
          {this.props.art.soldOut ? (
            <input type="checkbox" name="soldOut" defaultChecked />
          ) : (
            <input type="checkbox" name="soldOut" />
          )}
          <br />
          <input
            className="submit-changes"
            type="submit"
            value="Submit Changes"
          />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = ArtEdit;
