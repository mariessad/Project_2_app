const React = require("react");
// import shoppingcart from "../../public/img/shopping-cart-3045.png";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav>
          <a href="/home">
            <img className="nav-logo" src="/img/heart_eye_tile.png"></img>
          </a>
          <ul>
            <a href="/art">
              <li className="nav-li">Art</li>
            </a>
            <a href="/fiber">
              <li className="nav-li">Fiber</li>
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
            <a href="/admin">
              <li className="nav-li">Admin</li>
            </a>
            <a href="/cart">
              <li className="nav-li cart">
                <img src={"/img/shopping-cart-3045.png"}></img>Cart
              </li>
            </a>
          </ul>
        </nav>
      </>
    );
  }
}
module.exports = Navbar;
