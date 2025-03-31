import { useEffect, useState } from "react";
import JugadorCard from "./JugadorCard";

function Jugadores() {
  const [jugadores, setJugadores] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    const url = busqueda
      ? `https://api.balldontlie.io/v1/players?search=${busqueda}`
      : `https://api.balldontlie.io/v1/players?per_page=10&page=${pagina}`;

    fetch(url, {
      headers: {
        Authorization: "1320ce0c-98f2-40ff-aa08-2703457a2d11"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setJugadores(data.data);
      })
      .catch((err) => console.error("Error al buscar jugadores:", err));
  }, [busqueda, pagina]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Jugadores NBA</h1>

      <input
        type="text"
        placeholder="Buscar jugador"
        value={busqueda}
        onChange={(e) => {
          setBusqueda(e.target.value);
          setPagina(1);
        }}
        style={{
          padding: "8px",
          fontSize: "16px",
          marginBottom: "20px",
          width: "100%",
          maxWidth: "300px"
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px"
        }}
      >
        {jugadores.length > 0 ? (
          jugadores.map((j) => <JugadorCard key={j.id} jugador={j} />)
        ) : (
          <p>No se encontraron jugadores.</p>
        )}
      </div>

      {!busqueda && (
        <div style={{ marginTop: "20px", display: "flex", gap: "10px", alignItems: "center" }}>
          <button onClick={() => setPagina((p) => Math.max(p - 1, 1))}>Anterior</button>
          <span>Página: {pagina}</span>
          <button onClick={() => setPagina((p) => p + 1)}>Siguiente</button>
        </div>
      )}
    </div>
  );
}

export default Jugadores;
