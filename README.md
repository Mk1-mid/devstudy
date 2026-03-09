# DevStudy — Plataforma Educativa Interactiva

## Descripción

Plataforma de clases de repaso construida con **HTML, CSS y JavaScript nativo**. Incluye un servidor Node.js opcional que ejecuta **Python real** para validar ejercicios. Sin frameworks de frontend ni herramientas de build. Cada curso tiene días organizados en carpetas independientes con toda la información autocontenida.

---

## Arquitectura de carpetas

```
├── index.html                  ← Punto de entrada
├── styles.css                  ← Estilos (tema oscuro)
├── app.js                      ← Motor de la app (estado, render, eventos, dual runner)
├── server.js                   ← Servidor Node.js (ejecución Python real)
├── package.json                ← Dependencias Node.js (Express)
├── cursos/
│   ├── python/
│   │   ├── day1/
│   │   │   └── data.js         ← Contenido del Día 1 (lecciones, ejercicios, actividades, tarea)
│   │   ├── day2/
│   │   ├── day3/
│   │   └── day4/
│   ├── html/
│   │   ├── day1/
│   │   │   └── data.js
│   │   ├── day2/
│   │   ├── day3/
│   │   └── day4/
│   ├── javascript/
│   │   ├── day1/
│   │   │   └── data.js
│   │   ├── day2/
│   │   ├── day3/
│   │   └── day4/
│   └── bd/
│       ├── day1/
│       │   └── data.js
│       ├── day2/
│       ├── day3/
│       └── day4/
└── README.md
```

Cada `data.js` hace `push` al array global `window.coursesData`. Se cargan con `<script>` en `index.html` **antes** de `app.js`.

---

## 4 Cursos (Módulos)

| #  | Curso          | Icono | Color   | Días |
|----|----------------|-------|---------|------|
| 1  | Python         | 🐍    | #3B82F6 |  4   |
| 2  | HTML & CSS     | 🎨    | #F97316 |  4   |
| 3  | JavaScript     | ⚡    | #EAB308 |  4   |
| 4  | Bases de Datos | 🗄️    | #8B5CF6 |  4   |

Cada curso tiene **4 días** (day1, day2, day3, day4).

---

## Estructura de contenido por día

Cada `data.js` de un día contiene **todo autocontenido**:

### Lecciones (Teoría + Ejercicios)
- Cada día tiene **3 lecciones** con teoría progresiva.
- Cada lección tiene secciones de teoría (heading, tag, content, code, callout).

### 15 Ejercicios prácticos
- Distribuidos entre las 3 lecciones (~5 por lección).
- **Dificultad progresiva** dentro de cada lección.
- Cada ejercicio tiene: `title`, `description`, `starter`, `solution`, `expectedOutput`, `hint`.
- **Validación por output**: el sistema compara la salida del programa del alumno con el output esperado, no el código fuente. Esto permite que el alumno use comentarios, espacios distintos, nombres de variables alternativos, etc.
- Solo usan conceptos explicados en la teoría del día (no se adelantan temas).

| Lección | Ejercicios | Nivel           |
|---------|-----------|-----------------|
| L1      | 5         | Básico → Medio  |
| L2      | 6         | Medio → Avanzado|
| L3      | 4         | Avanzado → Integrador |

### 3 Actividades de clase
- Con dificultad diferenciada y colores visuales.

| #  | Dificultad  | Color   | Tiempo estimado |
|----|-------------|---------|-----------------|
| 1  | 🟢 Fácil    | #22C55E | ~10 min         |
| 2  | 🟡 Intermedio| #F59E0B | ~20 min         |
| 3  | 🔴 Difícil  | #EF4444 | ~30 min         |

Cada actividad tiene: `title`, `difficulty`, `description`, `timeEstimate`, `objectives[]`.

### 1 Tarea
- Un trabajo integrador para entregar en la próxima clase.
- Tiene: `title`, `description`, `deliverable`, `dueDate`, `extraChallenge`.

---

## Resumen por día

```
┌─────────────────────────────────────────┐
│              DÍA X                      │
├─────────────────────────────────────────┤
│  📖 Lección 1    → 5 teorías + 5 ejs   │
│  📖 Lección 2    → 5 teorías + 6 ejs   │
│  📖 Lección 3    → 5 teorías + 4 ejs   │
│                                         │
│  👥 Actividad 1  → 🟢 Fácil            │
│  👥 Actividad 2  → 🟡 Intermedio       │
│  👥 Actividad 3  → 🔴 Difícil          │
│                                         │
│  📝 Tarea        → 1 trabajo integrador │
│                                         │
│  TOTAL: 15 ejercicios + 3 actividades + │
│         1 tarea = 19 ítems prácticos    │
└─────────────────────────────────────────┘
```

---

## Modelo de datos

Cada `data.js` ejecuta `window.coursesData.push({ ... })` con esta estructura:

```javascript
{
  id: "python",
  name: "Python",
  icon: "🐍",
  color: "#3B82F6",
  modules: [
    {
      id: 1,
      day: "Día 1",
      title: "Fundamentos de algoritmia y programación",
      status: "available",          // "available" | "coming_soon"
      lessons: [
        {
          id: "l1",
          number: 1,
          title: "Mensajes, variables y operaciones",
          theory: [{ heading, tag, content, code, callout }],
          exercises: [{ id, title, description, starter, solution, expectedOutput, hint }]
        }
      ],
      classActivities: [
        {
          id: "a1",
          difficulty: "Fácil",      // "Fácil" | "Intermedio" | "Difícil"
          difficultyColor: "#22C55E",
          title: "...",
          description: "...",
          timeEstimate: "10 minutos",
          objectives: ["..."]
        }
      ],
      homework: {
        title: "...",
        description: "...",
        deliverable: "...",
        dueDate: "...",
        extraChallenge: "..."
      }
    }
  ]
}
```

---

## Cómo agregar un nuevo día

1. Crear el archivo `cursos/{curso}/dayN/data.js`.
2. Copiar la estructura del modelo de datos y completar lecciones, ejercicios, actividades y tarea.
3. Agregar la línea `<script src="cursos/{curso}/dayN/data.js"></script>` en `index.html` antes de `<script src="app.js">`.

---

## Ejecución

### Modo 1: Con servidor Node.js (recomendado — Python real)

Requiere **Node.js** y **Python** instalados en el sistema.

```bash
# Solo la primera vez: instalar dependencias
npm install

# Iniciar el servidor
npm start
```

Abrir **http://localhost:3000** en el navegador. Los ejercicios se ejecutan con **Python real** (🐍 Python aparece en el output).

**Protecciones del servidor:**
- ⏱️ Timeout de 5 segundos (protege contra bucles infinitos)
- 📄 Ejecución vía archivos temporales (sin inyección de comandos)
- 📏 Límite de 10KB por código enviado
- 🐍 Errores de Python reales (ej: `SyntaxError: expected ':'`)

### Modo 2: Sin servidor (GitHub Pages / estático)

```bash
# Opción 1: doble clic en index.html

# Opción 2: desde la terminal
start index.html
```

Funciona sin instalar nada. Los ejercicios usan un **emulador JS** como fallback (⚡ Emulador JS aparece en el output). La app detecta automáticamente qué modo usar.

### Detección automática

El frontend intenta conectar al backend (`/api/execute`). Si el servidor no responde, cae silenciosamente al emulador JavaScript. No requiere configuración.

| Modo | Badge en output | Requisitos | Limitaciones |
|------|----------------|------------|--------------|
| 🐍 Python | `🐍 Python` | Node.js + Python | Ninguna |
| ⚡ Emulador | `⚡ Emulador JS` | Ninguno | Subset de Python emulado en JS |

---

## Validación de ejercicios

Los ejercicios se validan **comparando el output**, no el código fuente. Esto permite:

- ✅ Comentarios (`# esto es un comentario`)
- ✅ Espacios diferentes (`x=1` vs `x = 1`)
- ✅ Variables con otros nombres (`resultado` vs `promedio`)
- ✅ Cualquier forma válida de resolver el problema

El sistema normaliza la salida (trim, ignora espacios extras por línea) antes de comparar con el `expectedOutput` definido en el ejercicio.

| Resultado | Visual |
|-----------|--------|
| ✓ Correcto | Texto verde + badge "✓ CORRECTO" |
| ✗ Incorrecto | Texto rojo + badge "✗ INCORRECTO" |
| Error de sintaxis | Texto rojo con el error de Python |

---

## Stack

- **HTML5** — Estructura semántica
- **CSS3** — Tema oscuro (#060B18), layout con Flexbox
- **JavaScript nativo** — Sin frameworks, sin dependencias de frontend, sin build tools
- **Node.js + Express** — Servidor local para ejecución de Python real (opcional)
- **Python** — Ejecución real de ejercicios cuando el servidor está activo
- **GitHub Pages** — Deploy directo desde la rama main (modo emulador JS)
