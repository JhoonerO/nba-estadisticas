import { useState } from "react";
import { Link } from "react-router-dom";
import { useUsuario } from "../context/UsuarioContext";
import { useTema } from "../context/TemaContext";
import "../estilos/menu.css"; // ✅ Ruta correcta al archivo


function MenuDesplegable() {
  const [abierto, setAbierto] = useState(false);
  const { usuario, setUsuario } = useUsuario();
  const { oscuro, toggleTema } = useTema();

  return (
    <>
      <div className="hamburguesa-btn" onClick={() => setAbierto(!abierto)}>
        ☰
      </div>

      <div className={`sidebar ${abierto ? "abierto" : ""}`}>
        <button className="cerrar-btn" onClick={() => setAbierto(false)}>✖</button>

        <Link to="/" onClick={() => setAbierto(false)}>🏀 Jugadores</Link>
        <Link to="/equipos" onClick={() => setAbierto(false)}>🏆 Equipos</Link>
        <Link to="/partidos" onClick={() => setAbierto(false)}>📅 Partidos</Link>
        <Link to="/favoritos" onClick={() => setAbierto(false)}>⭐ Favoritos</Link>
        <Link to="/top-favoritos" onClick={() => setAbierto(false)}>🔥 Top Votados</Link>

        <div className="usuario-input">
          <label>👤 Usuario:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
        </div>

        <button className="modo-btn" onClick={toggleTema}>
          {oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro"}
        </button>
      </div>
    </>
  );
}

export default MenuDesplegable;
