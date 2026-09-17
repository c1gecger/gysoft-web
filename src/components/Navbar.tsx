import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="./img/logo v3/logo.svg" alt="Logo" className="icon" />
      <h1 id="navbarH1">Szoftverfejlesztő- és tesztelő</h1>
      <div id="elvalaszto"></div>
      <div className="buttons">
        <a href="/szakmarol" className="navbarButtons">
          Szakmáról
        </a>
        <a href="/itteruletek" className="navbarButtons">
          Szakterületek
        </a>
        <a href="/elonyok" className="navbarButtons">
          Előnyök
        </a>
        <a href="/kapcsolat" className="navbarButtons">
          Kapcsolat
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
