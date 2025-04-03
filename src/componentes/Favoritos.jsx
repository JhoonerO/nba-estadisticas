import { useEffect, useState } from "react";
import "../estilos/favoritos.css";
import { API_URL } from "../config";
import { useUsuario } from "../context/UsuarioContext"; // 👈 Asegurate de tener esto arriba


function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  const { usuario } = useUsuario();


  useEffect(() => {
    fetch(`${API_URL}/favoritos`)
      .then((res) => res.json())
      .then((data) => setFavoritos(data))
      .catch((err) => console.error("Error al cargar favoritos:", err));
  }, []);

  const eliminarFavorito = async (jugador_id) => {
    try {
      await fetch(`http://localhost:3001/favoritos/${jugador_id}/${usuario}`, {
        method: "DELETE"
      });
  
      setFavoritos((prev) =>
        prev.filter((f) => f.jugador_id !== jugador_id || f.usuario !== usuario)
      );
    } catch (err) {
      console.error("Error al eliminar favorito:", err);
    }
  };
  return (
    <div className="favoritos-container">
      <h1>⭐ Jugadores favoritos</h1>

      {favoritos.length > 0 ? (
        favoritos.map((f) => (
          <div key={f.id} className="favorito-card">
            <h3>{f.nombre}</h3>
            <p><strong>Equipo:</strong> {f.equipo}</p>
            <p><strong>Usuario:</strong> {f.usuario}</p>
            <button
              className="btn-eliminar"
              onClick={() => eliminarFavorito(f.jugador_id)}
            >
              Eliminar ❌
            </button>
          </div>
        ))
      ) : (
        <p className="no-favoritos">No hay favoritos aún.</p>
      )}
    </div>
  );
}

export default Favoritos;
