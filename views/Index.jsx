const React = require("react");
const DefaultLayout = require("./layouts/Default");
// import Navbar from "./layouts/Navbar";
// import gif from "../public/img/heart_icon_gif.gif";

class Index extends React.Component {
  render() {
    // const { students } = this.props;
    // console.log(students);
    return (
      <DefaultLayout title={"HomePage"}>
        <img src={"../public/img/heart_icon_gif.gif"} />
      </DefaultLayout>
    );
  }
}
module.exports = Index;
