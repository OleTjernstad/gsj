import Link from "next/link";
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
          <Link href="/">Hjem</Link>
        </li>
        <DropDown
          title="Korpset"
          links={[
            { title: "Om oss", url: "/about" },
            { title: "Historie", url: "/about/history" },
            { title: "Dirigenten", url: "/about/dirigenten" },
          ]}
        />
        <li>
          <a href="#">Kontakt oss</a>
        </li>
      </ul>
    </nav>
  );
}

function DropDown({
  title,
  links,
}: {
  title: string;
  links: { title: string; url: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="dropdown">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="dropdown__title"
        aria-expanded={isOpen}
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
        {links.map((link) => (
          <li key={link.url}>
            <Link
              tabIndex={!isOpen ? -1 : undefined}
              onClick={() => setIsOpen(!isOpen)}
              href={link.url}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
