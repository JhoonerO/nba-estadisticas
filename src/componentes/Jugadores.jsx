import { useEffect, useState } from "react";
import JugadorCard from "./JugadorCard";
import "../estilos/jugadores.css";
import { useUsuario } from "../context/UsuarioContext"; // 👈 usar contexto

function Jugadores() {
  const [jugadores, setJugadores] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState(1);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null);
  const { usuario } = useUsuario(); // 👈 obtener usuario global

  useEffect(() => {
    const delay = setTimeout(() => {
      const partes = busqueda.trim().toLowerCase().split(" ");
      const url = partes[0]
        ? `https://api.balldontlie.io/v1/players?search=${encodeURIComponent(partes[0])}`
        : `https://api.balldontlie.io/v1/players?per_page=10&page=${pagina}`;
  
      fetch(url, {
        headers: {
          Authorization: "1320ce0c-98f2-40ff-aa08-2703457a2d11"
        }
      })
        .then((res) => res.json())
        .then((data) => {
          let jugadoresFiltrados = data.data;
  
          if (partes.length > 1 && partes[1]) {
            jugadoresFiltrados = jugadoresFiltrados.filter((j) =>
              `${j.first_name} ${j.last_name}`.toLowerCase().includes(partes[1])
            );
          }
  
          setJugadores(jugadoresFiltrados);
        })
        .catch((err) => console.error("Error al buscar jugadores:", err));
    }, 300); // Espera que termines de escribir
  
    return () => clearTimeout(delay); // Cancela si seguís escribiendo
  }, [busqueda, pagina]);
  
  return (
    <div className="jugadores-container">
      <h1>Jugadores NBA</h1>

      {/* Buscador de jugadores */}
      <input
        type="text"
        placeholder="Buscar jugador"
        value={busqueda}
        onChange={(e) => {
          setBusqueda(e.target.value);
          setPagina(1);
        }}
        className="buscador"
      />

      {/* Lista de tarjetas */}
      <div className="grid-jugadores">
        {jugadores.length > 0 ? (
          jugadores.map((j) => (
            <div
              key={j.id}
              onClick={() => setJugadorSeleccionado(j)}
              className="tarjeta-clickable"
            >
              <JugadorCard jugador={j} usuario={usuario} />
            </div>
          ))
        ) : (
          <p>No se encontraron jugadores.</p>
        )}
      </div>

      {/* Modal con detalles */}
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
            <p><strong>Posición:</strong> {jugadorSeleccionado.position || "N/A"}</p>
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
