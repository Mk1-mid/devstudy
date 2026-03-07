/* ═══════════════════════════════════════════════════════════════
   DevStudy — Plataforma de aprendizaje
   HTML / CSS / JS nativo — sin frameworks ni build tools
   ═══════════════════════════════════════════════════════════════ */

// ─── DATA ────────────────────────────────────────────────────────
const courses = [
  {
    id: "python",
    name: "Python",
    icon: "\u{1F40D}",
    color: "#3B82F6",
    accent: "#60A5FA",
    modules: [
      {
        id: 1,
        day: "D\u00eda 1",
        title: "Fundamentos de algoritmia y programaci\u00f3n",
        status: "available",
        lessons: [
          {
            id: "l1",
            number: 1,
            title: "Mensajes, variables y operaciones b\u00e1sicas",
            theory: [
              {
                heading: "\u00bfQu\u00e9 es un algoritmo?",
                tag: "CONCEPTO CLAVE",
                content: "Antes de escribir una sola l\u00ednea de c\u00f3digo, necesitamos entender qu\u00e9 es un algoritmo. Tom\u00e1te un momento y pens\u00e1 en c\u00f3mo resolv\u00e9s problemas cotidianos: preparar un mate, ir al trabajo, cocinar un plato. Aunque no los percib\u00e1s, los algoritmos est\u00e1n presentes en tu d\u00eda a d\u00eda.\n\nUn algoritmo es una serie de pasos ordenados y finitos que resuelven un problema determinado. Cada paso es claro, preciso y lleva al siguiente hasta llegar a un resultado.",
                code: "# Algoritmo cotidiano: preparar mate\n# Paso 1 \u2192 Calentar el agua\n# Paso 2 \u2192 Poner yerba en el mate\n# Paso 3 \u2192 Cebar el agua a 75\u00b0C\n# Paso 4 \u2192 Tomar el mate\n\n# En programaci\u00f3n hacemos lo mismo pero le decimos\n# al programa exactamente QU\u00c9 hacer y en QU\u00c9 orden.",
                callout: "\u{1F4A1} Clave: Los algoritmos tienen 3 caracter\u00edsticas \u2014 son ORDENADOS (los pasos tienen secuencia), FINITOS (tienen inicio y fin) y PRECISOS (cada paso es claro y sin ambig\u00fcedad)."
              },
              {
                heading: "\u00bfQu\u00e9 es Python?",
                tag: "LENGUAJE",
                content: "Python es un lenguaje de programaci\u00f3n de alto nivel que se ha convertido en uno de los m\u00e1s populares y utilizados hoy por su versatilidad, sencillez y potencia.\n\nFue creado por Guido Van Rossum y se lanz\u00f3 en 1991. Desde entonces gan\u00f3 enorme demanda global en ciencia de datos, inteligencia artificial, desarrollo web y automatizaci\u00f3n.\n\n\u{1F539} Sintaxis simple: su c\u00f3digo se parece al ingl\u00e9s cotidiano, f\u00e1cil de leer y escribir incluso para principiantes.\n\u{1F539} Orientado a objetos: permite crear objetos y reutilizar c\u00f3digo para resolver problemas complejos.",
                code: "# Python es legible como el lenguaje natural\n# As\u00ed se imprime un mensaje en pantalla:\nprint(\"Hola, bienvenido a Python!\")\n\n# As\u00ed se guarda informaci\u00f3n en una variable:\nmi_nombre = \"Guido\"\nanio_creacion = 1991\n\nprint(\"Python fue creado por:\", mi_nombre)\nprint(\"A\u00f1o de lanzamiento:\", anio_creacion)",
                callout: null
              },
              {
                heading: "Mensajes con print()",
                tag: "FUNCI\u00d3N",
                content: "La funci\u00f3n print() es la primera herramienta que vas a usar en Python. Sirve para mostrar mensajes e informaci\u00f3n en pantalla. Es la forma en que el programa \u2018habla\u2019 con vos.",
                code: "# print() con texto (string)\nprint(\"Hola mundo\")\nprint('Tambi\u00e9n funciona con comillas simples')\n\n# print() con n\u00fameros\nprint(42)\nprint(3.14)\n\n# print() con varias cosas a la vez\nprint(\"Mi edad es:\", 25)\nprint(\"Suma:\", 10 + 5)\n\n# print() con variable\nlenguaje = \"Python\"\nprint(\"Estoy aprendiendo\", lenguaje)",
                callout: null
              },
              {
                heading: "Variables",
                tag: "VARIABLES",
                content: "Una variable es un espacio en memoria donde guardamos informaci\u00f3n para usarla despu\u00e9s. En Python no necesit\u00e1s declarar el tipo, simplemente asign\u00e1s un valor con el operador =.\n\nReglas para nombrar variables:\n\u2022 Solo letras, n\u00fameros y guion bajo _\n\u2022 No pueden empezar con un n\u00famero\n\u2022 No se usan espacios (se usa snake_case: mi_variable)\n\u2022 Son sensibles a may\u00fasculas: nombre \u2260 Nombre",
                code: "# Crear variables\nnombre   = \"Ana\"     # texto  \u2192 str\nedad     = 25        # entero \u2192 int\naltura   = 1.68      # decimal \u2192 float\nestudia  = True      # verdadero/falso \u2192 bool\n\n# Ver el tipo de dato\nprint(type(nombre))   # <class 'str'>\nprint(type(edad))     # <class 'int'>\nprint(type(altura))   # <class 'float'>\nprint(type(estudia))  # <class 'bool'>\n\n# Reasignar una variable\nedad = 26\nprint(\"Nuevo valor de edad:\", edad)",
                callout: null
              },
              {
                heading: "Operaciones b\u00e1sicas",
                tag: "OPERADORES",
                content: "Python puede funcionar como una calculadora muy potente. Los operadores aritm\u00e9ticos nos permiten hacer c\u00e1lculos con n\u00fameros y variables.",
                code: "a = 10\nb = 3\n\nprint(\"Suma:          \", a + b)    # 13\nprint(\"Resta:         \", a - b)    # 7\nprint(\"Multiplicaci\u00f3n:\", a * b)    # 30\nprint(\"Divisi\u00f3n:      \", a / b)    # 3.333...\nprint(\"Divisi\u00f3n entera:\", a // b)  # 3\nprint(\"M\u00f3dulo (resto):\", a % b)    # 1\nprint(\"Potencia:      \", a ** b)   # 1000\n\n# Concatenar textos con +\nprimer_nombre = \"Guido\"\napellido      = \"Van Rossum\"\nnombre_completo = primer_nombre + \" \" + apellido\nprint(nombre_completo)",
                callout: null
              }
            ],
            exercises: [
              {
                id: "l1e1",
                title: "Ejercicio 1 \u2014 Tu presentaci\u00f3n",
                description: "Cre\u00e1 variables con tu nombre, tu edad y tu ciudad. Luego us\u00e1 print() para mostrar una presentaci\u00f3n como: 'Me llamo Ana, tengo 25 a\u00f1os y vivo en Buenos Aires.'",
                starter: "# Complet\u00e1 con tus datos\nmi_nombre = \nmi_edad   = \nmi_ciudad = \n\n# Mostr\u00e1 la presentaci\u00f3n con print()\nprint(\"Me llamo\", mi_nombre)",
                solution: "mi_nombre = \"Ana\"\nmi_edad   = 25\nmi_ciudad = \"Buenos Aires\"\n\nprint(\"Me llamo\", mi_nombre + \", tengo\", mi_edad, \"a\u00f1os y vivo en\", mi_ciudad + \".\")",
                hint: "El texto va entre comillas \"as\u00ed\". Los n\u00fameros sin comillas. Para unir cosas en print() us\u00e1 comas."
              },
              {
                id: "l1e2",
                title: "Ejercicio 2 \u2014 Calculadora de notas",
                description: "Ten\u00e9s 3 notas de examen: 7, 9 y 6. Guard\u00e1las en variables, calcul\u00e1 el promedio y mostr\u00e1 el resultado.",
                starter: "# Guard\u00e1 las notas\nnota1 = \nnota2 = \nnota3 = \n\n# Calcul\u00e1 el promedio\npromedio = \n\nprint(\"Promedio:\", promedio)",
                solution: "nota1 = 7\nnota2 = 9\nnota3 = 6\n\npromedio = (nota1 + nota2 + nota3) / 3\n\nprint(\"Promedio:\", promedio)",
                hint: "Promedio = suma de notas dividido cantidad. Us\u00e1 par\u00e9ntesis: (nota1 + nota2 + nota3) / 3"
              },
              {
                id: "l1e3",
                title: "Ejercicio 3 \u2014 Precio con IVA",
                description: "Un producto cuesta $1500. Calcul\u00e1 el precio con 21% de IVA y mostr\u00e1 ambos valores.",
                starter: "precio_base = 1500\n\n# Calcul\u00e1 el IVA (21%)\niva = \n\n# Calcul\u00e1 el precio final\nprecio_final = \n\nprint(\"Precio sin IVA: $\", precio_base)\nprint(\"IVA (21%):      $\", iva)\nprint(\"Precio con IVA: $\", precio_final)",
                solution: "precio_base = 1500\n\niva = precio_base * 0.21\nprecio_final = precio_base + iva\n\nprint(\"Precio sin IVA: $\", precio_base)\nprint(\"IVA (21%):      $\", iva)\nprint(\"Precio con IVA: $\", precio_final)",
                hint: "IVA = precio_base \u00d7 0.21  \u2192  Precio final = precio_base + iva"
              },
              {
                id: "l1e4",
                title: "Ejercicio 4 \u2014 Conversor de temperatura",
                description: "La temperatura en Buenos Aires es de 30\u00b0C. Convertila a Fahrenheit usando la f\u00f3rmula: F = C \u00d7 9/5 + 32.",
                starter: "celsius = 30\n\n# Convert\u00ed a Fahrenheit\nfahrenheit = \n\nprint(\"Temperatura en Celsius:\", celsius)\nprint(\"Temperatura en Fahrenheit:\", fahrenheit)",
                solution: "celsius = 30\n\nfahrenheit = celsius * 9/5 + 32\n\nprint(\"Temperatura en Celsius:\", celsius)\nprint(\"Temperatura en Fahrenheit:\", fahrenheit)",
                hint: "La f\u00f3rmula es: fahrenheit = celsius * 9/5 + 32. Record\u00e1 que Python respeta el orden de operaciones."
              },
              {
                id: "l1e5",
                title: "Ejercicio 5 \u2014 Calculadora de cambio",
                description: "Un cliente paga $5000 por un producto que cuesta $3450. Calcul\u00e1 el vuelto y mostr\u00e1 un ticket.",
                starter: "precio_producto = 3450\nmonto_pagado = 5000\n\n# Calcul\u00e1 el vuelto\nvuelto = \n\n# Mostr\u00e1 el ticket\nprint(\"===== TICKET =====\")\nprint(\"Producto:    $\", precio_producto)\nprint(\"Pag\u00f3:        $\", monto_pagado)\nprint(\"Vuelto:      $\", vuelto)\nprint(\"=================\")",
                solution: "precio_producto = 3450\nmonto_pagado = 5000\n\nvuelto = monto_pagado - precio_producto\n\nprint(\"===== TICKET =====\")\nprint(\"Producto:    $\", precio_producto)\nprint(\"Pag\u00f3:        $\", monto_pagado)\nprint(\"Vuelto:      $\", vuelto)\nprint(\"=================\")",
                hint: "El vuelto es la resta: monto_pagado - precio_producto."
              }
            ]
          },
          {
            id: "l2",
            number: 2,
            title: "Condicionales y bucles",
            theory: [
              {
                heading: "Condicionales \u2014 if / elif / else",
                tag: "CONDICIONALES",
                content: "Los condicionales permiten que el programa tome decisiones. Dependiendo de si una condici\u00f3n es verdadera o falsa, el c\u00f3digo ejecuta distintos bloques.\n\n\u2022 if \u2192 \u2018si esto es verdad, hac\u00e9 esto\u2019\n\u2022 elif \u2192 \u2018sino, si esto otro es verdad, hac\u00e9 esto\u2019\n\u2022 else \u2192 \u2018en cualquier otro caso, hac\u00e9 esto\u2019",
                code: "# Estructura b\u00e1sica de if/elif/else\ntemperatura = 30\n\nif temperatura > 35:\n    print(\"Hace mucho calor, quedate en casa\")\nelif temperatura > 25:\n    print(\"Lindo dia, sali a pasear\")\nelif temperatura > 15:\n    print(\"Llevate una campera\")\nelse:\n    print(\"Hace frio, abrigate bien\")\n\n# En Python la indentacion (4 espacios) es OBLIGATORIA",
                callout: "\u26a0\ufe0f Importante: en Python la indentaci\u00f3n (los espacios al inicio de l\u00ednea) no es est\u00e9tica, \u00a1es parte de la sintaxis! Siempre us\u00e1 4 espacios para cada nivel de c\u00f3digo."
              },
              {
                heading: "Operadores de comparaci\u00f3n",
                tag: "COMPARACI\u00d3N",
                content: "Para construir condiciones necesitamos comparar valores. Python tiene 6 operadores de comparaci\u00f3n, todos devuelven True o False.",
                code: "x = 10\ny = 5\n\nprint(x == y)   # False -> son iguales?\nprint(x != y)   # True  -> son distintos?\nprint(x > y)    # True  -> x es mayor?\nprint(x < y)    # False -> x es menor?\nprint(x >= 10)  # True  -> mayor o igual?\nprint(x <= 9)   # False -> menor o igual?\n\n# Operadores logicos para combinar condiciones\nedad = 20\ntieneCarnet = True\n\nif edad >= 18 and tieneCarnet:\n    print(\"Puede manejar\")\nif edad < 18 or not tieneCarnet:\n    print(\"No puede manejar\")",
                callout: null
              },
              {
                heading: "Bucles \u2014 \u00bfPara qu\u00e9 sirven?",
                tag: "BUCLES",
                content: "Los bucles son una de las estructuras fundamentales en Python. Permiten la ejecuci\u00f3n repetida de un conjunto de instrucciones sin escribir el mismo c\u00f3digo una y otra vez.\n\nSon esenciales para la l\u00f3gica de los programas, ya que facilitan tareas que deben iterarse varias veces: recorrer una lista, repetir un c\u00e1lculo, mostrar una tabla.",
                code: "# Sin bucle (tedioso):\nprint(\"Vuelta 1\")\nprint(\"Vuelta 2\")\nprint(\"Vuelta 3\")\n\n# Con bucle for (elegante):\nfor i in range(1, 4):\n    print(\"Vuelta\", i)\n\n# El bucle escala a 1000 repeticiones sin cambiar el codigo.",
                callout: null
              },
              {
                heading: "Bucle for",
                tag: "FOR",
                content: "El bucle for recorre una secuencia y ejecuta el bloque de c\u00f3digo por cada elemento. Es ideal cuando sab\u00e9s cu\u00e1ntas veces repetir.",
                code: "# for con range()\nfor numero in range(5):       # 0, 1, 2, 3, 4\n    print(\"Numero:\", numero)\n\n# range(inicio, fin, paso)\nfor par in range(0, 10, 2):   # 0, 2, 4, 6, 8\n    print(par)\n\n# for con lista\ncolores = [\"rojo\", \"verde\", \"azul\"]\nfor color in colores:\n    print(\"Color:\", color)\n\n# Tabla de multiplicar del 3\nfor i in range(1, 11):\n    print(\"3 x\", i, \"=\", 3 * i)",
                callout: null
              },
              {
                heading: "Bucle while",
                tag: "WHILE",
                content: "El bucle while repite el bloque MIENTRAS una condici\u00f3n sea verdadera. Se usa cuando no sab\u00e9s exactamente cu\u00e1ntas repeticiones necesit\u00e1s.",
                code: "# while basico\ncontador = 0\nwhile contador < 5:\n    print(\"Contador:\", contador)\n    contador = contador + 1\n\n# Cuenta regresiva\ntiempo = 10\nwhile tiempo > 0:\n    print(tiempo, \"segundos...\")\n    tiempo = tiempo - 1\nprint(\"Despegue!\")",
                callout: "\u26a0\ufe0f Diferencia clave: us\u00e1 for cuando sab\u00e9s cu\u00e1ntas veces repetir, us\u00e1 while cuando depend\u00e9s de que una condici\u00f3n cambie."
              }
            ],
            exercises: [
              {
                id: "l2e1",
                title: "Ejercicio 1 \u2014 Clasificador de notas",
                description: "Dada una nota, mostr\u00e1 si es 'Sobresaliente' (>=9), 'Muy Bueno' (>=7), 'Aprobado' (>=6) o 'Reprobado' (<6).",
                starter: "nota = 7\n\n# Us\u00e1 if / elif / else para clasificar la nota\n",
                solution: "nota = 7\n\nif nota >= 9:\n    print(\"Sobresaliente\")\nelif nota >= 7:\n    print(\"Muy Bueno\")\nelif nota >= 6:\n    print(\"Aprobado\")\nelse:\n    print(\"Reprobado\")",
                hint: "Empez\u00e1 por la condici\u00f3n m\u00e1s alta (>=9) y baj\u00e1. El else captura todo lo que no cumpli\u00f3 ning\u00fan if/elif."
              },
              {
                id: "l2e2",
                title: "Ejercicio 2 \u2014 Tabla de multiplicar",
                description: "Us\u00e1 un bucle for para mostrar la tabla de multiplicar del n\u00famero 7 (del 1 al 10).",
                starter: "for i in range(1, 11):\n    resultado = \n    print(\"7 x\", i, \"=\", resultado)",
                solution: "for i in range(1, 11):\n    resultado = 7 * i\n    print(\"7 x\", i, \"=\", resultado)",
                hint: "resultado = 7 * i  (multiplic\u00e1 el n\u00famero fijo por el contador del bucle)"
              },
              {
                id: "l2e3",
                title: "Ejercicio 3 \u2014 Cuenta regresiva",
                description: "Us\u00e1 un bucle while para mostrar una cuenta regresiva del 10 al 1, y al final imprim\u00ed '\u00a1Ya!'.",
                starter: "numero = 10\n\nwhile numero >= 1:\n    print(numero)\n    numero = \n\nprint(\"Ya!\")",
                solution: "numero = 10\n\nwhile numero >= 1:\n    print(numero)\n    numero = numero - 1\n\nprint(\"Ya!\")",
                hint: "En cada vuelta del while restale 1 al n\u00famero: numero = numero - 1"
              },
              {
                id: "l2e4",
                title: "Ejercicio 4 \u2014 Par o impar con bucle",
                description: "Us\u00e1 un bucle for para recorrer los n\u00fameros del 1 al 10 y mostrar si cada uno es par o impar.",
                starter: "for numero in range(1, 11):\n    # Verific\u00e1 si es par o impar\n    if :\n        print(numero, \"es par\")\n    else:\n        print(numero, \"es impar\")",
                solution: "for numero in range(1, 11):\n    if numero % 2 == 0:\n        print(numero, \"es par\")\n    else:\n        print(numero, \"es impar\")",
                hint: "Un n\u00famero es par si el resto de dividirlo por 2 es 0: numero % 2 == 0"
              },
              {
                id: "l2e5",
                title: "Ejercicio 5 \u2014 Categor\u00eda por edad",
                description: "Dada una lista de edades [4, 12, 17, 25, 8, 65], recorrela con un for y clasific\u00e1 cada una: 'Ni\u00f1o' (0-11), 'Adolescente' (12-17), 'Adulto' (18-64), 'Jubilado' (65+).",
                starter: "edades = [4, 12, 17, 25, 8, 65]\n\nfor edad in edades:\n    if :\n        print(edad, \"-> Ni\u00f1o\")\n    elif :\n        print(edad, \"-> Adolescente\")\n    elif :\n        print(edad, \"-> Adulto\")\n    else:\n        print(edad, \"-> Jubilado\")",
                solution: "edades = [4, 12, 17, 25, 8, 65]\n\nfor edad in edades:\n    if edad <= 11:\n        print(edad, \"-> Ni\u00f1o\")\n    elif edad <= 17:\n        print(edad, \"-> Adolescente\")\n    elif edad <= 64:\n        print(edad, \"-> Adulto\")\n    else:\n        print(edad, \"-> Jubilado\")",
                hint: "Empez\u00e1 por el rango m\u00e1s bajo: edad <= 11 para Ni\u00f1o, luego sub\u00ed. El else captura 65+."
              },
              {
                id: "l2e6",
                title: "Ejercicio 6 \u2014 Acumulador con while",
                description: "Us\u00e1 un bucle while para sumar los n\u00fameros pares del 2 al 20 (2+4+6+...+20). El resultado debe ser 110.",
                starter: "suma = 0\nnumero = 2\n\nwhile numero <= 20:\n    suma = \n    numero = \n\nprint(\"La suma de pares del 2 al 20 es:\", suma)",
                solution: "suma = 0\nnumero = 2\n\nwhile numero <= 20:\n    suma = suma + numero\n    numero = numero + 2\n\nprint(\"La suma de pares del 2 al 20 es:\", suma)",
                hint: "Sum\u00e1 el numero actual al acumulador: suma = suma + numero. Avanz\u00e1 de 2 en 2: numero = numero + 2"
              }
            ]
          },
          {
            id: "l3",
            number: 3,
            title: "Algoritmos",
            theory: [
              {
                heading: "Pensamiento algor\u00edtmico",
                tag: "ALGORITMIA",
                content: "El pensamiento algor\u00edtmico es la capacidad de descomponer un problema complejo en pasos simples y ordenados. Es la habilidad m\u00e1s importante de un programador, incluso m\u00e1s que conocer la sintaxis de un lenguaje.\n\nAntes de escribir c\u00f3digo, la buena pr\u00e1ctica es pensar el algoritmo en papel o en pseudoc\u00f3digo: describir los pasos en lenguaje natural sin preocuparse por la sintaxis.",
                code: "# Pseudocodigo -> luego Python\n\n# PROBLEMA: Saber si un numero es par o impar\n#\n# Pseudocodigo:\n# 1. Tomar un numero\n# 2. Dividirlo por 2 y obtener el resto\n# 3. Si el resto es 0 -> es par\n# 4. Si no -> es impar\n\n# Traduccion a Python:\nnumero = 14\n\nif numero % 2 == 0:\n    print(numero, \"es par\")\nelse:\n    print(numero, \"es impar\")",
                callout: "\u{1F4A1} El operador % (m\u00f3dulo) devuelve el RESTO de la divisi\u00f3n. 14 % 2 = 0 (sin resto = par). 15 % 2 = 1 (con resto = impar)."
              },
              {
                heading: "Diagrama de flujo \u2192 c\u00f3digo",
                tag: "DISE\u00d1O",
                content: "Un diagrama de flujo es la representaci\u00f3n visual de un algoritmo. Aprender a leerlos y dibujarlos te ayuda a planificar el c\u00f3digo antes de escribirlo.\n\n\u25ad Rect\u00e1ngulo \u2192 proceso (c\u00e1lculo, asignaci\u00f3n)\n\u25c7 Rombo \u2192 decisi\u00f3n (condici\u00f3n verdadera/falsa)\n\u25cb \u00d3valo \u2192 inicio / fin\n\u2192 Flecha \u2192 direcci\u00f3n del flujo",
                code: "# Algoritmo completo pensado antes de codear:\n# INICIO\n#   1. Definir precio del producto\n#   2. \u00bfTiene descuento?\n#      SI  -> restar 20% al precio\n#      NO  -> mantener precio\n#   3. Mostrar precio final\n# FIN\n\n# Traduccion:\nprecio = 1000\ntiene_descuento = True\n\nif tiene_descuento:\n    precio_final = precio * 0.80\n    print(\"Precio con 20% OFF: $\", precio_final)\nelse:\n    precio_final = precio\n    print(\"Precio sin descuento: $\", precio_final)",
                callout: null
              },
              {
                heading: "Algoritmo completo: uniendo todo",
                tag: "INTEGRADOR",
                content: "Veamos c\u00f3mo variables, operadores, condicionales y bucles trabajan juntos para resolver un problema real: evaluar las notas de un curso.",
                code: "# Algoritmo: Evaluacion de un curso\nnombres = [\"Ana\", \"Carlos\", \"Mia\", \"Luis\", \"Sara\"]\nnotas   = [8, 5, 9, 6, 4]\n\naprobados  = 0\nreprobados = 0\ntotal      = 0\n\nfor i in range(len(nombres)):\n    nombre = nombres[i]\n    nota   = notas[i]\n    total  = total + nota\n\n    if nota >= 6:\n        estado = \"Aprobado\"\n        aprobados = aprobados + 1\n    else:\n        estado = \"Reprobado\"\n        reprobados = reprobados + 1\n\n    print(nombre + \":\", nota, \"->\", estado)\n\npromedio = total / len(notas)\nprint(\"Promedio del curso:\", promedio)\nprint(\"Aprobados:\", aprobados, \"| Reprobados:\", reprobados)",
                callout: null
              }
            ],
            exercises: [
              {
                id: "l3e1",
                title: "Ejercicio 1 \u2014 Mayor de dos n\u00fameros",
                description: "Dise\u00f1\u00e1 un algoritmo que compare a = 45 y b = 72, y muestre cu\u00e1l es el mayor.",
                starter: "a = 45\nb = 72\n\n# Escribi el algoritmo con if/elif/else\n",
                solution: "a = 45\nb = 72\n\nif a > b:\n    print(\"El mayor es:\", a)\nelif b > a:\n    print(\"El mayor es:\", b)\nelse:\n    print(\"Los dos numeros son iguales\")",
                hint: "Necesit\u00e1s 3 casos: a > b, b > a, o iguales (else)."
              },
              {
                id: "l3e2",
                title: "Ejercicio 2 \u2014 Suma acumulada",
                description: "Us\u00e1 un bucle for para sumar todos los n\u00fameros del 1 al 100. El resultado debe ser 5050.",
                starter: "suma_total = 0\n\nfor numero in range(1, 101):\n    suma_total = \n\nprint(\"La suma del 1 al 100 es:\", suma_total)",
                solution: "suma_total = 0\n\nfor numero in range(1, 101):\n    suma_total = suma_total + numero\n\nprint(\"La suma del 1 al 100 es:\", suma_total)",
                hint: "En cada vuelta sumale el numero actual al acumulador: suma_total = suma_total + numero"
              },
              {
                id: "l3e3",
                title: "Ejercicio 3 \u2014 Contador de aprobados",
                description: "Dada la lista de notas [8, 4, 6, 3, 9, 5, 7, 2], recorrela y cont\u00e1 cu\u00e1ntos aprobaron (nota >= 6) y cu\u00e1ntos reprobaron.",
                starter: "notas = [8, 4, 6, 3, 9, 5, 7, 2]\naprobados = 0\nreprobados = 0\n\nfor nota in notas:\n    if :\n        aprobados = \n    else:\n        reprobados = \n\nprint(\"Aprobados:\", aprobados)\nprint(\"Reprobados:\", reprobados)",
                solution: "notas = [8, 4, 6, 3, 9, 5, 7, 2]\naprobados = 0\nreprobados = 0\n\nfor nota in notas:\n    if nota >= 6:\n        aprobados = aprobados + 1\n    else:\n        reprobados = reprobados + 1\n\nprint(\"Aprobados:\", aprobados)\nprint(\"Reprobados:\", reprobados)",
                hint: "Si nota >= 6 sum\u00e1 1 a aprobados, sino sum\u00e1 1 a reprobados."
              },
              {
                id: "l3e4",
                title: "Ejercicio 4 \u2014 Calculadora de descuentos",
                description: "Precios: [250, 800, 1200, 450, 3000]. Si el precio es mayor a $500 tiene 15% de descuento. Mostr\u00e1 cada precio y el total.",
                starter: "precios = [250, 800, 1200, 450, 3000]\ntotal = 0\n\nfor precio in precios:\n    if :\n        precio_final = \n        print(\"Precio:\", precio, \"-> Con 15% OFF:\", precio_final)\n    else:\n        precio_final = \n        print(\"Precio:\", precio, \"-> Sin descuento:\", precio_final)\n    total = \n\nprint(\"Total a pagar: $\", total)",
                solution: "precios = [250, 800, 1200, 450, 3000]\ntotal = 0\n\nfor precio in precios:\n    if precio > 500:\n        precio_final = precio * 0.85\n        print(\"Precio:\", precio, \"-> Con 15% OFF:\", precio_final)\n    else:\n        precio_final = precio\n        print(\"Precio:\", precio, \"-> Sin descuento:\", precio_final)\n    total = total + precio_final\n\nprint(\"Total a pagar: $\", total)",
                hint: "15% de descuento = precio * 0.85. Acumul\u00e1 cada precio_final en total."
              }
            ]
          }
        ],
        classActivities: [
          {
            id: "a1",
            difficulty: "F\u00e1cil",
            difficultyColor: "#22C55E",
            title: "Presentaci\u00f3n con variables",
            description: "Individualmente, cre\u00e1 un programa que guarde tu nombre, tu edad, tu comida favorita y tu hobby en variables. Luego us\u00e1 print() para mostrar una presentaci\u00f3n completa en al menos 4 l\u00edneas.\n\nEjemplo de salida:\n\u2022 Mi nombre es Ana\n\u2022 Tengo 22 a\u00f1os\n\u2022 Mi comida favorita es la pizza\n\u2022 Me gusta jugar al f\u00fatbol",
            timeEstimate: "10 minutos",
            objectives: [
              "Crear variables de distintos tipos (str, int)",
              "Usar print() para mostrar informaci\u00f3n formateada",
              "Practicar la asignaci\u00f3n de valores"
            ]
          },
          {
            id: "a2",
            difficulty: "Intermedio",
            difficultyColor: "#F59E0B",
            title: "Algoritmo en la vida real",
            description: "En parejas, elijan un proceso cotidiano (preparar una receta, sacar dinero del cajero, hacer una compra online) y:\n\n1. Escriban el algoritmo en pseudoc\u00f3digo (pasos en espa\u00f1ol).\n2. Traduzcan al menos 3 pasos a c\u00f3digo Python usando variables, un condicional y un print().\n3. Agreguen al menos una operaci\u00f3n matem\u00e1tica (calcular precio, edad, etc.).\n4. Presenten al grupo y expliquen qu\u00e9 decisiones toma su programa.",
            timeEstimate: "20 minutos",
            objectives: [
              "Identificar algoritmos en situaciones cotidianas",
              "Traducir pseudoc\u00f3digo a Python",
              "Combinar variables, operadores y condicionales",
              "Comunicar soluciones al grupo"
            ]
          },
          {
            id: "a3",
            difficulty: "Dif\u00edcil",
            difficultyColor: "#EF4444",
            title: "Mini-sistema de registro",
            description: "En grupos de 3, creen un programa que simule el registro de 5 alumnos en un curso:\n\n1. Guarden los nombres en una lista y las notas de admisi\u00f3n en otra lista.\n2. Recorran ambas listas con un bucle for.\n3. Si la nota es >= 7, el alumno queda 'Admitido'. Si es >= 5, queda 'En lista de espera'. Si es < 5, queda 'Rechazado'.\n4. Al final muestren la cantidad de admitidos, en espera y rechazados.\n5. Calculen y muestren el promedio general de notas.",
            timeEstimate: "30 minutos",
            objectives: [
              "Trabajar con listas y bucles for",
              "Aplicar condicionales m\u00faltiples (if/elif/else)",
              "Usar contadores y acumuladores",
              "Resolver un problema completo integrando todos los conceptos del d\u00eda"
            ]
          }
        ],
        homework: {
          title: "Tarea: Mini-sistema de calificaciones",
          description: "Cre\u00e1 un programa Python que haga lo siguiente:\n\n1. Guard\u00e1 en variables el nombre de un alumno y sus 4 notas del a\u00f1o.\n2. Calcul\u00e1 el promedio.\n3. Mostr\u00e1 si aprob\u00f3 (promedio \u2265 6) o reprob\u00f3.\n4. Si aprob\u00f3, mostr\u00e1 un mensaje de felicitaci\u00f3n. Si reprob\u00f3, mostr\u00e1 cu\u00e1ntos puntos le faltan para llegar a 6.\n5. Us\u00e1 un bucle for para listar las 4 notas numeradas.",
          deliverable: "Archivo tarea_dia1.py con el c\u00f3digo comentado (cada secci\u00f3n explicada con #)",
          dueDate: "Para la pr\u00f3xima clase",
          extraChallenge: "\u00bfPod\u00e9s calcular cu\u00e1l fue la nota m\u00e1s alta y la m\u00e1s baja? Pista: investig\u00e1 las funciones max() y min() de Python."
        }
      }
    ]
  },
  {
    id: "html-css",
    name: "HTML & CSS",
    icon: "\u{1F3A8}",
    color: "#F97316",
    accent: "#FB923C",
    modules: [
      {
        id: 1, day: "D\u00eda 1", title: "Estructura HTML y primeros estilos", status: "coming_soon",
        lessons: [], classActivities: [],
        homework: { title: "", description: "", deliverable: "", dueDate: "", extraChallenge: "" }
      }
    ]
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "\u26a1",
    color: "#EAB308",
    accent: "#FDE047",
    modules: [
      {
        id: 1, day: "D\u00eda 1", title: "Fundamentos de JavaScript", status: "coming_soon",
        lessons: [], classActivities: [],
        homework: { title: "", description: "", deliverable: "", dueDate: "", extraChallenge: "" }
      }
    ]
  },
  {
    id: "databases",
    name: "Bases de Datos",
    icon: "\u{1F5C4}\ufe0f",
    color: "#8B5CF6",
    accent: "#A78BFA",
    modules: [
      {
        id: 1, day: "D\u00eda 1", title: "Introducci\u00f3n a Bases de Datos", status: "coming_soon",
        lessons: [], classActivities: [],
        homework: { title: "", description: "", deliverable: "", dueDate: "", extraChallenge: "" }
      }
    ]
  }
];

// ─── STATE ───────────────────────────────────────────────────────
let activeCourse  = courses[0];
let activeModule  = courses[0].modules[0];
let activeLesson  = courses[0].modules[0].lessons[0];
let activeTab     = "teoria";
let sidebarOpen   = true;
const exStates    = {};

// ─── HELPERS ─────────────────────────────────────────────────────
function esc(s) {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function getEx(ex) {
  if (!exStates[ex.id]) {
    exStates[ex.id] = {
      code: ex.starter,
      showHint: false,
      showSolution: false,
      output: "",
      outputVisible: false,
      isError: false
    };
  }
  return exStates[ex.id];
}

// ─── RENDER: FULL PAGE ──────────────────────────────────────────
function render() {
  var c = activeCourse.color;
  var a = activeCourse.accent;

  document.getElementById("app").innerHTML =
    '<aside class="sidebar' + (sidebarOpen ? '' : ' closed') + '">' +
      renderSidebar(c, a) +
    '</aside>' +
    '<div class="main">' +
      renderHeader(c) +
      renderLessonNav(c) +
      renderTabs(c) +
      '<div class="content"><div class="content-inner">' +
        renderContent(c) +
      '</div></div>' +
    '</div>';

  bindTextareas();
}

// ─── RENDER: SIDEBAR ────────────────────────────────────────────
function renderSidebar(c, a) {
  var html = '';

  // Header
  html += '<div class="sidebar-header"><div class="sidebar-logo">' +
    '<div class="sidebar-logo-icon" style="background:linear-gradient(135deg,' + c + ',' + a + ')">&#x1F393;</div>' +
    '<div><div class="sidebar-logo-title">DevStudy</div>' +
    '<div class="sidebar-logo-sub">Tu aula de c\u00f3digo</div></div>' +
    '</div></div>';

  // Courses
  html += '<div class="sidebar-courses"><p class="sidebar-section-label">CURSOS</p>';
  for (var i = 0; i < courses.length; i++) {
    var cr = courses[i];
    var isActive = activeCourse.id === cr.id;
    html += '<button class="course-btn' + (isActive ? ' active' : '') + '" data-action="selectCourse" data-id="' + cr.id + '"' +
      ' style="' + (isActive ? 'background:' + cr.color + '12;border-color:' + cr.color + '35' : '') + '">' +
      '<span class="icon">' + cr.icon + '</span>' +
      '<span class="label" style="color:' + (isActive ? cr.color : '#3D5470') + ';font-weight:' + (isActive ? '700' : '400') + '">' + cr.name + '</span>' +
      '</button>';
  }
  html += '</div>';

  // Modules
  html += '<div class="sidebar-modules"><p class="sidebar-section-label">M\u00d3DULOS</p>';
  for (var j = 0; j < activeCourse.modules.length; j++) {
    var m = activeCourse.modules[j];
    var mActive = activeModule.id === m.id;
    var soon = m.status === "coming_soon";
    html += '<button class="module-btn' + (mActive ? ' active' : '') + (soon ? ' coming-soon' : '') + '" data-action="selectModule" data-id="' + m.id + '"' +
      ' style="' + (mActive ? 'background:' + c + '0F;border-color:' + c + '28' : '') + '">' +
      '<div class="day" style="color:' + c + '">' + m.day + '</div>' +
      '<div class="title">' + m.title + '</div>' +
      (soon ? '<div class="soon">Pr\u00f3ximamente</div>' : '') +
      '</button>';
  }
  html += '</div>';

  return html;
}

// ─── RENDER: HEADER ─────────────────────────────────────────────
function renderHeader(c) {
  return '<div class="header">' +
    '<button class="toggle-btn" data-action="toggleSidebar">&#9776;</button>' +
    '<div class="header-info">' +
      '<div class="header-breadcrumb">' +
        '<span class="course-icon">' + activeCourse.icon + '</span>' +
        '<span class="course-name" style="color:' + c + '">' + activeCourse.name + '</span>' +
        '<span class="sep">\u203a</span>' +
        '<span class="day">' + activeModule.day + '</span>' +
      '</div>' +
      '<h2 class="header-title">' + activeModule.title + '</h2>' +
    '</div>' +
    '</div>';
}

// ─── RENDER: LESSON NAV ────────────────────────────────────────
function renderLessonNav(c) {
  var show = activeModule.lessons.length > 0 && (activeTab === "teoria" || activeTab === "ejercicios");
  if (!show) return '';

  var html = '<div class="lesson-nav">';
  for (var i = 0; i < activeModule.lessons.length; i++) {
    var le = activeModule.lessons[i];
    var isActive = activeLesson && activeLesson.id === le.id;
    html += '<button class="lesson-btn" data-action="selectLesson" data-id="' + le.id + '"' +
      ' style="' + (isActive ? 'background:' + c + '16;border-color:' + c + '40;color:' + c + ';font-weight:700' : '') + '">' +
      '<span class="num">L' + le.number + '</span>' + le.title +
      '</button>';
  }
  html += '</div>';
  return html;
}

// ─── RENDER: TABS ───────────────────────────────────────────────
function renderTabs(c) {
  var tabs = [
    { id: "teoria",     label: "Teor\u00eda",              icon: "&#x1F4D6;" },
    { id: "ejercicios", label: "Ejercicios",          icon: "&#x1F4BB;" },
    { id: "actividad",  label: "Actividad de Clase",  icon: "&#x1F465;" },
    { id: "tarea",      label: "Tarea",               icon: "&#x1F4DD;" }
  ];

  var html = '<div class="tabs">';
  for (var i = 0; i < tabs.length; i++) {
    var t = tabs[i];
    var isActive = activeTab === t.id;
    html += '<button class="tab-btn" data-action="setTab" data-id="' + t.id + '"' +
      ' style="color:' + (isActive ? c : '#2D4060') + ';font-weight:' + (isActive ? '700' : '400') +
      ';border-bottom-color:' + (isActive ? c : 'transparent') + '">' +
      t.icon + ' ' + t.label +
      '</button>';
  }
  html += '</div>';
  return html;
}

// ─── RENDER: CONTENT ────────────────────────────────────────────
function renderContent(c) {
  if (activeTab === "teoria")     return renderTheory(c);
  if (activeTab === "ejercicios") return renderExercises(c);
  if (activeTab === "actividad")  return renderActivities(c);
  if (activeTab === "tarea")      return renderHomework(c);
  return '';
}

// ─── RENDER: THEORY ─────────────────────────────────────────────
function renderTheory(c) {
  if (!activeLesson || activeLesson.theory.length === 0)
    return '<div class="empty-state"><div class="icon">&#x1F6A7;</div><p>Contenido en construcci\u00f3n</p></div>';

  var html = '';
  for (var i = 0; i < activeLesson.theory.length; i++) {
    var sec = activeLesson.theory[i];
    html += '<div class="theory-card">' +
      '<div class="tag-row">' +
        '<span class="tag" style="background:' + c + '16;color:' + c + '">' + esc(sec.tag) + '</span>' +
        '<h3>' + esc(sec.heading) + '</h3>' +
      '</div>' +
      '<p class="theory-text">' + esc(sec.content) + '</p>' +
      '<pre class="code-block" style="border:1px solid ' + c + '33;border-left:3px solid ' + c + '">' + esc(sec.code) + '</pre>' +
      (sec.callout ? '<div class="callout" style="background:' + c + '10;border:1px solid ' + c + '40">' + esc(sec.callout) + '</div>' : '') +
      '</div>';
  }
  return html;
}

// ─── RENDER: EXERCISES ──────────────────────────────────────────
function renderExercises(c) {
  if (!activeLesson || activeLesson.exercises.length === 0)
    return '<div class="empty-state"><div class="icon">&#x1F51C;</div><p>Ejercicios pr\u00f3ximamente</p></div>';

  var html = '<div class="section-header">' +
    '<h3>Ejercicios \u2014 ' + esc(activeLesson.title) + '</h3>' +
    '<p>Escrib\u00ed tu c\u00f3digo, ejecutalo y revis\u00e1 la pista o soluci\u00f3n si la necesit\u00e1s.</p></div>';

  for (var i = 0; i < activeLesson.exercises.length; i++) {
    var ex = activeLesson.exercises[i];
    var es = getEx(ex);

    html += '<div class="exercise-card" style="border:1px solid ' + c + '25" data-ex-card="' + ex.id + '">' +
      '<div class="exercise-header">' +
        '<span class="exercise-tag" style="background:' + c + '20;color:' + c + '">EJ ' + (i + 1) + '</span>' +
        '<h4>' + esc(ex.title) + '</h4>' +
      '</div>' +
      '<p class="exercise-desc">' + esc(ex.description) + '</p>' +
      '<textarea class="exercise-editor" data-ex-editor="' + ex.id + '"' +
        ' style="border-color:' + c + '30" spellcheck="false">' + esc(es.code) + '</textarea>' +
      '<div class="exercise-actions">' +
        '<button class="ex-btn ex-btn-run" data-action="runEx" data-id="' + ex.id + '" style="background:' + c + '">&#x25b6; Ejecutar</button>' +
        '<button class="ex-btn" data-action="toggleHint" data-id="' + ex.id + '" style="background:' + c + '15;color:' + c + '">' +
          '\u{1F4A1} ' + (es.showHint ? 'Ocultar pista' : 'Ver pista') + '</button>' +
        '<button class="ex-btn ex-btn-sol" data-action="toggleSol" data-id="' + ex.id + '">' +
          '\u{1F511} ' + (es.showSolution ? 'Ocultar' : 'Ver soluci\u00f3n') + '</button>' +
        '<button class="ex-btn ex-btn-reset" data-action="resetEx" data-id="' + ex.id + '">\u21ba Reiniciar</button>' +
      '</div>';

    if (es.showHint) {
      html += '<div class="hint-box" style="background:' + c + '0D;border:1px solid ' + c + '30">' +
        '\u{1F4A1} <strong>Pista:</strong> ' + esc(ex.hint) + '</div>';
    }
    if (es.showSolution) {
      html += '<pre class="code-block" style="border:1px solid ' + c + '33;border-left:3px solid ' + c + '">' + esc(ex.solution) + '</pre>';
    }
    if (es.outputVisible) {
      html += '<div class="output-box">' +
        '<p class="output-label">OUTPUT</p>' +
        '<pre class="output-text ' + (es.isError ? 'error' : 'success') + '">' + esc(es.output) + '</pre>' +
        '</div>';
    }

    html += '</div>';
  }
  return html;
}

// ─── RENDER: ACTIVITIES ─────────────────────────────────────────
function renderActivities(c) {
  var acts = activeModule.classActivities;
  if (!acts || acts.length === 0)
    return '<div class="empty-state"><div class="icon">&#x1F51C;</div><p>Actividades pr\u00f3ximamente</p></div>';

  var html = '<div class="section-header">' +
    '<h3>Actividades de Clase \u2014 ' + esc(activeModule.day) + '</h3>' +
    '<p>3 actividades con dificultad progresiva. Completalas en orden.</p></div>';

  for (var i = 0; i < acts.length; i++) {
    var act = acts[i];
    var dc = act.difficultyColor;
    var timeParts = act.timeEstimate.split(" ");

    html += '<div class="activity-card" style="background:linear-gradient(135deg,' + dc + '08,' + dc + '03);border:1px solid ' + dc + '28">' +
      '<div class="activity-top">' +
        '<div class="activity-info">' +
          '<div class="activity-badges">' +
            '<span class="activity-badge" style="background:' + dc + ';color:#000">\u{1F465} ACTIVIDAD ' + (i + 1) + '</span>' +
            '<span class="activity-badge" style="background:' + dc + '18;color:' + dc + '">' + act.difficulty.toUpperCase() + '</span>' +
          '</div>' +
          '<h3>' + esc(act.title) + '</h3>' +
          '<p class="activity-desc">' + esc(act.description) + '</p>' +
        '</div>' +
        '<div class="activity-time" style="background:' + dc + '14;border:1px solid ' + dc + '30">' +
          '<div class="num" style="color:' + dc + '">' + timeParts[0] + '</div>' +
          '<div class="unit">' + timeParts.slice(1).join(" ") + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="objectives-box"><h4 class="objectives-title">OBJETIVOS</h4>';

    for (var j = 0; j < act.objectives.length; j++) {
      html += '<div class="objective-item">' +
        '<div class="objective-num" style="background:' + dc + '16;border:1px solid ' + dc + '30;color:' + dc + '">' + (j + 1) + '</div>' +
        '<span class="objective-text">' + esc(act.objectives[j]) + '</span>' +
        '</div>';
    }
    html += '</div></div>';
  }
  return html;
}

// ─── RENDER: HOMEWORK ───────────────────────────────────────────
function renderHomework(c) {
  var hw = activeModule.homework;
  if (!hw || !hw.description)
    return '<div class="empty-state"><div class="icon">&#x1F51C;</div><p>Tarea pr\u00f3ximamente</p></div>';

  var html = '<div class="homework-card">' +
    '<span class="homework-tag">&#x1F4DD; TAREA \u2014 ' + esc(activeModule.day) + '</span>' +
    '<h3>' + esc(hw.title) + '</h3>' +
    '<p class="homework-desc">' + esc(hw.description) + '</p>' +
    '<div class="homework-meta">' +
      '<div class="homework-meta-item"><div class="homework-meta-label">ENTREGABLE</div><div class="homework-meta-value">' + esc(hw.deliverable) + '</div></div>' +
      '<div class="homework-meta-item"><div class="homework-meta-label">FECHA</div><div class="homework-meta-value">' + esc(hw.dueDate) + '</div></div>' +
    '</div></div>';

  if (hw.extraChallenge) {
    html += '<div class="extra-challenge" style="background:' + c + '0A;border:1px solid ' + c + '25">' +
      '<span class="star">&#x2B50;</span>' +
      '<div><div class="extra-label" style="color:' + c + '">DESAF\u00cdO EXTRA</div>' +
      '<p class="extra-text">' + esc(hw.extraChallenge) + '</p></div></div>';
  }
  return html;
}

// ─── TEXTAREA BINDING ───────────────────────────────────────────
function bindTextareas() {
  var editors = document.querySelectorAll("[data-ex-editor]");
  for (var i = 0; i < editors.length; i++) {
    (function(ta) {
      ta.addEventListener("input", function() {
        var id = ta.getAttribute("data-ex-editor");
        if (exStates[id]) exStates[id].code = ta.value;
      });
    })(editors[i]);
  }
}

// ─── EXERCISE RUNNER ────────────────────────────────────────────
function runExercise(exId) {
  var es = exStates[exId];
  if (!es) return;

  var lines = [];
  var fakePrint = function() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) args.push(String(arguments[i]));
    lines.push(args.join(" "));
  };

  try {
    var js = es.code
      .replace(/print\s*\(/g, "__p__(")
      .replace(/\bTrue\b/g, "true")
      .replace(/\bFalse\b/g, "false")
      .replace(/\band\b/g, "&&")
      .replace(/\bor\b/g, "||")
      .replace(/\bnot\b/g, "!");

    // Provide range(), len(), type() helpers
    var helpers =
      "function range(a,b,c){var r=[];if(b===undefined){b=a;a=0;}if(!c)c=1;" +
      "if(c>0)for(var i=a;i<b;i+=c)r.push(i);" +
      "else for(var i=a;i>b;i+=c)r.push(i);return r;}" +
      "function len(x){return x.length;}" +
      "function type(x){return '<class \\'' + typeof x + '\\'>';}";

    new Function("__p__", helpers + js)(fakePrint);
    es.output = lines.join("\n") || "(sin salida visible)";
    es.isError = false;
  } catch (e) {
    es.output = "\u26a0 " + e.message;
    es.isError = true;
  }
  es.outputVisible = true;
  renderContentArea();
}

// ─── ACTIONS ────────────────────────────────────────────────────
function selectCourse(id) {
  for (var i = 0; i < courses.length; i++) {
    if (courses[i].id === id) {
      activeCourse = courses[i];
      activeModule = activeCourse.modules[0];
      activeLesson = activeModule.lessons[0] || null;
      activeTab = "teoria";
      render();
      return;
    }
  }
}

function selectModule(id) {
  for (var i = 0; i < activeCourse.modules.length; i++) {
    var m = activeCourse.modules[i];
    if (m.id === Number(id)) {
      if (m.status === "coming_soon") return;
      activeModule = m;
      activeLesson = m.lessons[0] || null;
      activeTab = "teoria";
      render();
      return;
    }
  }
}

function selectLesson(id) {
  for (var i = 0; i < activeModule.lessons.length; i++) {
    if (activeModule.lessons[i].id === id) {
      activeLesson = activeModule.lessons[i];
      render();
      return;
    }
  }
}

function setTab(id) {
  activeTab = id;
  render();
}

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  render();
}

function toggleHint(exId) {
  var es = exStates[exId];
  if (es) { es.showHint = !es.showHint; renderContentArea(); }
}

function toggleSolution(exId) {
  var es = exStates[exId];
  if (es) { es.showSolution = !es.showSolution; renderContentArea(); }
}

function resetExercise(exId) {
  // Find exercise to get original starter
  var exercises = getAllExercises();
  for (var i = 0; i < exercises.length; i++) {
    if (exercises[i].id === exId) {
      exStates[exId] = {
        code: exercises[i].starter,
        showHint: false,
        showSolution: false,
        output: "",
        outputVisible: false,
        isError: false
      };
      renderContentArea();
      return;
    }
  }
}

function getAllExercises() {
  var all = [];
  for (var c = 0; c < courses.length; c++) {
    for (var m = 0; m < courses[c].modules.length; m++) {
      for (var l = 0; l < courses[c].modules[m].lessons.length; l++) {
        all = all.concat(courses[c].modules[m].lessons[l].exercises);
      }
    }
  }
  return all;
}

// Partial render: only update content area (preserves sidebar/header)
function renderContentArea() {
  var contentInner = document.querySelector(".content-inner");
  if (contentInner) {
    contentInner.innerHTML = renderContent(activeCourse.color);
    bindTextareas();
  }
}

// ─── GLOBAL EVENT HANDLER ───────────────────────────────────────
function handleClick(e) {
  var btn = e.target.closest("[data-action]");
  if (!btn) return;

  var action = btn.getAttribute("data-action");
  var id = btn.getAttribute("data-id");

  switch (action) {
    case "selectCourse":  selectCourse(id); break;
    case "selectModule":  selectModule(id); break;
    case "selectLesson":  selectLesson(id); break;
    case "setTab":        setTab(id); break;
    case "toggleSidebar": toggleSidebar(); break;
    case "runEx":         saveTextareaValue(id); runExercise(id); break;
    case "toggleHint":    saveTextareaValue(id); toggleHint(id); break;
    case "toggleSol":     saveTextareaValue(id); toggleSolution(id); break;
    case "resetEx":       resetExercise(id); break;
  }
}

function saveTextareaValue(exId) {
  var ta = document.querySelector('[data-ex-editor="' + exId + '"]');
  if (ta && exStates[exId]) exStates[exId].code = ta.value;
}

// ─── INIT ───────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function() {
  document.body.addEventListener("click", handleClick);
  render();
});
