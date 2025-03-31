function JugadorCard({ jugador }) {
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
      </div>
    );
  }
  
  export default JugadorCard;
  