import { useUsuario } from "../context/UsuarioContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JugadorCard from "./JugadorCard";
import "../estilos/jugadores.css";

// 👇 Función para mostrar el logo
const nombresEspeciales = {
  "LA Clippers": "los-angeles-clippers",
  "Philadelphia 76ers": "philadelphia-76ers",
  "New Orleans Pelicans": "new-orleans-pelicans",
  "San Antonio Spurs": "san-antonio-spurs"
};

const obtenerNombreLogo = (nombre) => {
  const base = nombresEspeciales[nombre] || nombre.toLowerCase().replaceAll(" ", "-");
  return `/logos/${base}.png`;
};

function JugadoresEquipo() {
  const { id } = useParams();
  const [jugadores, setJugadores] = useState([]);
  const [equipoNombre, setEquipoNombre] = useState("");
  const { usuario } = useUsuario();

  useEffect(() => {
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
      {/* 👇 Mostrar el logo del equipo si ya cargó */}
      {equipoNombre && (
        <img
          src={obtenerNombreLogo(equipoNombre)}
          alt={equipoNombre}
          style={{
            width: "70px",
            height: "70px",
            objectFit: "contain",
            marginBottom: "12px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
      )}

      <h1>Jugadores del {equipoNombre || "equipo"}</h1>

      <div className="grid-jugadores">
        {jugadores.length > 0 ? (
          jugadores.map((j) => (
            <div key={j.id}>
              <JugadorCard jugador={j} usuario={usuario} />
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
