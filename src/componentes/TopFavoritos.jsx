import React, { useEffect, useState } from "react";
import "../estilos/topfavoritos.css"; // crea este archivo
import { API_URL } from "../config";

const TopFavoritos = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/top-favoritos`)
      .then((res) => res.json())
      .then((data) => setJugadores(data))
      .catch((err) => console.error("Error al cargar top favoritos:", err));
  }, []);

  const getMedalla = (index) => {
    switch (index) {
      case 0: return "🥇";
      case 1: return "🥈";
      case 2: return "🥉";
      default: return "🏀";
    }
  };

  const getColor = (index) => {
    switch (index) {
      case 0: return "oro";
      case 1: return "plata";
      case 2: return "bronce";
      default: return "normal";
    }
  };

  return (
    <div className="top-favoritos-container">
      <h2>🏆 Jugadores más votados</h2>
      <ul className="top-favoritos-lista">
        {jugadores.map((j, index) => (
          <li
            key={index}
            className={`top-favorito-item ${getColor(index)}`}
          >
            {getMedalla(index)} <strong>{j.nombre}</strong> ({j.equipo}) — {j.votos} votos
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopFavoritos;
