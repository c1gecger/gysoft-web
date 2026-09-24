import "./Fields.css";

type Field = {
  title: string,
  desc: string
}

const fields:Field[]=[
  {title: "Alkalmazás fejlesztés",
    desc: "leiraaaaas"
  },
  {title: "Weboldal fejlesztés",
    desc: "leiraaaaas"
  },
  {title: "Adatbázis készítés",
    desc: "leiraaaaas"
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
