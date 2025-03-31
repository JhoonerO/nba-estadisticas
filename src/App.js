import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Jugadores from "./componentes/Jugadores";
import ListaEquipos from "./componentes/ListaEquipos";
import Partidos from "./componentes/Partidos";
import "./estilos/nav.css"; // 👉 importamos nav.css
import './estilos/index.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Jugadores</Link>
        <Link to="/equipos">Equipos</Link>
        <Link to="/partidos">Partidos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Jugadores />} />
        <Route path="/equipos" element={<ListaEquipos />} />
        <Route path="/partidos" element={<Partidos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
