import React from "react";
import Image from "react-bootstrap/Image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import { CardTableWithSpace } from "../components/CardTable";
import { AboutCards } from "../data/Cards";

const About = () => {
  return (
    <div>
      <Header 
        header='About Us' 
        description='The SWA Note is a family owned business, explore our story below!'
      />
      <Image fluid
        src="https://blog.truefire.com/wp-content/uploads/2016/10/guitar-teacher.jpg"
      />
      <br />
      <br />
      <CardTableWithSpace cardsList={AboutCards}/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default About;
