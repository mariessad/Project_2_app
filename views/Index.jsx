const React = require("react");
const DefaultLayout = require("./layouts/Default");
import Navbar from "./layouts/Navbar";

class Index extends React.Component {
  render() {
    // const { students } = this.props;
    // console.log(students);
    return (
        
      <DefaultLayout title={"HomePage"}>
       <Navbar/>
      </DefaultLayout>
    );
  }
}
module.exports = Index;
