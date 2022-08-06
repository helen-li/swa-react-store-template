import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container"

const ContactForm = () => {
    return (<Jumbotron fluid>
        <Container>
            <h1>Get in touch</h1>
            <p>Fill out the form below and we will get back to you as soon as possible.</p>
            <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </Form.Row>

            <Form.Row />

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </Container>
    </Jumbotron>);
}

export default ContactForm;