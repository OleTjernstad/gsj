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
        <DropDown title="Om oss" />
        <li>
          <a href="#">Kontakt oss</a>
        </li>
      </ul>
    </nav>
  );
}

function DropDown({ title }: { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="dropdown">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="dropdown__title"
        aria-expanded="false"
        aria-controls={title.replace(/\s/gm, "-")}
      >
        {title}
      </button>
      <ul
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`dropdown__menu ${isOpen ? "dropdown__active" : ""}`}
        id={title.replace(/\s/gm, "-")}
      >
        <li>
          <a
            tabIndex={!isOpen ? -1 : undefined}
            onClick={() => setIsOpen(!isOpen)}
            href="#"
          >
            Donuts
          </a>
        </li>
        <li>
          <a
            tabIndex={!isOpen ? -1 : undefined}
            onClick={() => setIsOpen(!isOpen)}
            href="#"
          >
            Cupcakes
          </a>
        </li>
        <li>
          <a
            tabIndex={!isOpen ? -1 : undefined}
            onClick={() => setIsOpen(!isOpen)}
            href="#"
          >
            Chocolate
          </a>
        </li>
        <li>
          <a
            tabIndex={!isOpen ? -1 : undefined}
            onClick={() => setIsOpen(!isOpen)}
            href="#"
          >
            Bonbons
          </a>
        </li>
      </ul>
    </li>
  );
}
