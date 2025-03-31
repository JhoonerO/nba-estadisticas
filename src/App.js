import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Jugadores from "./componentes/Jugadores";
import ListaEquipos from "./componentes/ListaEquipos";
import Partidos from "./componentes/Partidos";
import JugadoresEquipo from "./componentes/JugadoresEquipo";
import Retirados from "./componentes/Retirados"; // 🆕 nuevo import

import "./estilos/nav.css";
import "./estilos/index.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Jugadores</Link>
        <Link to="/equipos">Equipos</Link>
        <Link to="/partidos">Partidos</Link>
        <Link to="/retirados">Retirados</Link> {/* 🆕 nuevo link */}
      </nav>

      <Routes>
        <Route path="/" element={<Jugadores />} />
        <Route path="/equipos" element={<ListaEquipos />} />
        <Route path="/equipos/:id" element={<JugadoresEquipo />} />
        <Route path="/partidos" element={<Partidos />} />
        <Route path="/retirados" element={<Retirados />} /> {/* 🆕 nueva ruta */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
