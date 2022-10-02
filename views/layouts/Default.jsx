const React = require("react");
import Navbar from "./Navbar";

class DefaultLayout extends React.Component {
  render() {
    return (
      <>
        <html>
          <head>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/css/app.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@300&display=swap"
              rel="stylesheet"
            />
          </head>
          <body>
            <Navbar />
            <h1>{this.props.title}</h1>
            {this.props.children}
          </body>
        </html>
      </>
    );
  }
}
module.exports = DefaultLayout;
