import { useEffect, useState } from "react";

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/favoritos")
      .then((res) => res.json())
      .then((data) => setFavoritos(data))
      .catch((err) => console.error("Error al cargar favoritos:", err));
  }, []);

  const eliminarFavorito = async (jugador_id) => {
    await fetch(`http://localhost:3001/favoritos/${jugador_id}`, {
      method: "DELETE"
    });

    // Actualizar lista
    setFavoritos((prev) =>
      prev.filter((f) => f.jugador_id !== jugador_id)
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>⭐ Jugadores favoritos</h1>

      {favoritos.length > 0 ? (
        favoritos.map((f) => (
          <div
            key={f.id}
            style={{
              border: "1px solid #ccc",
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              boxShadow: "0 1px 3px rgba(248, 50, 50, 0.1)"
            }}
          >
            <h3>{f.nombre}</h3>
            <p><strong>Equipo:</strong> {f.equipo}</p>
            <p><strong>Usuario:</strong> {f.usuario}</p>
            <button
              onClick={() => eliminarFavorito(f.jugador_id)}
              style={{
                padding: "6px 10px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Eliminar ❌
            </button>
          </div>
        ))
      ) : (
        <p>No hay favoritos aún.</p>
      )}
    </div>
  );
}

export default Favoritos;
