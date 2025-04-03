import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Jugadores from "./componentes/Jugadores";
import ListaEquipos from "./componentes/ListaEquipos";
import Partidos from "./componentes/Partidos";
import JugadoresEquipo from "./componentes/JugadoresEquipo";
import Retirados from "./componentes/Retirados";
import Favoritos from "./componentes/Favoritos";
import { useUsuario } from "./context/UsuarioContext"; // 🧠 importamos el contexto
import TopFavoritos from "./componentes/TopFavoritos";

import "./estilos/nav.css";
import "./estilos/index.css";

function App() {
  const { usuario, setUsuario } = useUsuario(); // 🧠 usamos el contexto

  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Jugadores</Link>
        <Link to="/equipos">Equipos</Link>
        <Link to="/partidos">Partidos</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/top-favoritos">Top Votados</Link>

        {/* Campo para ingresar nombre de usuario */}
        <input
          type="text"
          placeholder="Tu nombre"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          style={{
            marginLeft: "10px",
            padding: "6px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />
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
    </BrowserRouter>
  );
}

export default App;
