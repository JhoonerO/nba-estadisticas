const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

// Configura tu conexión a PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "nba",
  password: "123",
  port: 5432
});

// Verificar conexión
pool.connect().then(() => console.log("✅ Conectado a PostgreSQL"));

/* --- RUTAS --- */

// Obtener favoritos
app.get("/favoritos", async (req, res) => {
  const result = await pool.query("SELECT * FROM favoritos ORDER BY id DESC");
  res.json(result.rows);
});

// Agregar un favorito
app.post("/favoritos", async (req, res) => {
    const { jugador_id, nombre, equipo, usuario } = req.body;
    await pool.query(
      "INSERT INTO favoritos (jugador_id, nombre, equipo, usuario) VALUES ($1, $2, $3, $4)",
      [jugador_id, nombre, equipo, usuario]
    );
    res.status(201).json({ mensaje: "Favorito guardado" });
  });
  

// Eliminar un favorito por ID de jugador
app.delete("/favoritos/:jugador_id", async (req, res) => {
  await pool.query("DELETE FROM favoritos WHERE jugador_id = $1", [req.params.jugador_id]);
  res.json({ mensaje: "Favorito eliminado" });
});

// Obtener jugadores más votados
app.get("/top-favoritos", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT nombre, equipo, COUNT(*) AS votos
      FROM favoritos
      GROUP BY nombre, equipo
      ORDER BY votos DESC
    `);
    res.json(result.rows);
  } catch (error) {
    console.error("❌ Error al obtener top favoritos:", error);
    res.status(500).json({ error: "Error al obtener top favoritos" });
  }
});

// Iniciar servidor
app.listen(3001, () => {
  console.log("🚀 Servidor backend corriendo en http://localhost:3001");
});