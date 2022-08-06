import React from "react";
import '../App.css';
import Alert from "react-bootstrap/Alert";

const RedAlert = ({ header, description, note }) => {
    return (<Alert variant="danger">
    <Alert.Heading>{header}</Alert.Heading>
    <p>{description}</p>
    <hr />
    <p className="mb-0">{note}</p>
  </Alert>);
};

export default RedAlert;