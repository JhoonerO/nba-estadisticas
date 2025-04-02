NBA Estadísticas
(Aplicación web de estadísticas NBA con React y PostgreSQL)

Descripción

Aplicación web construida con React para consultar estadísticas de la NBA, utilizando la API balldontlie.io y con integración de base de datos PostgreSQL para guardar favoritos.

🚀 Funcionalidades

✔ Ver lista completa de jugadores NBA con búsqueda por nombre
✔ Explorar equipos organizados por conferencia (Este/Oeste) y división
✔ Resultados en vivo de partidos del día
✔ Sistema de favoritos (almacenados en PostgreSQL)
✔ Filtrado de jugadores por equipo
✔ Soporte básico para usuarios globales

🛠️ Tecnologías

Área	Tecnologías
Frontend	React
API Externa	balldontlie.io
Backend	Node.js + Express
Base de datos	PostgreSQL
Control código	Git + GitHub

🧪 Instalación local

Clonar repositorio:

bash
Copy
git clone https://github.com/JhoonerO/nba-estadisticas.git
cd nba-estadisticas

Instalar dependencias del frontend:

bash
Copy
npm install

Configurar backend:

bash
Copy
cd backend
npm install

# Editar archivo backend/index.js con tus credenciales PostgreSQL

node index.js
Iniciar aplicación:

bash
Copy
cd ..
npm start

📦 Estructura de la base de datos

Tabla favoritos:

Campo	            Tipo	            Descripción
id	              SERIAL (PK)          ID autogenerado
jugador_id	      INTEGER	           ID del jugador en API
nombre	          VARCHAR	           Nombre del jugador
equipo	          VARCHAR	           Nombre del equipo
usuario	          VARCHAR	           Identificador usuario

🙋‍♂️ Autor

JhoonerO

[GitHub Profile](https://github.com/JhoonerO)
