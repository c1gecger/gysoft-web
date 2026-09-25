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
      title: "Pályaválasztás",
      href: "#palyavalasztas",
    },
    {
      title: "Kapcsolat",
      href: "#kapcsolat",
    },
  ];
  return (
    <nav className="navbar">
      <img
        draggable="false"
        src="./img/logo v3/logo.svg"
        alt="Logo"
        className="icon"
      />
      <h1 id="navbarH1">Szoftverfejlesztő és -tesztelő</h1>
      <div id="elvalaszto"></div>
      <div className="buttons">
        {buttons.map((item, _i) => {
          return (
            <>
                <a key={_i} href={item.href} className="navbarButtons">
                  <div className="button">{item.title} </div>
                </a>
            </>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
