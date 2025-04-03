import { useEffect, useState } from "react";
import "../estilos/partidos.css";

function Partidos() {
  const [partidos, setPartidos] = useState([]);
  const [fecha, setFecha] = useState(() => {
    const hoy = new Date().toISOString().slice(0, 10);
    return hoy;
  });

  // Función para avanzar un día
  const avanzarUnDia = () => {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(nuevaFecha.getDate() + 1);
    setFecha(nuevaFecha.toISOString().slice(0, 10));
  };

  // Función para retroceder un día
  const retrocederUnDia = () => {
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(nuevaFecha.getDate() - 1);
    setFecha(nuevaFecha.toISOString().slice(0, 10));
  };

  useEffect(() => {
    fetch(`https://api.balldontlie.io/v1/games?dates[]=${fecha}`, {
      headers: {
        Authorization: "1320ce0c-98f2-40ff-aa08-2703457a2d11"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setPartidos(data.data);
      })
      .catch((err) => console.error("Error al obtener partidos:", err));
  }, [fecha]);

  return (
    <div className="partidos-container">
      <h2>Partidos del día 🏀</h2>

      <div className="buttons-container">
        <button onClick={retrocederUnDia} className="button-date">
          ← Anteriores
        </button>
        <button onClick={avanzarUnDia} className="button-date">
          Proximos →
        </button>
      </div>

      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        className="selector-fecha"
      />

      {partidos.length > 0 ? (
        <div className="lista-partidos">
          {partidos.map((p) => (
            <div key={p.id} className="partido-card">
              <div className="equipos">
                {/* Mostrar logo del equipo local */}
                <img
                  src={`/logos/${p.home_team.full_name.toLowerCase().replace(/ /g, "-")}.png`}
                  alt={p.home_team.full_name}
                  className="logo-equipo"
                />
                <span className="equipo">{p.home_team.full_name}</span>
                <strong>{p.home_team_score}</strong>
                <span> vs </span>
                <strong>{p.visitor_team_score}</strong>
                {/* Mostrar logo del equipo visitante */}
                <img
                  src={`/logos/${p.visitor_team.full_name.toLowerCase().replace(/ /g, "-")}.png`}
                  alt={p.visitor_team.full_name}
                  className="logo-equipo"
                />
                <span className="equipo">{p.visitor_team.full_name}</span>
              </div>
              <div className="estado">
                Estado: {p.status === "Final" ? "Finalizado" : p.status}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="sin-partidos">No hay partidos para esta fecha.</p>
      )}
    </div>
  );
}

export default Partidos;
