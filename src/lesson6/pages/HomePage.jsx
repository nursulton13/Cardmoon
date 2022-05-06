import React, { Component } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Modal,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import { products } from "../data/products";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      open: false,
      selected: "",
    };
  }

  render() {
    const state = this.state;
    const manageCart = (product, type) => {
      let isHave = state.cart.find((item) => item.id === product.id);
      if (isHave) {
        if (!type || type === "+") {
          isHave.quantity += 1;
          toast.info("Product quantity 1 ga oshdi");
        } else {
          if (isHave.quantity > 1) {
            isHave.quantity -= 1;
          }
        }
        this.setState({
          cart: state.cart.map((item) => {
            if (item.id === product.id) {
              return isHave;
            } else {
              return item;
            }
          }),
        });
      } else {
        toast.success("Product cart ga qo'shildi");
        this.setState({ cart: [...state.cart, product] });
      }
    };
    const closeModal = () => {
      this.setState({ open: false });
    };
    const openModal = () => {
      this.setState({ open: true });
    };
    const deleteProduct = () => {
      this.setState({
        cart: state.cart.filter((pro) => pro.id !== state.selected),
        open: false,
      });
    };
    console.log(state.cart);
    return (
      <Container>
        <Row>
          {products.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardImg
                  alt="Card image cap"
                  src={product.img}
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">{product.name}</CardTitle>
                  <CardText>{product.inf}</CardText>
                </CardBody>
                <CardFooter>
                  <Button color="primary" onClick={() => manageCart(product)}>
                    Add to cart
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
        {state.cart.length !== 0 && (
          <Table dark className="mt-3">
            <thead>
              <tr>
                <th className="text-center">Product Name</th>
                <th className="text-center">Product Price</th>
                <th className="text-center">Total</th>
                <th className="text-center">Actions</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {state.cart.map((product) => (
                <tr>
                  <th className="text-center">{product.name}</th>
                  <td className="text-center">{product.price}$</td>
                  <td className="text-center">
                    {product.price * product.quantity} $
                  </td>

                  <td className="text-center">
                    <Button
                      color="danger"
                      className="mr-2"
                      disabled={product.quantity <= 1}
                      onClick={() => manageCart(product, "-")}
                    >
                      -
                    </Button>
                    <span className="px-3">{product.quantity}</span>
                    <Button
                      color="success"
                      onClick={() => manageCart(product, "+")}
                      className="ml-2"
                    >
                      +
                    </Button>
                  </td>
                  <td className="text-center">
                    <Button
                      color="danger"
                      onClick={() => {
                        openModal();
                        this.setState({ selected: product.id });
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <div className="d-flex justify-content-between my-5">
          <h2 className="text-center">
            Total price:
            <span style={{ color: "red" }} className=" mx-3">
              {" "}
              {state.cart.reduce((total, product) => {
                return total + product.price * product.quantity;
              }, 0)}
              $
            </span>
          </h2>
        </div>
        <Modal toggle={closeModal} isOpen={state.open}>
          <ModalHeader toggle={closeModal}>
            Ushbu tovar bekor qilinsinmi ?
          </ModalHeader>
          <ModalFooter>
            <Button color="primary" onClick={closeModal}>
              Yo'q
            </Button>
            <Button onClick={deleteProduct}>Ha</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default HomePage;
