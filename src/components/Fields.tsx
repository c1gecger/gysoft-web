import "./Fields.css";

type Field = {
  title: string,
  desc: string
}

const fields:Field[]=[
  {title: "Alkalmazás fejlesztés",
    desc: "Akarsz valami igazán menőt alkotni, amit utána digitálisan emberek milliói használnak a telefonjukon? Az alkalmazásfejlesztés nem csak egy sima szakma, hanem a te szupererőd ahhoz, hogy a legőrültebb ötleteidet – legyen az egy új közösségi app, egy hasznos suli-segéd vagy a következő menő mobiljáték – valósággá váltsd! Fejlesztőként te döntöd el, hogyan működjön a világ a képernyők mögött: kódolsz, dizájnsz, problémákat oldasz meg, és közben olyan tudást szerzel, amivel a jövő kapui bárhol nyitva állnak előtted. Ne csak használd a legjobb appokat – légy te az, aki megépíti a következő nagy dobást!"
  },
  {title: "Weboldal fejlesztés",
    desc: "Szeretnél saját weboldalt vagy egy elképesztően menő platformot építeni, amit az egész világ elérhet egyetlen kattintással? A webfejlesztés a belépőkártyád a digitális világ színpadára, ahol te lehetsz az az alkotó, aki a semmiből felhúz egy pörgős webshopot, egy látványos portfóliót vagy a legújabb online közösségi teret! Ebben a szakmában a kreatív dizájn és a szuperintelligens logikai kódolás találkozik: miközben látványos felületeket formálsz, a háttérben működő rendszereket is te irányítod. Ne csak böngészd az internetet – alakítsd te a web jövőjét, és mutasd meg a világnak, mire vagy képes!"
  },
  {title: "Adatbázis készítés",
    desc: "Gondoltál már arra, hogy mi hajtja a világ legnagyobb digitális birodalmait, mint a Google, a Netflix vagy a kedvenc online játékaid? Az adatbázis-kezelés a digitális világ igazi „kincstárnoki” hivatása: te vagy az az intelligens háttérstratéga, aki rendszerezi, védi és villámgyorssá teszi azt a rengeteg adatot – profilokat, pontszámokat, videókat és üzeneteket –, amiből az egész internet táplálkozik! Adatbázis-szakértőként te tartod kézben a digitális világ információit: kódolsz, rejtvényként bogozol ki bonyolult adatkapcsolatokat, és garantálod, hogy semmi se vesszen el. Légy te a háttérben rejlő szuperagy, aki nélkül egyetlen menő alkalmazás vagy weboldal sem tudna létezni!"
  }
]

function Fields() {


  return (
    <div id="fields">
      <div className="szakmaTeruleteiBackground"></div>
      <div className="fieldsContent">
        <h1 className="">A szakma területei</h1>
        <div className="szakmaTeruleteiFlexbox">
          {fields.map(f => {
            return (<div className="szakmaTeruleteiContent">
            <div className="szakmaTeruleteiImg"></div>
            <div className="szakmaTeruleteiInnerFlexbox">
              <div className="szakmaTeruleteiH1">{f.title}</div>
              <div className="szakmaTeruleteiText">{f.desc}</div>
            </div>
          </div>)
          })}
          
        </div>
      </div>
    </div>
  );
}

export default Fields;
