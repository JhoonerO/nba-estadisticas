import React, { useRef, useState } from "react";
import "../estilos/jugadores.css";
import { API_URL } from "../config";
import { toast } from "react-toastify";

function JugadorCard({ jugador, usuario }) {
  const [animar, setAnimar] = useState(false);
  const cardRef = useRef(null);

  const agregarFavorito = async () => {
    try {
      const res = await fetch(`${API_URL}/favoritos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jugador_id: jugador.id,
          nombre: `${jugador.first_name} ${jugador.last_name}`,
          equipo: jugador.team.full_name,
          usuario: usuario
        })
      });

      // ⚠️ Si ya votó
      if (res.status === 409) {
        toast.info("⚠️ Ya votaste por este jugador.");
        return;
      }

      // ✅ Éxito
      toast.success("✅ ¡Jugador agregado a favoritos!");

      // ✨ Animación visual
      setAnimar(true);
      setTimeout(() => setAnimar(false), 600);
    } catch (error) {
      console.error("Error al guardar favorito:", error);
      toast.error("❌ Hubo un problema al guardar.");
    }
  };

  return (
    <div
      ref={cardRef}
      className={`jugador-card ${animar ? "destello" : ""}`}
    >
      <h3>{jugador.first_name} {jugador.last_name}</h3>
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
