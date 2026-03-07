# DevStudy — Plataforma Educativa Interactiva

## Descripción

Plataforma de clases de repaso construida con **React + Vite**. Cada curso tiene días organizados en carpetas independientes con toda la información autocontenida.

---

## Arquitectura de carpetas

```
src/
├── cursos/
│   ├── python/
│   │   ├── day1/
│   │   │   └── LearningPlatform.jsx
│   │   ├── day2/
│   │   │   └── LearningPlatform.jsx
│   │   ├── day3/
│   │   │   └── LearningPlatform.jsx
│   │   └── day4/
│   │       └── LearningPlatform.jsx
│   ├── html/
│   │   ├── day1/
│   │   │   └── LearningPlatform.jsx
│   │   ├── day2/
│   │   │   └── LearningPlatform.jsx
│   │   ├── day3/
│   │   │   └── LearningPlatform.jsx
│   │   └── day4/
│   │       └── LearningPlatform.jsx
│   ├── javascript/
│   │   ├── day1/
│   │   │   └── LearningPlatform.jsx
│   │   ├── day2/
│   │   │   └── LearningPlatform.jsx
│   │   ├── day3/
│   │   │   └── LearningPlatform.jsx
│   │   └── day4/
│   │       └── LearningPlatform.jsx
│   └── bd/
│       ├── day1/
│       │   └── LearningPlatform.jsx
│       ├── day2/
│       │   └── LearningPlatform.jsx
│       ├── day3/
│       │   └── LearningPlatform.jsx
│       └── day4/
│           └── LearningPlatform.jsx
├── components/
│   └── Navbar.jsx
├── App.jsx
├── index.jsx
└── index.css
```

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

Cada `LearningPlatform.jsx` de un día contiene **todo autocontenido**:

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

## Ejecución

```bash
npm install
npm run dev
```

El servidor se abre en `http://localhost:5173/` (o el siguiente puerto disponible).

---

## Stack

- **React 18** — Componentes funcionales con hooks
- **Vite** — Build tool y dev server con HMR
- **Inline CSS** — Estilos embebidos, tema oscuro (#060B18)
- **Sin dependencias externas** — Solo react y react-dom
