import { useEffect, useState } from "react";

function ListaEquipos() {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    fetch("https://api.balldontlie.io/v1/teams", {
      headers: {
        Authorization: "1320ce0c-98f2-40ff-aa08-2703457a2d11"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        // Solo equipos con conferencia (descarta los que no tienen)
        const activos = data.data.filter((e) => e.conference);
        setEquipos(activos);
      })
      .catch((err) => console.error("Error al obtener equipos:", err));
  }, []);

  const este = equipos.filter((e) => e.conference === "East");
  const oeste = equipos.filter((e) => e.conference === "West");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Equipos NBA</h2>
  
      <div style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>
        {/* Este */}
        <div>
          <h3>🏀 Conferencia Este</h3>
          {este.map((equipo) => (
            <div key={equipo.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <img
                src={`https://a.espncdn.com/i/teamlogos/nba/500/${equipo.abbreviation}.png`}
                alt={equipo.full_name}
                style={{ width: "40px", height: "40px", marginRight: "10px", objectFit: "contain" }}
                onError={(e) => (e.target.style.display = "none")} // por si falla
              />
              <span>
                {equipo.full_name} – {equipo.city}
              </span>
            </div>
          ))}
        </div>
  
        {/* Oeste */}
        <div>
          <h3>🏀 Conferencia Oeste</h3>
          {oeste.map((equipo) => (
            <div key={equipo.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <img
                src={`https://a.espncdn.com/i/teamlogos/nba/500/${equipo.abbreviation}.png`}
                alt={equipo.full_name}
                style={{ width: "40px", height: "40px", marginRight: "10px", objectFit: "contain" }}
                onError={(e) => (e.target.style.display = "none")}
              />
              <span>
                {equipo.full_name} – {equipo.city}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default ListaEquipos;
