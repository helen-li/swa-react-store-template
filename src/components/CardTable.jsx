import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";

export const CardTableWithSpace = ({ cardsList }) => {
    return (cardsList.map((cards) => {
        return (<><CardDeck>
            {cards.map((card) => {
                return (<Card>
                    <Card.Img variant="top" src={card.img} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>{card.footer}</Card.Footer>
                </Card>);
            })}
        </CardDeck><br /><br /></>);
    }));
};

export const CardTableWithoutSpace = ({ cardsList }) => {
    return (cardsList.map((cards) => {
        return (<><CardGroup>
            {cards.map((card) => {
                return (<Card>
                    <Card.Img variant="top" src={card.img} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.description}</Card.Text>
                    </Card.Body>
                </Card>);
            })}
        </CardGroup><br /><br /></>);
    }));
};