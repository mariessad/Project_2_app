// form for Admin to create new instance of a item
const React = require("react");
const DefaultLayout = require("./layouts/default");

class NewArt extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Art Item Page"}>
        <div>
          <form action="/art" method="POST">
            Item Name: <input type="text" name="name" />
            <br />
            Price: <input type="text" name="price" />
            <br />
            Stock: <input type="checkbox" name="soldOut" />
            <br />
            Item Image: <input type="image" name="image"/>
            <br />
            <input type="submit" name="" value="Create Art" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = NewArt;