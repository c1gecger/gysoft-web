import "./Banner.css";

function Banner() {
  return (
    <div id="bannerContainer szakmarol">
      
      <div className="banner">
        <div className="blur"></div>
        <div>
          <div>
            <h2>Legyen tiéd a jövő appja!</h2>
          </div>
          <div>
            <p className="bannerText">
              A szoftverfejlesztő és -tesztelő szakma a digitális világ igazi „építész-ellenőr” párosa: a fejlesztő az, aki kitalálja és kódokból megépíti a legmenőbb appokat, játékokat és weboldalakat, míg a tesztelő a profi Hibavadász, aki addig nyomkodja és nyúzza a programot, amíg meg nem találja benne a legkisebb hibát is. Olyanok, mint egy szupercsapat – az egyik megalkotja a dolgokat, a másik pedig gondoskodik róla, hogy minden simán és akadásmentesen működjön, amikor a felhasználók a kezükbe veszik. Ebben a szakmában nem kell csodabogárnak lenned, de a jó logikai gondolkodás, a kíváncsiság, a rejtvényfejtő alkat és a csapattagként való együttműködés mindent visz!
            </p>
          </div>
          <a href="#fields" className="button">
            Vágjunk bele!
          </a>
        </div>
        </div>
    </div>
  );
}

export default Banner;
