import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import ButtonBar from "../components/ButtonBar";
import Header from "../components/Header";
import RedAlert from "../components/RedAlert";
import YellowAlert from "../components/YellowAlert";

const Store = () => {
  return (
    <div>
      <Header 
        header='Our Products' 
        description='View our catalouge of instruments and accessories. Ranging from beginner to experienced, we have the perfect fit for you.'
      />
      <YellowAlert 
        bold='Intermediate Collection'
        description='View our collection of instruments for intermediate players.'
      />
      <br />
      <RedAlert
        header='NOTE ABOUT COVID-19'
        description='Due to shipping delays and risks, we are closing our online store. Please phone to place an order for curb side pickup.'
        note='Store contact: (000) 000 0000'
      />
      <ButtonBar/>
      <br />
      <br />
      <CardColumns>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/f/s/fsgeeast486bbk_0_6.jpg"
          />
          <Card.Body>
            <Card.Title>Eastman</Card.Title>
            <Card.Text>
              t486B-BK Eastman - t486B Electric Guitar With Case - Black
            </Card.Text>
            <Button variant="primary">$1,725.00</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/B/S/BSCLSEL1400B_1_3.jpg"
          />
          <Card.Body>
            <Card.Title>Selmer</Card.Title>
            <Card.Text>Selmer 1400 Bb Clarinet</Card.Text>
            <Button variant="primary">$500.00</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/k/s/kspuwebaw121bp_0.jpg"
          />
          <Card.Body>
            <Card.Title>Albert Weber</Card.Title>
            <Card.Text>
              AW121BP Alber Weber Professional Upright Piano - Ebony Polish
            </Card.Text>
            <Button variant="primary">Please phone for price</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/C/A/CACXHOSUSB210AC_1_2.jpg"
          />
          <Card.Body>
            <Card.Title>Hosa</Card.Title>
            <Card.Text>
              USB-210AC Hosa High Speed USB Cable - Type A to Micro-B, 10'
            </Card.Text>
            <Button variant="primary">$8.00</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cosmomusic.ca/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/H/A/HACSZOOBCF8_1_5.jpg"
          />
          <Card.Body>
            <Card.Title>Zoom</Card.Title>
            <Card.Text>
              ZBCF8 Zoom BCF-8 Battery Case for F8 Multi-Track Field Recorder
            </Card.Text>
            <Button variant="primary">$34.99</Button>
          </Card.Body>
        </Card>
      </CardColumns>

      <br />
      <Footer/>
    </div>
  );
};

export default Store;
