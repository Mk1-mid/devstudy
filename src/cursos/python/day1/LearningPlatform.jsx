import React, { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const courses = [
  {
    id: "python",
    name: "Python",
    icon: "🐍",
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
                content:
                  "Antes de escribir una sola línea de código, necesitamos entender qué es un algoritmo. Tómate un momento y pensá en cómo resolvés problemas cotidianos: preparar un mate, ir al trabajo, cocinar un plato. Aunque no los percibás, los algoritmos están presentes en tu día a día.\n\nUn algoritmo es una serie de pasos ordenados y finitos que resuelven un problema determinado. Cada paso es claro, preciso y lleva al siguiente hasta llegar a un resultado.",
                code: `# Algoritmo cotidiano: preparar mate\n# Paso 1 → Calentar el agua\n# Paso 2 → Poner yerba en el mate\n# Paso 3 → Cebar el agua a 75°C\n# Paso 4 → Tomar el mate\n\n# En programación hacemos lo mismo pero le decimos\n# al programa exactamente QUÉ hacer y en QUÉ orden.`,
                callout: "💡 Clave: Los algoritmos tienen 3 características — son ORDENADOS (los pasos tienen secuencia), FINITOS (tienen inicio y fin) y PRECISOS (cada paso es claro y sin ambigüedad).",
              },
              {
                heading: "¿Qué es Python?",
                tag: "LENGUAJE",
                content:
                  "Python es un lenguaje de programación de alto nivel que se ha convertido en uno de los más populares y utilizados hoy por su versatilidad, sencillez y potencia.\n\nFue creado por Guido Van Rossum y se lanzó en 1991. Desde entonces ganó enorme demanda global en ciencia de datos, inteligencia artificial, desarrollo web y automatización.\n\n🔹 Sintaxis simple: su código se parece al inglés cotidiano, fácil de leer y escribir incluso para principiantes.\n🔹 Orientado a objetos: permite crear objetos y reutilizar código para resolver problemas complejos.",
                code: `# Python es legible como el lenguaje natural\n# Así se imprime un mensaje en pantalla:\nprint("Hola, bienvenido a Python!")\n\n# Así se guarda información en una variable:\nmi_nombre = "Guido"\nanio_creacion = 1991\n\nprint("Python fue creado por:", mi_nombre)\nprint("Año de lanzamiento:", anio_creacion)`,
                callout: null,
              },
              {
                heading: "Mensajes con print()",
                tag: "FUNCIÓN",
                content:
                  "La función print() es la primera herramienta que vas a usar en Python. Sirve para mostrar mensajes e información en pantalla. Es la forma en que el programa 'habla' con vos.",
                code: `# print() con texto (string)\nprint("Hola mundo")\nprint('También funciona con comillas simples')\n\n# print() con números\nprint(42)\nprint(3.14)\n\n# print() con varias cosas a la vez\nprint("Mi edad es:", 25)\nprint("Suma:", 10 + 5)\n\n# print() con variable\nlenguaje = "Python"\nprint("Estoy aprendiendo", lenguaje)`,
                callout: null,
              },
              {
                heading: "Variables",
                tag: "VARIABLES",
                content:
                  "Una variable es un espacio en memoria donde guardamos información para usarla después. En Python no necesitás declarar el tipo, simplemente asignás un valor con el operador =.\n\nReglas para nombrar variables:\n• Solo letras, números y guion bajo _\n• No pueden empezar con un número\n• No se usan espacios (se usa snake_case: mi_variable)\n• Son sensibles a mayúsculas: nombre ≠ Nombre",
                code: `# Crear variables\nnombre   = "Ana"     # texto  → str\nedad     = 25        # entero → int\naltura   = 1.68      # decimal → float\nestudia  = True      # verdadero/falso → bool\n\n# Ver el tipo de dato\nprint(type(nombre))   # <class 'str'>\nprint(type(edad))     # <class 'int'>\nprint(type(altura))   # <class 'float'>\nprint(type(estudia))  # <class 'bool'>\n\n# Reasignar una variable\nedad = 26\nprint("Nuevo valor de edad:", edad)`,
                callout: null,
              },
              {
                heading: "Operaciones básicas",
                tag: "OPERADORES",
                content:
                  "Python puede funcionar como una calculadora muy potente. Los operadores aritméticos nos permiten hacer cálculos con números y variables.",
                code: `a = 10\nb = 3\n\nprint("Suma:          ", a + b)    # 13\nprint("Resta:         ", a - b)    # 7\nprint("Multiplicación:", a * b)    # 30\nprint("División:      ", a / b)    # 3.333...\nprint("División entera:", a // b)  # 3\nprint("Módulo (resto):", a % b)    # 1\nprint("Potencia:      ", a ** b)   # 1000\n\n# Concatenar textos con +\nprimer_nombre = "Guido"\napellido      = "Van Rossum"\nnombre_completo = primer_nombre + " " + apellido\nprint(nombre_completo)`,
                callout: null,
              },
            ],
            exercises: [
              {
                id: "l1e1",
                title: "Ejercicio 1 — Tu presentación",
                description:
                  "Creá variables con tu nombre, tu edad y tu ciudad. Luego usá print() para mostrar una presentación como: 'Me llamo Ana, tengo 25 años y vivo en Buenos Aires.'",
                starter: `# Completá con tus datos\nmi_nombre = \nmi_edad   = \nmi_ciudad = \n\n# Mostrá la presentación con print()\nprint("Me llamo", mi_nombre)`,
                solution: `mi_nombre = "Ana"\nmi_edad   = 25\nmi_ciudad = "Buenos Aires"\n\nprint("Me llamo", mi_nombre + ", tengo", mi_edad, "años y vivo en", mi_ciudad + ".")`,
                hint: 'El texto va entre comillas "así". Los números sin comillas. Para unir cosas en print() usá comas.',
              },
              {
                id: "l1e2",
                title: "Ejercicio 2 — Calculadora de notas",
                description:
                  "Tenés 3 notas de examen: 7, 9 y 6. Guardálas en variables, calculá el promedio y mostrá el resultado.",
                starter: `# Guardá las notas\nnota1 = \nnota2 = \nnota3 = \n\n# Calculá el promedio\npromedio = \n\nprint("Promedio:", promedio)`,
                solution: `nota1 = 7\nnota2 = 9\nnota3 = 6\n\npromedio = (nota1 + nota2 + nota3) / 3\n\nprint("Promedio:", promedio)`,
                hint: "Promedio = suma de notas dividido cantidad. Usá paréntesis: (nota1 + nota2 + nota3) / 3",
              },
              {
                id: "l1e3",
                title: "Ejercicio 3 — Precio con IVA",
                description:
                  "Un producto cuesta $1500. Calculá el precio con 21% de IVA y mostrá ambos valores.",
                starter: `precio_base = 1500\n\n# Calculá el IVA (21%)\niva = \n\n# Calculá el precio final\nprecio_final = \n\nprint("Precio sin IVA: $", precio_base)\nprint("IVA (21%):      $", iva)\nprint("Precio con IVA: $", precio_final)`,
                solution: `precio_base = 1500\n\niva = precio_base * 0.21\nprecio_final = precio_base + iva\n\nprint("Precio sin IVA: $", precio_base)\nprint("IVA (21%):      $", iva)\nprint("Precio con IVA: $", precio_final)`,
                hint: "IVA = precio_base × 0.21  →  Precio final = precio_base + iva",
              },
              {
                id: "l1e4",
                title: "Ejercicio 4 — Conversor de temperatura",
                description:
                  "La temperatura en Buenos Aires es de 30°C. Convertila a Fahrenheit usando la fórmula: F = C × 9/5 + 32. Guardá ambos valores en variables y mostrá el resultado.",
                starter: `celsius = 30\n\n# Convertí a Fahrenheit\nfahrenheit = \n\nprint("Temperatura en Celsius:", celsius)\nprint("Temperatura en Fahrenheit:", fahrenheit)`,
                solution: `celsius = 30\n\nfahrenheit = celsius * 9/5 + 32\n\nprint("Temperatura en Celsius:", celsius)\nprint("Temperatura en Fahrenheit:", fahrenheit)`,
                hint: "La fórmula es: fahrenheit = celsius * 9/5 + 32. Recordá que Python respeta el orden de operaciones.",
              },
              {
                id: "l1e5",
                title: "Ejercicio 5 — Calculadora de cambio",
                description:
                  "Un cliente paga $5000 por un producto que cuesta $3450. Calculá el vuelto y mostrá un ticket con: precio del producto, monto pagado y vuelto.",
                starter: `precio_producto = 3450\nmonto_pagado = 5000\n\n# Calculá el vuelto\nvuelto = \n\n# Mostrá el ticket\nprint("===== TICKET =====")\nprint("Producto:    $", precio_producto)\nprint("Pagó:        $", monto_pagado)\nprint("Vuelto:      $", vuelto)\nprint("=================")`,
                solution: `precio_producto = 3450\nmonto_pagado = 5000\n\nvuelto = monto_pagado - precio_producto\n\nprint("===== TICKET =====")\nprint("Producto:    $", precio_producto)\nprint("Pagó:        $", monto_pagado)\nprint("Vuelto:      $", vuelto)\nprint("=================")`,
                hint: "El vuelto es la resta: monto_pagado - precio_producto.",
              },
            ],
          },
          {
            id: "l2",
            number: 2,
            title: "Condicionales y bucles",
            theory: [
              {
                heading: "Condicionales — if / elif / else",
                tag: "CONDICIONALES",
                content:
                  "Los condicionales permiten que el programa tome decisiones. Dependiendo de si una condición es verdadera o falsa, el código ejecuta distintos bloques.\n\n• if → 'si esto es verdad, hacé esto'\n• elif → 'sino, si esto otro es verdad, hacé esto'\n• else → 'en cualquier otro caso, hacé esto'",
                code: `# Estructura básica de if/elif/else\ntemperatura = 30\n\nif temperatura > 35:\n    print("Hace mucho calor, quedate en casa")\nelif temperatura > 25:\n    print("Lindo dia, sali a pasear")\nelif temperatura > 15:\n    print("Llevate una campera")\nelse:\n    print("Hace frio, abrigate bien")\n\n# En Python la indentacion (4 espacios) es OBLIGATORIA`,
                callout: "⚠️ Importante: en Python la indentación (los espacios al inicio de línea) no es estética, ¡es parte de la sintaxis! Siempre usá 4 espacios para cada nivel de código.",
              },
              {
                heading: "Operadores de comparación",
                tag: "COMPARACIÓN",
                content:
                  "Para construir condiciones necesitamos comparar valores. Python tiene 6 operadores de comparación, todos devuelven True o False.",
                code: `x = 10\ny = 5\n\nprint(x == y)   # False -> son iguales?\nprint(x != y)   # True  -> son distintos?\nprint(x > y)    # True  -> x es mayor?\nprint(x < y)    # False -> x es menor?\nprint(x >= 10)  # True  -> mayor o igual?\nprint(x <= 9)   # False -> menor o igual?\n\n# Operadores logicos para combinar condiciones\nedad = 20\ntieneCarnet = True\n\nif edad >= 18 and tieneCarnet:\n    print("Puede manejar")\nif edad < 18 or not tieneCarnet:\n    print("No puede manejar")`,
                callout: null,
              },
              {
                heading: "Bucles — ¿Para qué sirven?",
                tag: "BUCLES",
                content:
                  "Los bucles son una de las estructuras fundamentales en Python. Permiten la ejecución repetida de un conjunto de instrucciones sin escribir el mismo código una y otra vez.\n\nSon esenciales para la lógica de los programas, ya que facilitan tareas que deben iterarse varias veces: recorrer una lista, repetir un cálculo, mostrar una tabla.",
                code: `# Sin bucle (tedioso):\nprint("Vuelta 1")\nprint("Vuelta 2")\nprint("Vuelta 3")\n\n# Con bucle for (elegante):\nfor i in range(1, 4):\n    print("Vuelta", i)\n\n# El bucle escala a 1000 repeticiones sin cambiar el codigo.`,
                callout: null,
              },
              {
                heading: "Bucle for",
                tag: "FOR",
                content:
                  "El bucle for recorre una secuencia y ejecuta el bloque de código por cada elemento. Es ideal cuando sabés cuántas veces repetir.",
                code: `# for con range()\nfor numero in range(5):       # 0, 1, 2, 3, 4\n    print("Numero:", numero)\n\n# range(inicio, fin, paso)\nfor par in range(0, 10, 2):   # 0, 2, 4, 6, 8\n    print(par)\n\n# for con lista\ncolores = ["rojo", "verde", "azul"]\nfor color in colores:\n    print("Color:", color)\n\n# Tabla de multiplicar del 3\nfor i in range(1, 11):\n    print("3 x", i, "=", 3 * i)`,
                callout: null,
              },
              {
                heading: "Bucle while",
                tag: "WHILE",
                content:
                  "El bucle while repite el bloque MIENTRAS una condición sea verdadera. Se usa cuando no sabés exactamente cuántas repeticiones necesitás.",
                code: `# while basico\ncontador = 0\nwhile contador < 5:\n    print("Contador:", contador)\n    contador = contador + 1\n\n# Cuenta regresiva\ntiempo = 10\nwhile tiempo > 0:\n    print(tiempo, "segundos...")\n    tiempo = tiempo - 1\nprint("Despegue!")`,
                callout: "⚠️ Diferencia clave: usá for cuando sabés cuántas veces repetir, usá while cuando dependés de que una condición cambie.",
              },
            ],
            exercises: [
              {
                id: "l2e1",
                title: "Ejercicio 1 — Clasificador de notas",
                description:
                  "Dada una nota, mostrá si es 'Sobresaliente' (>=9), 'Muy Bueno' (>=7), 'Aprobado' (>=6) o 'Reprobado' (<6).",
                starter: `nota = 7\n\n# Usá if / elif / else para clasificar la nota\n`,
                solution: `nota = 7\n\nif nota >= 9:\n    print("Sobresaliente")\nelif nota >= 7:\n    print("Muy Bueno")\nelif nota >= 6:\n    print("Aprobado")\nelse:\n    print("Reprobado")`,
                hint: "Empezá por la condición más alta (>=9) y bajá. El else captura todo lo que no cumplió ningún if/elif.",
              },
              {
                id: "l2e2",
                title: "Ejercicio 2 — Tabla de multiplicar",
                description:
                  "Usá un bucle for para mostrar la tabla de multiplicar del número 7 (del 1 al 10).",
                starter: `for i in range(1, 11):\n    resultado = \n    print("7 x", i, "=", resultado)`,
                solution: `for i in range(1, 11):\n    resultado = 7 * i\n    print("7 x", i, "=", resultado)`,
                hint: "resultado = 7 * i  (multiplicá el número fijo por el contador del bucle)",
              },
              {
                id: "l2e3",
                title: "Ejercicio 3 — Cuenta regresiva",
                description:
                  "Usá un bucle while para mostrar una cuenta regresiva del 10 al 1, y al final imprimí '¡Ya!'.",
                starter: `numero = 10\n\nwhile numero >= 1:\n    print(numero)\n    numero = \n\nprint("Ya!")`,
                solution: `numero = 10\n\nwhile numero >= 1:\n    print(numero)\n    numero = numero - 1\n\nprint("Ya!")`,
                hint: "En cada vuelta del while restale 1 al número: numero = numero - 1",
              },
              {
                id: "l2e4",
                title: "Ejercicio 4 — Par o impar con bucle",
                description:
                  "Usá un bucle for para recorrer los números del 1 al 10 y mostrar si cada uno es par o impar.",
                starter: `for numero in range(1, 11):\n    # Verificá si es par o impar\n    if :\n        print(numero, "es par")\n    else:\n        print(numero, "es impar")`,
                solution: `for numero in range(1, 11):\n    if numero % 2 == 0:\n        print(numero, "es par")\n    else:\n        print(numero, "es impar")`,
                hint: "Un número es par si el resto de dividirlo por 2 es 0: numero % 2 == 0",
              },
              {
                id: "l2e5",
                title: "Ejercicio 5 — Categoría por edad",
                description:
                  "Dada una lista de edades [4, 12, 17, 25, 8, 65], recorrela con un for y clasificá cada una: 'Niño' (0-11), 'Adolescente' (12-17), 'Adulto' (18-64), 'Jubilado' (65+).",
                starter: `edades = [4, 12, 17, 25, 8, 65]\n\nfor edad in edades:\n    # Clasificá según la edad\n    if :\n        print(edad, "-> Niño")\n    elif :\n        print(edad, "-> Adolescente")\n    elif :\n        print(edad, "-> Adulto")\n    else:\n        print(edad, "-> Jubilado")`,
                solution: `edades = [4, 12, 17, 25, 8, 65]\n\nfor edad in edades:\n    if edad <= 11:\n        print(edad, "-> Niño")\n    elif edad <= 17:\n        print(edad, "-> Adolescente")\n    elif edad <= 64:\n        print(edad, "-> Adulto")\n    else:\n        print(edad, "-> Jubilado")`,
                hint: "Empezá por el rango más bajo: edad <= 11 para Niño, luego subí. El else captura 65+.",
              },
              {
                id: "l2e6",
                title: "Ejercicio 6 — Acumulador con while",
                description:
                  "Usá un bucle while para sumar los números pares del 2 al 20 (2+4+6+...+20). El resultado debe ser 110.",
                starter: `suma = 0\nnumero = 2\n\nwhile numero <= 20:\n    suma = \n    numero = \n\nprint("La suma de pares del 2 al 20 es:", suma)`,
                solution: `suma = 0\nnumero = 2\n\nwhile numero <= 20:\n    suma = suma + numero\n    numero = numero + 2\n\nprint("La suma de pares del 2 al 20 es:", suma)`,
                hint: "Sumá el numero actual al acumulador: suma = suma + numero. Avanzá de 2 en 2: numero = numero + 2",
              },
            ],
          },
          {
            id: "l3",
            number: 3,
            title: "Algoritmos",
            theory: [
              {
                heading: "Pensamiento algorítmico",
                tag: "ALGORITMIA",
                content:
                  "El pensamiento algorítmico es la capacidad de descomponer un problema complejo en pasos simples y ordenados. Es la habilidad más importante de un programador, incluso más que conocer la sintaxis de un lenguaje.\n\nAntes de escribir código, la buena práctica es pensar el algoritmo en papel o en pseudocódigo: describir los pasos en lenguaje natural sin preocuparse por la sintaxis.",
                code: `# Pseudocodigo -> luego Python\n\n# PROBLEMA: Saber si un numero es par o impar\n#\n# Pseudocodigo:\n# 1. Tomar un numero\n# 2. Dividirlo por 2 y obtener el resto\n# 3. Si el resto es 0 -> es par\n# 4. Si no -> es impar\n\n# Traduccion a Python:\nnumero = 14\n\nif numero % 2 == 0:\n    print(numero, "es par")\nelse:\n    print(numero, "es impar")`,
                callout: "💡 El operador % (módulo) devuelve el RESTO de la división. 14 % 2 = 0 (sin resto = par). 15 % 2 = 1 (con resto = impar).",
              },
              {
                heading: "Diagrama de flujo → código",
                tag: "DISEÑO",
                content:
                  "Un diagrama de flujo es la representación visual de un algoritmo. Aprender a leerlos y dibujarlos te ayuda a planificar el código antes de escribirlo.\n\n▭ Rectángulo → proceso (cálculo, asignación)\n◇ Rombo → decisión (condición verdadera/falsa)\n○ Óvalo → inicio / fin\n→ Flecha → dirección del flujo",
                code: `# Algoritmo completo pensado antes de codear:\n# INICIO\n#   1. Definir precio del producto\n#   2. ¿Tiene descuento?\n#      SI  -> restar 20% al precio\n#      NO  -> mantener precio\n#   3. Mostrar precio final\n# FIN\n\n# Traduccion:\nprecio = 1000\ntiene_descuento = True\n\nif tiene_descuento:\n    precio_final = precio * 0.80\n    print("Precio con 20% OFF: $", precio_final)\nelse:\n    precio_final = precio\n    print("Precio sin descuento: $", precio_final)`,
                callout: null,
              },
              {
                heading: "Algoritmo completo: uniendo todo",
                tag: "INTEGRADOR",
                content:
                  "Veamos cómo variables, operadores, condicionales y bucles trabajan juntos para resolver un problema real: evaluar las notas de un curso.",
                code: `# Algoritmo: Evaluacion de un curso\nnombres = ["Ana", "Carlos", "Mia", "Luis", "Sara"]\nnotas   = [8, 5, 9, 6, 4]\n\naprobados  = 0\nreprobados = 0\ntotal      = 0\n\nfor i in range(len(nombres)):\n    nombre = nombres[i]\n    nota   = notas[i]\n    total  = total + nota\n\n    if nota >= 6:\n        estado = "Aprobado"\n        aprobados = aprobados + 1\n    else:\n        estado = "Reprobado"\n        reprobados = reprobados + 1\n\n    print(nombre + ":", nota, "->", estado)\n\npromedio = total / len(notas)\nprint("Promedio del curso:", promedio)\nprint("Aprobados:", aprobados, "| Reprobados:", reprobados)`,
                callout: null,
              },
            ],
            exercises: [
              {
                id: "l3e1",
                title: "Ejercicio 1 — Mayor de dos números",
                description:
                  "Diseñá un algoritmo que compare a = 45 y b = 72, y muestre cuál es el mayor. Si son iguales, informarlo también.",
                starter: `a = 45\nb = 72\n\n# Escribi el algoritmo con if/elif/else\n`,
                solution: `a = 45\nb = 72\n\nif a > b:\n    print("El mayor es:", a)\nelif b > a:\n    print("El mayor es:", b)\nelse:\n    print("Los dos numeros son iguales")`,
                hint: "Necesitás 3 casos: a > b, b > a, o iguales (else).",
              },
              {
                id: "l3e2",
                title: "Ejercicio 2 — Suma acumulada",
                description:
                  "Usá un bucle for para sumar todos los números del 1 al 100. El resultado debe ser 5050.",
                starter: `suma_total = 0\n\nfor numero in range(1, 101):\n    suma_total = \n\nprint("La suma del 1 al 100 es:", suma_total)`,
                solution: `suma_total = 0\n\nfor numero in range(1, 101):\n    suma_total = suma_total + numero\n\nprint("La suma del 1 al 100 es:", suma_total)`,
                hint: "En cada vuelta sumale el numero actual al acumulador: suma_total = suma_total + numero",
              },
              {
                id: "l3e3",
                title: "Ejercicio 3 — Contador de aprobados",
                description:
                  "Dada la lista de notas [8, 4, 6, 3, 9, 5, 7, 2], recorrela con un for y contá cuántos aprobaron (nota >= 6) y cuántos reprobaron. Mostrá ambos totales al final.",
                starter: `notas = [8, 4, 6, 3, 9, 5, 7, 2]\naprobados = 0\nreprobados = 0\n\nfor nota in notas:\n    if :\n        aprobados = \n    else:\n        reprobados = \n\nprint("Aprobados:", aprobados)\nprint("Reprobados:", reprobados)`,
                solution: `notas = [8, 4, 6, 3, 9, 5, 7, 2]\naprobados = 0\nreprobados = 0\n\nfor nota in notas:\n    if nota >= 6:\n        aprobados = aprobados + 1\n    else:\n        reprobados = reprobados + 1\n\nprint("Aprobados:", aprobados)\nprint("Reprobados:", reprobados)`,
                hint: "Si nota >= 6 sumá 1 a aprobados, sino sumá 1 a reprobados. Usá contadores que arrancan en 0.",
              },
              {
                id: "l3e4",
                title: "Ejercicio 4 — Calculadora de descuentos",
                description:
                  "Un negocio tiene 5 productos con precios [250, 800, 1200, 450, 3000]. Si el precio es mayor a $500 tiene 15% de descuento, sino no tiene descuento. Recorrelos con un for, mostrá el precio original y el final de cada uno, y al final mostrá el total a pagar.",
                starter: `precios = [250, 800, 1200, 450, 3000]\ntotal = 0\n\nfor precio in precios:\n    if :\n        precio_final = \n        print("Precio:", precio, "-> Con 15% OFF:", precio_final)\n    else:\n        precio_final = \n        print("Precio:", precio, "-> Sin descuento:", precio_final)\n    total = \n\nprint("Total a pagar: $", total)`,
                solution: `precios = [250, 800, 1200, 450, 3000]\ntotal = 0\n\nfor precio in precios:\n    if precio > 500:\n        precio_final = precio * 0.85\n        print("Precio:", precio, "-> Con 15% OFF:", precio_final)\n    else:\n        precio_final = precio\n        print("Precio:", precio, "-> Sin descuento:", precio_final)\n    total = total + precio_final\n\nprint("Total a pagar: $", total)`,
                hint: "15% de descuento = precio * 0.85. Acumulá cada precio_final en total: total = total + precio_final",
              },
            ],
          },
        ],
        classActivities: [
          {
            id: "a1",
            difficulty: "Fácil",
            difficultyColor: "#22C55E",
            title: "Presentación con variables",
            description:
              "Individualmente, creá un programa que guarde tu nombre, tu edad, tu comida favorita y tu hobby en variables. Luego usá print() para mostrar una presentación completa en al menos 4 líneas.\n\nEjemplo de salida:\n• Mi nombre es Ana\n• Tengo 22 años\n• Mi comida favorita es la pizza\n• Me gusta jugar al fútbol",
            timeEstimate: "10 minutos",
            objectives: [
              "Crear variables de distintos tipos (str, int)",
              "Usar print() para mostrar información formateada",
              "Practicar la asignación de valores",
            ],
          },
          {
            id: "a2",
            difficulty: "Intermedio",
            difficultyColor: "#F59E0B",
            title: "Algoritmo en la vida real",
            description:
              "En parejas, elijan un proceso cotidiano (preparar una receta, sacar dinero del cajero, hacer una compra online) y:\n\n1. Escriban el algoritmo en pseudocódigo (pasos en español).\n2. Traduzcan al menos 3 pasos a código Python usando variables, un condicional y un print().\n3. Agreguen al menos una operación matemática (calcular precio, edad, etc.).\n4. Presenten al grupo y expliquen qué decisiones toma su programa.",
            timeEstimate: "20 minutos",
            objectives: [
              "Identificar algoritmos en situaciones cotidianas",
              "Traducir pseudocódigo a Python",
              "Combinar variables, operadores y condicionales",
              "Comunicar soluciones al grupo",
            ],
          },
          {
            id: "a3",
            difficulty: "Difícil",
            difficultyColor: "#EF4444",
            title: "Mini-sistema de registro",
            description:
              "En grupos de 3, creen un programa que simule el registro de 5 alumnos en un curso:\n\n1. Guarden los nombres en una lista y las notas de admisión en otra lista.\n2. Recorran ambas listas con un bucle for.\n3. Si la nota es >= 7, el alumno queda 'Admitido'. Si es >= 5, queda 'En lista de espera'. Si es < 5, queda 'Rechazado'.\n4. Al final muestren la cantidad de admitidos, en espera y rechazados.\n5. Calculen y muestren el promedio general de notas.",
            timeEstimate: "30 minutos",
            objectives: [
              "Trabajar con listas y bucles for",
              "Aplicar condicionales múltiples (if/elif/else)",
              "Usar contadores y acumuladores",
              "Resolver un problema completo integrando todos los conceptos del día",
            ],
          },
        ],
        homework: {
          title: "Tarea: Mini-sistema de calificaciones",
          description:
            "Creá un programa Python que haga lo siguiente:\n\n1. Guardá en variables el nombre de un alumno y sus 4 notas del año.\n2. Calculá el promedio.\n3. Mostrá si aprobó (promedio ≥ 6) o reprobó.\n4. Si aprobó, mostrá un mensaje de felicitación. Si reprobó, mostrá cuántos puntos le faltan para llegar a 6.\n5. Usá un bucle for para listar las 4 notas numeradas.",
          deliverable: "Archivo tarea_dia1.py con el código comentado (cada sección explicada con #)",
          dueDate: "Para la próxima clase",
          extraChallenge:
            "¿Podés calcular cuál fue la nota más alta y la más baja? Pista: investigá las funciones max() y min() de Python.",
        },
      },
    ],
  },
  {
    id: "html-css",
    name: "HTML & CSS",
    icon: "🎨",
    color: "#F97316",
    accent: "#FB923C",
    modules: [
      {
        id: 1, day: "Día 1", title: "Estructura HTML y primeros estilos", status: "coming_soon",
        lessons: [], classActivities: [],
        homework: { title: "", description: "", deliverable: "", dueDate: "", extraChallenge: "" },
      },
    ],
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "⚡",
    color: "#EAB308",
    accent: "#FDE047",
    modules: [
      {
        id: 1, day: "Día 1", title: "Fundamentos de JavaScript", status: "coming_soon",
        lessons: [], classActivities: [],
        homework: { title: "", description: "", deliverable: "", dueDate: "", extraChallenge: "" },
      },
    ],
  },
  {
    id: "databases",
    name: "Bases de Datos",
    icon: "🗄️",
    color: "#8B5CF6",
    accent: "#A78BFA",
    modules: [
      {
        id: 1, day: "Día 1", title: "Introducción a Bases de Datos", status: "coming_soon",
        lessons: [], classActivities: [],
        homework: { title: "", description: "", deliverable: "", dueDate: "", extraChallenge: "" },
      },
    ],
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const CodeBlock = ({ code, color }) => (
  <pre style={{
    background: "#060C1A", border: `1px solid ${color}33`, borderLeft: `3px solid ${color}`,
    borderRadius: "8px", padding: "16px 20px", fontFamily: "'Fira Code','Cascadia Code',monospace",
    fontSize: "12.5px", lineHeight: "1.75", color: "#CBD5E1", overflowX: "auto", margin: "14px 0 0",
  }}>
    <code>{code}</code>
  </pre>
);

const Callout = ({ text, color }) => (
  <div style={{
    background: `${color}10`, border: `1px solid ${color}40`, borderRadius: "10px",
    padding: "13px 17px", marginTop: "14px", color: "#CBD5E1", fontSize: "13px", lineHeight: "1.65",
  }}>{text}</div>
);

const EmptyState = ({ icon, text }) => (
  <div style={{ textAlign: "center", paddingTop: "70px" }}>
    <div style={{ fontSize: "52px", marginBottom: "14px" }}>{icon}</div>
    <p style={{ fontSize: "15px", color: "#334155" }}>{text}</p>
  </div>
);

// ─── EXERCISE CARD ───────────────────────────────────────────────────────────
const ExerciseCard = ({ exercise, color, index }) => {
  const [code, setCode] = useState(exercise.starter);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [output, setOutput] = useState("");
  const [outputVisible, setOutputVisible] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = () => {
    const lines = [];
    const fakePrint = (...args) => lines.push(args.map(a => String(a)).join(" "));
    try {
      let js = code
        .replace(/print\s*\(/g, "__p__(")
        .replace(/\bTrue\b/g, "true").replace(/\bFalse\b/g, "false")
        .replace(/\band\b/g, "&&").replace(/\bor\b/g, "||").replace(/\bnot\b/g, "!");
      // eslint-disable-next-line no-new-func
      new Function("__p__", js)(fakePrint);
      setOutput(lines.join("\n") || "(sin salida visible)");
      setIsError(false);
    } catch (e) {
      setOutput("⚠ " + e.message);
      setIsError(true);
    }
    setOutputVisible(true);
  };

  const btn = (bg, fg, extra = {}) => ({
    background: bg, color: fg, border: "none", borderRadius: "8px",
    padding: "8px 15px", fontSize: "12px", cursor: "pointer",
    fontFamily: "inherit", fontWeight: "600", ...extra,
  });

  return (
    <div style={{
      background: "#0A1020", border: `1px solid ${color}25`,
      borderRadius: "14px", padding: "24px", marginBottom: "18px",
    }}>
      <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "10px" }}>
        <span style={{
          background: `${color}20`, color: color, fontSize: "10px", fontWeight: "700",
          padding: "3px 10px", borderRadius: "20px", letterSpacing: "0.4px",
        }}>EJ {index + 1}</span>
        <h4 style={{ color: "#F1F5F9", margin: 0, fontSize: "14px" }}>{exercise.title}</h4>
      </div>
      <p style={{ color: "#94A3B8", fontSize: "13.5px", lineHeight: "1.65", marginBottom: "14px" }}>
        {exercise.description}
      </p>
      <textarea
        value={code} onChange={e => setCode(e.target.value)} spellCheck={false}
        style={{
          width: "100%", minHeight: "130px", background: "#060C1A",
          border: `1px solid ${color}30`, borderRadius: "8px", padding: "13px 15px",
          fontFamily: "'Fira Code','Cascadia Code',monospace", fontSize: "12.5px",
          color: "#E2E8F0", lineHeight: "1.7", resize: "vertical",
          outline: "none", boxSizing: "border-box",
        }}
      />
      <div style={{ display: "flex", gap: "8px", marginTop: "10px", flexWrap: "wrap" }}>
        <button onClick={runCode} style={btn(color, "#000")}>▶ Ejecutar</button>
        <button onClick={() => setShowHint(!showHint)}
          style={btn(`${color}15`, color)}>
          💡 {showHint ? "Ocultar pista" : "Ver pista"}
        </button>
        <button onClick={() => setShowSolution(!showSolution)}
          style={btn("#1E293B", "#64748B")}>
          🔑 {showSolution ? "Ocultar" : "Ver solución"}
        </button>
        <button onClick={() => { setCode(exercise.starter); setOutputVisible(false); }}
          style={btn("transparent", "#475569", { border: "1px solid #334155" })}>
          ↺ Reiniciar
        </button>
      </div>
      {showHint && (
        <div style={{
          marginTop: "12px", background: `${color}0D`, border: `1px solid ${color}30`,
          borderRadius: "8px", padding: "12px 16px", color: "#CBD5E1", fontSize: "13px",
        }}>💡 <strong>Pista:</strong> {exercise.hint}</div>
      )}
      {showSolution && <CodeBlock code={exercise.solution} color={color} />}
      {outputVisible && (
        <div style={{
          marginTop: "12px", background: "#020812", border: "1px solid #1A2640",
          borderRadius: "8px", padding: "12px 16px",
        }}>
          <p style={{ color: "#334155", fontSize: "10px", margin: "0 0 7px", fontFamily: "monospace", letterSpacing: "1px" }}>OUTPUT</p>
          <pre style={{
            color: isError ? "#F87171" : "#4ADE80",
            fontFamily: "monospace", fontSize: "13px", margin: 0, whiteSpace: "pre-wrap",
          }}>{output}</pre>
        </div>
      )}
    </div>
  );
};

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function LearningPlatform() {
  const [activeCourse, setActiveCourse] = useState(courses[0]);
  const [activeModule, setActiveModule] = useState(courses[0].modules[0]);
  const [activeLesson, setActiveLesson] = useState(courses[0].modules[0].lessons[0]);
  const [activeTab, setActiveTab] = useState("teoria");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const color = activeCourse.color;

  const selectCourse = (c) => {
    setActiveCourse(c);
    const m = c.modules[0];
    setActiveModule(m);
    setActiveLesson(m.lessons[0] || null);
    setActiveTab("teoria");
  };

  const selectModule = (m) => {
    if (m.status === "coming_soon") return;
    setActiveModule(m);
    setActiveLesson(m.lessons[0] || null);
    setActiveTab("teoria");
  };

  const tabs = [
    { id: "teoria", label: "Teoría", icon: "📖" },
    { id: "ejercicios", label: "Ejercicios", icon: "💻" },
    { id: "actividad", label: "Actividad de Clase", icon: "👥" },
    { id: "tarea", label: "Tarea", icon: "📝" },
  ];

  const showLessonNav = activeModule.lessons.length > 0 && (activeTab === "teoria" || activeTab === "ejercicios");

  return (
    <div style={{
      display: "flex", height: "100vh", background: "#060B18",
      fontFamily: "'Inter','Segoe UI',sans-serif", color: "#E2E8F0", overflow: "hidden",
    }}>

      {/* SIDEBAR */}
      <div style={{
        width: sidebarOpen ? "252px" : "0px", minWidth: sidebarOpen ? "252px" : "0px",
        background: "#070D1D", borderRight: "1px solid #152033",
        display: "flex", flexDirection: "column", transition: "all 0.28s", overflow: "hidden",
      }}>
        <div style={{ padding: "20px 16px 14px", borderBottom: "1px solid #152033" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "30px", height: "30px",
              background: `linear-gradient(135deg, ${color}, ${activeCourse.accent})`,
              borderRadius: "8px", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "15px",
            }}>🎓</div>
            <div>
              <div style={{ fontWeight: "700", fontSize: "13.5px", color: "#F1F5F9" }}>DevStudy</div>
              <div style={{ fontSize: "10px", color: "#2D4060" }}>Tu aula de código</div>
            </div>
          </div>
        </div>

        <div style={{ padding: "12px 8px 4px" }}>
          <p style={{ fontSize: "9px", color: "#2D4060", fontWeight: "700", letterSpacing: "1.2px", margin: "0 0 7px 8px" }}>CURSOS</p>
          {courses.map(c => (
            <button key={c.id} onClick={() => selectCourse(c)} style={{
              width: "100%",
              background: activeCourse.id === c.id ? `${c.color}12` : "transparent",
              border: activeCourse.id === c.id ? `1px solid ${c.color}35` : "1px solid transparent",
              borderRadius: "9px", padding: "9px 10px",
              display: "flex", alignItems: "center", gap: "9px",
              cursor: "pointer", marginBottom: "2px", textAlign: "left",
            }}>
              <span style={{ fontSize: "16px" }}>{c.icon}</span>
              <span style={{
                color: activeCourse.id === c.id ? c.color : "#3D5470",
                fontSize: "13px", fontWeight: activeCourse.id === c.id ? "700" : "400",
              }}>{c.name}</span>
            </button>
          ))}
        </div>

        <div style={{ padding: "4px 8px", flex: 1, overflowY: "auto" }}>
          <p style={{ fontSize: "9px", color: "#2D4060", fontWeight: "700", letterSpacing: "1.2px", margin: "10px 0 7px 8px" }}>MÓDULOS</p>
          {activeCourse.modules.map(mod => (
            <button key={mod.id} onClick={() => selectModule(mod)} style={{
              width: "100%",
              background: activeModule.id === mod.id ? `${color}0F` : "transparent",
              border: activeModule.id === mod.id ? `1px solid ${color}28` : "1px solid transparent",
              borderRadius: "9px", padding: "10px",
              cursor: mod.status === "coming_soon" ? "not-allowed" : "pointer",
              textAlign: "left", marginBottom: "3px",
              opacity: mod.status === "coming_soon" ? 0.3 : 1,
            }}>
              <div style={{ fontSize: "9px", color: color, marginBottom: "3px", fontWeight: "700", letterSpacing: "0.4px" }}>{mod.day}</div>
              <div style={{ fontSize: "11.5px", color: "#7A94B0", lineHeight: "1.4" }}>{mod.title}</div>
              {mod.status === "coming_soon" && (
                <div style={{ fontSize: "9px", color: "#2D4060", marginTop: "3px" }}>Próximamente</div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Header */}
        <div style={{
          background: "#070D1D", borderBottom: "1px solid #152033",
          padding: "13px 24px", display: "flex", alignItems: "center", gap: "12px",
        }}>
          <button onClick={() => setSidebarOpen(p => !p)} style={{
            background: "transparent", border: "none", color: "#2D4060",
            fontSize: "18px", cursor: "pointer", lineHeight: 1,
          }}>☰</button>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
              <span style={{ fontSize: "16px" }}>{activeCourse.icon}</span>
              <span style={{ color: color, fontSize: "11.5px", fontWeight: "700" }}>{activeCourse.name}</span>
              <span style={{ color: "#152033" }}>›</span>
              <span style={{ color: "#2D4060", fontSize: "11.5px" }}>{activeModule.day}</span>
            </div>
            <h2 style={{ margin: 0, color: "#F1F5F9", fontSize: "15.5px", fontWeight: "700" }}>{activeModule.title}</h2>
          </div>
        </div>

        {/* Lesson selector */}
        {showLessonNav && (
          <div style={{
            background: "#070D1D", borderBottom: "1px solid #152033",
            padding: "9px 24px", display: "flex", gap: "7px", overflowX: "auto",
          }}>
            {activeModule.lessons.map(lesson => (
              <button key={lesson.id} onClick={() => setActiveLesson(lesson)} style={{
                background: activeLesson?.id === lesson.id ? `${color}16` : "transparent",
                border: activeLesson?.id === lesson.id ? `1px solid ${color}40` : "1px solid #152033",
                borderRadius: "8px", padding: "6px 13px", cursor: "pointer",
                color: activeLesson?.id === lesson.id ? color : "#3D5470",
                fontSize: "12px", fontWeight: activeLesson?.id === lesson.id ? "700" : "400",
                whiteSpace: "nowrap",
              }}>
                <span style={{ marginRight: "5px", opacity: 0.6, fontSize: "10px" }}>L{lesson.number}</span>
                {lesson.title}
              </button>
            ))}
          </div>
        )}

        {/* Tabs */}
        <div style={{
          background: "#070D1D", borderBottom: "1px solid #152033",
          padding: "0 24px", display: "flex",
        }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              background: "transparent", border: "none",
              borderBottom: activeTab === tab.id ? `2px solid ${color}` : "2px solid transparent",
              color: activeTab === tab.id ? color : "#2D4060",
              padding: "12px 17px", fontSize: "12.5px",
              fontWeight: activeTab === tab.id ? "700" : "400",
              cursor: "pointer", display: "flex", alignItems: "center", gap: "5px",
            }}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "28px 34px" }}>

          {/* TEORÍA */}
          {activeTab === "teoria" && (
            <div style={{ maxWidth: "790px" }}>
              {!activeLesson || activeLesson.theory.length === 0
                ? <EmptyState icon="🚧" text="Contenido en construcción" />
                : activeLesson.theory.map((sec, i) => (
                  <div key={i} style={{
                    background: "#0A1020", border: "1px solid #152033",
                    borderRadius: "14px", padding: "24px", marginBottom: "18px",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "13px" }}>
                      <span style={{
                        background: `${color}16`, color: color, fontSize: "9px", fontWeight: "700",
                        padding: "3px 9px", borderRadius: "20px", letterSpacing: "0.8px",
                      }}>{sec.tag}</span>
                      <h3 style={{ color: "#F1F5F9", margin: 0, fontSize: "15.5px" }}>{sec.heading}</h3>
                    </div>
                    <p style={{ color: "#8BA0BC", lineHeight: "1.8", fontSize: "13.5px", margin: 0, whiteSpace: "pre-line" }}>
                      {sec.content}
                    </p>
                    <CodeBlock code={sec.code} color={color} />
                    {sec.callout && <Callout text={sec.callout} color={color} />}
                  </div>
                ))
              }
            </div>
          )}

          {/* EJERCICIOS */}
          {activeTab === "ejercicios" && (
            <div style={{ maxWidth: "790px" }}>
              <div style={{ marginBottom: "20px" }}>
                <h3 style={{ color: "#F1F5F9", fontSize: "17px", margin: "0 0 4px" }}>
                  Ejercicios — {activeLesson?.title}
                </h3>
                <p style={{ color: "#2D4060", fontSize: "12.5px", margin: 0 }}>
                  Escribí tu código, ejecutalo y revisá la pista o solución si la necesitás.
                </p>
              </div>
              {!activeLesson || activeLesson.exercises.length === 0
                ? <EmptyState icon="🔜" text="Ejercicios próximamente" />
                : activeLesson.exercises.map((ex, i) => (
                  <ExerciseCard key={ex.id} exercise={ex} color={color} index={i} />
                ))
              }
            </div>
          )}

          {/* ACTIVIDADES */}
          {activeTab === "actividad" && (
            <div style={{ maxWidth: "700px" }}>
              {!activeModule.classActivities || activeModule.classActivities.length === 0
                ? <EmptyState icon="🔜" text="Actividades próximamente" />
                : <>
                  <div style={{ marginBottom: "20px" }}>
                    <h3 style={{ color: "#F1F5F9", fontSize: "17px", margin: "0 0 4px" }}>
                      Actividades de Clase — {activeModule.day}
                    </h3>
                    <p style={{ color: "#2D4060", fontSize: "12.5px", margin: 0 }}>
                      3 actividades con dificultad progresiva. Completalas en orden.
                    </p>
                  </div>
                  {activeModule.classActivities.map((act, idx) => (
                    <div key={act.id} style={{
                      background: `linear-gradient(135deg, ${act.difficultyColor}08, ${act.difficultyColor}03)`,
                      border: `1px solid ${act.difficultyColor}28`, borderRadius: "16px",
                      padding: "28px", marginBottom: "18px",
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", gap: "8px", marginBottom: "11px", alignItems: "center" }}>
                            <span style={{
                              background: act.difficultyColor, color: "#000", fontSize: "9px", fontWeight: "700",
                              padding: "3px 10px", borderRadius: "20px", letterSpacing: "0.5px",
                            }}>👥 ACTIVIDAD {idx + 1}</span>
                            <span style={{
                              background: `${act.difficultyColor}18`, color: act.difficultyColor,
                              fontSize: "9px", fontWeight: "700", padding: "3px 10px",
                              borderRadius: "20px", letterSpacing: "0.5px",
                            }}>{act.difficulty.toUpperCase()}</span>
                          </div>
                          <h3 style={{ color: "#F1F5F9", fontSize: "16px", margin: "0 0 13px" }}>
                            {act.title}
                          </h3>
                          <p style={{ color: "#8BA0BC", fontSize: "13.5px", lineHeight: "1.8", margin: 0, whiteSpace: "pre-line" }}>
                            {act.description}
                          </p>
                        </div>
                        <div style={{
                          background: `${act.difficultyColor}14`, border: `1px solid ${act.difficultyColor}30`,
                          borderRadius: "12px", padding: "12px 16px", textAlign: "center",
                          marginLeft: "18px", minWidth: "68px",
                        }}>
                          <div style={{ color: act.difficultyColor, fontSize: "22px", fontWeight: "700" }}>
                            {act.timeEstimate.split(" ")[0]}
                          </div>
                          <div style={{ color: "#2D4060", fontSize: "10px" }}>
                            {act.timeEstimate.split(" ").slice(1).join(" ")}
                          </div>
                        </div>
                      </div>
                      <div style={{ background: "#0A1020", border: "1px solid #152033", borderRadius: "14px", padding: "18px", marginTop: "16px" }}>
                        <h4 style={{ color: "#2D4060", fontSize: "9px", fontWeight: "700", letterSpacing: "1.2px", margin: "0 0 12px" }}>
                          OBJETIVOS
                        </h4>
                        {act.objectives.map((obj, i) => (
                          <div key={i} style={{ display: "flex", gap: "11px", marginBottom: "9px" }}>
                            <div style={{
                              width: "21px", height: "21px", minWidth: "21px",
                              background: `${act.difficultyColor}16`, border: `1px solid ${act.difficultyColor}30`,
                              borderRadius: "50%", display: "flex", alignItems: "center",
                              justifyContent: "center", fontSize: "10px", color: act.difficultyColor, fontWeight: "700",
                            }}>{i + 1}</div>
                            <span style={{ color: "#8BA0BC", fontSize: "13px", lineHeight: "1.5" }}>{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              }
            </div>
          )}

          {/* TAREA */}
          {activeTab === "tarea" && (
            <div style={{ maxWidth: "700px" }}>
              {!activeModule.homework.description
                ? <EmptyState icon="🔜" text="Tarea próximamente" />
                : <>
                  <div style={{
                    background: "#0A1020", border: "1px solid #152033",
                    borderRadius: "16px", padding: "28px", marginBottom: "14px",
                  }}>
                    <span style={{
                      background: "#152033", color: "#2D4060", fontSize: "9px", fontWeight: "700",
                      padding: "3px 10px", borderRadius: "20px", display: "inline-block",
                      marginBottom: "11px", letterSpacing: "0.5px",
                    }}>📝 TAREA — {activeModule.day}</span>
                    <h3 style={{ color: "#F1F5F9", fontSize: "17px", margin: "0 0 13px" }}>
                      {activeModule.homework.title}
                    </h3>
                    <p style={{ color: "#8BA0BC", fontSize: "13.5px", lineHeight: "1.8", whiteSpace: "pre-line" }}>
                      {activeModule.homework.description}
                    </p>
                    <div style={{ display: "flex", gap: "11px", marginTop: "20px", flexWrap: "wrap" }}>
                      {[
                        { label: "ENTREGABLE", value: activeModule.homework.deliverable },
                        { label: "FECHA", value: activeModule.homework.dueDate },
                      ].map(item => (
                        <div key={item.label} style={{
                          background: "#060C1A", border: "1px solid #152033",
                          borderRadius: "10px", padding: "13px 16px", flex: 1, minWidth: "140px",
                        }}>
                          <div style={{ fontSize: "9px", color: "#2D4060", marginBottom: "5px", letterSpacing: "0.8px", fontWeight: "700" }}>
                            {item.label}
                          </div>
                          <div style={{ color: "#94A3B8", fontSize: "13px" }}>{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {activeModule.homework.extraChallenge && (
                    <div style={{
                      background: `${color}0A`, border: `1px solid ${color}25`,
                      borderRadius: "12px", padding: "17px 20px", display: "flex", gap: "13px",
                    }}>
                      <span style={{ fontSize: "20px" }}>⭐</span>
                      <div>
                        <div style={{ color: color, fontWeight: "700", fontSize: "10px", marginBottom: "6px", letterSpacing: "0.5px" }}>
                          DESAFÍO EXTRA
                        </div>
                        <p style={{ color: "#8BA0BC", fontSize: "13.5px", lineHeight: "1.65", margin: 0 }}>
                          {activeModule.homework.extraChallenge}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              }
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
