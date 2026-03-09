// ─── Python · Día 1 — Fundamentos de algoritmia y programación ───
window.coursesData = window.coursesData || [];

window.coursesData.push({
  id: "python",
  name: "Python",
  icon: "\u{1F40D}",
  color: "#3B82F6",
  accent: "#60A5FA",
  modules: [
    {
      id: 1,
      day: "Día 1",
      title: "Fundamentos de algoritmia y programación",
      status: "available",
      lessons: [
        {
          id: "l1",
          number: 1,
          title: "Mensajes, variables y operaciones básicas",
          theory: [
            {
              heading: "¿Qué es un algoritmo?",
              tag: "CONCEPTO CLAVE",
              content: "Antes de escribir una sola línea de código, necesitamos entender qué es un algoritmo. Tomáte un momento y pensá en cómo resolvés problemas cotidianos: preparar un mate, ir al trabajo, cocinar un plato. Aunque no los percibás, los algoritmos están presentes en tu día a día.\n\nUn algoritmo es una serie de pasos ordenados y finitos que resuelven un problema determinado. Cada paso es claro, preciso y lleva al siguiente hasta llegar a un resultado.",
              code: "# Algoritmo cotidiano: preparar mate\n# Paso 1 → Calentar el agua\n# Paso 2 → Poner yerba en el mate\n# Paso 3 → Cebar el agua a 75°C\n# Paso 4 → Tomar el mate\n\n# En programación hacemos lo mismo pero le decimos\n# al programa exactamente QUÉ hacer y en QUÉ orden.",
              callout: "💡 Clave: Los algoritmos tienen 3 características — son ORDENADOS (los pasos tienen secuencia), FINITOS (tienen inicio y fin) y PRECISOS (cada paso es claro y sin ambigüedad)."
            },
            {
              heading: "¿Qué es Python?",
              tag: "LENGUAJE",
              content: "Python es un lenguaje de programación de alto nivel que se ha convertido en uno de los más populares y utilizados hoy por su versatilidad, sencillez y potencia.\n\nFue creado por Guido Van Rossum y se lanzó en 1991. Desde entonces ganó enorme demanda global en ciencia de datos, inteligencia artificial, desarrollo web y automatización.\n\n🔹 Sintaxis simple: su código se parece al inglés cotidiano, fácil de leer y escribir incluso para principiantes.\n🔹 Orientado a objetos: permite crear objetos y reutilizar código para resolver problemas complejos.",
              code: "# Python es legible como el lenguaje natural\n# Así se imprime un mensaje en pantalla:\nprint(\"Hola, bienvenido a Python!\")\n\n# Así se guarda información en una variable:\nmi_nombre = \"Guido\"\nanio_creacion = 1991\n\nprint(\"Python fue creado por:\", mi_nombre)\nprint(\"Año de lanzamiento:\", anio_creacion)",
              callout: null
            },
            {
              heading: "Mensajes con print()",
              tag: "FUNCIÓN",
              content: "La función print() es la primera herramienta que vas a usar en Python. Sirve para mostrar mensajes e información en pantalla. Es la forma en que el programa 'habla' con vos.",
              code: "# print() con texto (string)\nprint(\"Hola mundo\")\nprint('También funciona con comillas simples')\n\n# print() con números\nprint(42)\nprint(3.14)\n\n# print() con varias cosas a la vez\nprint(\"Mi edad es:\", 25)\nprint(\"Suma:\", 10 + 5)\n\n# print() con variable\nlenguaje = \"Python\"\nprint(\"Estoy aprendiendo\", lenguaje)",
              callout: null
            },
            {
              heading: "Variables",
              tag: "VARIABLES",
              content: "Una variable es un espacio en memoria donde guardamos información para usarla después. En Python no necesitás declarar el tipo, simplemente asignás un valor con el operador =.\n\nReglas para nombrar variables:\n• Solo letras, números y guion bajo _\n• No pueden empezar con un número\n• No se usan espacios (se usa snake_case: mi_variable)\n• Son sensibles a mayúsculas: nombre ≠ Nombre",
              code: "# Crear variables\nnombre   = \"Ana\"     # texto  → str\nedad     = 25        # entero → int\naltura   = 1.68      # decimal → float\nestudia  = True      # verdadero/falso → bool\n\n# Ver el tipo de dato\nprint(type(nombre))   # <class 'str'>\nprint(type(edad))     # <class 'int'>\nprint(type(altura))   # <class 'float'>\nprint(type(estudia))  # <class 'bool'>\n\n# Reasignar una variable\nedad = 26\nprint(\"Nuevo valor de edad:\", edad)",
              callout: null
            },
            {
              heading: "Operaciones básicas",
              tag: "OPERADORES",
              content: "Python puede funcionar como una calculadora muy potente. Los operadores aritméticos nos permiten hacer cálculos con números y variables.",
              code: "a = 10\nb = 3\n\nprint(\"Suma:          \", a + b)    # 13\nprint(\"Resta:         \", a - b)    # 7\nprint(\"Multiplicación:\", a * b)    # 30\nprint(\"División:      \", a / b)    # 3.333...\nprint(\"División entera:\", a // b)  # 3\nprint(\"Módulo (resto):\", a % b)    # 1\nprint(\"Potencia:      \", a ** b)   # 1000\n\n# Concatenar textos con +\nprimer_nombre = \"Guido\"\napellido      = \"Van Rossum\"\nnombre_completo = primer_nombre + \" \" + apellido\nprint(nombre_completo)",
              callout: null
            }
          ],
          exercises: [
            {
              id: "l1e1",
              title: "Ejercicio 1 — Tu presentación",
              description: "Creá variables con tu nombre, tu edad y tu ciudad. Luego usá print() para mostrar una presentación como: 'Me llamo Ana, tengo 25 años y vivo en Buenos Aires.'",
              starter: "# Completá con tus datos\nmi_nombre = \nmi_edad   = \nmi_ciudad = \n\n# Mostrá la presentación con print()\nprint(\"Me llamo\", mi_nombre)",
              solution: "mi_nombre = \"Ana\"\nmi_edad   = 25\nmi_ciudad = \"Buenos Aires\"\n\nprint(\"Me llamo\", mi_nombre + \", tengo\", mi_edad, \"años y vivo en\", mi_ciudad + \".\")",              expectedOutput: "Me llamo Ana, tengo 25 años y vivo en Buenos Aires.",              hint: "El texto va entre comillas \"así\". Los números sin comillas. Para unir cosas en print() usá comas."
            },
            {
              id: "l1e2",
              title: "Ejercicio 2 — Calculadora de notas",
              description: "Tenés 3 notas de examen: 7, 9 y 6. Guardalas en variables, calculá el promedio y mostrá el resultado.",
              starter: "# Guardá las notas\nnota1 = \nnota2 = \nnota3 = \n\n# Calculá el promedio\npromedio = \n\nprint(\"Promedio:\", promedio)",
              solution: "nota1 = 7\nnota2 = 9\nnota3 = 6\n\npromedio = (nota1 + nota2 + nota3) / 3\n\nprint(\"Promedio:\", promedio)",
              expectedOutput: "Promedio: 7.333333333333333",
              hint: "Promedio = suma de notas dividido cantidad. Usá paréntesis: (nota1 + nota2 + nota3) / 3"
            },
            {
              id: "l1e3",
              title: "Ejercicio 3 — Precio con IVA",
              description: "Un producto cuesta $1500. Calculá el precio con 21% de IVA y mostrá ambos valores.",
              starter: "precio_base = 1500\n\n# Calculá el IVA (21%)\niva = \n\n# Calculá el precio final\nprecio_final = \n\nprint(\"Precio sin IVA: $\", precio_base)\nprint(\"IVA (21%):      $\", iva)\nprint(\"Precio con IVA: $\", precio_final)",
              solution: "precio_base = 1500\n\niva = precio_base * 0.21\nprecio_final = precio_base + iva\n\nprint(\"Precio sin IVA: $\", precio_base)\nprint(\"IVA (21%):      $\", iva)\nprint(\"Precio con IVA: $\", precio_final)",              expectedOutput: "Precio sin IVA: $ 1500\nIVA (21%): 315.0\nPrecio con IVA: $ 1815.0",              hint: "IVA = precio_base × 0.21  →  Precio final = precio_base + iva"
            },
            {
              id: "l1e4",
              title: "Ejercicio 4 — Conversor de temperatura",
              description: "La temperatura en Buenos Aires es de 30°C. Convertila a Fahrenheit usando la fórmula: F = C × 9/5 + 32.",
              starter: "celsius = 30\n\n# Convertí a Fahrenheit\nfahrenheit = \n\nprint(\"Temperatura en Celsius:\", celsius)\nprint(\"Temperatura en Fahrenheit:\", fahrenheit)",
              solution: "celsius = 30\n\nfahrenheit = celsius * 9/5 + 32\n\nprint(\"Temperatura en Celsius:\", celsius)\nprint(\"Temperatura en Fahrenheit:\", fahrenheit)",
              expectedOutput: "Temperatura en Celsius: 30\nTemperatura en Fahrenheit: 86.0",
              hint: "La fórmula es: fahrenheit = celsius * 9/5 + 32. Recordá que Python respeta el orden de operaciones."
            },
            {
              id: "l1e5",
              title: "Ejercicio 5 — Calculadora de cambio",
              description: "Un cliente paga $5000 por un producto que cuesta $3450. Calculá el vuelto y mostrá un ticket.",
              starter: "precio_producto = 3450\nmonto_pagado = 5000\n\n# Calculá el vuelto\nvuelto = \n\n# Mostrá el ticket\nprint(\"===== TICKET =====\")\nprint(\"Producto:    $\", precio_producto)\nprint(\"Pagó:        $\", monto_pagado)\nprint(\"Vuelto:      $\", vuelto)\nprint(\"=================\")",
              solution: "precio_producto = 3450\nmonto_pagado = 5000\n\nvuelto = monto_pagado - precio_producto\n\nprint(\"===== TICKET =====\")\nprint(\"Producto:    $\", precio_producto)\nprint(\"Pagó:        $\", monto_pagado)\nprint(\"Vuelto:      $\", vuelto)\nprint(\"=================\")",              expectedOutput: "===== TICKET =====\nProducto: $ 3450\nPagó: $ 5000\nVuelto: $ 1550\n===================",              hint: "El vuelto es la resta: monto_pagado - precio_producto."
            }
          ]
        },
        {
          id: "l2",
          number: 2,
          title: "Condicionales y bucles",
          theory: [
            {
              heading: "Condicionales — if / elif / else",
              tag: "CONDICIONALES",
              content: "Los condicionales permiten que el programa tome decisiones. Dependiendo de si una condición es verdadera o falsa, el código ejecuta distintos bloques.\n\n• if → 'si esto es verdad, hacé esto'\n• elif → 'sino, si esto otro es verdad, hacé esto'\n• else → 'en cualquier otro caso, hacé esto'",
              code: "# Estructura básica de if/elif/else\ntemperatura = 30\n\nif temperatura > 35:\n    print(\"Hace mucho calor, quedate en casa\")\nelif temperatura > 25:\n    print(\"Lindo dia, sali a pasear\")\nelif temperatura > 15:\n    print(\"Llevate una campera\")\nelse:\n    print(\"Hace frio, abrigate bien\")\n\n# En Python la indentacion (4 espacios) es OBLIGATORIA",
              callout: "⚠️ Importante: en Python la indentación (los espacios al inicio de línea) no es estética, ¡es parte de la sintaxis! Siempre usá 4 espacios para cada nivel de código."
            },
            {
              heading: "Operadores de comparación",
              tag: "COMPARACIÓN",
              content: "Para construir condiciones necesitamos comparar valores. Python tiene 6 operadores de comparación, todos devuelven True o False.",
              code: "x = 10\ny = 5\n\nprint(x == y)   # False -> son iguales?\nprint(x != y)   # True  -> son distintos?\nprint(x > y)    # True  -> x es mayor?\nprint(x < y)    # False -> x es menor?\nprint(x >= 10)  # True  -> mayor o igual?\nprint(x <= 9)   # False -> menor o igual?\n\n# Operadores logicos para combinar condiciones\nedad = 20\ntieneCarnet = True\n\nif edad >= 18 and tieneCarnet:\n    print(\"Puede manejar\")\nif edad < 18 or not tieneCarnet:\n    print(\"No puede manejar\")",
              callout: null
            },
            {
              heading: "Bucles — ¿Para qué sirven?",
              tag: "BUCLES",
              content: "Los bucles son una de las estructuras fundamentales en Python. Permiten la ejecución repetida de un conjunto de instrucciones sin escribir el mismo código una y otra vez.\n\nSon esenciales para la lógica de los programas, ya que facilitan tareas que deben iterarse varias veces: recorrer una lista, repetir un cálculo, mostrar una tabla.",
              code: "# Sin bucle (tedioso):\nprint(\"Vuelta 1\")\nprint(\"Vuelta 2\")\nprint(\"Vuelta 3\")\n\n# Con bucle for (elegante):\nfor i in range(1, 4):\n    print(\"Vuelta\", i)\n\n# El bucle escala a 1000 repeticiones sin cambiar el codigo.",
              callout: null
            },
            {
              heading: "Bucle for",
              tag: "FOR",
              content: "El bucle for recorre una secuencia y ejecuta el bloque de código por cada elemento. Es ideal cuando sabés cuántas veces repetir.",
              code: "# for con range()\nfor numero in range(5):       # 0, 1, 2, 3, 4\n    print(\"Numero:\", numero)\n\n# range(inicio, fin, paso)\nfor par in range(0, 10, 2):   # 0, 2, 4, 6, 8\n    print(par)\n\n# for con lista\ncolores = [\"rojo\", \"verde\", \"azul\"]\nfor color in colores:\n    print(\"Color:\", color)\n\n# Tabla de multiplicar del 3\nfor i in range(1, 11):\n    print(\"3 x\", i, \"=\", 3 * i)",
              callout: null
            },
            {
              heading: "Bucle while",
              tag: "WHILE",
              content: "El bucle while repite el bloque MIENTRAS una condición sea verdadera. Se usa cuando no sabés exactamente cuántas repeticiones necesitás.",
              code: "# while basico\ncontador = 0\nwhile contador < 5:\n    print(\"Contador:\", contador)\n    contador = contador + 1\n\n# Cuenta regresiva\ntiempo = 10\nwhile tiempo > 0:\n    print(tiempo, \"segundos...\")\n    tiempo = tiempo - 1\nprint(\"Despegue!\")",
              callout: "⚠️ Diferencia clave: usá for cuando sabés cuántas veces repetir, usá while cuando dependés de que una condición cambie."
            }
          ],
          exercises: [
            {
              id: "l2e1",
              title: "Ejercicio 1 — Clasificador de notas",
              description: "Dada una nota, mostrá si es 'Sobresaliente' (>=9), 'Muy Bueno' (>=7), 'Aprobado' (>=6) o 'Reprobado' (<6).",
              starter: "nota = 7\n\n# Usá if / elif / else para clasificar la nota\n",
              solution: "nota = 7\n\nif nota >= 9:\n    print(\"Sobresaliente\")\nelif nota >= 7:\n    print(\"Muy Bueno\")\nelif nota >= 6:\n    print(\"Aprobado\")\nelse:\n    print(\"Reprobado\")",
              expectedOutput: "Muy Bueno",
              hint: "Empezá por la condición más alta (>=9) y bajá. El else captura todo lo que no cumplió ningún if/elif."
            },
            {
              id: "l2e2",
              title: "Ejercicio 2 — Tabla de multiplicar",
              description: "Usá un bucle for para mostrar la tabla de multiplicar del número 7 (del 1 al 10).",
              starter: "for i in range(1, 11):\n    resultado = \n    print(\"7 x\", i, \"=\", resultado)",
              solution: "for i in range(1, 11):\n    resultado = 7 * i\n    print(\"7 x\", i, \"=\", resultado)",
              expectedOutput: "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70",
              hint: "resultado = 7 * i  (multiplicá el número fijo por el contador del bucle)"
            },
            {
              id: "l2e3",
              title: "Ejercicio 3 — Cuenta regresiva",
              description: "Usá un bucle while para mostrar una cuenta regresiva del 10 al 1, y al final imprimí '¡Ya!'.",
              starter: "numero = 10\n\nwhile numero >= 1:\n    print(numero)\n    numero = \n\nprint(\"Ya!\")",
              solution: "numero = 10\n\nwhile numero >= 1:\n    print(numero)\n    numero = numero - 1\n\nprint(\"Ya!\")",
              expectedOutput: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1\nYa!",
              hint: "En cada vuelta del while restale 1 al número: numero = numero - 1"
            },
            {
              id: "l2e4",
              title: "Ejercicio 4 — Par o impar con bucle",
              description: "Usá un bucle for para recorrer los números del 1 al 10 y mostrar si cada uno es par o impar.",
              starter: "for numero in range(1, 11):\n    # Verificá si es par o impar\n    if :\n        print(numero, \"es par\")\n    else:\n        print(numero, \"es impar\")",
              solution: "for numero in range(1, 11):\n    if numero % 2 == 0:\n        print(numero, \"es par\")\n    else:\n        print(numero, \"es impar\")",
              expectedOutput: "1 es impar\n2 es par\n3 es impar\n4 es par\n5 es impar\n6 es par\n7 es impar\n8 es par\n9 es impar\n10 es par",
              hint: "Un número es par si el resto de dividirlo por 2 es 0: numero % 2 == 0"
            },
            {
              id: "l2e5",
              title: "Ejercicio 5 — Categoría por edad",
              description: "Dada una lista de edades [4, 12, 17, 25, 8, 65], recorrela con un for y clasificá cada una: 'Niño' (0-11), 'Adolescente' (12-17), 'Adulto' (18-64), 'Jubilado' (65+).",
              starter: "edades = [4, 12, 17, 25, 8, 65]\n\nfor edad in edades:\n    if :\n        print(edad, \"-> Niño\")\n    elif :\n        print(edad, \"-> Adolescente\")\n    elif :\n        print(edad, \"-> Adulto\")\n    else:\n        print(edad, \"-> Jubilado\")",
              solution: "edades = [4, 12, 17, 25, 8, 65]\n\nfor edad in edades:\n    if edad <= 11:\n        print(edad, \"-> Niño\")\n    elif edad <= 17:\n        print(edad, \"-> Adolescente\")\n    elif edad <= 64:\n        print(edad, \"-> Adulto\")\n    else:\n        print(edad, \"-> Jubilado\")",
              expectedOutput: "4 -> Niño\n12 -> Adolescente\n17 -> Adolescente\n25 -> Adulto\n8 -> Niño\n65 -> Jubilado",
              hint: "Empezá por el rango más bajo: edad <= 11 para Niño, luego subí. El else captura 65+."
            },
            {
              id: "l2e6",
              title: "Ejercicio 6 — Acumulador con while",
              description: "Usá un bucle while para sumar los números pares del 2 al 20 (2+4+6+...+20). El resultado debe ser 110.",
              starter: "suma = 0\nnumero = 2\n\nwhile numero <= 20:\n    suma = \n    numero = \n\nprint(\"La suma de pares del 2 al 20 es:\", suma)",
              solution: "suma = 0\nnumero = 2\n\nwhile numero <= 20:\n    suma = suma + numero\n    numero = numero + 2\n\nprint(\"La suma de pares del 2 al 20 es:\", suma)",
              expectedOutput: "La suma de pares del 2 al 20 es: 110",
              hint: "Sumá el numero actual al acumulador: suma = suma + numero. Avanzá de 2 en 2: numero = numero + 2"
            }
          ]
        },
        {
          id: "l3",
          number: 3,
          title: "Algoritmos",
          theory: [
            {
              heading: "Pensamiento algorítmico",
              tag: "ALGORITMIA",
              content: "El pensamiento algorítmico es la capacidad de descomponer un problema complejo en pasos simples y ordenados. Es la habilidad más importante de un programador, incluso más que conocer la sintaxis de un lenguaje.\n\nAntes de escribir código, la buena práctica es pensar el algoritmo en papel o en pseudocódigo: describir los pasos en lenguaje natural sin preocuparse por la sintaxis.",
              code: "# Pseudocodigo -> luego Python\n\n# PROBLEMA: Saber si un numero es par o impar\n#\n# Pseudocodigo:\n# 1. Tomar un numero\n# 2. Dividirlo por 2 y obtener el resto\n# 3. Si el resto es 0 -> es par\n# 4. Si no -> es impar\n\n# Traduccion a Python:\nnumero = 14\n\nif numero % 2 == 0:\n    print(numero, \"es par\")\nelse:\n    print(numero, \"es impar\")",
              callout: "💡 El operador % (módulo) devuelve el RESTO de la división. 14 % 2 = 0 (sin resto = par). 15 % 2 = 1 (con resto = impar)."
            },
            {
              heading: "Diagrama de flujo → código",
              tag: "DISEÑO",
              content: "Un diagrama de flujo es la representación visual de un algoritmo. Aprender a leerlos y dibujarlos te ayuda a planificar el código antes de escribirlo.\n\n▭ Rectángulo → proceso (cálculo, asignación)\n◇ Rombo → decisión (condición verdadera/falsa)\n○ Óvalo → inicio / fin\n→ Flecha → dirección del flujo",
              code: "# Algoritmo completo pensado antes de codear:\n# INICIO\n#   1. Definir precio del producto\n#   2. ¿Tiene descuento?\n#      SI  -> restar 20% al precio\n#      NO  -> mantener precio\n#   3. Mostrar precio final\n# FIN\n\n# Traduccion:\nprecio = 1000\ntiene_descuento = True\n\nif tiene_descuento:\n    precio_final = precio * 0.80\n    print(\"Precio con 20% OFF: $\", precio_final)\nelse:\n    precio_final = precio\n    print(\"Precio sin descuento: $\", precio_final)",
              callout: null
            },
            {
              heading: "Algoritmo completo: uniendo todo",
              tag: "INTEGRADOR",
              content: "Veamos cómo variables, operadores, condicionales y bucles trabajan juntos para resolver un problema real: evaluar las notas de un curso.",
              code: "# Algoritmo: Evaluacion de un curso\nnombres = [\"Ana\", \"Carlos\", \"Mia\", \"Luis\", \"Sara\"]\nnotas   = [8, 5, 9, 6, 4]\n\naprobados  = 0\nreprobados = 0\ntotal      = 0\n\nfor i in range(len(nombres)):\n    nombre = nombres[i]\n    nota   = notas[i]\n    total  = total + nota\n\n    if nota >= 6:\n        estado = \"Aprobado\"\n        aprobados = aprobados + 1\n    else:\n        estado = \"Reprobado\"\n        reprobados = reprobados + 1\n\n    print(nombre + \":\", nota, \"->\", estado)\n\npromedio = total / len(notas)\nprint(\"Promedio del curso:\", promedio)\nprint(\"Aprobados:\", aprobados, \"| Reprobados:\", reprobados)",
              callout: null
            }
          ],
          exercises: [
            {
              id: "l3e1",
              title: "Ejercicio 1 — Mayor de dos números",
              description: "Diseñá un algoritmo que compare a = 45 y b = 72, y muestre cuál es el mayor.",
              starter: "a = 45\nb = 72\n\n# Escribi el algoritmo con if/elif/else\n",
              solution: "a = 45\nb = 72\n\nif a > b:\n    print(\"El mayor es:\", a)\nelif b > a:\n    print(\"El mayor es:\", b)\nelse:\n    print(\"Los dos numeros son iguales\")",
              expectedOutput: "El mayor es: 72",
              hint: "Necesitás 3 casos: a > b, b > a, o iguales (else)."
            },
            {
              id: "l3e2",
              title: "Ejercicio 2 — Suma acumulada",
              description: "Usá un bucle for para sumar todos los números del 1 al 100. El resultado debe ser 5050.",
              starter: "suma_total = 0\n\nfor numero in range(1, 101):\n    suma_total = \n\nprint(\"La suma del 1 al 100 es:\", suma_total)",
              solution: "suma_total = 0\n\nfor numero in range(1, 101):\n    suma_total = suma_total + numero\n\nprint(\"La suma del 1 al 100 es:\", suma_total)",
              expectedOutput: "La suma del 1 al 100 es: 5050",
              hint: "En cada vuelta sumale el numero actual al acumulador: suma_total = suma_total + numero"
            },
            {
              id: "l3e3",
              title: "Ejercicio 3 — Contador de aprobados",
              description: "Dada la lista de notas [8, 4, 6, 3, 9, 5, 7, 2], recorrela y contá cuántos aprobaron (nota >= 6) y cuántos reprobaron.",
              starter: "notas = [8, 4, 6, 3, 9, 5, 7, 2]\naprobados = 0\nreprobados = 0\n\nfor nota in notas:\n    if :\n        aprobados = \n    else:\n        reprobados = \n\nprint(\"Aprobados:\", aprobados)\nprint(\"Reprobados:\", reprobados)",
              solution: "notas = [8, 4, 6, 3, 9, 5, 7, 2]\naprobados = 0\nreprobados = 0\n\nfor nota in notas:\n    if nota >= 6:\n        aprobados = aprobados + 1\n    else:\n        reprobados = reprobados + 1\n\nprint(\"Aprobados:\", aprobados)\nprint(\"Reprobados:\", reprobados)",
              expectedOutput: "Aprobados: 4\nReprobados: 4",
              hint: "Si nota >= 6 sumá 1 a aprobados, sino sumá 1 a reprobados."
            },
            {
              id: "l3e4",
              title: "Ejercicio 4 — Calculadora de descuentos",
              description: "Precios: [250, 800, 1200, 450, 3000]. Si el precio es mayor a $500 tiene 15% de descuento. Mostrá cada precio y el total.",
              starter: "precios = [250, 800, 1200, 450, 3000]\ntotal = 0\n\nfor precio in precios:\n    if :\n        precio_final = \n        print(\"Precio:\", precio, \"-> Con 15% OFF:\", precio_final)\n    else:\n        precio_final = \n        print(\"Precio:\", precio, \"-> Sin descuento:\", precio_final)\n    total = \n\nprint(\"Total a pagar: $\", total)",
              solution: "precios = [250, 800, 1200, 450, 3000]\ntotal = 0\n\nfor precio in precios:\n    if precio > 500:\n        precio_final = precio * 0.85\n        print(\"Precio:\", precio, \"-> Con 15% OFF:\", precio_final)\n    else:\n        precio_final = precio\n        print(\"Precio:\", precio, \"-> Sin descuento:\", precio_final)\n    total = total + precio_final\n\nprint(\"Total a pagar: $\", total)",
              expectedOutput: "Precio: 250 -> Sin descuento: 250\nPrecio: 800 -> Con 15% OFF: 680.0\nPrecio: 1200 -> Con 15% OFF: 1020.0\nPrecio: 450 -> Sin descuento: 450\nPrecio: 3000 -> Con 15% OFF: 2550.0\nTotal a pagar: $ 4950.0",
              hint: "15% de descuento = precio * 0.85. Acumulá cada precio_final en total."
            }
          ]
        }
      ],
      classActivities: [
        {
          id: "a1",
          difficulty: "Fácil",
          difficultyColor: "#22C55E",
          title: "Presentación con variables",
          description: "Individualmente, creá un programa que guarde tu nombre, tu edad, tu comida favorita y tu hobby en variables. Luego usá print() para mostrar una presentación completa en al menos 4 líneas.\n\nEjemplo de salida:\n• Mi nombre es Ana\n• Tengo 22 años\n• Mi comida favorita es la pizza\n• Me gusta jugar al fútbol",
          timeEstimate: "10 minutos",
          objectives: [
            "Crear variables de distintos tipos (str, int)",
            "Usar print() para mostrar información formateada",
            "Practicar la asignación de valores"
          ]
        },
        {
          id: "a2",
          difficulty: "Intermedio",
          difficultyColor: "#F59E0B",
          title: "Algoritmo en la vida real",
          description: "En parejas, elijan un proceso cotidiano (preparar una receta, sacar dinero del cajero, hacer una compra online) y:\n\n1. Escriban el algoritmo en pseudocódigo (pasos en español).\n2. Traduzcan al menos 3 pasos a código Python usando variables, un condicional y un print().\n3. Agreguen al menos una operación matemática (calcular precio, edad, etc.).\n4. Presenten al grupo y expliquen qué decisiones toma su programa.",
          timeEstimate: "20 minutos",
          objectives: [
            "Identificar algoritmos en situaciones cotidianas",
            "Traducir pseudocódigo a Python",
            "Combinar variables, operadores y condicionales",
            "Comunicar soluciones al grupo"
          ]
        },
        {
          id: "a3",
          difficulty: "Difícil",
          difficultyColor: "#EF4444",
          title: "Mini-sistema de registro",
          description: "En grupos de 3, creen un programa que simule el registro de 5 alumnos en un curso:\n\n1. Guarden los nombres en una lista y las notas de admisión en otra lista.\n2. Recorran ambas listas con un bucle for.\n3. Si la nota es >= 7, el alumno queda 'Admitido'. Si es >= 5, queda 'En lista de espera'. Si es < 5, queda 'Rechazado'.\n4. Al final muestren la cantidad de admitidos, en espera y rechazados.\n5. Calculen y muestren el promedio general de notas.",
          timeEstimate: "30 minutos",
          objectives: [
            "Trabajar con listas y bucles for",
            "Aplicar condicionales múltiples (if/elif/else)",
            "Usar contadores y acumuladores",
            "Resolver un problema completo integrando todos los conceptos del día"
          ]
        }
      ],
      homework: {
        title: "Tarea: Mini-sistema de calificaciones",
        description: "Creá un programa Python que haga lo siguiente:\n\n1. Guardá en variables el nombre de un alumno y sus 4 notas del año.\n2. Calculá el promedio.\n3. Mostrá si aprobó (promedio ≥ 6) o reprobó.\n4. Si aprobó, mostrá un mensaje de felicitación. Si reprobó, mostrá cuántos puntos le faltan para llegar a 6.\n5. Usá un bucle for para listar las 4 notas numeradas.",
        deliverable: "Archivo tarea_dia1.py con el código comentado (cada sección explicada con #)",
        dueDate: "Para la próxima clase",
        extraChallenge: "¿Podés calcular cuál fue la nota más alta y la más baja? Pista: investigá las funciones max() y min() de Python."
      }
    }
  ]
});
