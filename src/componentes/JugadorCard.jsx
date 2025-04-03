import React from "react";
import "../estilos/jugadores.css"; // Asegurate que esté importado
import { API_URL } from "../config";

function JugadorCard({ jugador, usuario }) {
  const agregarFavorito = async () => {
    try {
      await fetch(`${API_URL}/favoritos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jugador_id: jugador.id,
          nombre: `${jugador.first_name} ${jugador.last_name}`,
          equipo: jugador.team.full_name,
          usuario: usuario
        })
      });
      alert("¡Agregado a favoritos!");
    } catch (error) {
      console.error("Error al guardar favorito:", error);
    }
  };

  return (
    <div className="jugador-card">
      <h3>
        {jugador.first_name} {jugador.last_name}
      </h3>
      <p><strong>Equipo:</strong> {jugador.team.full_name}</p>
      <p><strong>Posición:</strong> {jugador.position || "N/A"}</p>
      <p><strong>Altura:</strong> {jugador.height || "No disponible"}</p>
      <p><strong>Peso:</strong> {jugador.weight || "No disponible"}</p>
      <p><strong>Universidad:</strong> {jugador.college || "No disponible"}</p>
      <p><strong>País:</strong> {jugador.country || "No disponible"}</p>

      <button className="boton-favorito" onClick={agregarFavorito}>
        ⭐ Agregar a favoritos
      </button>
    </div>
  );
}

export default JugadorCard;
