# DevStudy — Plataforma Educativa Interactiva

## Descripción

Plataforma de clases de repaso construida con **HTML, CSS y JavaScript nativo**. Sin frameworks ni herramientas de build. Cada curso tiene días organizados en carpetas independientes con toda la información autocontenida.

---

## Arquitectura de carpetas

```
├── index.html                  ← Punto de entrada
├── styles.css                  ← Estilos (tema oscuro)
├── app.js                      ← Motor de la app (estado, render, eventos)
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
- Cada ejercicio tiene: `title`, `description`, `starter`, `solution`, `hint`.
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
          exercises: [{ id, title, description, starter, solution, hint }]
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

Abrí `index.html` en el navegador. No necesita servidor, build ni instalación.

```
# Opción 1: doble clic en index.html

# Opción 2: desde la terminal
start index.html
```

---

## Stack

- **HTML5** — Estructura semántica
- **CSS3** — Tema oscuro (#060B18), layout con Flexbox
- **JavaScript nativo** — Sin frameworks, sin dependencias, sin build tools
- **GitHub Pages** — Deploy directo desde la rama main
