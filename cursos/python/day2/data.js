// Inserta el módulo del Día 2 en la estructura global `window.coursesData`.
window.coursesData = window.coursesData || [];
(function(){
  var module = {
    id: 2,
    day: "Día 2",
    title: "Funciones y colecciones (listas, tuplas, diccionarios, conjuntos)",
    status: "available",
      lessons: [
      {
        id: "l1-funciones",
        number: 1,
        title: "Funciones",
        theory: [
          {
            heading: "Introducción a las funciones",
            tag: "FUNCIONES",
            content: "Las funciones permiten organizar y modularizar el código. En Python son objetos de primera clase: pueden asignarse a variables, pasarse como argumentos y devolverse desde otras funciones.",
            code: "def saludar(nombre):\n    return f\"Hola, {nombre}!\"\n\nprint(saludar('María'))",
            callout: null
          },
          {
            heading: "Argumentos y retorno",
            tag: "ARGUMENTOS",
            content: "Soporta argumentos posicionales, por nombre, valores por defecto, *args y **kwargs. Una función puede devolver valores con return.",
            code: "def sumar(a, b=0):\n    return a + b\n\nprint(sumar(2, 3))  # 5",
            callout: null
          }
        ],
        exercises: [
          {
            id: "ex-func-1",
            title: "Escribir función es_par",
            description: "Escribe una función `es_par(n)` que devuelva True si n es par.",
            starter: "def es_par(n):\n    # tu código aquí\n",
            solution: "def es_par(n):\n    return n % 2 == 0",
            expectedOutput: "",
            hint: "Usá el operador módulo: n % 2 == 0"
          },
          {
            id: "ex-func-2",
            title: "Filtrar pares con función",
            description: "Escribe `filtrar_pares(lista)` que reciba una lista y devuelva otra con los números pares usando una función auxiliar.",
            starter: "def filtrar_pares(lista):\n    # tu código aquí\n",
            solution: "def filtrar_pares(lista):\n    return [x for x in lista if x % 2 == 0]",
            expectedOutput: "",
            hint: "Usá list comprehension o un bucle for con condición" 
          },
          {
            id: "ex-func-3",
            title: "Sumatoria (1..n)",
            description: "Escribe `sumatoria(n)` que calcule la suma de 1 a n. Prueba con n=5 (salida 15).",
            starter: "def sumatoria(n):\n    # tu código aquí\n\nprint(sumatoria(5))",
            solution: "def sumatoria(n):\n    s = 0\n    for i in range(1, n+1):\n        s += i\n    return s\n\nprint(sumatoria(5))",
            expectedOutput: "15",
            hint: "Usá un acumulador e `range(1, n+1)`"
          },
          {
            id: "ex-func-4",
            title: "Factorial (iterativo)",
            description: "Implementa `factorial(n)` de forma iterativa. Prueba con n=5 (resultado 120).",
            starter: "def factorial(n):\n    # tu código aquí\n\nprint(factorial(5))",
            solution: "def factorial(n):\n    res = 1\n    for i in range(2, n+1):\n        res *= i\n    return res\n\nprint(factorial(5))",
            expectedOutput: "120",
            hint: "Multiplica los números desde 2 hasta n"
          },
          {
            id: "ex-func-5",
            title: "N-ésimo Fibonacci (iterativo)",
            description: "Escribe `fibonacci(n)` que devuelva el n-ésimo término (0-index). Prueba con n=7 (resultado 13).",
            starter: "def fibonacci(n):\n    # tu código aquí\n\nprint(fibonacci(7))",
            solution: "def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a\n\nprint(fibonacci(7))",
            expectedOutput: "13",
            hint: "Usá dos variables y actualizalas en cada vuelta"
          }
        ]
      },
      {
        id: "l2-colecciones-1",
        number: 2,
        title: "Colecciones — Listas y Tuplas",
        theory: [
          {
            heading: "Listas",
            tag: "LISTAS",
            content: "Listas: secuencias ordenadas y mutables. Sintaxis: [1, 2, 3]. Métodos: append, pop, remove, extend, etc.",
            code: "mi_lista = [1, 2, 3]\nmi_lista.append(4)\nprint(mi_lista)",
            callout: null
          },
          {
            heading: "Tuplas",
            tag: "TUPLAS",
            content: "Tuplas: secuencias ordenadas e inmutables. Sintaxis: (1, 2, 3). Útiles cuando no queremos permitir modificaciones.",
            code: "mi_tupla = (1, 2, 3)\nprint(mi_tupla)",
            callout: null
          }
        ],
        exercises: [
          {
            id: "ex-list-1",
            title: "Cuadrados de una lista",
            description: "Dada una lista de números, devuelve una nueva lista con sus cuadrados.",
            starter: "nums = [1, 2, 3]\n# tu código aquí\n",
            solution: "nums = [1, 2, 3]\nsq = [x*x for x in nums]\nprint(sq)",
            expectedOutput: "[1, 4, 9]",
            hint: "Usá list comprehension: [x*x for x in nums]"
          },
          {
            id: "ex-list-2",
            title: "Agregar y eliminar elementos",
            description: "Dada una lista vacía, agregá 3 elementos y luego eliminá el segundo. Imprimí la lista resultante.",
            starter: "lst = []\n# tu código aquí\n",
            solution: "lst = []\nlst.append('a')\nlst.append('b')\nlst.append('c')\n# eliminar segundo\ndel lst[1]\nprint(lst)",
            expectedOutput: "['a', 'c']",
            hint: "Usá append() y del o pop()"
          },
          {
            id: "ex-list-3",
            title: "Slicing",
            description: "Dada la lista [0,1,2,3,4,5], devuelve una sublista con los elementos del índice 2 al 4 inclusive.",
            starter: "arr = [0,1,2,3,4,5]\n# tu código aquí\n",
            solution: "arr = [0,1,2,3,4,5]\nsub = arr[2:5]\nprint(sub)",
            expectedOutput: "[2, 3, 4]",
            hint: "Recuerda que slice end es no inclusivo: arr[inicio:fin]"
          },
          {
            id: "ex-list-4",
            title: "Lista a tupla",
            description: "Convierte la lista ['x','y','z'] en una tupla e imprimila.",
            starter: "lst = ['x','y','z']\n# tu código aquí\n",
            solution: "lst = ['x','y','z']\ntpl = tuple(lst)\nprint(tpl)",
            expectedOutput: "('x', 'y', 'z')",
            hint: "Usá tuple(lista)"
          },
          {
            id: "ex-list-5",
            title: "Filtrar mayores que 10",
            description: "Dada la lista [5,12,7,20,3], devuelve una lista con los valores > 10.",
            starter: "nums = [5,12,7,20,3]\n# tu código aquí\n",
            solution: "nums = [5,12,7,20,3]\nres = [x for x in nums if x > 10]\nprint(res)",
            expectedOutput: "[12, 20]",
            hint: "Usá list comprehension con condición" 
          }
        ]
      },
      {
        id: "l3-colecciones-2",
        number: 3,
        title: "Colecciones — Diccionarios y Sets",
        theory: [
          {
            heading: "Diccionarios",
            tag: "DICT",
            content: "Diccionarios: pares clave-valor. Sintaxis: { 'clave': valor }. Métodos: keys(), values(), items(), get().",
            code: "persona = {'nombre':'Ana', 'edad':30}\nprint(persona['nombre'])\nprint(persona.get('edad'))",
            callout: null
          },
          {
            heading: "Conjuntos (set)",
            tag: "SET",
            content: "Conjuntos: colecciones sin orden y sin duplicados. Operaciones: unión, intersección, diferencia.",
            code: "a = set([1,2,2,3])\nprint(a)  # {1,2,3}",
            callout: null
          }
        ],
        exercises: [
          {
            id: "ex-dict-1",
            title: "Contador de aprobados",
            description: "Dado un diccionario con nombres y notas, contá cuántos aprobaron (nota >= 6).",
            starter: "notas = {'Ana':8, 'Luis':5}\n# tu código aquí\n",
            solution: "notas = {'Ana':8, 'Luis':5}\naprobados = sum(1 for v in notas.values() if v >= 6)\nprint(aprobados)",
            expectedOutput: "1",
            hint: "Iterá por notas.values() y contá las >= 6"
          },
          {
            id: "ex-dict-2",
            title: "Actualizar y añadir clave",
            description: "Dado un diccionario `persona={'nombre':'Luz'}`, agrega la clave 'edad' con 29 y luego actualiza 'nombre' a 'Lucia'.",
            starter: "persona = {'nombre':'Luz'}\n# tu código aquí\n",
            solution: "persona = {'nombre':'Luz'}\npersona['edad'] = 29\npersona['nombre'] = 'Lucia'\nprint(persona)",
            expectedOutput: "{'nombre': 'Lucia', 'edad': 29}",
            hint: "Asigná con persona['clave'] = valor"
          },
          {
            id: "ex-dict-3",
            title: "Iterar items",
            description: "Dado `d={'a':1,'b':2}`, imprime cada par 'clave -> valor' en líneas separadas.",
            starter: "d = {'a':1,'b':2}\n# tu código aquí\n",
            solution: "d = {'a':1,'b':2}\nfor k, v in d.items():\n    print(k, '->', v)",
            expectedOutput: "a -> 1\nb -> 2",
            hint: "Usá d.items() para obtener pares (clave, valor)"
          },
          {
            id: "ex-dict-4",
            title: "Agrupar por categoría",
            description: "Dada la lista de tuplas [('Ana','A'),('Luis','B'),('Mia','A')], crea un diccionario que agrupe nombres por categoría.",
            starter: "data = [('Ana','A'),('Luis','B'),('Mia','A')]\n# tu código aquí\n",
            solution: "data = [('Ana','A'),('Luis','B'),('Mia','A')]\nres = {}\nfor nombre, cat in data:\n    res.setdefault(cat, []).append(nombre)\nprint(res)",
            expectedOutput: "{'A': ['Ana', 'Mia'], 'B': ['Luis']}",
            hint: "Usá setdefault o comprobá si la clave existe" 
          },
          {
            id: "ex-dict-5",
            title: "Eliminar duplicados",
            description: "Dada la lista [1,2,2,3,3,3], devuelve una lista sin duplicados (manteniendo el orden inicial).",
            starter: "lst = [1,2,2,3,3,3]\n# tu código aquí\n",
            solution: "lst = [1,2,2,3,3,3]\nseen = set()\nout = []\nfor x in lst:\n    if x not in seen:\n        seen.add(x)\n        out.append(x)\nprint(out)",
            expectedOutput: "[1, 2, 3]",
            hint: "Usá un set para rastrear vistos y construí una lista resultado"
          }
        ]
      }
    ],
    classActivities: [
      {
        id: "a1",
        difficulty: "Fácil",
        difficultyColor: "#22C55E",
        title: "Practicar funciones pequeñas",
        description: "En parejas: crear 5 funciones pequeñas (es_par, es_impar, sumar, multiplicar, saludo) y escribir ejemplos de uso.",
        timeEstimate: "10 minutos",
        objectives: [
          "Diseñar funciones pequeñas y reutilizables",
          "Practicar firma de funciones y valores de retorno"
        ]
      },
      {
        id: "a2",
        difficulty: "Intermedio",
        difficultyColor: "#F59E0B",
        title: "Mini-proyecto: gestión de lista",
        description: "En grupos: crear un pequeño menú que permita agregar, eliminar y mostrar elementos de una lista usando funciones separadas.",
        timeEstimate: "20 minutos",
        objectives: [
          "Separar lógica en funciones",
          "Manipular listas (append, remove, iteración)"
        ]
      },
      {
        id: "a3",
        difficulty: "Difícil",
        difficultyColor: "#EF4444",
        title: "Integrador: notas y diccionarios",
        description: "Crear un programa que guarde alumnos y notas en un diccionario, calcule promedios y devuelva un listado ordenado de aprobados y reprobados.",
        timeEstimate: "30 minutos",
        objectives: [
          "Trabajar con diccionarios y listas",
          "Aplicar bucles y condicionales",
          "Generar resúmenes agregados (promedios, contadores)"
        ]
      }
    ],
    homework: {
      title: "Tarea: Administrador de alumnos (Funciones + Colecciones)",
      description: "Creá un script Python que: 1) lea una lista de alumnos con 3 notas cada uno; 2) calcule el promedio por alumno usando una función; 3) genere un diccionario con nombre -> promedio; 4) imprima la lista de aprobados (>=6) y el promedio general.",
      deliverable: "archivo tarea_dia2.py con funciones documentadas y ejemplo de ejecución",
      dueDate: "Para la próxima clase",
      extraChallenge: "Añadí la opción de exportar el diccionario a JSON usando el módulo json"
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
