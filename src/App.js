import { useEffect, useState } from "react";

function App() {
  const [jugadores, setJugadores] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    let url = "";

    if (busqueda) {
      url = `https://api.balldontlie.io/v1/players?search=${busqueda}`;
    } else {
      url = `https://api.balldontlie.io/v1/players?per_page=10&page=${pagina}`;
    }

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
          setPagina(1); // reiniciar paginación al buscar
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
          jugadores.map((j) => (
            <div
              key={j.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                background: "#fff",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              <h3 style={{ margin: "0 0 8px" }}>
                {j.first_name} {j.last_name}
              </h3>
              <p style={{ margin: 0 }}>{j.team.full_name}</p>
              <p style={{ fontSize: "14px", color: "#666" }}>
                Posición: {j.position || "N/A"}
              </p>
            </div>
          ))
        ) : (
          <p>No se encontraron jugadores.</p>
        )}
      </div>

      {/* Mostrar botones solo cuando no hay búsqueda activa */}
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

export default App;
