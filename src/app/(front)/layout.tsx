import "./front.scss";

import Image from "next/image";
import logo from "../../../public/gsj-logo.png";

export default function FrontLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <header className="header">
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
        {/* <div className="logo-container">
          <Image src={logo} alt="Glommasvingen logo" height={60} />
        </div> */}
      </header>
      {children}
      <footer className="footer">&copy; Footer Example</footer>
    </div>
  );
}
