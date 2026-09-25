import "./Carreer.css";

const Carreer = () => {
  const sections = [
    {
      title: "Előnyök",
      items: [
        "Valós munkatapasztalatot szerezhetsz már tanulmányaid alatt.",
        "Fizetést is kapsz a munkádért.",
        "Modern technológiákkal és valós fejlesztési feladatokkal ismerkedhetsz meg.",
        "Kapcsolatokat építhetsz szakemberekkel és cégekkel",
        "Könnyebben elhelyezkedhetsz a munkaerőpiacon a gyakorlati tapasztalat miatt.",
      ],
    },
    {
      title: "Hátrányok",
      items: [
        "Több időt igényel, mint egy kizárólag iskolai képzés",
        "Felelősségteljesebb feladatokat is kaphatsz, ami jó lehetőség a fejlődésre, de stresszes is lehet.",
        "Alkalmazkodnod kell a munkahelyi környezethez és a csapatdinamikához, ami kihívást jelenthet.",
        "Ki kell lépned a komfortzónádból, és új készségeket kell elsajátítanod a munkahelyi elvárásoknak való megfelelés érdekében.",
        "A munkahelyi feladatok és a tanulmányok összeegyeztetése nehéz lehet, és időbeosztást igényelhet.",
      ],
    },
    {
      title: "Hasznos tulajdonságok",
      items: [
        "Logikus gondolkodás",
        "Precizitás",
        "Csapatmunka",
        "Problémamegoldó képesség",
        "Kommunikációs készség",
      ],
    },
  ];

  return (
    <main id="palyavalasztas" className="career-section">
      <div className="career-content">
        <p className="career-eyebrow">Tervezd a jövődet</p>
        <h1>Pályaválasztás</h1>
        <p className="career-intro" aria-hidden="true" />
        <div className="career-grid">
          {sections.map((section, index) => (
            <section key={index} className="career-card">
              <h3>{section.title}</h3>
              <ul className="career-list">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Carreer;
