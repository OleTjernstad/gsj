import Link from "next/link";

export function Footer() {
  return (
    <footer className="app-footer">
      <address>
        <div className="company"> Glommasvingen Janitsjar </div>
        <div className="address">
          Postboks 291
          <br /> 2202 KONGSVINGER
        </div>
      </address>
      <div>
        <address>Org. nr. 993 822 280</address>
        <br />
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://info.tjernstad-utvikling.no/"
          className="copyright"
        >
          &copy; Tjernstad Utvikling
        </Link>
      </div>
    </footer>
  );
}
