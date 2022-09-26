const React = require("react");
const DefaultLayout = require("./layouts/default");
class Art extends React.Component {
  render() {
    const {item}= this.props;
      return (
      <DefaultLayout title={"Art"}>
        <div>
            
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Art;