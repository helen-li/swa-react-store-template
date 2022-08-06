import React from "react";
import '../App.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Header = ({ header, description }) => {
    return (<Jumbotron fluid>
        <Container>
            <h1>{header}</h1>
            <p>{description}</p>
        </Container>
    </Jumbotron>);
}

export default Header;