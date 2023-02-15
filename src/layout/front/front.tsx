import { Header } from "../header";

export default function FrontLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="app-container">
        {children}
        <footer className="app-footer">&copy; Footer Example</footer>
      </div>
    </>
  );
}
