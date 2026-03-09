// Inserta el módulo del Día 3 en la estructura global `window.coursesData`.
window.coursesData = window.coursesData || [];
(function(){
  var module = {
    var module = {
      id: 3,
      day: "Día 3",
      title: "Manejo de Archivos",
    lessons: [
      lessons: [
        {
          id: "l1-modulos-excepciones",
          number: 1,
          title: "Módulos, librerías y manejo de excepciones",
          {
            {
              heading: "Módulos y librerías",
              tag: "MODULOS",
              content: "Organiza código en módulos y paquetes; usa `import modulo` o `from modulo import nombre`. Evita `from modulo import *`. Aprovecha librerías estándar y de terceros para no reinventar la rueda.",
              code: "# importar módulo\nimport math\nprint(math.sqrt(16))\n# importar nombre explícito\nfrom math import sqrt\nprint(sqrt(25))",
              callout: "💡 Documenta la API pública de tus módulos en `__all__` o en `__init__.py` cuando corresponda."
            },
            {
              heading: "Categorías de librerías más utilizadas",
              tag: "LIBRERIAS",
              content: "Ejemplos de librerías organizadas por categoría para saber cuál usar según la necesidad.",
              code: "# 1. Librerías estándar: incluidas en Python\n# math, random, datetime, os, sys, re, json, csv, unittest, sqlite3\n\n# 2. Ciencia de datos y matemáticas:\n# NumPy, Pandas, Matplotlib, Seaborn, SciPy, Statsmodels\n\n# 3. Machine Learning / IA:\n# scikit-learn, TensorFlow, PyTorch, Keras, XGBoost, LightGBM\n\n# 4. Desarrollo web:\n# Flask, Django, FastAPI, Requests, BeautifulSoup, Scrapy\n\n# 5. Bases de datos (conectores):\n# sqlite3 (estándar), psycopg2 (PostgreSQL), mysql-connector-python, PyMySQL\n",
              callout: "Hacer clic en botones o enlaces (UI) puede mostrar detalles de cada librería en la interfaz." 
            },
            {
              heading: "Uso práctico: importar y alias",
              tag: "IMPORTS_PRACTICOS",
              content: "Formas comunes de importar módulos y elementos: `import math`, `from math import sqrt, pow`, `import math as m`. Cualquier archivo `.py` puede ser usado como módulo si está en el path o en el mismo directorio.",
              code: "import math\nfrom math import sqrt, pow\nimport math as m\n\n# usar alias\nprint(m.sqrt(9))\nprint(sqrt(16))",
              callout: null
            },
            {
              heading: "¿Qué es una excepción?",
              tag: "EXCEPCIONES",
              content: "Las excepciones son eventos que alteran el flujo normal de ejecución cuando ocurre un error. Se manejan con `try/except/else/finally` y permiten controlar fallos sin detener el programa.",
              code: "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('No se puede dividir por cero')\nexcept Exception as e:\n    print('Error:', e)\nelse:\n    print('Todo bien')\nfinally:\n    print('Esto siempre se ejecuta')",
              callout: "💡 Usa excepciones específicas antes que `Exception` para evitar ocultar errores inesperados."
            },
            {
              heading: "Resumen: Manejo de excepciones",
              tag: "EXC_RESUMEN",
              content: "Una excepción ocurre cuando algo sale mal (división por cero, conversión inválida, I/O). Usa `try/except` para capturarlas y mantener el programa vivo. Documenta qué excepciones pueden salir y usa `finally` o `with` para liberar recursos.",
              code: "try:\n    n = int('a')\nexcept ValueError as e:\n    print('Entrada inválida:', e)\nfinally:\n    print('Resultado: se manejó la excepción')",
              callout: "Conclusión: dominar módulos y excepciones hace que tu código sea más reutilizable y robusto."
            },
            {
              heading: "Lanzar excepciones y buenas prácticas",
              tag: "RAISE",
              content: "Usa `raise` para indicar condiciones de error y crea excepciones personalizadas heredando de `Exception`. Limpia recursos con `finally` o context managers (`with`). No uses excepciones para el flujo normal.",
              code: "def dividir(a, b):\n    if b == 0:\n        raise ValueError('b no puede ser 0')\n    return a / b\n\nclass MiError(Exception):\n    pass\n\ntry:\n    dividir(1, 0)\nexcept ValueError as e:\n    print('Valor inválido:', e)",
              callout: null
            }
          ],
          exercises: [
            { id: "ex-mod-1", title: "Crear módulo simple", description: "Crea `mi_mod.py` con una función `saluda()` y úsala desde otro script.", starter: "# mi_mod.py\n# main.py\n", solution: "# mi_mod.py\ndef saluda():\n    return 'hola'\n# main.py\nfrom mi_mod import saluda\nprint(saluda())", expectedOutput: "hola", hint: "Colocar ambos archivos en mismo directorio" },
            { id: "ex-mod-2", title: "Capturar ZeroDivisionError", description: "Crea un bloque `try` que intente dividir 10 entre 0 y capture `ZeroDivisionError`, imprimiendo 'División inválida'.", starter: "# tu código aquí", solution: "try:\n    10/0\nexcept ZeroDivisionError:\n    print('División inválida')", expectedOutput: "División inválida", hint: "Usá try/except con ZeroDivisionError" },
            { id: "ex-mod-3", title: "Raise ValueError", description: "Escribe `validar_edad(age)` que lance `ValueError('edad negativa')` si age < 0.", starter: "def validar_edad(age):\n    # tu código\n", solution: "def validar_edad(age):\n    if age < 0:\n        raise ValueError('edad negativa')\n    return True", expectedOutput: "", hint: "Usá raise ValueError(...)" },
            { id: "ex-mod-4", title: "Manejo genérico con mensaje", description: "Captura cualquier excepción y muestra 'Error detectado' seguido del tipo de excepción.", starter: "# tu código aquí", solution: "try:\n    x = int('a')\nexcept Exception as e:\n    print('Error detectado:', type(e).__name__)", expectedOutput: "Error detectado: ValueError", hint: "Usá Exception como captura genérica y type(e).__name__" },
            { id: "ex-mod-5", title: "Crear excepción custom", description: "Define `class SaltoError(Exception): pass` y lanza esa excepción desde una función.", starter: "# tu código aquí", solution: "class SaltoError(Exception):\n    pass\n\ndef f():\n    raise SaltoError('oops')\n\ntry:\n    f()\nexcept SaltoError as e:\n    print('Capturado', e)", expectedOutput: "Capturado oops", hint: "Hereda de Exception" }
          ]
        },
        {
          id: "l2-crud",
          number: 2,
          title: "CRUD en Python con Archivos CSV y JSON",
          { heading: "Lectura y escritura básica", tag: "I/O", content: "Abrir archivos con `open()` y gestionar con `with` para asegurar cierre automático. Modos: 'r', 'w', 'a', 'rb', 'wb'.", code: "# Escribir\nwith open('salida.txt','w',encoding='utf-8') as f:\n    f.write('hola\n')\n# Leer\nwith open('salida.txt','r',encoding='utf-8') as f:\n    print(f.read())", callout: "💡 `with` asegura que el archivo se cierre aunque ocurra una excepción." },
            { heading: "Operaciones CRUD con CSV/JSON", tag: "CRUD", content: "Aprenderás a crear, leer, actualizar y eliminar registros persistidos en CSV y JSON. Usa `csv.DictReader/DictWriter` para CSV y `json.load/dump` para JSON.", code: "import csv, json\n# ejemplo rápido: leer CSV y escribir JSON\nrows = []\nwith open('datos.csv','r',encoding='utf-8') as f:\n    reader = csv.DictReader(f)\n    for r in reader:\n        rows.append(r)\nwith open('datos.json','w',encoding='utf-8') as f:\n    json.dump(rows, f, ensure_ascii=False, indent=2)", callout: "💡 Mantén copias de seguridad antes de operaciones `w` para no perder datos." },
            { heading: "Buenas prácticas en CRUD", tag: "PRACTICAS", content: "Evita sobrescribir datos sin copia; valida entradas; maneja excepciones al parsear filas; procesa archivos grandes línea a línea para ahorrar memoria.", code: "# procesar archivo grande línea a línea\nwith open('grande.csv','r',encoding='utf-8') as f:\n    for line in f:\n        procesar(line)", callout: "⚠️ Antes de usar modo 'w' confirma que no perderás datos; usa 'a' o crea un archivo temporal y reemplázalo al final." },
            { heading: "Ejemplo: editar registro (actualizar)", tag: "UPDATE", content: "Estrategia común: leer todos los registros, modificar en memoria (o escribir a un archivo temporal) y luego reemplazar el original.", code: "import csv, tempfile, os\nwith open('datos.csv','r',encoding='utf-8') as rf, tempfile.NamedTemporaryFile('w', delete=False, encoding='utf-8') as wf:\n    reader = csv.DictReader(rf)\n    writer = csv.DictWriter(wf, fieldnames=reader.fieldnames)\n    writer.writeheader()\n    for r in reader:\n        if r['id'] == '3':\n            r['name'] = 'Nuevo'\n        writer.writerow(r)\nos.replace(wf.name, 'datos.csv')", callout: null }
          ],
          exercises: [
            { id: "ex-crud-1", title: "Leer CSV y convertir a JSON", description: "Lee 'datos.csv' y guarda su contenido en 'datos.json' como lista de objetos.", starter: "import csv, json\n# tu código", solution: "import csv, json\nrows=[]\nwith open('datos.csv','r',encoding='utf-8') as f:\n    reader = csv.DictReader(f)\n    for r in reader:\n        rows.append(r)\nwith open('datos.json','w',encoding='utf-8') as f:\n    json.dump(rows,f,ensure_ascii=False,indent=2)", expectedOutput: "(archivo datos.json creado)", hint: "Usá csv.DictReader y json.dump" },
            { id: "ex-crud-2", title: "Agregar registro CSV", description: "Añade una nueva fila a 'datos.csv' en modo append.", starter: "import csv\n# tu código", solution: "import csv\nwith open('datos.csv','a',encoding='utf-8',newline='') as f:\n    writer = csv.writer(f)\n    writer.writerow(['4','Nuevo','9'])", expectedOutput: "(fila añadida)", hint: "Usá modo 'a' y csv.writer" },
            { id: "ex-crud-3", title: "Actualizar registro (temporal)", description: "Actualiza el nombre del id='3' usando archivo temporal y reemplaza el original.", starter: "# tu código", solution: "import csv, tempfile, os\nwith open('datos.csv','r',encoding='utf-8') as rf, tempfile.NamedTemporaryFile('w',delete=False,encoding='utf-8') as wf:\n    reader = csv.DictReader(rf)\n    writer = csv.DictWriter(wf, fieldnames=reader.fieldnames)\n    writer.writeheader()\n    for r in reader:\n        if r['id']=='3':\n            r['name']='Modificado'\n        writer.writerow(r)\nos.replace(wf.name,'datos.csv')", expectedOutput: "(archivo reemplazado)", hint: "Escribe en temp y luego replace" },
            { id: "ex-crud-4", title: "Contar registros JSON", description: "Crea 'datos.json' con una lista y cuenta cuántos objetos contiene.", starter: "import json\n# tu código", solution: "import json\nwith open('datos.json','r',encoding='utf-8') as f:\n    data = json.load(f)\nprint(len(data))", expectedOutput: "(número)", hint: "json.load devuelve lista/objeto" },
            { id: "ex-crud-5", title: "Procesar archivo grande", description: "Lee un archivo grande línea a línea e imprime las primeras 5 líneas.", starter: "# tu código", solution: "count=0\nwith open('grande.txt','r',encoding='utf-8') as f:\n    for line in f:\n        print(line.strip())\n        count+=1\n        if count==5:\n            break", expectedOutput: "(5 líneas)", hint: "Iterar el archivo como iterador y break" }
          ]
        },
        {
          id: "l3-manejo-archivos",
          number: 3,
          title: "Manejo de Archivos (prácticas y modos)",
          theory: [
            {
              heading: "Principios y modos de apertura",
              tag: "MODOS",
              content: "Usa `with open(...)` para garantizar el cierre del archivo. Modos comunes: 'r' (leer), 'w' (escribir — sobrescribe), 'a' (añadir), 'r+' (leer y escribir), 'rb'/'wb' para binario.",
              code: "# Leer\nwith open('archivo.txt','r',encoding='utf-8') as f:\n    contenido = f.read()\n# Escribir (sobrescribe)\nwith open('archivo.txt','w',encoding='utf-8') as f:\n    f.write('texto')\n# Append\nwith open('archivo.txt','a',encoding='utf-8') as f:\n    f.write('más')",
              callout: "⚠️ `w` sobrescribe; confirma antes de usarlo o haz copia de seguridad."
            },
            {
              heading: "Lectura eficiente",
              tag: "LECTURA",
              content: "Para archivos grandes, procesa línea a línea: `for line in f:` evita cargar todo el archivo en memoria. Usa `readline()` para leer una línea y `read()` para todo el contenido (solo si cabe en memoria).",
              code: "with open('grande.txt','r',encoding='utf-8') as f:\n    for line in f:\n        procesar(line)",
              callout: "💡 Procesar por chunks si lees binarios; usa buffering y generators para pipelines eficientes."
            },
            {
              heading: "Escribir y writelines",
              tag: "ESCRITURA",
              content: "Usa `write()` para cadenas y `writelines()` para secuencias de cadenas. `writelines()` no añade saltos de línea automáticamente.",
              code: "lines=['a\n','b\n']\nwith open('out.txt','w',encoding='utf-8') as f:\n    f.writelines(lines)",
              callout: null
            },
            {
              heading: "Buenas prácticas resumen",
              tag: "CONCLUSION",
              content: "Evitar sobrescribir archivos importantes; confirmar antes de usar 'w'; cerrar archivos con `with`; procesar grandes archivos línea a línea; usar `pathlib` para rutas; validar entradas al leer formatos como JSON/CSV.",
              code: "# ejemplo rápido usando pathlib y with\nfrom pathlib import Path\npath = Path('datos.json')\nif path.exists():\n    with path.open('r',encoding='utf-8') as f:\n        data = f.read()",
              callout: "El manejo de archivos es el primer paso hacia bases de datos y formatos más complejos."
            }
          ],
          exercises: [
            { id: "ex-file-1", title: "Escribir y leer con with", description: "Escribe 'hola' en 't1.txt' usando `with` y léelo luego.", starter: "# tu código", solution: "with open('t1.txt','w',encoding='utf-8') as f:\n    f.write('hola')\nwith open('t1.txt','r',encoding='utf-8') as f:\n    print(f.read())", expectedOutput: "hola", hint: "Usá with open(...)" },
            { id: "ex-file-2", title: "Append y preservación", description: "Añade una línea a 'log.txt' sin borrar el contenido existente.", starter: "# tu código", solution: "with open('log.txt','a',encoding='utf-8') as f:\n    f.write('registro\n')", expectedOutput: "(añade línea)", hint: "Modo 'a'" },
            { id: "ex-file-3", title: "Contar líneas eficientemente", description: "Cuenta líneas de un archivo grande sin cargarlo todo en memoria.", starter: "# tu código", solution: "count=0\nwith open('f.txt','r',encoding='utf-8') as f:\n    for _ in f:\n        count+=1\nprint(count)", expectedOutput: "(número)", hint: "Iterar archivo como iterator" },
            { id: "ex-file-4", title: "Usar writelines correctamente", description: "Escribe una lista de líneas en 'out.txt' y recuerda añadir '\\n' si hace falta.", starter: "# tu código", solution: "lines=['x\n','y\n']\nwith open('out.txt','w',encoding='utf-8') as f:\n    f.writelines(lines)", expectedOutput: "(archivo out.txt)", hint: "writelines no añade saltos" },
            { id: "ex-file-5", title: "r+ lectura/escritura", description: "Abre 'tmp.txt' en 'r+' y modifica la primera línea conservando el resto.", starter: "# tu código", solution: "with open('tmp.txt','r+',encoding='utf-8') as f:\n    lines=f.readlines()\n    f.seek(0)\n    lines[0]='Nueva\n'\n    f.writelines(lines)", expectedOutput: "(archivo modificado)", hint: "Usá readlines, seek y writelines" }
          ]
        }
        theory: [
          {
            heading: "¿Qué es CRUD?",
            tag: "CRUD_DEF",
            content: "CRUD es un acrónimo que resume las cuatro operaciones básicas sobre datos: Create (crear), Read (leer/consultar), Update (actualizar) y Delete (eliminar). En archivos JSON estas operaciones se realizan leyendo el JSON, modificando la estructura en memoria y guardando los cambios.",
            code: "import json\n# Inicializar datos (si no existe)\ntry:\n    with open('datos.json','r',encoding='utf-8') as f:\n        datos = json.load(f)\nexcept FileNotFoundError:\n    datos = []\n    with open('datos.json','w',encoding='utf-8') as f:\n        json.dump(datos,f,ensure_ascii=False,indent=2)\n\n# Create: añadir un registro\ndef crear(reg):\n    datos.append(reg)\n    with open('datos.json','w',encoding='utf-8') as f:\n        json.dump(datos,f,ensure_ascii=False,indent=2)\n\n# Read: leer registros\ndef leer():\n    with open('datos.json','r',encoding='utf-8') as f:\n        return json.load(f)\n\n# Update: modificar por id\ndef actualizar(id, nuevo):\n    for r in datos:\n        if r.get('id')==id:\n            r.update(nuevo)\n    with open('datos.json','w',encoding='utf-8') as f:\n        json.dump(datos,f,ensure_ascii=False,indent=2)\n\n# Delete: eliminar por id\ndef eliminar(id):\n    global datos\n    datos = [r for r in datos if r.get('id')!=id]\n    with open('datos.json','w',encoding='utf-8') as f:\n        json.dump(datos,f,ensure_ascii=False,indent=2)",
            callout: "Ejecuta cada operación con cuidado y haz copia de seguridad antes de sobrescribir archivos importantes."
          },
          { heading: "Importar: from vs import", tag: "IMPORTS", content: "Importar módulos con `import modulo` o `from modulo import nombre`. Evita `from modulo import *`. Usa nombres de paquetes estándar y estructura `package/module.py` para organizar código.", code: "# importar módulo\nimport math\nprint(math.sqrt(16))\n# importar nombre explícito\nfrom math import sqrt\nprint(sqrt(25))", callout: null },
          { heading: "Crear un paquete", tag: "PAQUETES", content: "Un paquete es una carpeta con `__init__.py`. Permite organizar módulos y exponer API clara. Usa nombres descriptivos y documenta con docstrings.", code: "# estructura de ejemplo:\n# mi_package/__init__.py\n# mi_package/utils.py\n\n# desde el proyecto\nfrom mi_package.utils import funcion", callout: null },
          { heading: "Instalar dependencias y virtualenvs", tag: "VENV", content: "Usa `python -m venv venv` y activa el entorno para no contaminar el sistema. Instala paquetes con `pip install` y guarda dependencias en `requirements.txt` con `pip freeze > requirements.txt`.", code: "python -m venv venv\n# Windows (PowerShell)\nvenv\nScripts\Activate.ps1\n# instalar\npip install requests\n# guardar\npip freeze > requirements.txt", callout: "💡 Mantener un entorno virtual mejora reproducibilidad" }
        ],
        exercises: [
          { id: "ex-mod-1", title: "Crear módulo simple", description: "Crea `mi_mod.py` con una función `saluda()` y úsala desde otro script.", starter: "# mi_mod.py\n# main.py\n", solution: "# mi_mod.py\ndef saluda():\n    return 'hola'\n# main.py\nfrom mi_mod import saluda\nprint(saluda())", expectedOutput: "hola", hint: "Colocar ambos archivos en mismo directorio" },
          { id: "ex-mod-2", title: "Usar paquete", description: "Crea un paquete `pkg` con `__init__.py` y un módulo interno con una función; importala desde fuera.", starter: "# estructura\n", solution: "# pkg/__init__.py\nfrom .helpers import doble\n# pkg/helpers.py\ndef doble(x):\n    return x*2\n# main.py\nfrom pkg import doble\nprint(doble(3))", expectedOutput: "6", hint: "Asegurate de que __init__.py existe" },
          { id: "ex-mod-3", title: "requirements.txt", description: "Genera un `requirements.txt` con al menos una dependencia instalada localmente (por ejemplo requests).", starter: "# pip install requests\n# pip freeze > requirements.txt", solution: "(se crea archivo requirements.txt)", expectedOutput: "(archivo)", hint: "Instala y usa pip freeze" },
          { id: "ex-mod-4", title: "Import relativo", description: "Dentro de un paquete, importa un módulo hermano usando import relativo (ej: `from .mod import f`).", starter: "# estructura\n", solution: "# paquete ejemplo\n# pkg/a.py\ndef f():\n    return 'x'\n# pkg/b.py\nfrom .a import f\nprint(f())", expectedOutput: "x", hint: "Usá from .a import f" },
          { id: "ex-mod-5", title: "Evitar import *", description: "Explica por qué `from modulo import *` es mala práctica y da un ejemplo de conflicto de nombres.", starter: "# respuesta corta", solution: "# Respuesta: importa todo puede sobrescribir nombres y hace código menos legible; mejor importar explícitamente lo que necesitas", expectedOutput: "(texto)", hint: "Menciona colisiones de nombres y legibilidad" }
        ]
      }
    ],
    classActivities: [
      { id: "a1", difficulty: "Fácil", difficultyColor: "#22C55E", title: "Debug rápido con try/except", description: "En parejas: introducir errores intencionales y practicar cómo detectarlos y manejarlos con excepciones.", timeEstimate: "10 minutos", objectives: ["Identificar excepciones comunes","Aprender a usar try/except"] },
      { id: "a2", difficulty: "Intermedio", difficultyColor: "#F59E0B", title: "Mini-proyecto I/O", description: "Crear un script que lea un archivo de texto con nombres y lo convierta en JSON con una estructura simple.", timeEstimate: "25 minutos", objectives: ["Practicar lectura/escritura","Usar json.dump/load"] },
      { id: "a3", difficulty: "Difícil", difficultyColor: "#EF4444", title: "Organizar en paquetes", description: "En grupos: tomar un script grande y dividirlo en módulo(s) y un paquete con `__init__.py`, exponiendo una API clara.", timeEstimate: "30 minutos", objectives: ["Diseñar API de paquete","Separar responsabilidades"] }
    ],
    homework: {
      title: "Tarea: Procesador de registros (I/O + Excepciones)",
      description: "Escribí un script que: 1) lea un archivo CSV con registros (nombre,nota); 2) convierta a diccionario y calcule promedio; 3) maneje entradas inválidas con excepciones; 4) guarde el resultado en JSON.",
      deliverable: "archivo tarea_dia3.py + ejemplo de archivo de entrada",
      dueDate: "Próxima clase",
      extraChallenge: "Agregar opciones de línea de comandos con argparse para especificar archivos de entrada/salida"
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
