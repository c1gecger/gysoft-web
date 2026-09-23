import "./Carreer.css";

const Carreer = () => {
  const elonyok = ["Valami", "Valami"];
  const hatranyok = ["Valami", "Valami"];
  const hasznosTulajdonsagok = ["Valami", "Valami"];

  return (
    <>
      <h1>Pályaválasztás</h1>
      <div className="container">
        <ul>
          {elonyok.map((item, _i) => {
            return <li key={_i}>{item}</li>;
          })}
        </ul>
        <ul>
          {hatranyok.map((item, _i) => {
            return <li key={_i}>{item}</li>;
          })}
        </ul>
        <ul>
          {hasznosTulajdonsagok.map((item, _i) => {
            return <li key={_i}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Carreer;
