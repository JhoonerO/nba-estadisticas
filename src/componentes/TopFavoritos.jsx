import React, { useEffect, useState } from "react";

const TopFavoritos = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/top-favoritos")
      .then((res) => res.json())
      .then((data) => setJugadores(data))
      .catch((err) => console.error("Error al cargar top favoritos:", err));
  }, []);

  const getMedalla = (index) => {
    switch (index) {
      case 0:
        return "🥇";
      case 1:
        return "🥈";
      case 2:
        return "🥉";
      default:
        return "🏀";
    }
  };

  const getColor = (index) => {
    switch (index) {
      case 0:
        return "#FFD700"; // oro
      case 1:
        return "#C0C0C0"; // plata
      case 2:
        return "#CD7F32"; // bronce
      default:
        return "#f0f0f0"; // gris claro
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🏆 Jugadores más votados</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {jugadores.map((j, index) => (
          <li
            key={index}
            style={{
              background: getColor(index),
              marginBottom: "10px",
              padding: "12px",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
              fontSize: "16px"
            }}
          >
            {getMedalla(index)} <strong>{j.nombre}</strong> ({j.equipo}) — {j.votos} votos
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopFavoritos;
