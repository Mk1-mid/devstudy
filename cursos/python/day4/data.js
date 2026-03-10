// Inserta el módulo del Día 4 en la estructura global `window.coursesData`.
window.coursesData = window.coursesData || [];
(function(){
  var module = {
    id: 4,
    day: "Día 4",
    title: "Repaso integral + OOP + CRUD con JSON",
    status: "available",
    lessons: [
      {
        id: "l1-repaso",
        number: 1,
        title: "Repaso mínimo de Días 1, 2 y 3",
        theory: [
          {
            heading: "Fundamentos clave",
            tag: "REPASO",
            content: "Repaso breve de variables, tipos, operadores, condicionales, bucles, funciones, colecciones y manejo de errores para consolidar base antes de integrar OOP + JSON.",
            code: "x = 10\nif x > 5:\n    print('Mayor a 5')\n\nnums = [1,2,3]\nprint(sum(nums))",
            callout: "La meta del repaso es recordar patrones, no memorizar texto."
          },
          {
            heading: "Funciones y estructuras",
            tag: "FUNCIONES",
            content: "Funciones pequeñas + colecciones adecuadas (lista, tupla, diccionario, set) simplifican la solución de problemas.",
            code: "def promedio(notas):\n    return sum(notas) / len(notas)\n\nprint(promedio([7,8,9]))",
            callout: null
          },
          {
            heading: "Validación y errores",
            tag: "ERRORES",
            content: "Siempre valida entradas de usuario y de archivos. Usa `try/except` con errores específicos para robustez.",
            code: "try:\n    n = int('abc')\nexcept ValueError:\n    print('entrada inválida')",
            callout: "Código robusto = previene caídas inesperadas."
          }
        ],
        exercises: [
          { id: "d4-t1", title: "Tema 1: Variables y tipos", description: "Declara `nombre`, `edad`, `altura`, `activo` e imprime sus tipos.", starter: "# tu código", solution: "nombre='Ana'\nedad=20\naltura=1.7\nactivo=True\nprint(type(nombre), type(edad), type(altura), type(activo))", expectedOutput: "<class 'str'> <class 'int'> <class 'float'> <class 'bool'>", hint: "Usá type(...)" },
          { id: "d4-t2", title: "Tema 2: Operadores", description: "Con `a=10`, `b=3` imprime suma, división entera y `a>b and b>0`.", starter: "a=10\nb=3\n# tu código", solution: "a=10\nb=3\nprint(a+b)\nprint(a//b)\nprint(a>b and b>0)", expectedOutput: "13\n3\nTrue", hint: "Usá +, // y and" },
          { id: "d4-t3", title: "Tema 3: Control de flujo", description: "Imprime pares del 1 al 6 usando `continue`.", starter: "# tu código", solution: "for i in range(1,7):\n    if i % 2 != 0:\n        continue\n    print(i)", expectedOutput: "2\n4\n6", hint: "Salta impares con continue" },
          { id: "d4-t4", title: "Tema 4: Funciones", description: "Define `es_mayor(edad)` que retorne True si edad >= 18.", starter: "def es_mayor(edad):\n    # tu código", solution: "def es_mayor(edad):\n    return edad >= 18\n\nprint(es_mayor(21))", expectedOutput: "True", hint: "Return booleana" },
          { id: "d4-t5", title: "Tema 5: Lambda", description: "Crea una lambda para triplicar y úsala con 5.", starter: "# tu código", solution: "triple = lambda x: x * 3\nprint(triple(5))", expectedOutput: "15", hint: "lambda x: ..." }
        ]
      },
      {
        id: "l2-oop",
        number: 2,
        title: "Teoría nueva: OOP",
        theory: [
          {
            heading: "Clase, objeto, constructor",
            tag: "OOP",
            content: "Una clase define atributos y comportamientos. Cada objeto es una instancia concreta con su propio estado.",
            code: "class Alumno:\n    def __init__(self, nombre, nota):\n        self.nombre = nombre\n        self.nota = nota\n\na = Alumno('Ana', 8)\nprint(a.nombre)",
            callout: "`self` es la referencia al objeto actual."
          },
          {
            heading: "Métodos y encapsulación simple",
            tag: "METODOS",
            content: "Los métodos encapsulan lógica asociada a la entidad y hacen el código más mantenible.",
            code: "class Alumno:\n    def __init__(self, nombre, nota):\n        self.nombre = nombre\n        self.nota = nota\n\n    def aprobo(self):\n        return self.nota >= 6",
            callout: null
          },
          {
            heading: "Diseño para integrar CRUD",
            tag: "DISENO",
            content: "Separá responsabilidades: entidad (`Alumno`) y repositorio (`RepoJSON`). Esto facilita evolucionar a SQL en otro módulo.",
            code: "# Entidad: Alumno\n# Persistencia: RepoJSON\n# Flujo app: menú o funciones de servicio",
            callout: "OOP + persistencia te acerca a escenarios reales."
          }
        ],
        exercises: [
          { id: "d4-t6", title: "Tema 6: Listas y tuplas", description: "Convierte una lista de notas a tupla y calcula promedio.", starter: "notas=[7,8,9]\n# tu código", solution: "notas=[7,8,9]\nt=tuple(notas)\nprint(sum(t)/len(t))", expectedOutput: "8.0", hint: "tuple + sum/len" },
          { id: "d4-t7", title: "Tema 7: Diccionarios", description: "Crea `alumno={'nombre':'Mia','nota':9}` e imprime `nombre -> nota`.", starter: "# tu código", solution: "alumno={'nombre':'Mia','nota':9}\nprint(alumno['nombre'], '->', alumno['nota'])", expectedOutput: "Mia -> 9", hint: "Acceso por clave" },
          { id: "d4-t8", title: "Tema 8: Manejo de errores", description: "Convierte `txt='abc'` a int capturando `ValueError`.", starter: "txt='abc'\n# tu código", solution: "txt='abc'\ntry:\n    print(int(txt))\nexcept ValueError:\n    print('entrada inválida')", expectedOutput: "entrada inválida", hint: "try/except ValueError" },
          { id: "d4-t9", title: "Tema 9: OOP básico", description: "Crea clase `Producto` con método `con_iva()` (21%).", starter: "# tu código", solution: "class Producto:\n    def __init__(self, nombre, precio):\n        self.nombre = nombre\n        self.precio = precio\n\n    def con_iva(self):\n        return self.precio * 1.21\n\np = Producto('Teclado', 100)\nprint(round(p.con_iva(), 2))", expectedOutput: "121.0", hint: "precio * 1.21" }
        ]
      },
      {
        id: "l3-json-crud",
        number: 3,
        title: "Teoría nueva: JSON y CRUD integrado",
        theory: [
          {
            heading: "JSON y métodos",
            tag: "JSON",
            content: "Métodos principales: `json.dump`/`json.load` (archivo), `json.dumps`/`json.loads` (string).",
            code: "import json\narr=[{'id':1,'nombre':'Ana'}]\nwith open('datos.json','w',encoding='utf-8') as f:\n    json.dump(arr,f,ensure_ascii=False,indent=2)\nwith open('datos.json','r',encoding='utf-8') as f:\n    print(json.load(f))",
            callout: "Usa `indent` para legibilidad y `ensure_ascii=False` para tildes."
          },
          {
            heading: "CRUD con persistencia en JSON",
            tag: "CRUD",
            content: "Implementa métodos `create`, `read_all`, `update`, `delete` para persistir registros sin SQL.",
            code: "class RepoJSON:\n    def __init__(self, path):\n        self.path = path\n\n    def create(self, item):\n        pass\n\n    def read_all(self):\n        pass\n\n    def update(self, id_, cambios):\n        pass\n\n    def delete(self, id_):\n        pass",
            callout: "Este CRUD es la base para pasar luego a SQL (módulo 4)."
          },
          {
            heading: "Cierre integrador",
            tag: "CIERRE",
            content: "Con este día integras todos los temas del módulo 1 en un solo enfoque práctico.",
            code: "# D1 + D2 + D3 + D4 = solución completa",
            callout: "Objetivo final: resolver un caso real pequeño de punta a punta."
          }
        ],
        exercises: [
          { id: "d4-t10", title: "Tema 10: JSON", description: "Guarda una lista en `datos.json` y vuelve a leerla.", starter: "import json\n# tu código", solution: "import json\narr=[{'id':1,'n':'Ana'}]\nwith open('datos.json','w',encoding='utf-8') as f:\n    json.dump(arr,f,ensure_ascii=False,indent=2)\nwith open('datos.json','r',encoding='utf-8') as f:\n    print(json.load(f))", expectedOutput: "[{'id': 1, 'n': 'Ana'}]", hint: "json.dump/load" },
          { id: "d4-t11", title: "Tema 11: CRUD integrado", description: "Implementa crear y listar en una estructura tipo repositorio (lista de diccionarios).", starter: "# tu código", solution: "data=[]\n\ndef create(item):\n    data.append(item)\n\ndef read_all():\n    return data\n\ncreate({'id':1,'nombre':'Ana'})\nprint(read_all())", expectedOutput: "[{'id': 1, 'nombre': 'Ana'}]", hint: "Empieza por create y read_all" }
        ]
      }
    ],
    classActivities: [
      {
        id: "a1",
        difficulty: "Fácil",
        difficultyColor: "#22C55E",
        title: "Actividad de repaso Día 1",
        description: "Resolver mini-reto de variables, operadores y condicionales en 20 minutos.",
        timeEstimate: "20 minutos",
        objectives: ["Refrescar sintaxis básica", "Aplicar operadores y decisiones"]
      },
      {
        id: "a2",
        difficulty: "Intermedio",
        difficultyColor: "#F59E0B",
        title: "Actividad de repaso Día 2",
        description: "Resolver mini-reto con funciones y colecciones para procesar notas de alumnos.",
        timeEstimate: "25 minutos",
        objectives: ["Diseñar funciones reutilizables", "Manipular listas y diccionarios"]
      },
      {
        id: "a3",
        difficulty: "Intermedio",
        difficultyColor: "#F59E0B",
        title: "Actividad de repaso Día 3",
        description: "Resolver mini-reto de lectura/escritura de JSON con manejo de errores.",
        timeEstimate: "25 minutos",
        objectives: ["Persistir datos en archivo", "Validar y capturar errores"]
      },
      {
        id: "a4",
        difficulty: "Difícil",
        difficultyColor: "#EF4444",
        title: "Actividad del Día 4",
        description: "Construir una clase con métodos CRUD básicos conectada a un archivo JSON.",
        timeEstimate: "35 minutos",
        objectives: ["Aplicar OOP", "Integrar CRUD con persistencia JSON"]
      }
    ],
    homework: {
      title: "Tarea final integradora del Módulo 1",
      description: "Construye una app de consola para gestionar estudiantes: usa OOP (`class Estudiante` + `class RepoJSON`), implementa CRUD completo en JSON, valida entradas y maneja errores. Debe incluir menú y reporte final de aprobados/reprobados.",
      deliverable: "archivo tarea_final_modulo1.py + datos.json de ejemplo",
      dueDate: "Próxima clase",
      extraChallenge: "Agregar búsqueda por nombre y exportar resumen en un segundo JSON (reporte.json)."
    }
  };

  var course = (window.coursesData.find && window.coursesData.find(function(x){ return x.id === 'python'; }));
  if (course) {
    course.modules.push(module);
  } else {
    window.coursesData.push({
      id: 'python',
      name: 'Python',
      icon: '\u{1F40D}',
      color: '#3B82F6',
      accent: '#60A5FA',
      modules: [module]
    });
  }
})();
