import "./front.scss";

import Image from "next/image";
import logo from "../../../public/gsj-logo.png";

export default function FrontLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="header">
        <a href="#">
          <Image
            src={logo}
            alt="Glommasvingen logo"
            style={{
              objectFit: "contain",
              height: "3rem",
              width: "8rem",
              display: "inline-block",
            }}
          />
        </a>

        <input className="side-menu" type="checkbox" id="side-menu" />
        <label className="hamb" htmlFor="side-menu">
          <span className="hamb-line"></span>
        </label>

        <nav aria-label="Main Navigation">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li className="dropdown">
              {/* <!-- aria-expanded needs managed with Javascript --> */}
              <button
                type="button"
                className="dropdown__title"
                aria-expanded="false"
                aria-controls="sweets-dropdown"
              >
                Sweets
              </button>
              <ul className="dropdown__menu" id="sweets-dropdown">
                <li>
                  <a href="#">Donuts</a>
                </li>
                <li>
                  <a href="#">Cupcakes</a>
                </li>
                <li>
                  <a href="#">Chocolate</a>
                </li>
                <li>
                  <a href="#">Bonbons</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Order</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        {children}
        <footer className="footer">&copy; Footer Example</footer>
      </div>
    </>
  );
}
