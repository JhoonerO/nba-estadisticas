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
        <div>
          <h3>🏀 Conferencia Este</h3>
          <ul>
            {este.map((equipo) => (
              <li key={equipo.id}>
                {equipo.full_name} – {equipo.city}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>🏀 Conferencia Oeste</h3>
          <ul>
            {oeste.map((equipo) => (
              <li key={equipo.id}>
                {equipo.full_name} – {equipo.city}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListaEquipos;
