import { useEffect, useState } from "react";
import JugadorCard from "./JugadorCard";
import "../estilos/jugadores.css";
import { useUsuario } from "../context/UsuarioContext";

function Jugadores() {
  const [jugadores, setJugadores] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null);
  const { usuario } = useUsuario();

  const mezclarArray = (arr) => arr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    const buscarJugadores = async () => {
      try {
        const partes = busqueda.trim().toLowerCase().split(" ");
        const url = `https://api.balldontlie.io/v1/players?search=${encodeURIComponent(partes[0])}`;

        const res = await fetch(url, {
          headers: {
            Authorization: "1320ce0c-98f2-40ff-aa08-2703457a2d11"
          }
        });

        const data = await res.json();
        let lista = data.data;

        if (partes.length > 1 && partes[1]) {
          lista = lista.filter((j) =>
            `${j.first_name} ${j.last_name}`.toLowerCase().includes(partes[1])
          );
        }

        const activos = lista.filter((j) => j.position && j.position !== "N/A");
        setJugadores(activos);
      } catch (err) {
        console.error("Error al buscar jugadores:", err);
      }
    };

    const cargarJugadoresActivos = async () => {
      try {
        const headers = {
          Authorization: "1320ce0c-98f2-40ff-aa08-2703457a2d11"
        };

        // 🌐 Fetch simultáneo de 3 páginas
        const urls = [1, 2, 3].map((i) =>
          fetch(`https://api.balldontlie.io/v1/players?per_page=100&page=${i}`, { headers }).then(res => res.json())
        );

        const resultados = await Promise.all(urls);
        const todos = resultados.flatMap(r => r.data);

        const activos = todos.filter((j) => j.position && j.position !== "N/A");
        const aleatorios = mezclarArray(activos).slice(0, 18);

        setJugadores(aleatorios);
      } catch (err) {
        console.error("Error al cargar jugadores activos:", err);
      }
    };

    const delay = setTimeout(() => {
      if (busqueda.trim()) {
        buscarJugadores();
      } else {
        cargarJugadoresActivos();
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [busqueda]);

  return (
    <div className="jugadores-container">
      <h1>Jugadores NBA</h1>

      <input
        type="text"
        placeholder="Buscar jugador"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="buscador"
      />

      <div className="grid-jugadores">
        {jugadores.length === 0 ? (
          <p>⏳ Cargando jugadores activos...</p>
        ) : (
          jugadores.map((j) => (
            <div
              key={j.id}
              onClick={() => setJugadorSeleccionado(j)}
              className="tarjeta-clickable"
            >
              <JugadorCard jugador={j} usuario={usuario} />
            </div>
          ))
        )}
      </div>

      {jugadorSeleccionado && (
        <div
          className="modal-overlay"
          onClick={() => setJugadorSeleccionado(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setJugadorSeleccionado(null)}>❌</button>

            <h3>
              {jugadorSeleccionado.first_name} {jugadorSeleccionado.last_name}
            </h3>
            <p><strong>Equipo:</strong> {jugadorSeleccionado.team.full_name}</p>
            <p><strong>Posición:</strong> {jugadorSeleccionado.position}</p>
            <p><strong>Altura:</strong> {jugadorSeleccionado.height || "No disponible"}</p>
            <p><strong>Peso:</strong> {jugadorSeleccionado.weight || "No disponible"}</p>
            <p><strong>Universidad:</strong> {jugadorSeleccionado.college || "No disponible"}</p>
            <p><strong>País:</strong> {jugadorSeleccionado.country || "No disponible"}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Jugadores;
