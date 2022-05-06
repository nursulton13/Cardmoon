import React, { Component } from "react";
import { Button } from "reactstrap";
import { TOKEN } from "../const";

export class LoginP extends Component {
  render() {
    const login = () => {
      localStorage.setItem(TOKEN, "token");
      window.location.href = "/";
    };
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Button onClick={login}>Login</Button>
      </div>
    );
  }
}

export default LoginP;
