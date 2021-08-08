import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Cardfn() {
    const context = useContext(ProductContext);

    const onDeleteByIndex = (item) => {
        context.HandleRemoveCardFn(item);
    }

    return (
        <>
            <Container className="ItemContainer">
                <Row md={4} className="g-4">

                    {context.carditem.map((item, index) => {
                        return (
                            <Col key={index}>
                                <Card>
                                    <Card.Img variant="top" src={item.picture} height={290} width={450} />
                                    <Card.Body>
                                        <Card.Title>{item.product}</Card.Title>
                                        <Card.Text>
                                            {item.rate}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Link to="/modal"><Button type="button" size="sm" onClick={() => { onDeleteByIndex(item) }}>Buy Now</Button></Link>
                                        <Button variant="secondary" size="sm" onClick={() => { onDeleteByIndex(item) }}>Remove To Card</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}