const React = require("react");
const DefaultLayout = require("./layouts/Default");
// import Navbar from "./layouts/Navbar";
// import gif from "../public/img/heart_icon_gif.gif";

class Index extends React.Component {
  render() {
    // const { students } = this.props;
    // console.log(students);
    return (
      <DefaultLayout title={"Welcome"}>
        <img className="heart-gif" src={"/img/heart_icon_gif.gif"} />
        <div className="">
          <div className="index-shop">Shop Art</div>
          <div className="index-shop">Shop Fiber Art</div>
          <div className="index-shop">Shop Jewelry</div>
          <div className="index-shop">Shop Jewelry</div>
          <div className="index-shop">Shop All</div>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Index;
