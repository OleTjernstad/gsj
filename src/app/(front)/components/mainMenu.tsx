"use client";

import "./mainMenu.scss";

import { useState } from "react";

export function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav aria-label="Main Navigation">
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "active" : ""}></span>
      </button>

      <ul className={isOpen ? "active" : ""}>
        <li>
          <a href="#">Hjem</a>
        </li>
        <li>
          <a href="#">Om oss</a>
        </li>
        <li>
          <a href="#">Kontakt oss</a>
        </li>
      </ul>
    </nav>
  );
}
