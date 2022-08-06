import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
    return (<footer>
      <table style={{ width: "100%" }}>
        <tr>
          <th>Main</th>
          <th>Our Products</th>
          <th>Contact Us</th>
        </tr>
        <tr>
          <Link to="/">
            <td>Home</td>
          </Link>
          <td>
            <Link to="/beginner">Beginner Collection</Link>
          </td>
          <td>Phone: (000) 000-0000</td>
        </tr>
        <tr>
          <Link to="/store">
            <td>Buy</td>
          </Link>
          <td>
            <Link to="/intermediate">Intermediate Collection</Link>
          </td>
          <td>Email: note@therightnote.com</td>
        </tr>
        <tr>
          <Link to="/about">
            <td>About</td>
          </Link>
          <td>
            <Link to="/advanced">Advanced Collection</Link>
          </td>
        </tr>
      </table>

      <br />

      <p>Images from Bing</p>
    </footer>);
}

export default Footer;