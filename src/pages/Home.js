import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { CardTableWithoutSpace } from "../components/CardTable";
import { HomeCards } from "../data/Cards";

const home = () => (
  <div>
    <br />
    <Link to="/french">
      <button type="button" class="btn btn-outline-info">
        Passer au français
      </button>
    </Link>
    <br />
    <br />

    <Jumbotron>
      <h1>Welcome to the SWA Note!</h1>
      <p>
        We are a locally owned music store offering a variety of instruments for
        all skill levels. We also offer music lessons and skilled staff ready to
        support your musical journey.
      </p>
      <p style={{ color: "#e9ecef" }}>
        <Link to="/store">
          <Button variant="primary">Visit the Store</Button>
        </Link>
        test
        <Link to="/about">
          <Button variant="primary">Discover more about us</Button>
        </Link>
      </p>
    </Jumbotron>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.289b3de60c590ee748a0648eb5d6f13a?rik=OBEZIholVgGAlg&pid=ImgRaw&r=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Quality Instruments</h3>
          <p>Visit our store to find out more</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/reverb-lp/image/upload/v1527610057/guitarsandamps_p9tqf7.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Thinking of learning a new instrument?</h3>
          <p>Check out our collections and offerings today</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <br />

    <CardTableWithoutSpace cardsList={HomeCards}/>
    <Footer/>
  </div>
);

export default home;
