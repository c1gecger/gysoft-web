import "./Navbar.css";

function Navbar() {
  const buttons = [
    {
      title: "Szakmáról",
      href: "#szakmarol",
    },
    {
      title: "Szakterületek",
      href: "#fields",
    },
    {
      title: "Előnyök",
      href: "#elonyok",
    },
    {
      title: "Kapcsolat",
      href: "#kapcsolat",
    },
  ];
  return (
    <nav className="navbar">
      <img draggable="false" src="./img/logo v3/logo.svg" alt="Logo" className="icon" />
      <h1  id="navbarH1">Szoftverfejlesztő és -tesztelő</h1>
      <div id="elvalaszto"></div>
      <div className="buttons">
        <div className="button">
          <a href="/szakmarol" className="navbarButtons">
            Szakmáról
          </a>
        </div>
        <div className="button">
          <a href="/itteruletek" className="navbarButtons">
            Szakterületek
          </a>
        </div>
        <div className="button">
          <a href="/elonyok" className="navbarButtons">
            Előnyök
          </a>
        </div>
        <div className="button">
          <a href="/kapcsolat" className="navbarButtons">
            Kapcsolat
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
