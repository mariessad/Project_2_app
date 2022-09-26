// form for Admin to create new instance of a item
const React = require("react");
const DefaultLayout = require("./layouts/default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Item Page"}>
        <div>
          <form action="/art" method="POST">
            Item Name: <input type="text" name="name" />
            <br />
            Price: <input type="text" name="price" />
            <br />
            Stock: <input type="text" name="stock" />
            <br />
            Item Image: <input type="text" name="item" />
            <br />
            <input type="submit" name="" value="create item" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New;