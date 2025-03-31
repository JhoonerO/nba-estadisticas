import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JugadorCard from "./JugadorCard";
import "../estilos/jugadores.css"; // Reutilizamos el CSS

function JugadoresEquipo() {
  const { id } = useParams();
  const [jugadores, setJugadores] = useState([]);
  const [equipoNombre, setEquipoNombre] = useState("");

  useEffect(() => {
    // Cargar jugadores por ID de equipo
    fetch(`https://api.balldontlie.io/v1/players?team_ids[]=${id}&per_page=100`, {
      headers: {
        Authorization: "1320ce0c-98f2-40ff-aa08-2703457a2d11"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setJugadores(data.data);
        if (data.data.length > 0) {
          setEquipoNombre(data.data[0].team.full_name);
        }
      })
      .catch((err) => console.error("Error al cargar jugadores del equipo:", err));
  }, [id]);

  return (
    <div className="jugadores-container">
      <h1>Jugadores del {equipoNombre || "equipo"}</h1>

      <div className="grid-jugadores">
        {jugadores.length > 0 ? (
          jugadores.map((j) => (
            <div key={j.id}>
              <JugadorCard jugador={j} />
            </div>
          ))
        ) : (
          <p>No hay jugadores para este equipo.</p>
        )}
      </div>
    </div>
  );
}

export default JugadoresEquipo;
