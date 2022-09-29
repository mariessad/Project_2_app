const React = require("react");

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>Home</li>
            <li>Art</li>
            <li>Fiber Art</li>
            <li>Jewelry</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </nav>
      </>
    );
  }
}
module.exports = Navbar;
