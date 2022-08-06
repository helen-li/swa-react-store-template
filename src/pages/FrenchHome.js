import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const FrenchHome = () => (
  <div>
    <br />
    <Link to="/">
      <button type="button" class="btn btn-outline-info">
        Switch to English
      </button>
    </Link>
    <br />
    <br />
    <Jumbotron>
      <h1>Bienvenue sur La Bonne Note!</h1>
      <p>
        Nous sommes un magasin de musique local offrant une variété
        d'instruments pour tous les niveaux de compétence. Nous proposons
        également des cours de musique et un personnel qualifié prêt à soutenez
        votre voyage musical.
      </p>
      <p style={{ color: "#e9ecef" }}>
        <Link to="/store">
          <Button variant="primary">Visiter la boutique</Button>
        </Link>
        test
        <Link to="/about">
          <Button variant="primary">En savoir plus sur nous</Button>
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
          <h3>Instruments de qualité</h3>
          <p>Visitez notre magasin pour en savoir plus</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/reverb-lp/image/upload/v1527610057/guitarsandamps_p9tqf7.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Vous songez à apprendre un nouvel instrument?</h3>
          <p>Découvrez nos collections et nos offres dès aujourd’hui</p>
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
          <Card.Title>Personnel de soutien</Card.Title>
          <Card.Text>
            Notre personnel prend en charge une variété de types d'instruments.
            La plupart d'entre eux sont se musicains! Parlez à un membre de
            votre personnel aujourd'hui de votre objectifs musicaux.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Dernière mise à jour il y a 3 minutes
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://cdn.icon-icons.com/icons2/1771/PNG/512/4124869-badge-insignia-premium-badge-quality-star-badge_114113.png"
        />
        <Card.Body>
          <Card.Title>Qualité supérieure</Card.Title>
          <Card.Text>
            Nous garantissons que chaque instrument passe par une qualité
            rigoureuse test d'assurance. De plus, beaucoup de nos instruments
            sont livrés avec un garantie et politique de retour flexible. {""}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Dernière mise à jour il y a 3 minutes
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://cdn.icon-icons.com/icons2/2070/PNG/512/pickup_truck_icon_126878.png"
        />
        <Card.Body>
          <Card.Title>Ramassage latéral</Card.Title>
          <Card.Text>
            Conformément aux normes de sécurité Covid-19, nous utilisons le côté
            trottoir ramasser. Veuillez patienter sur le parking et un membre du
            personnel placera votre commande dans votre coffre sans aucune
            interaction.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Dernière mise à jour il y a 3 minutes
          </small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <br />
    <Footer/>
  </div>
);

export default FrenchHome;
