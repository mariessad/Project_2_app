const React = require("react");
const DefaultLayout = require("./layouts/default");

class About extends React.Component {
  render() {
    // const { art } = this.props;
    return (
      <DefaultLayout title={"Admin"}>
        <div className="login-div">
          <form action="/art" method="POST">
            Email <input type="text" name="title" />
            <br />
            Password: <input type="password" name="password" />
            <br />
            <input
              className="login-button"
              type="submit"
              name=""
              value="Login"
            />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = About;
