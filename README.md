NBA Estadísticas App
Aplicación web interactiva construida con React, Express y PostgreSQL que permite a los usuarios explorar estadísticas de la NBA, consultar jugadores, ver partidos y votar por sus jugadores favoritos.
🚀 Funcionalidades
✔ Ver lista completa de jugadores NBA con búsqueda por nombre.
✔ Explorar equipos organizados por conferencia (Este/Oeste) y división.
✔ Resultados en vivo de partidos del día.
✔ Sistema de favoritos donde puedes guardar jugadores y ver el ranking de los más votados.
✔ Filtrado de jugadores por equipo.
✔ Soporte para cambiar entre modo claro y oscuro.
✔ Experiencia responsive que se adapta a dispositivos móviles y de escritorio.

🛠️ Tecnologías
Área | Tecnologías
------|------------
Frontend | React
API Externa | balldontlie.io
Backend | Node.js + Express
Base de datos | PostgreSQL
Control código | Git + GitHub
🧪 Instalación local
1. Clona el repositorio:
```bash
git clone https://github.com/JhoonerO/nba-estadisticas.git
cd nba-estadisticas
```

2. Instalar dependencias del frontend:
```bash
npm install
```

3. Configura el backend:
```bash
cd backend
npm install
```

Edita el archivo `backend/index.js` con tus credenciales PostgreSQL.

4. Inicia el backend:
```bash
node index.js
```

5. Inicia la aplicación:
```bash
cd ..
npm start
```

📦 Estructura de la base de datos
La base de datos cuenta con la tabla `favoritos` que almacena los jugadores favoritos de los usuarios. Esta tabla tiene la siguiente estructura:

Campo / Tipo / Descripción
id / SERIAL (PK) / ID autogenerado
jugador_id / INTEGER / ID del jugador en API
nombre / VARCHAR / Nombre del jugador
equipo / VARCHAR / Nombre del equipo
usuario / VARCHAR / Identificador del usuario

🔗 Uso de la API
La API utilizada es la de `balldontlie.io`, que proporciona datos sobre jugadores, equipos y partidos de la NBA. Los jugadores y equipos se obtienen de manera aleatoria o por búsqueda, y se almacenan en la base de datos para marcar a los favoritos. Además, los partidos se obtienen en tiempo real y se pueden filtrar por fechas, con la posibilidad de ver los partidos de ayer o mañana.
🌙 Modo Claro/Oscuro
La aplicación incluye un botón para alternar entre el modo claro y oscuro. Esto proporciona una experiencia personalizada para los usuarios, permitiéndoles elegir la interfaz que más les guste. Los cambios en el tema se mantienen incluso después de recargar la página.
🙋‍♂️ Autor
JhoonerO
[GitHub Profile](https://github.com/JhoonerO)
