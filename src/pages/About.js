import React from "react";
import Image from "react-bootstrap/Image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import CardTable from "../components/CardTable";

const cards = [
  [
    {
      img: "https://simpleicon.com/wp-content/uploads/local-SEO.svg",
      title: "Family Owned and Operated",
      description: "Our doors opened in 2022 for the wonderful city of Redmond as a family owned business with a commitment to treat you like one of our own.",
      footer: "Last updated 3 mins ago",
    },
    {
      img: "https://cdn.icon-icons.com/icons2/1771/PNG/512/4124869-badge-insignia-premium-badge-quality-star-badge_114113.png",
      title: "Commitment to Quality",
      description: "We pride ourselves on superior service and quality of our instruments and aspire to never disappoint our customers.",
      footer: "Last updated 3 mins ago",
    },
  ],
  [
    {
      img: "https://cdn.icon-icons.com/icons2/907/PNG/512/group-of-people-in-a-formation_icon-icons.com_70476.png",
      title: "Hard working staff",
      description: "Our staff is committed to providing you the best service possible. Most of them are trained musicians ready to help you on your musical journey.",
      footer: "Last updated 3 mins ago",
    },
    {
      img: "https://cdn.icon-icons.com/icons2/933/PNG/512/shopping-cart_icon-icons.com_72552.png",
      title: "Buy and Repair",
      description: "Not only will you be going home with an instrument made with quality and care, we offer plenty of options to help service your instrument right in house.",
      footer: "Last updated 3 mins ago",
    },
  ],
]

const About = () => {
  return (
    <div>
      <Header 
        header='About Us' 
        description='The Right Note is a family owned business, explore our story below!'
      />
      <Image fluid
        src="https://blog.truefire.com/wp-content/uploads/2016/10/guitar-teacher.jpg"
      />
      <br />
      <br />
      <CardTable cardsList={cards}/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default About;
