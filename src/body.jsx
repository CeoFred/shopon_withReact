
/*
App Name: ShopOn
Dependencies: reactstrap
Description:A cool shopping cart,pure react.
Creator:ceofred
version:1.9
Feel free to add more features and push back. Dont do rubbish please!Goodluck





*/
import React, { Component } from 'react'
import {
Container,Row,Col,Card,CardBody,Button,CardFooter
} from 'reactstrap';
import CheckoutCartItems from "./CheckoutCartItems";
import img1 from './img/1(13).jpg';
import img2 from './img/1(14).jpg';
import img3 from './img/1(15).jpg';
import img4 from './img/1(16).jpg';
import Navigation from './nav';
import ModalBox from './modal'

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Items: [
                {
                    id: 1,
                    name: "infinix Hot 3",
                    price: 22000,
                    tag: "Mobile",
                    img: img1,
                    total: ""
                },
                {
                    id: 2,
                    name: "infinix Hot 2",
                    price: 56000,
                    tag: "Mobile",
                    img: img3,
                    total: ""
                },
                {
                    id: 3,
                    name: "infinix Hot 4",
                    price: 88000,
                    tag: "Mobile",
                    img: img2,
                    total: ""
                },
                {
                    id: 4,
                    name: "Samsung Earpiece",
                    price: 1000,
                    tag: "Earpiece",
                    img: img4,
                    total: ""
                }
            ],
            CartItems: [],
            ProductModalStatus: false,
            btnState: false,
            ModalContent: {}
        };
        this.HandleModalClose = this.HandleModalClose.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.ViewProduct = this.ViewProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.CalcNewPrice = this.CalcNewPrice.bind(this);
        this.btnClickhandler = this.btnClickhandler.bind(this);
        this.handleModalOutput = this.handleModalOutput.bind(this);
    }
    HandleModalClose(){
// alert(item.name);

        this.setState({
            ProductModalStatus: !this.state.ProductModalStatus
        });
        let Modal = [...this.state.ModalContent];
        Modal = [];
        this.setState({ ModalContent: Modal });



    }
    handleModalOutput(item) {
        let Modal = [...this.state.ModalContent];

        if (Modal == "") {
            Modal.push({ name: item.name, price: item.price, img: item.img });
            this.setState({ ModalContent: Modal });
        } else {
            Modal = [];
            Modal.push({ name: item.name, price: item.price, img: item.img });
            this.setState({ ModalContent: Modal });
        }
    }
    ViewProduct(items) {
        // alert(items.name);
        this.setState({ ProductModalStatus: !this.state.ProductModalStatus });
        this.handleModalOutput(items);
    }
    CalcNewPrice(newP, item) {
        const newItems = [...this.state.CartItems];
        let index = newItems.indexOf(item);
        const e = eval(newItems[index].price * newP);
        newItems[index].total = e;
        //   alert(e);
        this.setState({ CartItems: newItems });
        // alert(e);
    }
    btnClickhandler() {
        this.setState({ btnState: !this.state.btnState });
    }
    handleChange(e, item) {
        const newItems = [...this.state.CartItems];
        let index = newItems.indexOf(item);
        newItems[index].quantity = e.target.value;
        let newQ = newItems[index].quantity;
        // alert(newQ);
        this.setState({ CartItems: newItems });
        this.CalcNewPrice(newQ, item);
    }

    addToCart(items) {
        let name = items.name;
        let id = items.id;
        let price = items.price;
        let img = items.img;
        // const nitems = items;
        const newItems = [...this.state.CartItems];
        // alert(id);
        if (newItems.some(item => item.id === items.id)) {
            let counters = [...this.state.CartItems];
            // getting the index of the object counter gotten from the argument from the class handleIncrement
            // let index = counters.indexOf(items);
            alert("Item is already in cart");
            // // increasing the quantity of the object in the array counters
            // var count2 = counters[counters.indexOf(nitems)].quantity++;
            // the above shi aint working bruda,undefined and i dont understand why
            // this.setState({ CartItems:count2});
        } else {
            newItems.push({
                id: id,
                name: name,
                quantity: 1,
                price,
                total: price,
                img: img
            });
            this.setState({ CartItems: newItems });
        }
    }
    render() {
        return (
            <div>
                <Navigation
                    btnClick={this.btnClickhandler}
                    btnState={this.state.btnState}
                    item={this.state.CartItems.map(items => (
                        <div>
                            <Container>
                                <Row>
                                    <Col md={3}>{items.name}</Col>

                                    <Col md={3}>
                                        <b>
                                            <img
                                                height={20}
                                                alt={items.name}
                                                src={items.img}
                                            />{" "}
                                        </b>
                                    </Col>
                                    <Col md={3}>
                                        <input
                                            type="text"
                                            style={{ width: 30 }}
                                            onChange={e =>
                                                this.handleChange(e, items)
                                            }
                                            value={items.quantity}
                                        />
                                    </Col>
                                    <Col md={3}>
                                        NGN.
                                        <b> {items.price} </b>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    ))}
                    cart={this.state.CartItems.filter(c => c.id > 0).length}
                />

                <ModalBox
                    ModalItems={this.state.ModalContent}
                    status={this.state.ProductModalStatus}
                    ModalClose={this.HandleModalClose}
                />
                <Container style={{ marginButtom: 20 }}>
                    <Row>
                        {this.state.Items.map(items => (
                            <Col md={3} key={items.id}>
                                <Card>
                                    <CardBody>
                                        {items.name}
                                        <img src={items.img} alt={items.name} />
                                    </CardBody>
                                    <CardFooter>
                                        <Button
                                            className="btn btn-warning"
                                            onClick={() =>
                                                this.addToCart(items)
                                            }
                                        >
                                            Add to Cart
                                        </Button>
                                        <Button
                                            color="dark"
                                            onClick={() => {
                                                this.ViewProduct(items);
                                            }}
                                        >
                                            View
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md="12" sm="12">
                            <CheckoutCartItems
                                cartFinaLlist={this.state.CartItems}
                                CheckCheckOutState={this.state.btnState}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Body;
