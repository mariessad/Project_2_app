const React = require("react");
const DefaultLayout = require("./layouts/default");

class About extends React.Component {
  render() {
    // const { art } = this.props;
    return <DefaultLayout title={"About"}></DefaultLayout>;
  }
}
module.exports = About;
