import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="./img/logo v3/logo.svg" alt="Logo" className="icon" />
      <h1 id="navbarH1">Szoftverfejlesztő- és tesztelő</h1>
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
