import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Jugadores from "./componentes/Jugadores";
import ListaEquipos from "./componentes/ListaEquipos";
import Partidos from "./componentes/Partidos";


function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", marginBottom: "20px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Jugadores</Link>
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
