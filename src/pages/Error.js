import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div>
      <p>
        Error: Page does not exist! Sorry about that! We are working hard to fix
        the issue.
      </p>
      <Link to="/">
        <button type="button" class="btn btn-primary">
          Click me to return to safety
        </button>
      </Link>
      <br />
      <Footer/>
    </div>
  );
};

export default Error;
