// form for Admin to create new instance of a item
const React = require("react");
const DefaultLayout = require("./layouts/default");

class NewFiber extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Fiber Item Page"}>
        <div>
          <form action="/fiber" method="POST">
            Item title: <input type="text" name="title" />
            <br />
            Price: <input type="text" name="price" />
            <br />
            Stock: <input type="checkbox" name="soldOut" />
            <br />
            Item Image: <input type="text" name="image" />
            <br />
            <input type="submit" name="" value="Create Art" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = NewFiber;
