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
        <p style={{ margin: 0 }}>{jugador.team.full_name}</p>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Posición: {jugador.position || "N/A"}
        </p>
      </div>
    );
  }
  
  export default JugadorCard;
  