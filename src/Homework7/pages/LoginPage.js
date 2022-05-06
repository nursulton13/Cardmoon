import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { TOKEN } from "../const";
import './pages.css'

export class LoginPage extends Component {
  render() {
    const login = () => {
      localStorage.setItem(TOKEN, "token");
      window.location.href = "/";
    };
    return (
      <div className="login">
        <h1 className="my-3">Login</h1>
        <Input type='text' placeholder="Login" />
        <Input type="text" placeholder="Parol" />
        <Button onClick={login}>Sign in</Button>
      </div>
    );
  }
}

export default LoginPage;
