import { useEffect, useState } from "react";

function Partidos() {
  const [partidos, setPartidos] = useState([]);

  useEffect(() => {
    const hoy = new Date().toISOString().slice(0, 10); // yyyy-mm-dd

    fetch(`https://api.balldontlie.io/v1/games?dates[]=${hoy}`, {
      headers: {
        Authorization: "1320ce0c-98f2-40ff-aa08-2703457a2d11"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setPartidos(data.data);
      })
      .catch((err) => console.error("Error al obtener partidos:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📅 Partidos de hoy</h2>

      {partidos.length > 0 ? (
        partidos.map((p) => (
          <div key={p.id} style={{ marginBottom: "16px" }}>
            <strong>{p.home_team.full_name}</strong> {p.home_team_score} - {p.visitor_team_score} <strong>{p.visitor_team.full_name}</strong>
            <div style={{ fontSize: "14px", color: "#666" }}>
              Estado: {p.status}
            </div>
          </div>
        ))
      ) : (
        <p>No hay partidos hoy.</p>
      )}
    </div>
  );
}

export default Partidos;
