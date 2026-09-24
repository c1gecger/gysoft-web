import "./Carreer.css";

const Carreer = () => {
  const sections = [
    {
      title: "Előnyök",
      items: ["Valami", "Valami"],
    },
    {
      title: "Hátrányok",
      items: ["Valami", "Valami"],
    },
    {
      title: "Hasznos tulajdonságok",
      items: ["Valami", "Valami"],
    },
  ];

  return (
    <main id="elonyok">
      <h1>Pályaválasztás</h1>
      <div className="container">
        {sections.map((section, index) => (
          <section key={index} className="oszlop">
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Carreer;

import "./Carreer.css";

const Carreer = () => {
  const sections = [
    {
      title: "Előnyök",
      items: ["Valami", "Valami"],
    },
    {
      title: "Hátrányok",
      items: ["Valami", "Valami"],
    },
    {
      title: "Hasznos tulajdonságok",
      items: ["Valami", "Valami"],
    },
  ];

  return (
    <main>
      <h1>Pályaválasztás</h1>
      <div className="container">
        {sections.map((section, index) => (
          <section key={index} className="oszlop">
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Carreer;
