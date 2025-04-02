import { useUsuario } from "../context/UsuarioContext"; // 👈 Importamos el contexto

function JugadorCard({ jugador }) {
  const { usuario } = useUsuario(); // 👈 Obtenemos el usuario global

  const agregarFavorito = async () => {
    try {
      await fetch("http://localhost:3001/favoritos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jugador_id: jugador.id,
          nombre: `${jugador.first_name} ${jugador.last_name}`,
          equipo: jugador.team.full_name,
          usuario
        })
      });
      alert("¡Agregado a favoritos!");
    } catch (error) {
      console.error("Error al guardar favorito:", error);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        background: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}
    >
      <h3 style={{ margin: "0 0 8px" }}>
        {jugador.first_name} {jugador.last_name}
      </h3>

      <p style={{ margin: "4px 0" }}>
        <strong>Equipo:</strong> {jugador.team.full_name}
      </p>

      <p style={{ margin: "4px 0" }}>
        <strong>Posición:</strong> {jugador.position || "N/A"}
      </p>

      <p style={{ margin: "4px 0" }}>
        <strong>Altura:</strong> {jugador.height || "No disponible"}
      </p>

      <p style={{ margin: "4px 0" }}>
        <strong>Peso:</strong> {jugador.weight || "No disponible"}
      </p>

      <p style={{ margin: "4px 0" }}>
        <strong>Universidad:</strong> {jugador.college || "No disponible"}
      </p>

      <p style={{ margin: "4px 0" }}>
        <strong>País:</strong> {jugador.country || "No disponible"}
      </p>

      <button
        onClick={agregarFavorito}
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        ⭐ Agregar a favoritos
      </button>
    </div>
  );
}

export default JugadorCard;
