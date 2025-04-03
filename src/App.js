import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Jugadores from "./componentes/Jugadores";
import ListaEquipos from "./componentes/ListaEquipos";
import Partidos from "./componentes/Partidos";
import JugadoresEquipo from "./componentes/JugadoresEquipo";
import Retirados from "./componentes/Retirados";
import Favoritos from "./componentes/Favoritos";
import TopFavoritos from "./componentes/TopFavoritos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useUsuario } from "./context/UsuarioContext";
import { useTema } from "./context/TemaContext";

import "./estilos/nav.css";
import "./estilos/index.css";

function App() {
  const { oscuro, toggleTema } = useTema();
  const { usuario, setUsuario } = useUsuario();

  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Jugadores</Link>
        <Link to="/equipos">Equipos</Link>
        <Link to="/partidos">Partidos</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/top-favoritos">Top Votados</Link>

        {/* Campo de usuario con estilo mejorado */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "10px" }}>
          <label style={{ color: "#fff", fontWeight: "bold" }}>👤 Usuario:</label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            style={{
              padding: "6px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "14px"
            }}
          />
        </div>

        {/* Botón modo oscuro */}
        <button
          onClick={toggleTema}
          style={{
            marginLeft: "10px",
            padding: "6px 12px",
            backgroundColor: "#fff",
            color: "#17408B",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          {oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro"}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Jugadores />} />
        <Route path="/equipos" element={<ListaEquipos />} />
        <Route path="/equipos/:id" element={<JugadoresEquipo />} />
        <Route path="/partidos" element={<Partidos />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/retirados" element={<Retirados />} />
        <Route path="/top-favoritos" element={<TopFavoritos />} />
      </Routes>

      <ToastContainer position="top-center" autoClose={2500} />
    </BrowserRouter>
  );
}

export default App;
