import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

const ProductTable = ({ productsList }) => {
    return (<CardColumns>
        {productsList.map((product) => {
            return (<Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.img}/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant="primary">{product.price}</Button>
                </Card.Body>
            </Card>);
        })}
    </CardColumns>);
}

export default ProductTable;