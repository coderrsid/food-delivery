import React, { Component } from 'react';
import { Container, Row, Card, Col, Button } from 'react-bootstrap';
import "./cart.css";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodOutCart: [
                {
                    id: 1,
                    itemName: "Pizza",
                    itemCost: 5.99,
                    selected: false
                },
                {
                    id: 2,
                    itemName: "Burger",
                    itemCost: 2.99,
                    selected: false
                },
                {
                    id: 3,
                    itemName: "Chicken Pasta",
                    itemCost: 4.99,
                    selected: false
                },
                {
                    id: 4,
                    itemName: "Grilled Sandwich",
                    itemCost: 1.99,
                    selected: false
                },

            ],
            foodInCart: [],
            selectedFood: [],
            totalAmount: 0
        }

    }

    componentDidMount() {
        const { foodInCart } = this.state;
        let amount = 0;
        for (var i = 0; i < foodInCart.length; i++) {
            amount = amount + foodInCart[i].itemCost;
        }

        this.setState({ totalAmount: amount });
    }

    addToCart = () => {
        const { foodInCart, foodOutCart, selectedFood } = this.state;

        this.setState({ foodInCart: [...foodInCart, ...selectedFood] });
        var amount = 0;

        for (var i = 0; i < foodInCart.length; i++) {
            amount += foodInCart[i].itemCost;
        }
        this.setState({ totalAmount: amount });
        var array = [];
        this.setState({ selectedFood: array });
    }
    removeFromCart = () => {
        const { foodInCart, foodOutCart, selectedFood } = this.state;

        var array = foodInCart.filter(function (cv) {
            return !selectedFood.find(function (e) {
                return e.id === cv.id;
            });
        });

        this.setState({ foodInCart: array });
        array = [];
        this.setState({ selectedFood: array });
    }

    selectHandler = (item) => {
        console.log(item);
        var array = [...this.state.selectedFood, item];
        this.setState({ selectedFood: array });
        console.log(this.state.selectedFood);
        alert('Selected ', item.itemName);
    }

    render() {
        const { foodInCart, foodOutCart, totalAmount } = this.state;

        return (
            <Container style={{ width: '100vw', height: '100vh', paddingTop: '20px' }}>
                <Row style={{ justifyContent: 'space-between', margin: '40px -40px', alignItems: 'center' }}>
                    <Card style={{ padding: '25px 10px', margin: '0px -40px', width: '23rem', height: '30rem' }}>
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>Available Options</Card.Title>
                            <div className="food-list">
                                {foodOutCart.map((item) => {
                                    return (
                                        <div onClick={() => this.selectHandler(item)} className="foodCartStyle">
                                            <div><img className="image" src={require(`../../assets/${item.id}.png`)}></img></div>
                                            <div style={{ textAlign: 'left' }}>{item.itemName}</div>
                                            <div style={{ fontWeight: 'bold' }}>${item.itemCost}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Card.Body>
                    </Card>

                    <Col xs={3} style={{ alignItems: 'center' }}>
                        <Button style={{
                            width: '10rem',
                            height: '3rem',
                            margin: '20px 10px',
                            backgroundColor: '#F8A22E'
                        }} size="md" onClick={(item) => this.addToCart(item)}>
                            Add to Cart
                        </Button>
                        <Button className="button" disabled={!foodInCart.length} size="md" onClick={(item) => this.removeFromCart(item)}>
                            Remove from cart
                        </Button>
                    </Col>
                    <Card style={{ padding: '25px 10px', margin: '0px -40px', width: '23rem', height: '30rem' }}>
                        <Card.Body>
                            {<Card.Title style={{ textAlign: 'center' }}>Your Cart</Card.Title>}
                            {foodInCart.length ? (
                                <div style={{ maxHeight: '80%', overflow: 'auto' }}>
                                    {foodInCart.map((item) => {
                                        return (
                                            <div onClick={() => this.selectHandler(item)} className="foodCartStyle">
                                                <div><img className="image" src={require(`../../assets/${item.id}.png`)}></img></div>
                                                <div>{item.itemName}</div>
                                                <div style={{ fontWeight: 'bold' }}>${item.itemCost}</div>
                                            </div>
                                        )
                                    })
                                    }

                                </div>
                            ) : <div style={{ position: 'relative', left: '40px', top: '8rem' }}><h3>Your cart is empty!</h3> <br /> <p>Select an item and click "Add to Cart"</p></div>}
                            <div className="totalAmount" style={{ padding: '20px 20px' }}>
                                <p>Total Amount</p>
                                <p style={{ fontWeight: 'bolder' }}>${totalAmount}</p>
                            </div>
                        </Card.Body>
                    </Card>

                </Row>
            </Container>
        )
    }
}

export default Cart;