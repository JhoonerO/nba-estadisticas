import "../estilos/jugadores.css";
import JugadorCard from "./JugadorCard";

const jugadoresRetirados = [
  {
    id: 10001,
    first_name: "Michael",
    last_name: "Jordan",
    position: "G",
    team: { full_name: "Chicago Bulls" },
    height: "6-6",
    weight: "216",
    college: "North Carolina",
    country: "USA"
  },
  {
    id: 10002,
    first_name: "Kobe",
    last_name: "Bryant",
    position: "G",
    team: { full_name: "Los Angeles Lakers" },
    height: "6-6",
    weight: "212",
    college: "Lower Merion HS",
    country: "USA"
  },
  {
    id: 10003,
    first_name: "Tim",
    last_name: "Duncan",
    position: "F-C",
    team: { full_name: "San Antonio Spurs" },
    height: "6-11",
    weight: "250",
    college: "Wake Forest",
    country: "USA"
  },
  {
    id: 10004,
    first_name: "Manu",
    last_name: "Ginóbili",
    position: "G",
    team: { full_name: "San Antonio Spurs" },
    height: "6-6",
    weight: "205",
    college: "-",
    country: "Argentina"
  }
];

function Retirados() {
  return (
    <div className="jugadores-container">
      <h1>Jugadores Retirados</h1>

      <div className="grid-jugadores">
        {jugadoresRetirados.map((j) => (
          <JugadorCard key={j.id} jugador={j} />
        ))}
      </div>
    </div>
  );
}

export default Retirados;
