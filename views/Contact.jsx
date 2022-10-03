const React = require("react");
const DefaultLayout = require("./layouts/default");

class Art extends React.Component {
  render() {
    // const { art } = this.props;
    return <DefaultLayout title={"Contact"}></DefaultLayout>;
  }
}
module.exports = Art;
