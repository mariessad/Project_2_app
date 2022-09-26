const React = require("react");
const DefaultLayout = require("./layouts/Default");
class Index extends React.Component {
  render() {
    // const { students } = this.props;
    // console.log(students);
    return (
      <DefaultLayout title={"StudentDashboard"}>
        <nav>
        </nav>
        <ul>
         
        </ul>
      </DefaultLayout>
    );
  }
}
module.exports = Index;
