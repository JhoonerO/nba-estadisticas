import React, { useEffect, useState } from "react";

const TopFavoritos = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/top-favoritos")
      .then((res) => res.json())
      .then((data) => setJugadores(data))
      .catch((err) => console.error("Error al cargar top favoritos:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🏀 Jugadores más votados</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {jugadores.map((j, idx) => (
          <li
            key={idx}
            style={{
              background: "#f0f0f0",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <strong>{j.nombre}</strong> ({j.equipo}) — {j.votos} votos
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopFavoritos;
