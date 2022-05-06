import React, { Component } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "../comps/Layout";
import LoginPage from "./LoginPage";
import FavoriteNumbers from "./FavoriteNumbers";
import DeletedContacts from "./DeletedContacts";
import Contacts from "./Contacts";
import { TOKEN } from "../const";
import Friends from "./Friends";
import Family from "./Family";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: [],
      contactDel: [],
      favorite: [],
      contactDelBase: [],
      oilam: [],
      dustlarim: [],
    };
  }

  render() {
    const getValues = (value) => {
      if (value.selectVal === "sevimli") {
        this.setState({ favorite: [...this.state.favorite, value] });
      } else {
        if (value.selectVal === "oilam") {
          this.setState({ oilam: [...this.state.oilam, value] });
        } else {
          if (value.selectVal === "dustlarim") {
            this.setState({ dustlarim: [...this.state.dustlarim, value] });
          } else {
            if (value.selectVal === "umumiy") {
              this.setState({ contact: [...this.state.contact, value] });
            }
          }
        }
      }

      console.log(this.state);
    };
    const FavoriteContact = (fav) => {
      this.setState({
        contact: this.state.contact.filter(
          (item) => item.number !== fav.number
        ),
        favorite: [...this.state.favorite, fav],
      });
      console.log(this.state.favorite.length);
    };
    const DeletedContact = (delContact) => {
      this.setState({
        contact: this.state.contact.filter(
          (item) => item.number !== delContact.number
        ),
        contactDel: [...this.state.contactDel, delContact],
      });
      this.setState({
        favorite: this.state.favorite.filter(
          (item) => item.number !== delContact.number
        ),
        contactDel: [...this.state.contactDel, delContact],
      });
      this.setState({
        dustlarim: this.state.dustlarim.filter(
          (item) => item.number !== delContact.number
        ),
        contactDel: [...this.state.contactDel, delContact],
      });
      this.setState({
        oilam: this.state.oilam.filter(
          (item) => item.number !== delContact.number
        ),
        contactDel: [...this.state.contactDel, delContact],
      });
    };

    const DeletedBaseContact = (conELem) => {
      this.setState({
        contactDel: this.state.contactDel.filter(
          (item) => item.number !== conELem.number
        ),
        contactDelBase: [...this.state.contactDelBase, conELem],
        contactDelBase: [],
      });
    };
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route
              path=""
              element={
                <Layout>
                  <Contacts
                    getValues={getValues}
                    DeletedContact={DeletedContact}
                    FavoriteContact={FavoriteContact}
                    contact={this.state.contact}
                  />
                </Layout>
              }
            ></Route>
            <Route
              path="favorite"
              element={
                <Layout>
                  <FavoriteNumbers
                    DeletedContact={DeletedContact}
                    favorite={this.state.favorite}
                  />
                </Layout>
              }
            ></Route>
            <Route
              path="friends"
              element={
                <Layout>
                  <Friends
                    DeletedContact={DeletedContact}
                    dustlarim={this.state.dustlarim}
                  />
                </Layout>
              }
            ></Route>
            <Route
              path="family"
              element={
                <Layout>
                  <Family
                    DeletedContact={DeletedContact}
                    oilam={this.state.oilam}
                  />
                </Layout>
              }
            ></Route>
            <Route
              path="deleted"
              element={
                <Layout>
                  <DeletedContacts
                    contactDel={this.state.contactDel}
                    DeletedBaseContact={DeletedBaseContact}
                  />
                </Layout>
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Index;

const PrivateRoute = () => {
  const auth = localStorage.getItem(TOKEN);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
