import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../estilos/equipos.css";

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
        const activos = data.data.filter((e) => e.conference !== "");
        setEquipos(activos);
      })
      .catch((err) => console.error("Error al cargar equipos:", err));
  }, []);

  // Nombres que no siguen el patrón exacto del archivo
  const nombresEspeciales = {
    "LA Clippers": "los-angeles-clippers",
    "Philadelphia 76ers": "philadelphia-76ers",
    "New Orleans Pelicans": "new-orleans-pelicans",
    "San Antonio Spurs": "san-antonio-spurs"
    // Agregá más si hace falta
  };

  // Función que obtiene el nombre del archivo de logo
  const obtenerNombreLogo = (fullName) => {
    const base = nombresEspeciales[fullName] || fullName.toLowerCase().replaceAll(" ", "-");
    return `/logos/${base}.png`;
  };

  return (
    <div className="equipos-container">
      <h1>Equipos NBA</h1>

      <h2>Conferencia Este</h2>
      <div className="grid-equipos">
        {equipos
          .filter((e) => e.conference === "East")
          .map((equipo) => (
            <Link
              key={equipo.id}
              to={`/equipos/${equipo.id}`}
              className="equipo-card"
            >
              <img
                src={obtenerNombreLogo(equipo.full_name)}
                alt={equipo.full_name}
                className="logo-equipo"
                onError={(e) => (e.target.style.display = "none")}
              />
              <h3>{equipo.full_name}</h3>
              <p><strong>Ciudad:</strong> {equipo.city}</p>
              <p><strong>División:</strong> {equipo.division}</p>
            </Link>
          ))}
      </div>

      <h2>Conferencia Oeste</h2>
      <div className="grid-equipos">
        {equipos
          .filter((e) => e.conference === "West")
          .map((equipo) => (
            <Link
              key={equipo.id}
              to={`/equipos/${equipo.id}`}
              className="equipo-card"
            >
              <img
                src={obtenerNombreLogo(equipo.full_name)}
                alt={equipo.full_name}
                className="logo-equipo"
                onError={(e) => (e.target.style.display = "none")}
              />
              <h3>{equipo.full_name}</h3>
              <p><strong>Ciudad:</strong> {equipo.city}</p>
              <p><strong>División:</strong> {equipo.division}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ListaEquipos;
