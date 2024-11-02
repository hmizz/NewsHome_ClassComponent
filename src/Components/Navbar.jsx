import React, { Component } from "react";
import "../Navbar.css";
import logo from "../assets/images/logo.svg";
import close from "../assets/images/icon-menu-close.svg";
import menuIcon from "../assets/images/icon-menu.svg";
class Menu extends Component {
  render() {
    return (
      <div
        className={`menu-wrap ${
          this.props.isOpen ? "open-menu" : "close-menu"
        }`}
      >
        <button onClick={() => this.props.setIsOpen()}>
          {" "}
          <img src={close} alt="" />{" "}
        </button>
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
      </div>
    );
  }
}

export class Navbar extends Component {
  state = {
    menu: false,
  };
  setIsOpen = () => {
    this.setState((prev) => ({ ...prev, menu: !prev.menu }));
  };
  render() {
    return (
      <nav>
        <img src={logo} alt="logo" />
        <button
          className="menu-icon"
          onClick={() =>
            this.setState((prev) => ({ ...prev, menu: !prev.menu }))
          }
        >
          <img src={menuIcon} alt="menu" />
        </button>
        <Menu isOpen={this.state.menu} setIsOpen={this.setIsOpen} />
      </nav>
    );
  }
}

export default Navbar;
