import React, { Component } from "react";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";
// import { ContactDesc } from "../data/ContacCards";
import "./pages.css";
import Like from "../img/like.jpg";
import Delete from "../img/delete.png";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { Context } from "../../App";

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lname: "",
      number: "",
      selectVal: "",
    };
  }
  render() {
    const state = this.state;
    const inputVal = (e) => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value,
      });
      this.setState({
        selectVal: e.target.value,
      });
    };

    const addContact = (e) => {
      this.props.getValues(state);
      this.setState({ name: "", lname: "", number: "" });
    };

    
    return (
      <div className="contacts">
        <div className="addContact my-4">
          <div className="contactDesc my-4">
            <div className="contactImg">
              <Input
                type="file"
                name="file"
                placeholder="Upload an image"
              />
            </div>
            <div className="contactNF px-4">
              <div className="name py-2">
                <Input
                  id="input"
                  name="name"
                  type="text"
                  onChange={inputVal}
                  placeholder="Ism (majburiy)"
                  value={state.name}
                />
              </div>
              <div className="fillName py-2">
                <Input
                  id="input"
                  type="text"
                  onChange={inputVal}
                  placeholder="Familiya (ixtiyoriy)"
                  name="lname"
                  value={state.lname}
                />
              </div>
            </div>
          </div>
          <div className="number">
            <InputGroup>
              <InputGroupText>+998</InputGroupText>
              <Input
                id="input"
                onChange={inputVal}
                type="text"
                name="number"
                value={state.number}
              />
            </InputGroup>
            <select onChange={inputVal} className="form-control w-100 mt-3">
              <option value="umumiy">Guruhni tanlang</option>
              <option value="umumiy">Umumiy</option>
              <option value="sevimli">Sevimli</option>
              <option value="oilam">Oilam</option>
              <option value="dustlarim">Do'stlarim</option>
            </select>
          </div>
          <Button
            type="submit"
            className="btn-danger my-3"
            onClick={addContact}
            disabled={state.name === "" && state.number === ""}
            style={
              state.name === "" && state.number === ""
                ? { color: "white" }
                : { color: "black" }
            }
          >
            Add Contact
          </Button>
        </div>
        <div className="contactCarts">
          {this.props.contact.map((item, index) => (
            <div key={index} className="cart my-3">
              <div className="cartImg">
                <img src={item.img} />
              </div>
              <div className="cartName text-center">
                <h2>{item.name}</h2>
              </div>
              <div className="cartNumber">
                <h4>{item.number}</h4>
              </div>
              <div className="contactIcon align-items-center">
                <div
                  className="likeContact"
                  onClick={() => {
                    this.props.FavoriteContact(item);
                  }}
                >
                  <img src={Like} />
                </div>
                <div className="text-danger fw-bold">ID:{index + 1}</div>
                <div
                  className="deleteContact"
                  onClick={() => {
                    this.props.DeletedContact(item);
                  }}
                >
                  <img src={Delete} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Contacts;
