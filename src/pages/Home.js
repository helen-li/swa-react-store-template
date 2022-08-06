import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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
      <h1>Welcome to the Right Note!</h1>
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

    <CardGroup>
      <Card>
        <Card.Img
          variant="top"
          src="https://cdn.icon-icons.com/icons2/907/PNG/512/group-of-people-in-a-formation_icon-icons.com_70476.png"
        />
        <Card.Body>
          <Card.Title>Supportive Staff</Card.Title>
          <Card.Text>
            Our staff supports a variety of instrument types. Most of them are
            musicains themselves! Speak to a staff member today about your
            musical goals.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://cdn.icon-icons.com/icons2/1771/PNG/512/4124869-badge-insignia-premium-badge-quality-star-badge_114113.png"
        />
        <Card.Body>
          <Card.Title>Superior Quality</Card.Title>
          <Card.Text>
            We guarentee that every instrument goes through a rigorous quality
            assurance test. Additionally, many of our instruments come with a
            warentee and flexible return policy.{" "}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://cdn.icon-icons.com/icons2/2070/PNG/512/pickup_truck_icon_126878.png"
        />
        <Card.Body>
          <Card.Title>Curb Side Pickup</Card.Title>
          <Card.Text>
            In compliance with Covid-19 safety standards, we are using curb side
            pickup. Please wait in the parking lot and a staff member will place
            your order in your trunk without any interaction.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>

    <br />
    <Footer/>
  </div>
);

export default home;
