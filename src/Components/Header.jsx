import { Component } from "react";
import Socials from "./Socials";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const menuItems = [
      { to: "/", text: "Home" },
      { to: "/about", text: "About" },
      { to: "/experience", text: "Experience" },
      { to: "/skills", text: "Skills" },
      { to: "/interest", text: "Interest" },
      { to: "/awards", text: "Awards" },
    ];

    return (
      <header className="fixed w-full px-12 z-30 h-28 flex items-center">
        <div className="flex flex-row items-center w-full justify-between">
          {/* text logo */}
          <Link to={"/"}>
            <h1 className="h1 text-3xl">Yurio Dwi</h1>
          </Link>
          {/* header */}
          <nav className="flex gap-x-12 font-semibold">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="text-[#696c6d] hover:text-primary transition"
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>
        {/* socials logo */}
        <Socials />
      </header>
    );
  }
}

export default Header;
