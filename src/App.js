import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jugadores from "./componentes/Jugadores";
import ListaEquipos from "./componentes/ListaEquipos";
import Partidos from "./componentes/Partidos";
import JugadoresEquipo from "./componentes/JugadoresEquipo";
import Retirados from "./componentes/Retirados";
import Favoritos from "./componentes/Favoritos";
import TopFavoritos from "./componentes/TopFavoritos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuDesplegable from "./componentes/MenuDesplegable";

import { useTema } from "./context/TemaContext"; // 👈 para detectar tema actual

import "./estilos/nav.css";
import "./estilos/index.css";

function App() {
  const { oscuro } = useTema(); // 👈 usamos contexto

  return (
    <div className={oscuro ? "modo-oscuro" : "modo-claro"}> {/* 👈 clase según tema */}
      <BrowserRouter>
        <nav className="nav">
          <MenuDesplegable /> {/* ✅ Menú lateral con tema */}
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
    </div>
  );
}

export default App;
