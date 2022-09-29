const React = require("react");

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <a href="/home">
              <li className="nav-li">Home</li>
            </a>
            <a href="/art">
              <li className="nav-li">Art</li>
            </a>
            <a href="/fiber">
              <li className="nav-li">Fiber Art</li>
            </a>
            <a href="/jewelry">
              <li className="nav-li">Jewelry</li>
            </a>
            <a href="/about">
              <li className="nav-li">About</li>
            </a>
            <a href="/contact">
              <li className="nav-li">Contact</li>
            </a>
            <a href="/cart">
              <li className="nav-li cart">Cart</li>
            </a>
          </ul>
        </nav>
      </>
    );
  }
}
module.exports = Navbar;
