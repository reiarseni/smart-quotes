const computerQuotesES = [
  {
    "_id": {
      "$oid": "5a6ce86e2af929789500e7e4"
    },
    "text": "La Ciencia de la Computación no trata más sobre computadoras de lo que la astronomía trata sobre telescopios.",
    "author": "Edsger W. Dijkstra",
    "numberOfVotes": 16,
    "rating": 4.2
  },
  {
    "_id": {
      "$oid": "5a6ce86e2af929789500e7d7"
    },
    "text": "La simplicidad es un requisito previo para la fiabilidad.",
    "author": "Edsger W. Dijkstra"
  },
  {
    "_id": {
      "$oid": "5a6ce86d2af929789500e7ca"
    },
    "text": "El principal desafío del científico de la computación no es confundirse por las complejidades de su propia creación.",
    "author": "Edsger W. Dijkstra",
    "numberOfVotes": 8,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e7f3"
    },
    "text": "Si la depuración es el proceso de eliminar errores de software, entonces la programación debe ser el proceso de introducirlos.",
    "author": "Edsger W. Dijkstra",
    "numberOfVotes": 5,
    "rating": 4.7
  },
  {
    "_id": {
      "$oid": "5a6ce86e2af929789500e7d9"
    },
    "text": "Un programa es como un poema: no puedes escribir un poema sin escribirlo. Sin embargo, la gente habla de la programación como si fuera un proceso de producción y mide la “productividad del programador” en términos de “número de líneas de código producidas”. Al hacerlo, contabilizan ese número en el lado equivocado del libro mayor: siempre deberíamos referirnos al “número de líneas de código gastadas”.",
    "author": "Edsger W. Dijkstra",
    "numberOfVotes": 1,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e7f8"
    },
    "text": "Hay dos maneras de construir un diseño de software: una es hacerlo tan simple que obviamente no haya deficiencias, y la otra es hacerlo tan complicado que no haya deficiencias obvias. El primer método es mucho más difícil.",
    "author": "Tony Hoare",
    "numberOfVotes": 5,
    "rating": 4.1
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e807"
    },
    "text": "Las mejores mentes de mi generación están pensando en cómo hacer que la gente haga clic en anuncios.",
    "author": "Jeff Hammerbacher",
    "numberOfVotes": 6,
    "rating": 4.1
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e7f9"
    },
    "text": "Las herramientas que utilizamos tienen una influencia profunda y tortuosa en nuestros hábitos de pensamiento y, por lo tanto, en nuestras habilidades de pensamiento.",
    "author": "Edsger W. Dijkstra",
    "numberOfVotes": 4,
    "rating": 4.9
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e7f5"
    },
    "text": "¿Cómo convencemos a la gente de que en la programación la simplicidad y la claridad, en resumen: lo que los matemáticos llaman \"elegancia\", no son un lujo prescindible, sino un asunto crucial que decide entre el éxito y el fracaso?",
    "author": "Edsger W. Dijkstra",
    "numberOfVotes": 4,
    "rating": 3.8
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e80b"
    },
    "text": "Añadir mano de obra a un proyecto de software atrasado lo retrasa aún más.",
    "author": "Fred Brooks",
    "numberOfVotes": 4,
    "rating": 4.9
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e809"
    },
    "text": "A veces existe una bala de plata para impulsar la productividad de la ingeniería de software. Pero necesitas dispararle a la persona correcta.",
    "author": "Michael Stal",
    "numberOfVotes": 3,
    "rating": 3.4
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e815"
    },
    "text": "Nueve mujeres no pueden hacer un bebé en un mes.",
    "author": "Fred Brooks",
    "source": "Frederick P. Brooks Jr., El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e81a"
    },
    "text": "El código eliminado es código depurado.",
    "author": "Jeff Sickel",
    "numberOfVotes": 3,
    "rating": 4.9
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e826"
    },
    "text": "En caso de duda, usa la fuerza bruta.",
    "author": "Ken Thompson",
    "numberOfVotes": 3,
    "rating": 4.2
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e814"
    },
    "text": "Cuando una tarea no se puede particionar debido a restricciones secuenciales, la aplicación de más esfuerzo no tiene ningún efecto en el cronograma. Llevar un niño toma nueve meses, sin importar cuántas mujeres se asignen.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 4,
    "rating": 3.7
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e816"
    },
    "text": "Si cada parte de la tarea debe coordinarse por separado con cada otra parte, el esfuerzo aumenta como n(n-1)/2. Tres trabajadores requieren tres veces más intercomunicación por pares que dos; cuatro requieren seis veces más que dos.",
    "author": "Fred Brooks",
    "source": "Frederick P. Brooks Jr., El Mítico Hombre-Mes",
    "numberOfVotes": 3,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e818"
    },
    "text": "Tener un arquitecto de sistemas es el paso individual más importante hacia la integridad conceptual. Después de enseñar un laboratorio de ingeniería de software más de 20 veces, insistí en que los equipos de estudiantes de tan solo cuatro personas eligieran un gerente y un arquitecto separado.",
    "author": "Fred Brooks",
    "source": "Frederick P. Brooks Jr., El Mítico Hombre-Mes",
    "numberOfVotes": 3,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e80f"
    },
    "text": "El programador, como el poeta, trabaja solo ligeramente alejado de la pura materia del pensamiento. Construye sus castillos en el aire, desde el aire, creando por el esfuerzo de la imaginación. Pocos medios de creación son tan flexibles, tan fáciles de pulir y reelaborar, tan fácilmente capaces de realizar grandes estructuras conceptuales.",
    "author": "Fred Brooks",
    "source": "Frederick P. Brooks Jr., El Mítico Hombre-Mes",
    "numberOfVotes": 3,
    "rating": 3.3
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e821"
    },
    "text": "La primera suposición falsa que subyace a la programación de sistemas es que todo irá bien, es decir, que cada tarea durará solo lo que “debería” durar. Un gran esfuerzo de programación, sin embargo, consta de muchas tareas, algunas encadenadas de principio a fin. La probabilidad de que cada una vaya bien se vuelve infinitesimalmente pequeña.",
    "author": "Fred Brooks",
    "source": "Frederick P. Brooks Jr., El Mítico Hombre-Mes",
    "numberOfVotes": 3,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e81e"
    },
    "text": "Deberíamos olvidarnos de las pequeñas eficiencias, digamos alrededor del 97% del tiempo: la optimización prematura es la raíz de todo mal. Sin embargo, no debemos dejar pasar nuestras oportunidades en ese 3% crítico.",
    "author": "Donald Knuth",
    "source": "Donald Knuth, Programación Estructurada con sentencias go to, JACM Computing Surveys, Vol 6, No. 4, Dic. 1974, p.268",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e824"
    },
    "text": "Uno de mis días más productivos fue desechar 1.000 líneas de código.",
    "author": "Ken Thompson",
    "numberOfVotes": 10,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e825"
    },
    "text": "Una medición precisa vale más que mil opiniones de expertos.",
    "author": "Grace Hopper",
    "numberOfVotes": 1,
    "rating": 3
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e80d"
    },
    "text": "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.",
    "author": "Fred Brooks",
    "numberOfVotes": 3,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e82e"
    },
    "text": "Siempre programa como si el tipo que termina manteniendo tu código fuera un psicópata violento que sabe dónde vives.",
    "author": "Rick Osborne",
    "numberOfVotes": 6,
    "rating": 2.5
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e830"
    },
    "text": "Un programa que produce resultados incorrectos dos veces más rápido es infinitamente más lento.",
    "author": "John Ousterhout",
    "numberOfVotes": 4,
    "rating": 3.3
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e828"
    },
    "text": "Todavía tengo que ver algún problema, por complicado que sea, que, cuando se mira de la manera correcta, no se vuelva más complicado.",
    "author": "Poul Anderson",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e82a"
    },
    "text": "Limpiar el código NO requiere tiempo. NO limpiar el código SÍ requiere tiempo.",
    "author": "Robert C. Martin",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e837"
    },
    "text": "La belleza es más importante en la informática que en cualquier otro lugar de la tecnología porque el software es muy complicado. La belleza es la defensa definitiva contra la complejidad.",
    "author": "David Gelernter",
    "numberOfVotes": 5,
    "rating": 3.4
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e833"
    },
    "text": "Caminar sobre el agua y desarrollar software a partir de una especificación es fácil si ambos están congelados.",
    "author": "Edward V. Berard",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e836"
    },
    "text": "Depurar es dos veces más difícil que escribir el código en primer lugar. Por lo tanto, si escribes el código de la manera más inteligente posible, por definición, no eres lo suficientemente inteligente para depurarlo.",
    "author": "Brian Kernighan",
    "source": "Brian Kernighan y P.J. Plauger, Los Elementos del Estilo de Programación",
    "numberOfVotes": 3,
    "rating": 4.7
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e838"
    },
    "text": "Controlar la complejidad es la esencia de la programación de computadoras.",
    "author": "Brian Kernighan",
    "numberOfVotes": 4,
    "rating": 3.6
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e83f"
    },
    "text": "El tiempo de depuración aumenta como el cuadrado del tamaño del programa.",
    "author": "Chris Wenham",
    "numberOfVotes": 2,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e82c"
    },
    "text": "El problema con los programadores es que nunca puedes saber lo que está haciendo un programador hasta que es demasiado tarde.",
    "author": "Seymour Cray",
    "numberOfVotes": 2,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e843"
    },
    "text": "El código nunca miente, los comentarios a veces sí.",
    "author": "Ron Jeffries",
    "numberOfVotes": 2,
    "rating": 3.8
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e845"
    },
    "text": "Algunos problemas son tan complejos que tienes que ser muy inteligente y estar bien informado solo para estar indeciso sobre ellos.",
    "author": "Laurence J. Peter",
    "numberOfVotes": 2,
    "rating": 3.3
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e841"
    },
    "text": "Haz una suposición, duplica el número y luego pasa a la siguiente unidad de tiempo más grande. Esta regla escala las tareas de una manera muy interesante: una tarea de un minuto explota por un factor de 120 para tomar dos horas. Un trabajo de una hora explota por \"solo\" un factor de 48 para tomar dos días, mientras que un trabajo de un día crece por un factor de 14 para tomar dos semanas.",
    "author": "Poul-Henning Kamp",
    "source": "Poul-Henning Kamp, El pozo de alquitrán hiperdimensional",
    "numberOfVotes": 4,
    "rating": 3.9
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e847"
    },
    "text": "No tengo ningún talento especial. Solo soy apasionadamente curioso.",
    "author": "Albert Einstein",
    "source": "Pismo Carlu Seeligu (11 de marzo de 1952), registrado en Einstein Archives 39-013",
    "numberOfVotes": 7,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e849"
    },
    "text": "El uso adecuado de los comentarios es compensar nuestro fracaso para expresarnos en código.",
    "author": "Robert C. Martin",
    "numberOfVotes": 8,
    "rating": 3.9
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e852"
    },
    "text": "Cuando no hay jerarquía de tipos, no tienes que administrar la jerarquía de tipos.",
    "author": "Rob Pike",
    "numberOfVotes": 2,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e856"
    },
    "text": "Todo el mundo debería aprender a programar una computadora, porque te enseña a pensar.",
    "author": "Steve Jobs",
    "numberOfVotes": 3,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e84f"
    },
    "text": "La simplicidad es difícil de construir, fácil de usar y difícil de cobrar. La complejidad es fácil de construir, difícil de usar y fácil de cobrar.",
    "author": "Chris Sacca",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e85a"
    },
    "text": "Medir el progreso de la programación por líneas de código es como medir el progreso de la construcción de aviones por peso.",
    "author": "Bill Gates",
    "numberOfVotes": 3,
    "rating": 4.2
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e85e"
    },
    "text": "Se cometen más pecados informáticos en nombre de la eficiencia (sin necesariamente lograrla) que por cualquier otra razón, incluida la estupidez ciega.",
    "author": "William Wulf",
    "numberOfVotes": 3,
    "rating": 3
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e860"
    },
    "text": "Las pruebas pueden ser una forma muy eficaz de mostrar la presencia de errores, pero son irremediablemente inadecuadas para mostrar su ausencia.",
    "author": "Edsger W. Dijkstra",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e864"
    },
    "text": "La imaginación es más importante que el conocimiento.",
    "author": "Albert Einstein",
    "source": "En conversación con George Sylvester Viereck What Life Means to Einstein (en el periódico The Saturday Evening Post, 26 de octubre de 1929)",
    "numberOfVotes": 7,
    "rating": 3.8
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e862"
    },
    "text": "Cuando estoy trabajando en un problema, nunca pienso en la belleza. Solo pienso en cómo resolver el problema. Pero cuando he terminado, si la solución no es hermosa, sé que está mal.",
    "author": "Buckminster Fuller",
    "numberOfVotes": 7,
    "rating": 3.7
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e84b"
    },
    "text": "El buen código es corto, simple y simétrico; el desafío es descubrir cómo llegar allí.",
    "author": "Sean Parent",
    "numberOfVotes": 7,
    "rating": 3.8
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e868"
    },
    "text": "Si crees que tus usuarios son idiotas, solo idiotas lo usarán.",
    "author": "Linus Torvalds",
    "numberOfVotes": 10,
    "rating": 3.6
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e872"
    },
    "text": "Una vez que dejas de aprender, empiezas a morir.",
    "author": "Albert Einstein",
    "numberOfVotes": 4,
    "rating": 4.6
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e884"
    },
    "text": "Ningún código es más rápido que ningún código.",
    "author": "Kevlin Henney",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e86c"
    },
    "text": "Más de la mitad del tiempo que dedicas a trabajar en un proyecto lo pasas pensando, y ninguna herramienta, por avanzada que sea, puede pensar por ti.",
    "author": "Richard P. Gabriel",
    "numberOfVotes": 3,
    "rating": 2.9
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e86e"
    },
    "text": "Podríamos, por ejemplo, comenzar por limpiar nuestro lenguaje y dejar de llamar a un error un bug, sino llamarlo error. Es mucho más honesto porque coloca directamente la culpa donde pertenece, es decir, con el programador que cometió el error. La metáfora animista del bug que se coló maliciosamente mientras el programador no estaba mirando es intelectualmente deshonesta, ya que disfraza que el error es creación del propio programador. Lo bueno de este simple cambio de vocabulario es que tiene un efecto tan profundo: mientras que, antes, un programa con un solo bug solía ser \"casi correcto\", después un programa con un error es simplemente \"incorrecto\".",
    "author": "Edsger W. Dijkstra",
    "numberOfVotes": 2,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e88b"
    },
    "text": "Una vez que una nueva tecnología comienza a rodar, si no eres parte de la aplanadora, eres parte del camino.",
    "author": "Stewart Brand",
    "numberOfVotes": 2,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e887"
    },
    "text": "Invariablemente se descubre que un sistema complejo que funciona ha evolucionado a partir de un sistema simple que funcionaba. La proposición inversa también parece ser cierta: un sistema complejo diseñado desde cero nunca funciona y no se puede hacer que funcione.",
    "author": "John Gall (autor)",
    "numberOfVotes": 2,
    "rating": 3.3
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e889"
    },
    "text": "El logro más asombroso de la industria del software informático es su continua cancelación de las ganancias constantes y asombrosas realizadas por la industria del hardware informático.",
    "author": "Henry Petroski",
    "numberOfVotes": 1,
    "rating": 2.5
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e88e"
    },
    "text": "Nunca estoy satisfecho hasta que he dicho lo más posible en pocas palabras, y escribir brevemente lleva mucho más tiempo que escribir extensamente.",
    "author": "Carl Friedrich Gauss",
    "numberOfVotes": 4,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e890"
    },
    "text": "Solo hay dos tipos de lenguajes: aquellos de los que la gente se queja y aquellos que nadie usa.",
    "author": "Bjarne Stroustrup",
    "numberOfVotes": 5,
    "rating": 4.4
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e892"
    },
    "text": "El propósito de la ingeniería de software es controlar la complejidad, no crearla.",
    "author": "Pamela Zave",
    "numberOfVotes": 4,
    "rating": 3.9
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e89a"
    },
    "text": "Unix es simple. Solo se necesita un genio para entender su simplicidad.",
    "author": "Dennis Ritchie",
    "numberOfVotes": 9,
    "rating": 3.2
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e89c"
    },
    "text": "Un lenguaje que no tiene todo es en realidad más fácil de programar que algunos que sí lo tienen.",
    "author": "Dennis Ritchie",
    "numberOfVotes": 2,
    "rating": 3.8
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8a2"
    },
    "text": "Lo que no puedo construir, no lo entiendo.",
    "author": "Richard Feynman",
    "numberOfVotes": 2,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8a6"
    },
    "text": "Cualquier tonto inteligente puede hacer las cosas más grandes, más complejas y más violentas. Se necesita un toque de genio, y mucho coraje, para moverse en la dirección opuesta.",
    "author": "Albert Einstein",
    "numberOfVotes": 5,
    "rating": 3
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e898"
    },
    "text": "No existe un lenguaje de programación, por muy estructurado que sea, que impida a los programadores hacer malos programas.",
    "author": "Lawrence Flon",
    "source": "Larry Flon (1975) \"Sobre la investigación en programación estructurada\". SIGPLAN Not., 10(10), pp.16–17",
    "numberOfVotes": 3,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8a8"
    },
    "text": "Cualquier tonto puede escribir código que una computadora pueda entender. Los buenos programadores escriben código que los humanos pueden entender.",
    "author": "Martin Fowler",
    "source": "Martin Fowler, Refactorización",
    "numberOfVotes": 2,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e894"
    },
    "text": "El problema con los lenguajes orientados a objetos es que tienen todo este entorno implícito que llevan consigo. Querías un plátano pero lo que obtuviste fue un gorila sosteniendo el plátano y toda la jungla.",
    "author": "Joe Armstrong (programador)",
    "numberOfVotes": 6,
    "rating": 2.8
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e86a"
    },
    "text": "No puedes confiar en el código que no hayas creado totalmente tú mismo.",
    "author": "Ken Thompson",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8a4"
    },
    "text": "Una persona inteligente resuelve un problema. Una persona sabia lo evita.",
    "author": "Albert Einstein",
    "numberOfVotes": 3,
    "rating": 4.9
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8ac"
    },
    "text": "El aspecto individual más importante del desarrollo de software es tener claro lo que estás tratando de construir.",
    "author": "Bjarne Stroustrup",
    "numberOfVotes": 2,
    "rating": 2.3
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8aa"
    },
    "text": "El único pecado es tomar una decisión sin saber que estás tomando una.",
    "author": "Jonathan Shewchuk",
    "numberOfVotes": 3,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8b0"
    },
    "text": "Mucha complejidad en el software proviene de tratar de hacer que una cosa haga dos cosas.",
    "author": "Ryan Singer",
    "numberOfVotes": 2,
    "rating": 3.8
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8b2"
    },
    "text": "Ley de Hofstadter: Siempre lleva más tiempo de lo que esperas, incluso cuando tienes en cuenta la Ley de Hofstadter.",
    "author": "P. J. Plauger",
    "numberOfVotes": 3,
    "rating": 2.8
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8b6"
    },
    "text": "Primero, resuelve el problema. Luego, escribe el código.",
    "author": "John Johnson",
    "numberOfVotes": 3,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8b4"
    },
    "text": "Un buen programador es alguien que mira a ambos lados antes de cruzar una calle de un solo sentido.",
    "author": "Doug Linder",
    "numberOfVotes": 4,
    "rating": 4.6
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8b8"
    },
    "text": "Compatibilidad significa repetir deliberadamente los errores de otras personas.",
    "author": "David Wheeler (científico de la computación)",
    "numberOfVotes": 3,
    "rating": 3.4
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8ba"
    },
    "text": "Hay dos productos principales que salen de Berkeley: LSD y UNIX. No creemos que esto sea una coincidencia.",
    "author": "Jeremy S. Anderson",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8bc"
    },
    "text": "El programador competente es plenamente consciente del tamaño estrictamente limitado de su propio cráneo; por lo tanto, aborda la tarea de programación con total humildad y, entre otras cosas, evita los trucos ingeniosos como la peste.",
    "author": "Edsger W. Dijkstra",
    "source": "El Programador Humilde (1972)",
    "numberOfVotes": 3,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8ae"
    },
    "text": "En caso de duda, déjalo fuera.",
    "author": "Joshua Bloch",
    "numberOfVotes": 5,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8be"
    },
    "text": "De hecho, afirmaré que la diferencia entre un mal programador y uno bueno es si considera más importante su código o sus estructuras de datos. Los malos programadores se preocupan por el código. Los buenos programadores se preocupan por las estructuras de datos y sus relaciones.",
    "author": "Linus Torvalds",
    "numberOfVotes": 6,
    "rating": 3.6
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8ce"
    },
    "text": "Nunca memorices algo que puedas buscar.",
    "author": "Albert Einstein",
    "numberOfVotes": 10,
    "rating": 4.4
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8cc"
    },
    "text": "Los matemáticos se paran sobre los hombros de los demás y los científicos de la computación se pisan los dedos de los pies.",
    "author": "Richard Hamming",
    "numberOfVotes": 3,
    "rating": 3.3
  },
  {
    "_id": {
      "$oid": "5a72399510263e0c45cb6cfa"
    },
    "text": "LISP ha ayudado a varios de nuestros congéneres más talentosos a pensar pensamientos previamente imposibles.",
    "author": "Edsger W. Dijkstra",
    "source": "El Programador Humilde (1972)",
    "numberOfVotes": 5,
    "rating": 3.8
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8c6"
    },
    "text": "Una organización que trata a sus programadores como idiotas pronto tendrá programadores que estén dispuestos y sean capaces de actuar solo como idiotas.",
    "author": "Bjarne Stroustrup",
    "numberOfVotes": 1,
    "rating": 2.5
  },
  {
    "_id": {
      "$oid": "5a82224c89919d0004b357ce"
    },
    "text": "El botón está funcionando, solo que no se puede ver.",
    "author": "Anónimo",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a8225ee89919d0004b357d0"
    },
    "text": "No te preocupes por nada. Simplemente haz lo que puedas y sé lo mejor que puedas ser.",
    "author": "Douglas Crockford",
    "numberOfVotes": 3,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a82b607fc716e0004373f53"
    },
    "text": "El negocio de la construcción de software no es realmente de alta tecnología en absoluto. Es sobre todo un negocio de hablar entre nosotros y escribir las cosas.",
    "author": "Tom DeMarco",
    "numberOfVotes": 2,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8ca"
    },
    "text": "En programación, la parte difícil no es resolver problemas, sino decidir qué problemas resolver.",
    "author": "Paul Graham (programador)",
    "numberOfVotes": 2,
    "rating": 3.8
  },
  {
    "_id": {
      "$oid": "5a82cd0efc716e0004373f56"
    },
    "text": "La función del gerente no es hacer que la gente trabaje, sino hacer posible que la gente trabaje.",
    "author": "Tom DeMarco",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a82c90cfc716e0004373f55"
    },
    "text": "Las personas bajo presión no trabajan mejor; simplemente trabajan más rápido.",
    "author": "Tom DeMarco",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a8946eda578110004299a3b"
    },
    "text": "Mi principal conclusión después de pasar diez años de mi vida trabajando en el proyecto TEX es que el software es difícil. Es más difícil que cualquier otra cosa que haya tenido que hacer.",
    "author": "Donald Knuth",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a82cd5ffc716e0004373f57"
    },
    "text": "La ciencia es lo que entendemos lo suficientemente bien como para explicárselo a una computadora. El arte es todo lo demás que hacemos.",
    "author": "Donald Knuth",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a896544a12a0e0004c76124"
    },
    "text": "Hemos visto que la programación de computadoras es un arte, porque aplica el conocimiento acumulado al mundo, porque requiere habilidad e ingenio, y especialmente porque produce objetos de belleza.",
    "author": "Donald Knuth",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a82cd91fc716e0004373f58"
    },
    "text": "El correo electrónico es algo maravilloso para las personas cuyo papel en la vida es estar al tanto de las cosas. Pero no para mí; mi papel es estar en el fondo de las cosas. Lo que hago requiere largas horas de estudio y concentración ininterrumpida.",
    "author": "Donald Knuth",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a8e9b5884a8f2000482568b"
    },
    "text": "Menos código equivale a menos errores.",
    "author": "Kevlin Henney",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a91370b2141d30004b42e58"
    },
    "text": "Tan pronto como exista una Máquina Analítica, necesariamente guiará el curso futuro de la ciencia.",
    "author": "Charles Babbage",
    "source": "Pasajes de la Vida de un Filósofo",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9137d72141d30004b42e59"
    },
    "text": "Los errores que surgen de la ausencia de hechos son mucho más numerosos y duraderos que aquellos que resultan de un razonamiento defectuoso con respecto a datos verdaderos.",
    "author": "Charles Babbage",
    "source": "Sobre la Economía de la Maquinaria y las Manufacturas, 1832/1841",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9138442141d30004b42e5a"
    },
    "text": "Ya hemos mencionado lo que quizás parezca paradójico para algunos de nuestros lectores, —que la división del trabajo puede aplicarse con igual éxito a las operaciones mentales que a las mecánicas, y que asegura en ambas la misma economía de tiempo.",
    "author": "Charles Babbage",
    "numberOfVotes": 2,
    "rating": 3.3
  },
  {
    "_id": {
      "$oid": "5a9139472141d30004b42e5b"
    },
    "text": "En dos ocasiones miembros del Parlamento me han preguntado: \"Por favor, Sr. Babbage, si introduce cifras incorrectas en la máquina, ¿saldrán las respuestas correctas?\" No soy capaz de comprender correctamente el tipo de confusión de ideas que podría provocar tal pregunta.",
    "author": "Charles Babbage",
    "source": "Pasajes de la Vida de un Filósofo (1864)",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a91be60346ab3000418a760"
    },
    "text": "Mientras no había máquinas, la programación no era un problema en absoluto; cuando teníamos algunas computadoras débiles, la programación se convirtió en un problema leve, y ahora tenemos computadoras gigantescas, la programación se ha convertido en un problema igualmente gigantesco.",
    "author": "Edsger W. Dijkstra",
    "source": "El Programador Humilde (1972)",
    "numberOfVotes": 2,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a91e12fc4240c0004265950"
    },
    "text": "El uso de COBOL paraliza la mente; por lo tanto, su enseñanza debe considerarse un delito criminal.",
    "author": "Edsger W. Dijkstra",
    "source": "¿Cómo decir verdades que podrían doler? (1975)",
    "numberOfVotes": 1,
    "rating": 1
  },
  {
    "_id": {
      "$oid": "5a91d1c1c4240c000426594f"
    },
    "text": "Si quieres programadores más eficaces, descubrirás que no deberían perder su tiempo depurando, no deberían introducir los errores para empezar.",
    "author": "Edsger W. Dijkstra",
    "source": "El Programador Humilde (1972)",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a91e150c4240c0004265951"
    },
    "text": "Es prácticamente imposible enseñar buena programación a estudiantes que han tenido una exposición previa a BASIC: como programadores potenciales, están mentalmente mutilados más allá de toda esperanza de regeneración.",
    "author": "Edsger W. Dijkstra",
    "source": "¿Cómo decir verdades que podrían doler? (1975)",
    "numberOfVotes": 1,
    "rating": 2
  },
  {
    "_id": {
      "$oid": "5a91e27ec4240c0004265953"
    },
    "text": "Una imagen puede valer más que mil palabras, una fórmula vale más que mil imágenes.",
    "author": "Edsger W. Dijkstra",
    "source": "Dijkstra (EWD1239: Una primera exploración del razonamiento eficaz)",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a91e224c4240c0004265952"
    },
    "text": "Quiero decir, si dentro de 10 años, cuando estés haciendo algo rápido y sucio, de repente visualizas que estoy mirando por encima de tu hombro y te dices a ti mismo \"A Dijkstra no le habría gustado esto\", bueno, eso sería suficiente inmortalidad para mí.",
    "author": "Edsger W. Dijkstra",
    "source": "Dijkstra (1995) \"Introducción a un curso sobre cálculos\"",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a91bc8f346ab3000418a75f"
    },
    "text": "No me culpes por el hecho de que la programación competente sea demasiado difícil para \"el programador promedio\", no debes caer en la trampa de rechazar una técnica quirúrgica porque está más allá de las capacidades del barbero de la esquina.",
    "author": "Edsger W. Dijkstra",
    "source": "Dijkstra (1975) Comentarios en un Simposio (EWD 512)",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a91e37bc4240c0004265955"
    },
    "text": "Joven, en matemáticas no entiendes las cosas. Simplemente te acostumbras a ellas.",
    "author": "John von Neumann",
    "numberOfVotes": 5,
    "rating": 2.4
  },
  {
    "_id": {
      "$oid": "5a91e40ec4240c0004265957"
    },
    "text": "C es peculiar, defectuoso y un éxito enorme.",
    "author": "Dennis Ritchie",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a91e2d0c4240c0004265954"
    },
    "text": "No es tarea de la Universidad ofrecer lo que la sociedad pide, sino dar lo que la sociedad necesita.",
    "author": "Edsger W. Dijkstra",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a895d1ba5f8bf3df4485d1d"
    },
    "text": "Al comprender un lenguaje orientado a la máquina, el programador tenderá a utilizar un método mucho más eficiente; está mucho más cerca de la realidad.",
    "author": "Donald Knuth",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a91e459c4240c0004265958"
    },
    "text": "Otro peligro es que las presiones comerciales de un tipo u otro desvíen la atención de los mejores pensadores de la innovación real a la explotación de la moda actual, de la prospección a la extracción de una veta conocida.",
    "author": "Dennis Ritchie",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a91e51dc4240c0004265959"
    },
    "text": "Dentro de C++, hay un lenguaje mucho más pequeño y limpio luchando por salir.",
    "author": "Bjarne Stroustrup",
    "numberOfVotes": 0,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a91e560c4240c000426595a"
    },
    "text": "Cualquiera que venga a ti y te diga que tiene un lenguaje perfecto es ingenuo o un vendedor.",
    "author": "Bjarne Stroustrup",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a91e60dc4240c000426595b"
    },
    "text": "Un hombre provisto de papel, lápiz y goma, y sujeto a una disciplina estricta, es en efecto una máquina universal.",
    "author": "Alan Turing",
    "numberOfVotes": 5,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a91e6a3c4240c000426595c"
    },
    "text": "La idea detrás de las computadoras digitales puede explicarse diciendo que estas máquinas están destinadas a llevar a cabo cualquier operación que pudiera ser realizada por un computador humano.",
    "author": "Alan Turing",
    "numberOfVotes": 3,
    "rating": 3.3
  },
  {
    "_id": {
      "$oid": "5a91e779c4240c000426595d"
    },
    "text": "Las máquinas me sorprenden con gran frecuencia.",
    "author": "Alan Turing",
    "numberOfVotes": 3,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a933b4c8e7b510004cba4be"
    },
    "text": "Tal vez \"solo una pequeña variable global\" no sea demasiado inmanejable, pero ese estilo conduce a un código que es inútil excepto para su programador original.",
    "author": "Bjarne Stroustrup",
    "numberOfVotes": 2,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a933c3d8e7b510004cba4bf"
    },
    "text": "Estoy haciendo un sistema operativo gratuito (solo un hobby, no será grande y profesional como GNU).",
    "author": "Linus Torvalds",
    "numberOfVotes": 3,
    "rating": 4.7
  },
  {
    "_id": {
      "$oid": "5a933cac8e7b510004cba4c0"
    },
    "text": "Si necesitas más de 3 niveles de indentación, estás jodido de todos modos, y deberías arreglar tu programa.",
    "author": "Linus Torvalds",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a933f078e7b510004cba4c1"
    },
    "text": "Un número infinito de monos escribiendo en GNU Emacs nunca harían un buen programa.",
    "author": "Linus Torvalds",
    "numberOfVotes": 4,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9340258e7b510004cba4c3"
    },
    "text": "Si Microsoft alguna vez hace aplicaciones para Linux, significa que he ganado.",
    "author": "Linus Torvalds",
    "numberOfVotes": 2,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a933f6f8e7b510004cba4c2"
    },
    "text": "Mira, no solo tienes que ser un buen programador para crear un sistema como Linux, sino que también tienes que ser un bastardo astuto ;-)",
    "author": "Linus Torvalds",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9342048e7b510004cba4c6"
    },
    "text": "En realidad, no estoy tratando de destruir Microsoft. Eso será solo un efecto secundario completamente involuntario.",
    "author": "Linus Torvalds",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9341788e7b510004cba4c5"
    },
    "text": "Hablar es barato. Muéstrame el código.",
    "author": "Linus Torvalds",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9340e08e7b510004cba4c4"
    },
    "text": "El primer 90 por ciento del código representa el primer 90 por ciento del tiempo de desarrollo. El 10 por ciento restante del código representa el otro 90 por ciento del tiempo de desarrollo.",
    "author": "Tom Cargill",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a93467e8e7b510004cba4c8"
    },
    "text": "No soy un gran programador; solo soy un buen programador con grandes hábitos.",
    "author": "Kent Beck",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9348828e7b510004cba4c9"
    },
    "text": "Solo hay un truco en el software, y es usar una pieza de software que ya ha sido escrita.",
    "author": "Bill Gates",
    "numberOfVotes": 1,
    "rating": 2.5
  },
  {
    "_id": {
      "$oid": "5a93d5a36a584e0004a4a612"
    },
    "text": "No puedes simplemente preguntar a los clientes qué quieren y luego tratar de dárselo. Para cuando lo tengas construido, querrán algo nuevo.",
    "author": "Steve Jobs",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a93d6b26a584e0004a4a614"
    },
    "text": "Lo que una computadora es para mí es que es la herramienta más notable que jamás hayamos creado. Es el equivalente a una bicicleta para nuestras mentes.",
    "author": "Steve Jobs",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a93eb796a584e0004a4a617"
    },
    "text": "La programación, resulta, es difícil. Las reglas fundamentales suelen ser simples y claras. Pero los programas construidos sobre estas reglas tienden a volverse lo suficientemente complejos como para introducir sus propias reglas y complejidad. Estás construyendo tu propio laberinto, en cierto modo, y podrías perderte en él.",
    "author": "Marijn Haverbeke",
    "source": "JavaScript Elocuente",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a93d8036a584e0004a4a615"
    },
    "text": "Estoy convencido de que aproximadamente la mitad de lo que separa a los empresarios exitosos de los que no lo son es pura perseverancia. Es tan difícil.",
    "author": "Steve Jobs",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a93da0d6a584e0004a4a616"
    },
    "text": "Muchas empresas contratan personas para que les digan qué hacer. Nosotros contratamos personas para que nos digan qué hacer.",
    "author": "Steve Jobs",
    "numberOfVotes": 2,
    "rating": 3
  },
  {
    "_id": {
      "$oid": "5a93ebdc6a584e0004a4a618"
    },
    "text": "Las computadoras en sí mismas solo pueden hacer cosas estúpidamente sencillas. La razón por la que son tan útiles es que hacen estas cosas a una velocidad increíblemente alta.",
    "author": "Marijn Haverbeke",
    "source": "JavaScript Elocuente",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a93ed3d6a584e0004a4a619"
    },
    "text": "Un programa es un edificio de pensamiento. Es gratuito construirlo, es ingrávido y crece fácilmente bajo nuestras manos mecanografiadas. Pero sin cuidado, el tamaño y la complejidad de un programa crecerán sin control, confundiendo incluso a la persona que lo creó.",
    "author": "Marijn Haverbeke",
    "source": "JavaScript Elocuente",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a93edc56a584e0004a4a61a"
    },
    "text": "Hay muchos errores terribles que cometer en el diseño de programas, así que adelante y comételos para que los entiendas mejor.",
    "author": "Marijn Haverbeke",
    "source": "JavaScript Elocuente",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a93fd14e49ad10004edb860"
    },
    "text": "La gente piensa que la ciencia de la computación es el arte de los genios, pero la realidad actual es lo contrario, solo muchas personas haciendo cosas que se construyen unas sobre otras, como una pared de mini piedras.",
    "author": "Donald Knuth",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a94040fe49ad10004edb862"
    },
    "text": "El profesionalismo no tiene cabida en el arte, y el hacking es arte. La ingeniería de software podría ser ciencia; pero eso no es lo que hago. Soy un hacker, no un ingeniero.",
    "author": "Jamie Zawinski",
    "numberOfVotes": 2,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a940c14e49ad10004edb864"
    },
    "text": "Nosotros, los que cortamos meras piedras, siempre debemos estar imaginando catedrales.",
    "author": "Credo del trabajador de la cantera",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9405d7e49ad10004edb863"
    },
    "text": "La comunicación debe ser de naturaleza sin estado, de tal manera que cada solicitud del cliente al servidor debe contener toda la información necesaria para entender la solicitud, y no puede aprovechar ningún contexto almacenado en el servidor.",
    "author": "Roy Fielding",
    "source": "Estilos Arquitectónicos y el Diseño de Arquitecturas de Software Basadas en Redes",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a942ea0ee7ed5000496b16f"
    },
    "text": "Cuando sientas la necesidad de escribir un comentario, primero intenta refactorizar el código para que cualquier comentario se vuelva superfluo.",
    "author": "Kent Beck",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a942dc4ee7ed5000496b16e"
    },
    "text": "Cuando descubras que tienes que añadir una característica a un programa, y el código del programa no está estructurado de una manera conveniente para añadir la característica, primero refactoriza el programa para que sea fácil añadir la característica, luego añade la característica.",
    "author": "Kent Beck",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a942fc3ee7ed5000496b171"
    },
    "text": "Hay pocas cosas más frustrantes o que hagan perder más tiempo que la depuración. ¿No sería mucho más rápido si simplemente no creáramos los errores en primer lugar?",
    "author": "Martin Fowler",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a942fa3ee7ed5000496b170"
    },
    "text": "Con las pruebas, sé de inmediato cuándo añadí un error. Eso me permite corregir el error inmediatamente, antes de que pueda escabullirse y esconderse.",
    "author": "Martin Fowler",
    "numberOfVotes": 2,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a942fd8ee7ed5000496b172"
    },
    "text": "Creo que una de las reglas más valiosas es evitar la duplicación.",
    "author": "Martin Fowler",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a942ffbee7ed5000496b173"
    },
    "text": "A menudo, los diseñadores hacen cosas complicadas que mejoran la capacidad en una plataforma de hardware particular cuando en realidad podría ser más barato comprar más hardware.",
    "author": "Martin Fowler",
    "numberOfVotes": 2,
    "rating": 2.3
  },
  {
    "_id": {
      "$oid": "5a9430a4ee7ed5000496b175"
    },
    "text": "La situación es mucho mejor para los programadores hoy en día: un PC usado barato, un CD de Linux y una cuenta de Internet, y tienes todas las herramientas necesarias para llegar a cualquier nivel de habilidad de programación al que quieras aspirar.",
    "author": "John Carmack",
    "numberOfVotes": 4,
    "rating": 4.6
  },
  {
    "_id": {
      "$oid": "5a94303bee7ed5000496b174"
    },
    "text": "Si quieres empezar y desarrollar algo nuevo y grandioso, no necesitas millones de dólares de capitalización. Necesitas suficiente pizza y Diet Coke para guardar en tu refrigerador, un PC barato para trabajar y la dedicación para llevarlo a cabo.",
    "author": "John Carmack",
    "numberOfVotes": 2,
    "rating": 3.8
  },
  {
    "_id": {
      "$oid": "5a9430ceee7ed5000496b176"
    },
    "text": "La historia en un juego es como la historia en una película porno. Se espera que esté ahí, pero no es tan importante.",
    "author": "John Carmack",
    "numberOfVotes": 6,
    "rating": 3.6
  },
  {
    "_id": {
      "$oid": "5a9430fbee7ed5000496b177"
    },
    "text": "Lo mejor que puede ser el software es fácil, pero la forma de hacer esto es acertar con los valores predeterminados, no limitar las opciones de los usuarios.",
    "author": "Paul Graham (programador)",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a943207ee7ed5000496b178"
    },
    "text": "Lo más importante es ser capaz de pensar lo que quieres, no de decir lo que quieres.",
    "author": "Paul Graham (programador)",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a943233ee7ed5000496b17a"
    },
    "text": "No es tan importante en qué trabajas, siempre y cuando no estés perdiendo el tiempo.",
    "author": "Paul Graham (programador)",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a943216ee7ed5000496b179"
    },
    "text": "El 5% superior de los programadores probablemente escribe el 99% del buen software.",
    "author": "Paul Graham (programador)",
    "numberOfVotes": 2,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a943244ee7ed5000496b17b"
    },
    "text": "Hay pocas fuentes de energía tan poderosas como un estudiante de posgrado procrastinador.",
    "author": "Paul Graham (programador)",
    "numberOfVotes": 2,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a943267ee7ed5000496b17d"
    },
    "text": "Tus clientes más descontentos son tu mayor fuente de aprendizaje.",
    "author": "Bill Gates",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9432a9ee7ed5000496b17e"
    },
    "text": "Ya no estamos en los días en que todo está súper bien elaborado. Pero en el corazón de los programas que llegan a la cima, encontrarás que el código interno clave fue hecho por unas pocas personas que realmente saben lo que estaban haciendo.",
    "author": "Bill Gates",
    "numberOfVotes": 4,
    "rating": 4.2
  },
  {
    "_id": {
      "$oid": "5a943301ee7ed5000496b181"
    },
    "text": "¿Qué es la simplicidad? La simplicidad es el camino más corto hacia una solución.",
    "author": "Ward Cunningham",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a943316ee7ed5000496b182"
    },
    "text": "Poner una nueva característica en un programa es importante, pero refactorizar para que se puedan añadir nuevas características en el futuro es igualmente importante.",
    "author": "Ward Cunningham",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a94333dee7ed5000496b183"
    },
    "text": "Una nueva idea surge de repente y de una manera bastante intuitiva. Pero la intuición no es más que el resultado de la experiencia intelectual anterior.",
    "author": "Albert Einstein",
    "numberOfVotes": 3,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a9433d2ee7ed5000496b184"
    },
    "text": "Los límites de mi lenguaje significan los límites de mi mundo.",
    "author": "Ludwig Wittgenstein",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9434dcee7ed5000496b187"
    },
    "text": "Si tienes un procedimiento con 10 parámetros, probablemente te perdiste algunos.",
    "author": "Alan Perlis",
    "numberOfVotes": 4,
    "rating": 4.6
  },
  {
    "_id": {
      "$oid": "5a943438ee7ed5000496b185"
    },
    "text": "Que el lenguaje es un instrumento de la razón humana, y no meramente un medio para la expresión del pensamiento, es una verdad generalmente admitida.",
    "author": "George Boole",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9434edee7ed5000496b188"
    },
    "text": "Un lenguaje que no afecta la forma en que piensas sobre la programación, no vale la pena conocerlo.",
    "author": "Alan Perlis",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a943501ee7ed5000496b189"
    },
    "text": "La simplicidad no precede a la complejidad, sino que la sigue.",
    "author": "Alan Perlis",
    "numberOfVotes": 4,
    "rating": 3.8
  },
  {
    "_id": {
      "$oid": "5a943514ee7ed5000496b18a"
    },
    "text": "Un año dedicado a la inteligencia artificial es suficiente para hacer que uno crea en Dios.",
    "author": "Alan Perlis",
    "numberOfVotes": 3,
    "rating": 2.7
  },
  {
    "_id": {
      "$oid": "5a943538ee7ed5000496b18c"
    },
    "text": "El mejor libro sobre programación para el profano es Alicia en el País de las Maravillas, pero eso es porque es el mejor libro sobre cualquier cosa para el profano.",
    "author": "Alan Perlis",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a94351fee7ed5000496b18b"
    },
    "text": "Lidiar con el fracaso es fácil: trabaja duro para mejorar.",
    "author": "Alan Perlis",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a943485ee7ed5000496b186"
    },
    "text": "Un lenguaje de programación es de bajo nivel cuando sus programas requieren atención a lo irrelevante.",
    "author": "Alan Perlis",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9435d7ee7ed5000496b190"
    },
    "text": "Los programas informáticos son los productos más intrincados, delicadamente equilibrados y finamente entrelazados de todos los productos de la industria humana hasta la fecha.",
    "author": "James Gleick",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a9435fbee7ed5000496b191"
    },
    "text": "La explotación eficaz de sus poderes de abstracción debe considerarse una de las actividades más vitales de un programador competente.",
    "author": "Edsger W. Dijkstra",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a943579ee7ed5000496b18e"
    },
    "text": "Los tontos ignoran la complejidad. Los pragmáticos la sufren. Algunos pueden evitarla. Los genios la eliminan.",
    "author": "Alan Perlis",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a943675ee7ed5000496b193"
    },
    "text": "Los programas deben escribirse para que los lean las personas, y solo de manera incidental para que las máquinas los ejecuten.",
    "author": "Hal Abelson",
    "source": "Abelson & Sussman, \"Estructura e Interpretación de Programas de Computadora\"",
    "numberOfVotes": 3,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a943612ee7ed5000496b192"
    },
    "text": "No importa lo pulida que sea la demostración en el ensayo, cuando la haces frente a un público en vivo, la probabilidad de una presentación impecable es inversamente proporcional al número de personas que miran, elevado a la potencia de la cantidad de dinero involucrada.",
    "author": "Mark Gibbs",
    "source": "https://www.networkworld.com/article/2317159/computers/the-myth-of-the-digital-lifestyle.html",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a956c50e648470004c69e0d"
    },
    "text": "Cabe señalar que ningún ingeniero de software éticamente capacitado consentiría jamás en escribir un procedimiento DestruirBagdad. La ética profesional básica requeriría en cambio que escribiera un procedimiento DestruirCiudad, al que se podría dar Bagdad como parámetro.",
    "author": "Nathaniel Borenstein",
    "numberOfVotes": 2,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a956e55e648470004c69e10"
    },
    "text": "Cuando no entendemos un proceso, caemos en el pensamiento mágico sobre los resultados.",
    "author": "Jef Raskin",
    "numberOfVotes": 2,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a956de5e648470004c69e0f"
    },
    "text": "La programación de bajo nivel es buena para el alma del programador.",
    "author": "John Carmack",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a956edfe648470004c69e11"
    },
    "text": "La simplicidad y la elegancia son impopulares porque requieren trabajo duro y disciplina para lograrse y educación para ser apreciadas.",
    "author": "Edsger W. Dijkstra",
    "source": "https://www.cs.utexas.edu/users/EWD/transcriptions/EWD12xx/EWD1243a.html",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a956f87e648470004c69e12"
    },
    "text": "Una interfaz de usuario debe ser tan simple que un principiante en una emergencia pueda entenderla en 10 segundos.",
    "author": "Ted Nelson",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a956dcce648470004c69e0e"
    },
    "text": "Aprender a programar no tiene más que ver con el diseño de software interactivo que aprender a escribir a máquina tiene que ver con escribir poesía.",
    "author": "Ted Nelson",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a95a672cb1a4d0004b2987f"
    },
    "text": "Cada programa tiene (al menos) dos propósitos: aquel para el que fue escrito y otro para el que no lo fue.",
    "author": "Alan Perlis",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a95a6a3cb1a4d0004b29881"
    },
    "text": "En la simbiosis hombre-máquina, es el hombre quien debe adaptarse: las máquinas no pueden.",
    "author": "Alan Perlis",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a95a686cb1a4d0004b29880"
    },
    "text": "La constante de un hombre es la variable de otro hombre.",
    "author": "Alan Perlis",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a9432bcee7ed5000496b17f"
    },
    "text": "El éxito es un pésimo maestro. Seduce a la gente inteligente haciéndoles pensar que no pueden perder.",
    "author": "Bill Gates",
    "numberOfVotes": 3,
    "rating": 3
  },
  {
    "_id": {
      "$oid": "5a95a760cb1a4d0004b29883"
    },
    "text": "Es más fácil cambiar la especificación para que se ajuste al programa que viceversa.",
    "author": "Alan Perlis",
    "numberOfVotes": 4,
    "rating": 4.7
  },
  {
    "_id": {
      "$oid": "5a95a6f3cb1a4d0004b29882"
    },
    "text": "Creo que es inevitable que la gente programe mal. La capacitación no ayudará sustancialmente a las cosas. Tenemos que aprender a vivir con ello.",
    "author": "Alan Perlis",
    "numberOfVotes": 4,
    "rating": 4.1
  },
  {
    "_id": {
      "$oid": "5a95d22e7700780004d51dbb"
    },
    "text": "Si hubiéramos preguntado a los clientes qué querían, habrían dicho “caballos más rápidos”.",
    "author": "Henry Ford",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a95d2487700780004d51dbc"
    },
    "text": "He descubierto que la razón por la que mucha gente está interesada en la inteligencia artificial es la misma razón por la que mucha gente está interesada en las extremidades artificiales: les falta una.",
    "author": "David Parnas",
    "numberOfVotes": 1,
    "rating": 2.5
  },
  {
    "_id": {
      "$oid": "5a95d2a57700780004d51dbd"
    },
    "text": "Un sistema distribuido es aquel en el que el fallo de una computadora que ni siquiera sabías que existía puede dejar tu propia computadora inutilizable.",
    "author": "Leslie Lamport",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a95d3a37700780004d51dbe"
    },
    "text": "Todo es palabrería hasta que el código se ejecuta.",
    "author": "Ward Cunningham",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a95d4127700780004d51dbf"
    },
    "text": "En teoría, no hay diferencia entre la teoría y la práctica. Pero, en la práctica, sí la hay.",
    "author": "Jan L. A. van de Snepscheut",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a95d4977700780004d51dc2"
    },
    "text": "Construimos nuestros sistemas informáticos de la misma manera que construimos nuestras ciudades: con el tiempo, sin un plan, sobre ruinas.",
    "author": "Ellen Ullman",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a95d55e7700780004d51dc3"
    },
    "text": "Lo siguiente mejor a tener buenas ideas es reconocer las buenas ideas de tus usuarios.",
    "author": "Eric S. Raymond",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a95d43e7700780004d51dc0"
    },
    "text": "El buen software, como el buen vino, lleva tiempo.",
    "author": "Joel Spolsky",
    "numberOfVotes": 3,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a95d5bf7700780004d51dc4"
    },
    "text": "Vale la pena aprender Lisp por la profunda experiencia de iluminación que tendrás cuando finalmente lo entiendas; esa experiencia te convertirá en un mejor programador por el resto de tus días, incluso si nunca usas Lisp mucho.",
    "author": "Eric S. Raymond",
    "numberOfVotes": 3,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a95d4577700780004d51dc1"
    },
    "text": "Depurar es como ser el detective en una película de crimen donde también eres el asesino.",
    "author": "Filipe Fortes",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a95d8a87700780004d51dc7"
    },
    "text": "Lo que queríamos preservar no era solo un buen entorno en el que hacer programación, sino un sistema en torno al cual pudiera formarse la camaradería.",
    "author": "Dennis Ritchie",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a95d7b47700780004d51dc6"
    },
    "text": "Una vez que las computadoras tomaron el control, es posible que nunca lo recuperemos.",
    "author": "Marvin Minsky",
    "numberOfVotes": 2,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a95e89f7700780004d51dc9"
    },
    "text": "Una computadora no debe hacerte perder el tiempo ni requerir que hagas más trabajo del estrictamente necesario.",
    "author": "Jef Raskin",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a95fcd17700780004d51dcb"
    },
    "text": "De las muchas formas de cultura falsa, una conversación prematura con abstracciones es quizás la más probable que resulte fatal para el crecimiento de un vigor intelectual masculino.",
    "author": "George Boole",
    "numberOfVotes": 8,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a95dae97700780004d51dc8"
    },
    "text": "C++ ciertamente tiene sus puntos buenos. Pero en general creo que es un mal lenguaje. Hace muchas cosas a medias y es simplemente un montón de basura de ideas que son mutuamente excluyentes. Es demasiado grande, demasiado complejo. Y obviamente está construido por un comité.",
    "author": "Ken Thompson",
    "source": "Ken Thompson; citado en Seibel, Peter (2009). Coders At Work. p. 475.",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a95fce07700780004d51dcc"
    },
    "text": "No importa cuán correcto pueda parecer un teorema matemático, uno nunca debería estar satisfecho de que no haya algo imperfecto en él hasta que también dé la impresión de ser hermoso.",
    "author": "George Boole",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a96009b7700780004d51dcf"
    },
    "text": "La Máquina Analítica no ocupa un terreno común con las meras 'máquinas de calcular'. Ocupa una posición totalmente propia, y las consideraciones que sugiere son más interesantes por su naturaleza.",
    "author": "Ada Lovelace",
    "numberOfVotes": 5,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a96001a7700780004d51dce"
    },
    "text": "La ciencia de las operaciones, derivada más especialmente de las matemáticas, es una ciencia en sí misma, y tiene su propia verdad y valor abstractos.",
    "author": "Ada Lovelace",
    "numberOfVotes": 4,
    "rating": 4.6
  },
  {
    "_id": {
      "$oid": "5a9601017700780004d51dd1"
    },
    "text": "En el caso de la Máquina Analítica, sin duda tenemos que invertir un cierto capital de trabajo analítico en una línea particular, pero esto es para que la máquina pueda darnos un rendimiento mucho mayor en otra línea.",
    "author": "Ada Lovelace",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9600ae7700780004d51dd0"
    },
    "text": "Podemos decir con mayor propiedad que la Máquina Analítica teje patrones algebraicos tal como el telar de Jacquard teje flores y hojas.",
    "author": "Ada Lovelace",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9602227700780004d51dd2"
    },
    "text": "El diseño del siguiente tratado es investigar las leyes fundamentales de aquellas operaciones de la mente por las cuales se realiza el razonamiento; darles expresión en el lenguaje simbólico de un Cálculo, y sobre esta base establecer la ciencia de la Lógica y construir su método.",
    "author": "George Boole",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a967d572ba98a0004b6294f"
    },
    "text": "Cualquiera que considere los métodos aritméticos para producir dígitos aleatorios está, por supuesto, en estado de pecado. Porque, como se ha señalado varias veces, no existe tal cosa como un número aleatorio.",
    "author": "John von Neumann",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9602757700780004d51dd3"
    },
    "text": "No solo existe una estrecha analogía entre las operaciones de la mente en el razonamiento general y sus operaciones en la ciencia particular del Álgebra, sino que existe en gran medida un acuerdo exacto en las leyes por las que se conducen las dos clases de operaciones.",
    "author": "George Boole",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a967e9c2ba98a0004b62950"
    },
    "text": "Una gran parte de las matemáticas que se vuelven útiles se desarrollaron sin ningún deseo absoluto de ser útiles, y en una situación donde nadie podría posiblemente saber en qué área se volverían útiles.",
    "author": "John von Neumann",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a96b8e2d6959500047aecae"
    },
    "text": "La ingeniería de software es la parte de la ciencia de la computación que es demasiado difícil para el científico de la computación.",
    "author": "Friedrich Bauer",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a96b909d6959500047aecaf"
    },
    "text": "El ingeniero de software aficionado siempre está en busca de magia, algún método o herramienta sensacional cuya aplicación prometa hacer que el desarrollo de software sea trivial. Es la marca del ingeniero de software profesional saber que no existe tal panacea.",
    "author": "Grady Booch",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a96b980d6959500047aecb0"
    },
    "text": "La gente buena con un buen proceso superará a la gente buena sin ningún proceso en todo momento.",
    "author": "Grady Booch",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a96b998d6959500047aecb1"
    },
    "text": "Toda la historia de la ingeniería de software es la del aumento en los niveles de abstracción.",
    "author": "Grady Booch",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a96b9ead6959500047aecb2"
    },
    "text": "La razón por la que pensamos que la ciencia de la computación se trata de computadoras es prácticamente la misma razón por la que los egipcios pensaban que la geometría se trataba de instrumentos de topografía: cuando algún campo apenas está comenzando y realmente no lo entiendes muy bien, es muy fácil confundir la esencia de lo que estás haciendo con las herramientas que usas.",
    "author": "Hal Abelson",
    "numberOfVotes": 3,
    "rating": 4.9
  },
  {
    "_id": {
      "$oid": "5a96b7abd6959500047aecad"
    },
    "text": "La mayor parte del software actual se parece mucho a una pirámide egipcia con millones de ladrillos apilados uno encima del otro, sin integridad estructural, pero simplemente hecha por fuerza bruta y miles de esclavos.",
    "author": "Alan Kay",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a96ba01d6959500047aecb3"
    },
    "text": "¿Es estudiar ciencia de la computación la mejor manera de prepararse para ser programador? No. La mejor manera de prepararse es escribir programas y estudiar grandes programas que otras personas hayan escrito.",
    "author": "Bill Gates",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a96ba30d6959500047aecb4"
    },
    "text": "La ciencia de la computación difiere de la física en que en realidad no es una ciencia. No estudia objetos naturales. Más bien, la ciencia de la computación es como la ingeniería; se trata de hacer que algo haga algo.",
    "author": "Richard Feynman",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a96ba45d6959500047aecb5"
    },
    "text": "El propósito de la computación es la comprensión, no los números.",
    "author": "Richard Hamming",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a96bb2dd6959500047aecb7"
    },
    "text": "Todo nuestro exaltado progreso tecnológico, la civilización para el caso, es comparable a un hacha en manos de un criminal patológico.",
    "author": "Albert Einstein",
    "numberOfVotes": 3,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a96bbaed6959500047aecb8"
    },
    "text": "Cuando un científico distinguido pero anciano afirma que algo es posible, casi seguro que tiene razón. Cuando afirman que algo es imposible, es muy probable que se equivoquen.",
    "author": "Arthur C. Clarke",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a96ba93d6959500047aecb6"
    },
    "text": "La investigación en ciencia de la computación es diferente de estas disciplinas más tradicionales. Filosóficamente, difiere de las ciencias físicas porque no busca descubrir, explicar o explotar el mundo natural, sino estudiar las propiedades de las máquinas de creación humana.",
    "author": "Dennis Ritchie",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a96bbc3d6959500047aecb9"
    },
    "text": "Cualquier tecnología suficientemente avanzada es indistinguible de la magia.",
    "author": "Arthur C. Clarke",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a96bd31d6959500047aecba"
    },
    "text": "Si bien se ha prestado mucha atención a los patrones arquitectónicos de software de alto nivel, lo que es, en efecto, la arquitectura de software estándar de facto rara vez se discute: la Gran Bola de Lodo.",
    "author": "Joseph Yoder (científico de la computación)",
    "source": "Brian Foote y Joseph Yoder, Gran Bola de Lodo",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a96bd7ed6959500047aecbb"
    },
    "text": "Demasiados de nuestros sistemas de software son, arquitectónicamente, poco más que barrios marginales.",
    "author": "Joseph Yoder (científico de la computación)",
    "source": "Brian Foote y Joseph Yoder, Gran Bola de Lodo",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a96be8ed6959500047aecbe"
    },
    "text": "Gestionar un proyecto grande es un problema cualitativamente diferente a gestionar uno pequeño, al igual que liderar una división de infantería en batalla es diferente a comandar un pequeño equipo de fuerzas especiales.",
    "author": "Joseph Yoder (científico de la computación)",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a96bf70d6959500047aecc2"
    },
    "text": "Cuando construyes un prototipo, siempre existe el riesgo de que alguien diga \"es lo suficientemente bueno, envíalo\". Una forma de minimizar el riesgo de que un prototipo se ponga en producción es escribir el prototipo utilizando un lenguaje o herramienta que posiblemente no podrías usar para una versión de producción.",
    "author": "Joseph Yoder (científico de la computación)",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a96bec9d6959500047aecbf"
    },
    "text": "Lamentablemente, la arquitectura ha sido subvalorada durante tanto tiempo que muchos ingenieros consideran normal la vida con una Gran Bola de Lodo.",
    "author": "Joseph Yoder (científico de la computación)",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a96bf99d6959500047aecc3"
    },
    "text": "El verdadero problema con el código desechable surge cuando no se desecha.",
    "author": "Joseph Yoder (científico de la computación)",
    "numberOfVotes": 2,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a96c01dd6959500047aecc4"
    },
    "text": "A veces es más fácil desechar un sistema y empezar de nuevo.",
    "author": "Joseph Yoder (científico de la computación)",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a96c299d6959500047aecc5"
    },
    "text": "La educación en ciencia de la computación no puede convertir a nadie en un programador experto más de lo que estudiar pinceles y pigmentos puede convertir a alguien en un pintor experto.",
    "author": "Eric S. Raymond",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a96c3b6d6959500047aecc7"
    },
    "text": "Los mejores programadores no son marginalmente mejores que los simplemente buenos. Son un orden de magnitud mejores, medidos por cualquier estándar: creatividad conceptual, velocidad, ingenio de diseño o capacidad de resolución de problemas.",
    "author": "Randall E. Stross",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a96c380d6959500047aecc6"
    },
    "text": "Inventé el término 'Orientado a Objetos', y puedo decirles que no tenía C++ en mente.",
    "author": "Alan Kay",
    "numberOfVotes": 3,
    "rating": 4.7
  },
  {
    "_id": {
      "$oid": "5a96c44cd6959500047aecc9"
    },
    "text": "La mayoría de los buenos programadores no programan porque esperan que les paguen o que el público los adule, sino porque es divertido programar.",
    "author": "Linus Torvalds",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a97def55f624c00046e2103"
    },
    "text": "Educadores, generales, dietistas, psicólogos y padres programan. Los ejércitos, los estudiantes y algunas sociedades están programados.",
    "author": "Alan Perlis",
    "source": "Estructura e Interpretación de Programas de Computadora",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a96c431d6959500047aecc8"
    },
    "text": "Iterar es humano, recursar divino.",
    "author": "L. Peter Deutsch",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a97dee55f624c00046e2102"
    },
    "text": "A pesar de todo su poder, la computadora es un capataz severo. Sus programas deben ser correctos, y lo que deseamos decir debe decirse con precisión en cada detalle.",
    "author": "Alan Perlis",
    "source": "Estructura e Interpretación de Programas de Computadora",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a97e0755f624c00046e2104"
    },
    "text": "Los actos de la mente, en los que ejerce su poder sobre ideas simples, son principalmente estos tres: 1. Combinar varias ideas simples en una compuesta, y así se hacen todas las ideas complejas. 2. El segundo es juntar dos ideas, ya sean simples o complejas, y colocarlas una al lado de la otra para verlas de una vez, sin unirlas en una, por lo que obtiene todas sus ideas de relaciones. 3. El tercero es separarlas de todas las demás ideas que las acompañan en su existencia real: esto se llama abstracción, y así se hacen todas sus ideas generales.",
    "author": "John Locke",
    "source": "John Locke, Un Ensayo sobre el Entendimiento Humano (1690)",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a97efdaccdfe50004febf35"
    },
    "text": "Cuando los desarrolladores de programas no son territoriales con respecto a su código y animan a otros a buscar errores y posibles mejoras, el progreso se acelera drásticamente.",
    "author": "Gerald Weinberg",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a97f196ccdfe50004febf37"
    },
    "text": "Lo mejor de un booleano es que incluso si te equivocas, solo te equivocas por un bit.",
    "author": "Anónimo",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a97f307ccdfe50004febf39"
    },
    "text": "Al depurar, los novatos insertan código correctivo; los expertos eliminan el código defectuoso.",
    "author": "Richard E. Pattis",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a97f324ccdfe50004febf3a"
    },
    "text": "Resulta que el estilo importa en la programación por la misma razón que importa en la escritura. Hace que la lectura sea mejor.",
    "author": "Douglas Crockford",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a97f363ccdfe50004febf3b"
    },
    "text": "Los programas informáticos son las cosas más complejas que hacen los humanos.",
    "author": "Douglas Crockford",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a97f4e1ccdfe50004febf3d"
    },
    "text": "La mayoría de los lenguajes de programación contienen partes buenas y partes malas. Descubrí que podía ser un mejor programador utilizando solo las partes buenas y evitando las partes malas.",
    "author": "Douglas Crockford",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a97f510ccdfe50004febf3e"
    },
    "text": "Una buena arquitectura es necesaria para dar a los programas suficiente estructura para poder crecer sin colapsar en un charco de confusión.",
    "author": "Douglas Crockford",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a97f539ccdfe50004febf3f"
    },
    "text": "JavaScript es el lenguaje de programación más incomprendido del mundo.",
    "author": "Douglas Crockford",
    "numberOfVotes": 2,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a97f5f2ccdfe50004febf41"
    },
    "text": "En JavaScript, hay un lenguaje hermoso, elegante y altamente expresivo que está enterrado bajo una pila humeante de buenas intenciones y errores.",
    "author": "Douglas Crockford",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a97f552ccdfe50004febf40"
    },
    "text": "Por lo general, se espera que el software se modifique a lo largo de su vida productiva. El proceso de convertir un programa correcto en un programa correcto diferente es extremadamente desafiante.",
    "author": "Douglas Crockford",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a97f8c1ccdfe50004febf42"
    },
    "text": "Cada buen trabajo de software comienza rascando una picazón personal de un desarrollador.",
    "author": "Eric S. Raymond",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9801011878b40004879f55"
    },
    "text": "Puedes tener el proyecto: Terminado a Tiempo. Terminado en Presupuesto. Terminado Correctamente - Elige dos.",
    "author": "Anónimo",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9801871878b40004879f56"
    },
    "text": "Nadie en la breve historia de la computación ha escrito nunca una pieza de software perfecta. Es poco probable que seas el primero.",
    "author": "Andy Hunt (autor)",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9801f61878b40004879f57"
    },
    "text": "Nunca confíes en una computadora que no puedas tirar por la ventana.",
    "author": "Steve Wozniak",
    "numberOfVotes": 2,
    "rating": 2.8
  },
  {
    "_id": {
      "$oid": "5a9800cd1878b40004879f54"
    },
    "text": "La mejor manera de predecir el futuro es inventarlo.",
    "author": "Alan Kay",
    "numberOfVotes": 5,
    "rating": 2.8
  },
  {
    "_id": {
      "$oid": "5a9802611878b40004879f58"
    },
    "text": "Si puedes hacer el trabajo de hoy hoy, pero lo haces de tal manera que posiblemente no puedas hacer el trabajo de mañana mañana, entonces pierdes.",
    "author": "Martin Fowler",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9803171878b40004879f5a"
    },
    "text": "Los códigos son un rompecabezas. Un juego, como cualquier otro juego.",
    "author": "Alan Turing",
    "numberOfVotes": 4,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9802cb1878b40004879f59"
    },
    "text": "La documentación es una carta de amor que le escribes a tu yo futuro.",
    "author": "Damian Conway",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a95d17b7700780004d51dba"
    },
    "text": "La vida es demasiado corta para ejecutar software propietario.",
    "author": "Bdale Garbee",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a98075b1878b40004879f5d"
    },
    "text": "Siempre que tengo que pensar para entender lo que está haciendo el código, me pregunto si puedo refactorizar el código para que esa comprensión sea más inmediatamente aparente.",
    "author": "Martin Fowler",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9803931878b40004879f5b"
    },
    "text": "Si le das un programa a alguien, lo frustrarás por un día; si les enseñas a programar, los frustrarás de por vida.",
    "author": "David Leinweber",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9803be1878b40004879f5c"
    },
    "text": "El código que escribes te convierte en programador. El código que eliminas te convierte en uno bueno. El código que no tienes que escribir te convierte en uno genial.",
    "author": "Mario Fusco",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a98080e1878b40004879f5f"
    },
    "text": "Primero hazlo, luego hazlo bien, luego hazlo mejor.",
    "author": "Addy Osmani",
    "numberOfVotes": 2,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9808401878b40004879f60"
    },
    "text": "El costo de añadir una característica no es solo el tiempo que lleva codificarla. El costo también incluye la adición de un obstáculo a la expansión futura. El truco es elegir las características que no se combaten entre sí.",
    "author": "John Carmack",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9808b71878b40004879f62"
    },
    "text": "Primero aprende ciencia de la computación y toda la teoría. Luego desarrolla un estilo de programación. Luego olvídate de todo eso y simplemente hackea.",
    "author": "George Carrette",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a98090a1878b40004879f64"
    },
    "text": "Solo porque la gente te diga que no se puede hacer, eso no significa necesariamente que no se pueda hacer. Solo significa que ellos no pueden hacerlo.",
    "author": "Anders Hejlsberg",
    "numberOfVotes": 8,
    "rating": 4.4
  },
  {
    "_id": {
      "$oid": "5a98096c1878b40004879f65"
    },
    "text": "La única manera de aprender un nuevo lenguaje de programación es escribiendo programas en él.",
    "author": "Dennis Ritchie",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a980ec71878b40004879f66"
    },
    "text": "Un sistema en evolución aumenta su complejidad a menos que se trabaje para reducirla.",
    "author": "Manny Lehman (científico de la computación)",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a985b7ae93441000489b948"
    },
    "text": "No importa lo lento que seas escribiendo código limpio, siempre serás más lento si haces un desastre.",
    "author": "Robert C. Martin",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a985bc7e93441000489b949"
    },
    "text": "Los algoritmos sofisticados son lentos cuando n es pequeño, y n suele ser pequeño.",
    "author": "Rob Pike",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a985c91e93441000489b94a"
    },
    "text": "La única diferencia entre un FA [autómata finito] y un TM [máquina de Turing] es que el TM, a diferencia del FA, tiene papel y lápiz. Piénsalo. Te dice algo sobre el poder de la escritura.",
    "author": "Manuel Blum",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a985e7ae93441000489b94c"
    },
    "text": "Dentro de una computadora, el lenguaje natural no es natural.",
    "author": "Alan Perlis",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a985db5e93441000489b94b"
    },
    "text": "Solo porque hayas implementado algo no significa que lo entiendas.",
    "author": "Brian Cantwell Smith",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a9807b41878b40004879f5e"
    },
    "text": "Que casi nunca suceda es otra forma de decir 'sucede'.",
    "author": "Douglas Crockford",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9860abe93441000489b94f"
    },
    "text": "Cuidado con los errores en el código anterior; Solo he probado que es correcto, no lo he probado.",
    "author": "Donald Knuth",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a986366e93441000489b951"
    },
    "text": "Una pantalla conectada a una computadora digital nos da la oportunidad de familiarizarnos con conceptos no realizables en el mundo físico. Es un espejo a un país de las maravillas matemáticas.",
    "author": "Ivan Sutherland",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9911bb8cdbad0004955d02"
    },
    "text": "Antes de que el software pueda ser reutilizable, primero tiene que ser utilizable.",
    "author": "Ralph Johnson (científico de la computación)",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9912938cdbad0004955d04"
    },
    "text": "Los componentes más baratos, rápidos y fiables son aquellos que no están ahí.",
    "author": "Gordon Bell",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a9912248cdbad0004955d03"
    },
    "text": "Para entender la recursividad, primero hay que entender la recursividad.",
    "author": "Anónimo",
    "numberOfVotes": 2,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9995789128a800040c7dfa"
    },
    "text": "La parte más difícil del diseño es mantener las características fuera.",
    "author": "Don Norman",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a986021e93441000489b94e"
    },
    "text": "La abstracción prematura es tan mala como la optimización prematura.",
    "author": "Luciano Ramalho",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9995d29128a800040c7dfc"
    },
    "text": "Gran parte de la esencia de la construcción de un programa está, de hecho, en la depuración de la especificación.",
    "author": "Fred Brooks",
    "numberOfVotes": 2,
    "rating": 3.3
  },
  {
    "_id": {
      "$oid": "5a9997389128a800040c7dfd"
    },
    "text": "Cualquier producto que necesite un manual para funcionar está roto.",
    "author": "Elon Musk",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9995b89128a800040c7dfb"
    },
    "text": "El acto de describir un programa con un detalle inequívoco y el acto de programar son uno y el mismo.",
    "author": "Kevlin Henney",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9997929128a800040c7dfe"
    },
    "text": "Creo que siempre debes tener en cuenta que la entropía no está de tu lado.",
    "author": "Elon Musk",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9997d79128a800040c7dff"
    },
    "text": "El camino a la oficina del CEO no debería ser a través de la oficina del CFO, y no debería ser a través del departamento de marketing. Debe ser a través de la ingeniería y el diseño.",
    "author": "Elon Musk",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9999f39128a800040c7e00"
    },
    "text": "La gente se equivoca cuando piensa que la tecnología simplemente mejora automáticamente. No mejora automáticamente. Solo mejora si mucha gente trabaja muy duro para mejorarla, y en realidad se degradará, creo, por sí sola, en realidad.",
    "author": "Elon Musk",
    "numberOfVotes": 3,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9a9c372bad9600044b6fb4"
    },
    "text": "Con la inteligencia artificial estamos invocando al demonio.",
    "author": "Elon Musk",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9a9f7e2bad9600044b6fb6"
    },
    "text": "La IA es un riesgo fundamental para la existencia de la civilización humana.",
    "author": "Elon Musk",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a9aa21b2bad9600044b6fba"
    },
    "text": "La actividad principal de la programación no es la creación de nuevos programas independientes, sino la integración, modificación y explicación de los existentes.",
    "author": "Terry Winograd",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a9aaff32bad9600044b6fbd"
    },
    "text": "Las URIs geniales no cambian.",
    "author": "Tim Berners-Lee",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a9aaf8e2bad9600044b6fbc"
    },
    "text": "No creo en la idea del momento eureka. Creo que es un mito. Sospecho mucho que en realidad Arquímedes había estado pensando en ese problema durante mucho tiempo.",
    "author": "Tim Berners-Lee",
    "numberOfVotes": 4,
    "rating": 3.7
  },
  {
    "_id": {
      "$oid": "5a9ab0372bad9600044b6fbf"
    },
    "text": "Cuando inventé la web, no tuve que pedir permiso a nadie.",
    "author": "Tim Berners-Lee",
    "numberOfVotes": 2,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9aa01d2bad9600044b6fb7"
    },
    "text": "Necesitamos ser súper cuidadosos con la IA. Potencialmente más peligroso que las armas nucleares.",
    "author": "Elon Musk",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9ab1802bad9600044b6fc1"
    },
    "text": "Inventé la Web solo porque la necesitaba, en realidad, porque era tan frustrante que no existiera.",
    "author": "Tim Berners-Lee",
    "numberOfVotes": 3,
    "rating": 4.7
  },
  {
    "_id": {
      "$oid": "5a9ab1ac2bad9600044b6fc2"
    },
    "text": "Ser un hacker, cuando uso el término, es alguien que es creativo y hace cosas maravillosas.",
    "author": "Tim Berners-Lee",
    "numberOfVotes": 3,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a9ab1fa2bad9600044b6fc3"
    },
    "text": "El Servidor de Nombres de Dominio (DNS) es el talón de Aquiles de la Web.",
    "author": "Tim Berners-Lee",
    "numberOfVotes": 2,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9ab3f52bad9600044b6fc4"
    },
    "text": "Hace dos siglos, Leibnitz inventó una máquina calculadora que encarnaba la mayoría de las características esenciales de los dispositivos de teclado recientes, pero entonces no pudo entrar en uso. La economía de la situación estaba en contra.",
    "author": "Vannevar Bush",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9ab4a82bad9600044b6fc5"
    },
    "text": "Siempre que se emplean procesos lógicos de pensamiento, existe una oportunidad para la máquina.",
    "author": "Vannevar Bush",
    "numberOfVotes": 2,
    "rating": 2.8
  },
  {
    "_id": {
      "$oid": "5a9ab8f42bad9600044b6fc6"
    },
    "text": "Si el razonamiento científico se limitara a los procesos lógicos de la aritmética, no llegaríamos muy lejos en nuestra comprensión del mundo físico. Uno podría intentar comprender el juego de póquer enteramente mediante el uso de las matemáticas de la probabilidad.",
    "author": "Vannevar Bush",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9ac42b2bad9600044b6fc7"
    },
    "text": "Enviar código por primera vez es como endeudarse. Un poco de deuda acelera el desarrollo siempre y cuando se pague rápidamente con una reescritura. El peligro ocurre cuando la deuda no se paga. Cada minuto dedicado a código no del todo correcto cuenta como interés de esa deuda. Organizaciones de ingeniería enteras pueden quedar paralizadas bajo la carga de la deuda técnica.",
    "author": "Ward Cunningham",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9ac4852bad9600044b6fc8"
    },
    "text": "Al igual que una deuda financiera, la deuda técnica incurre en pagos de intereses, que vienen en forma del esfuerzo extra que tenemos que hacer en el desarrollo futuro debido a la elección de diseño rápida y sucia.",
    "author": "Martin Fowler",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9ac5942bad9600044b6fc9"
    },
    "text": "Una de las implicaciones importantes de la deuda técnica es que debe ser atendida. Si la deuda crece lo suficientemente grande, eventualmente la empresa gastará más en atender su deuda de lo que invierte en aumentar el valor de sus otros activos.",
    "author": "Steve McConnell",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9ab0622bad9600044b6fc0"
    },
    "text": "Lo que es muy importante desde mi punto de vista es que hay una web. Cualquiera que intente dividirla en dos encontrará que su pieza parece muy aburrida.",
    "author": "Tim Berners-Lee",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a9b0b112bad9600044b6fca"
    },
    "text": "Así se observa que los edificios que un solo arquitecto ha planeado y ejecutado, son generalmente más elegantes y cómodos que aquellos que varios han intentado mejorar.",
    "author": "René Descartes",
    "source": "Discurso del Método para Dirigir Bien la Razón y Buscar la Verdad en las Ciencias",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9b0b752bad9600044b6fcb"
    },
    "text": "Las computadoras son los objetos más complejos que los seres humanos hemos creado jamás, pero en un sentido fundamental son notablemente simples.",
    "author": "Danny Hillis",
    "source": "El Patrón en la Piedra: Las Ideas Simples que Hacen Funcionar las Computadoras",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a9b0bb22bad9600044b6fcd"
    },
    "text": "La magia de una computadora reside en su capacidad de convertirse en casi cualquier cosa que puedas imaginar, siempre y cuando puedas explicar exactamente qué es eso.",
    "author": "Danny Hillis",
    "source": "El Patrón en la Piedra: Las Ideas Simples que Hacen Funcionar las Computadoras",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b0b9a2bad9600044b6fcc"
    },
    "text": "La computadora no es solo una calculadora avanzada o una cámara o un pincel; más bien, es un dispositivo que acelera y extiende nuestros procesos de pensamiento.",
    "author": "Danny Hillis",
    "source": "El Patrón en la Piedra: Las Ideas Simples que Hacen Funcionar las Computadoras",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9b0bce2bad9600044b6fce"
    },
    "text": "Con la programación correcta, una computadora puede convertirse en un teatro, un instrumento musical, un libro de referencia, un oponente de ajedrez. Ninguna otra entidad en el mundo, excepto un ser humano, tiene una naturaleza tan adaptable y universal.",
    "author": "Danny Hillis",
    "source": "El Patrón en la Piedra: Las Ideas Simples que Hacen Funcionar las Computadoras",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9b0c2f2bad9600044b6fcf"
    },
    "text": "Cualquiera que haya escrito un programa sabe que decirle a una computadora lo que quieres que haga no es tan fácil como parece. Cada detalle de la operación deseada de la computadora debe describirse con precisión. Por ejemplo, si le dices a un programa de contabilidad que facture a tus clientes la cantidad que cada uno debe, entonces la computadora enviará una factura semanal de $0.00 a los clientes que no deben nada.",
    "author": "Danny Hillis",
    "source": "El Patrón en la Piedra: Las Ideas Simples que Hacen Funcionar las Computadoras",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9b0c4b2bad9600044b6fd0"
    },
    "text": "Un programador habilidoso es como un poeta que puede expresar con palabras aquellas ideas que otros encuentran inexpresables.",
    "author": "Danny Hillis",
    "source": "El Patrón en la Piedra: Las Ideas Simples que Hacen Funcionar las Computadoras",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b0c6b2bad9600044b6fd1"
    },
    "text": "Cada lenguaje informático tiene sus Shakespeares, y es una alegría leer su código. Un programa informático bien escrito posee estilo, delicadeza, incluso humor, y una claridad que rivaliza con la mejor prosa.",
    "author": "Danny Hillis",
    "source": "El Patrón en la Piedra: Las Ideas Simples que Hacen Funcionar las Computadoras",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9b0c932bad9600044b6fd2"
    },
    "text": "Resulta que no existe un algoritmo para examinar un programa y determinar si está o no fatalmente infectado con un bucle infinito. Además, no es que nadie haya descubierto todavía tal algoritmo; más bien, ningún algoritmo de este tipo es posible.",
    "author": "Danny Hillis",
    "source": "El Patrón en la Piedra: Las Ideas Simples que Hacen Funcionar las Computadoras",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a9b0cc62bad9600044b6fd3"
    },
    "text": "La clase de problemas que son computables por una computadora digital aparentemente incluye todos los problemas que son computables por cualquier tipo de dispositivo.",
    "author": "Danny Hillis",
    "source": "El Patrón en la Piedra: Las Ideas Simples que Hacen Funcionar las Computadoras",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9b0d662bad9600044b6fd5"
    },
    "text": "Los programas que utilizamos para conjurar procesos son como los hechizos de un hechicero. Están cuidadosamente compuestos de expresiones simbólicas en lenguajes de programación arcanos y esotéricos que prescriben las tareas que queremos que realicen nuestros procesos.",
    "author": "Hal Abelson",
    "source": "Estructura e Interpretación de Programas de Computadora",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a9b10db2bad9600044b6fd7"
    },
    "text": "Los seres humanos no están acostumbrados a ser perfectos, y pocas áreas de la actividad humana lo exigen. Adaptarse al requisito de perfección es, creo, la parte más difícil de aprender a programar.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9b131f2bad9600044b6fd9"
    },
    "text": "Debido al optimismo, generalmente esperamos que el número de errores sea menor de lo que resulta ser. Por lo tanto, las pruebas son generalmente la parte peor programada de la programación.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9b0d9c2bad9600044b6fd6"
    },
    "text": "Una de las mayores alegrías en la programación de computadoras es descubrir un algoritmo nuevo, más rápido y más eficiente para hacer algo, particularmente si mucha gente respetada ha propuesto soluciones peores.",
    "author": "Danny Hillis",
    "source": "El Patrón en la Piedra: Las Ideas Simples que Hacen Funcionar las Computadoras",
    "numberOfVotes": 3,
    "rating": 4.7
  },
  {
    "_id": {
      "$oid": "5a9b13442bad9600044b6fda"
    },
    "text": "La programación falsa para que coincida con la fecha deseada del cliente es mucho más común en nuestra disciplina que en otras partes de la ingeniería.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9b14c12bad9600044b6fdb"
    },
    "text": "Los mejores programadores son hasta 28 veces mejores que los peores programadores, según la investigación de “diferencias individuales”. Dado que su paga nunca es proporcional, son las mayores gangas en el campo del software.",
    "author": "Robert L. Glass",
    "source": "Hechos y Falacias de la Ingeniería de Software",
    "numberOfVotes": 1,
    "rating": 2.5
  },
  {
    "_id": {
      "$oid": "5a9b154e2bad9600044b6fdc"
    },
    "text": "Sackman, Erickson y Grant estaban midiendo el rendimiento de un grupo de programadores experimentados. ¡Dentro de este grupo, las relaciones entre los mejores y peores rendimientos promediaron alrededor de 10:1 en las mediciones de productividad y un asombroso 5:1 en las mediciones de velocidad y espacio del programa!",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9b15cb2bad9600044b6fdd"
    },
    "text": "La integridad conceptual es la consideración más importante en el diseño del sistema. Es mejor tener un sistema que omita ciertas características y mejoras anómalas, pero que refleje un conjunto de ideas de diseño, que tener uno que contenga muchas ideas buenas pero independientes y descoordinadas.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b15e52bad9600044b6fde"
    },
    "text": "La separación del esfuerzo arquitectónico de la implementación es una forma muy poderosa de obtener integridad conceptual en proyectos muy grandes.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b16122bad9600044b6fdf"
    },
    "text": "La tendencia general es a sobrediseñar el segundo sistema, utilizando todas las ideas y adornos que fueron cuidadosamente dejados de lado en el primero.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a9b16922bad9600044b6fe2"
    },
    "text": "La pregunta de gestión, por lo tanto, no es si construir un sistema piloto y desecharlo. Harás eso. La única pregunta es si planificar de antemano para construir un desecho o prometer entregar el desecho a los clientes.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b17542bad9600044b6fe4"
    },
    "text": "La construcción de programas es un proceso de disminución de la entropía, por lo tanto, inherentemente metaestable. El mantenimiento del programa es un proceso de aumento de la entropía, e incluso su ejecución más hábil solo retrasa la subsistencia del sistema en una obsolescencia irresoluble.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9b16792bad9600044b6fe1"
    },
    "text": "Los ingenieros químicos aprendieron hace mucho tiempo que un proceso que funciona en el laboratorio no se puede implementar en una fábrica en un solo paso.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9b17f92bad9600044b6fe7"
    },
    "text": "Primero, debemos observar que la anomalía no es que el progreso del software sea tan lento, sino que el progreso del hardware informático sea tan rápido. Ninguna otra tecnología desde que comenzó la civilización ha visto una ganancia de rendimiento-precio de seis órdenes de magnitud en 30 años.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a9b17a22bad9600044b6fe6"
    },
    "text": "La codificación está \"90 por ciento terminada\" durante la mitad del tiempo total de codificación. La depuración está \"99 por ciento completa\" la mayor parte del tiempo.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a9b18102bad9600044b6fe8"
    },
    "text": "La complejidad del software es una propiedad esencial, no accidental. Por lo tanto, las descripciones de una entidad de software que abstraen su complejidad a menudo abstraen su esencia.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9b189c2bad9600044b6fea"
    },
    "text": "Estudio tras estudio muestra que los mejores diseñadores producen estructuras que son más rápidas, más pequeñas, más simples, más limpias y producidas con menos esfuerzo. Las diferencias entre los grandes y el promedio se acercan a un orden de magnitud.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b18d52bad9600044b6fec"
    },
    "text": "Un producto de sistemas de programación requiere aproximadamente nueve veces más esfuerzo que los programas componentes escritos por separado para uso privado.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9b190a2bad9600044b6fed"
    },
    "text": "Mi regla general es 1/3 del cronograma para el diseño, 1/6 para la codificación, 1/4 para las pruebas de componentes y 1/4 para las pruebas del sistema.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a9b18bf2bad9600044b6feb"
    },
    "text": "Primero, mi esposa, mis colegas y mis editores descubren que me equivoco con mucha más frecuencia en el optimismo que en el pesimismo. Después de todo, soy programador por formación, y el optimismo es una enfermedad profesional de nuestro oficio.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b19232bad9600044b6fee"
    },
    "text": "Debido a que no estamos seguros acerca de nuestras estimaciones de programación, a menudo carecemos del coraje para defenderlas obstinadamente contra la presión de la administración y del cliente.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9b19422bad9600044b6fef"
    },
    "text": "Añadir personas a un proyecto de software aumenta el esfuerzo total necesario de tres maneras: el trabajo y la interrupción de la propia repartición, la formación de las nuevas personas y la intercomunicación añadida.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9b195a2bad9600044b6ff0"
    },
    "text": "Los programadores profesionales muy buenos son diez veces más productivos que los malos, en el mismo nivel de formación y dos años de experiencia.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b198a2bad9600044b6ff2"
    },
    "text": "La programación aumenta como una potencia del tamaño del programa.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b1abf2bad9600044b6ff7"
    },
    "text": "Varios estudios indican que el tamaño óptimo del equipo es entre 2 y 5, siendo 3 la moda. Con más de 5 miembros en el equipo, la gestión del equipo comienza a dominar el trabajo.",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9b1ce02bad9600044b6ff8"
    },
    "text": "Un error estúpido es un error evitable algorítmicamente. Principalmente, eres estúpido si dejas que un error que un programa puede detectar pase desapercibido.",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9b19dd2bad9600044b6ff4"
    },
    "text": "Todas las reparaciones tienden a destruir la estructura, a aumentar la entropía y el desorden de un sistema.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9b1d7d2bad9600044b6ffa"
    },
    "text": "Creo que hay un mercado mundial para quizás cinco computadoras.",
    "author": "Thomas J. Watson",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9b1e082bad9600044b6ffb"
    },
    "text": "No hay razón para que nadie quiera una computadora en su casa.",
    "author": "Ken Olsen",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9b1eb02bad9600044b6ffc"
    },
    "text": "El comienzo de la sabiduría para un programador es reconocer la diferencia entre hacer que su programa funcione y hacerlo bien.",
    "author": "Michael A. Jackson",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9b1ece2bad9600044b6ffd"
    },
    "text": "Se saben dos cosas sobre los requisitos:\n1. ¡Cambiarán!\n2. ¡Serán malinterpretados!",
    "author": "Michael A. Jackson",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a9b1f362bad9600044b6fff"
    },
    "text": "Cada vez que mejoras el proceso, el trabajo se vuelve más difícil.",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9b1f592bad9600044b7000"
    },
    "text": "Nunca hay suficiente tiempo para hacerlo bien, pero siempre hay suficiente tiempo para arreglarlo o para hacerlo de nuevo.",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a8e9be284a8f2000482568c"
    },
    "text": "Cuanto más código tengas, más lugares habrá para que se escondan los errores.",
    "author": "Rich Skrenta",
    "source": "http://www.skrenta.com/2007/05/code_is_our_enemy.html",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a97f062ccdfe50004febf36"
    },
    "text": "Si los constructores construyeran casas de la misma manera que los programadores construyen programas, el primer pájaro carpintero que se acercara destruiría la civilización.",
    "author": "Gerald Weinberg",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9aa1db2bad9600044b6fb9"
    },
    "text": "Las técnicas de inteligencia artificial son para la mente lo que la burocracia es para la interacción social humana.",
    "author": "Terry Winograd",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a9b1f692bad9600044b7001"
    },
    "text": "El código es caro de cambiar, pero el diseño es más barato de cambiar, y los requisitos son aún más baratos de cambiar.",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9b1f822bad9600044b7002"
    },
    "text": "El costo de reparar un error aumenta drásticamente a medida que el proyecto avanza hacia la finalización y más allá.",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b1f252bad9600044b6ffe"
    },
    "text": "Un equipo de programadores altamente competentes que también son políticos territoriales y egocéntricos fracasará, mientras que un equipo de programadores igualmente competentes, que también son desinteresados, cooperativos y jugadores de equipo, tendrá éxito.",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 3,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9b203c2bad9600044b7004"
    },
    "text": "Para la mayoría del software, la eficiencia simplemente no importa.",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 3,
    "rating": 3.9
  },
  {
    "_id": {
      "$oid": "5a9b214b2bad9600044b7005"
    },
    "text": "La mejor manera de saber que has encontrado el último error es nunca encontrar el primer error.",
    "author": "Harlan Mills",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b21cb2bad9600044b7008"
    },
    "text": "Un depurador interactivo es un ejemplo sobresaliente de lo que no se necesita: fomenta el hacking de prueba y error en lugar del diseño sistemático, y también oculta a personas marginales apenas calificadas para la programación de precisión.",
    "author": "Harlan Mills",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9b22a02bad9600044b7009"
    },
    "text": "Probar exhaustivamente un programa es imposible (requiere un número ilimitado de casos de prueba); así que intenta elegir casos de prueba que expongan todos los errores. Eso es muy difícil, especialmente porque no sabemos cuáles son todos los errores, y si lo supiéramos, ¡no necesitaríamos los casos de prueba!",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b21a12bad9600044b7007"
    },
    "text": "La única manera de que ocurran errores en un programa es que el autor los haya puesto allí. No se conocen otros mecanismos.",
    "author": "Harlan Mills",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9b22c72bad9600044b700b"
    },
    "text": "Se pueden obtener cálculos fiables a partir de programas con errores, que después de todo, son el único tipo de programas que existen.",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a9b22ed2bad9600044b700c"
    },
    "text": "Puedo construir un sistema fiable con miles de errores, si me dejas elegir mis errores cuidadosamente.",
    "author": "David Parnas",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9b231d2bad9600044b700d"
    },
    "text": "Ed Adams de IBM descubrió que el 80% de los problemas de fiabilidad son causados por solo el 2% de los defectos.",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b23502bad9600044b700e"
    },
    "text": "El hardware es la parte que puedes reemplazar. El software es la parte que tienes que mantener, porque es muy caro y ya nadie lo entiende.",
    "author": "Jim Horning",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9b23dc2bad9600044b7011"
    },
    "text": "Cualquier esquema tecnológico o de gestión para forzar la documentación puede ser subvertido por programadores no dispuestos.",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a9b23b02bad9600044b700f"
    },
    "text": "El buen juicio proviene de la experiencia. La experiencia proviene del mal juicio.",
    "author": "Jim Horning",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9c649eff6af300049e6b59"
    },
    "text": "Se puede decir que las máquinas tan simples como los termostatos tienen creencias.",
    "author": "John McCarthy (científico de la computación)",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9b253f2bad9600044b7016"
    },
    "text": "Un framework puede proporcionar el 90% de las características que necesitamos rápidamente, dándonos una falsa sensación de confianza al principio del ciclo de desarrollo, y luego ser frustrantemente difícil cuando se trata de implementar el último 10%.",
    "author": "Tony Parisi (desarrollador de software)",
    "source": "Programación de Aplicaciones 3D con HTML5 y WebGL",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a9c6502ff6af300049e6b5a"
    },
    "text": "Las cualidades mentales peculiares de las estructuras motivacionales similares a las humanas, como el amor y el odio, no serán necesarias para el comportamiento inteligente, pero probablemente podríamos programar computadoras para que las exhiban si quisiéramos.",
    "author": "John McCarthy (científico de la computación)",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9d2f8c607c5100044dff77"
    },
    "text": "He conocido estudiantes brillantes en ciencia de la computación que nunca han visto el código fuente de un programa grande. Pueden ser buenos escribiendo programas pequeños, pero no pueden comenzar a aprender las diferentes habilidades de escribir programas grandes si no pueden ver cómo otros lo han hecho.",
    "author": "Richard Stallman",
    "numberOfVotes": 2,
    "rating": 3.8
  },
  {
    "_id": {
      "$oid": "5a9c65d6ff6af300049e6b5b"
    },
    "text": "Los diseñadores de programas tienen una tendencia a pensar en los usuarios como idiotas que necesitan ser controlados. En cambio, deberían pensar en su programa como un sirviente, cuyo amo, el usuario, debería poder controlarlo.",
    "author": "John McCarthy (científico de la computación)",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9d3007607c5100044dff79"
    },
    "text": "De hecho, en la década de 1980, a menudo me encontré con recién graduados en ciencia de la computación que nunca habían visto un programa real en sus vidas. Solo habían visto ejercicios de juguete, ejercicios escolares, porque cada programa real era un secreto comercial.",
    "author": "Richard Stallman",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9d31fa607c5100044dff7c"
    },
    "text": "Supongo que dado que los desarrolladores de software propietario usan los derechos de autor para impedirnos compartir, nosotros los cooperadores podemos usar los derechos de autor para dar a otros cooperadores una ventaja propia: pueden usar nuestro código.",
    "author": "Richard Stallman",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9d2eb2607c5100044dff75"
    },
    "text": "Considero que la regla de oro requiere que si me gusta un programa debo compartirlo con otras personas a las que les guste. Los vendedores de software quieren dividir a los usuarios y conquistarlos, haciendo que cada usuario acepte no compartir con otros. Me niego a romper la solidaridad con otros usuarios de esta manera.",
    "author": "Richard Stallman",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9d33ae607c5100044dff7d"
    },
    "text": "La comunidad de software libre rechaza el \"sacerdocio de la tecnología\", que mantiene al público en general ignorante de cómo funciona la tecnología; animamos a estudiantes de cualquier edad y situación a leer el código fuente y aprender tanto como quieran saber.",
    "author": "Richard Stallman",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9d3532607c5100044dff7e"
    },
    "text": "El lenguaje de programación más poderoso es Lisp. Si no conoces Lisp (o su variante, Scheme), no sabes lo que significa que un lenguaje de programación sea poderoso y elegante. Una vez que aprendas Lisp, entenderás lo que falta en la mayoría de los otros lenguajes.",
    "author": "Richard Stallman",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9d36a4607c5100044dff7f"
    },
    "text": "Programar es programar. Si te vuelves bueno programando, no importa en qué lenguaje lo hayas aprendido, porque podrás programar en cualquier lenguaje.",
    "author": "Richard Stallman",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9dc5de6744730004f6a1e6"
    },
    "text": "Fue en uno de mis viajes entre la sala EDSAC y el equipo de perforación cuando me di cuenta con toda su fuerza de que una buena parte del resto de mi vida la iba a pasar encontrando errores en mis propios programas.",
    "author": "Maurice Wilkes",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9dc65d6744730004f6a1e8"
    },
    "text": "Desde 1954, la velocidad bruta de las computadoras, medida por el tiempo que lleva hacer una suma, aumentó en un factor de 10.000. Eso significa que un algoritmo que antes tardaba 10 minutos en realizarse ahora se puede hacer 15 veces por segundo.",
    "author": "Maurice Wilkes",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9dc8e76744730004f6a1e9"
    },
    "text": "Mecanografiar no sustituye a pensar.",
    "author": "Richard Hamming",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9d530a1a29250004e946df"
    },
    "text": "Un programador que subconscientemente se ve a sí mismo como un artista disfrutará de lo que hace y lo hará mejor.",
    "author": "Donald Knuth",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a9dc9c26744730004f6a1ea"
    },
    "text": "Quizás el problema central al que nos enfrentamos en toda la ciencia de la computación es cómo vamos a llegar a la situación en la que nos basamos en el trabajo de otros en lugar de rehacer gran parte de él de una manera trivialmente diferente.",
    "author": "Richard Hamming",
    "numberOfVotes": 2,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a9dcace6744730004f6a1eb"
    },
    "text": "Cualquier falta de voluntad para aprender matemáticas hoy puede restringir enormemente tus posibilidades mañana.",
    "author": "Richard Hamming",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aa28cf31dcf530004c4bf64"
    },
    "text": "Los programas realmente buenos viven para siempre.",
    "author": "Charles Simonyi",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9dccdd6744730004f6a1ec"
    },
    "text": "En la ciencia, si sabes lo que estás haciendo, no deberías estar haciéndolo. En ingeniería, si no sabes lo que estás haciendo, no deberías estar haciéndolo.",
    "author": "Richard Hamming",
    "numberOfVotes": 3,
    "rating": 3.9
  },
  {
    "_id": {
      "$oid": "5aa28d721dcf530004c4bf65"
    },
    "text": "En el manejo de recursos, esfuérzate por evitar el desastre en lugar de alcanzar un óptimo.",
    "author": "Butler Lampson",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aa28ea11dcf530004c4bf67"
    },
    "text": "Como con la mayoría de los proyectos, el último dos por ciento toma el cincuenta por ciento del tiempo.",
    "author": "John Warnock",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5aa299fbe7e86700048f0279"
    },
    "text": "Es divertido sentarse en un terminal y dejar que el código fluya. Suena extraño, pero simplemente sale de mi cerebro; una vez que empiezo, no tengo que pensar en ello.",
    "author": "Gary Kildall",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aa29b16e7e86700048f027a"
    },
    "text": "Creo que la programación es una experiencia muy religiosa para mucha gente.",
    "author": "Gary Kildall",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aa28c251dcf530004c4bf63"
    },
    "text": "¿Qué es la programación? Algunas personas la llaman ciencia, algunas personas la llaman arte, algunas personas la llaman habilidad. Creo que tiene aspectos de las tres.",
    "author": "Charles Simonyi",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5aa29bfee7e86700048f027b"
    },
    "text": "Si alguna vez hablas con un gran programador, encontrarás que conoce sus herramientas como un artista conoce sus pinceles.",
    "author": "Bill Gates",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5aa29c76e7e86700048f027c"
    },
    "text": "Nuestros objetivos son muy simples. Vamos a crear el software que ponga una computadora en cada escritorio y en cada hogar.",
    "author": "Bill Gates",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aa2a019e7e86700048f027f"
    },
    "text": "La parte más importante de escribir un programa es diseñar las estructuras de datos.",
    "author": "Dan Bricklin",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5aa2a0ace7e86700048f0280"
    },
    "text": "Las ideas no desaparecen. Cambian de forma, se fusionan con otras ideas.",
    "author": "Bob Frankston",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5aa2a355e7e86700048f0284"
    },
    "text": "Me importa no solo lo que dice el código, sino también cómo se ve.",
    "author": "Peter Roizen",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5aa2a2f1e7e86700048f0283"
    },
    "text": "La programación es el campo definitivo para alguien a quien le gusta trastear.",
    "author": "Ray Ozzie",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5aa2a3fde7e86700048f0286"
    },
    "text": "La programación puede ser adictiva.",
    "author": "Bob Carr",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 2,
    "rating": 3.8
  },
  {
    "_id": {
      "$oid": "5aa2a3b3e7e86700048f0285"
    },
    "text": "Desde un punto de vista artístico, el mejor software proviene del ámbito de la intuición.",
    "author": "Bob Carr",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aa2a602e7e86700048f0287"
    },
    "text": "Luego Apple se hizo pública hacia finales de 1980. De repente, todas estas personas con las que estaba trabajando eran millonarias.",
    "author": "Andy Hertzfeld",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aa2a68ce7e86700048f0288"
    },
    "text": "Estoy interesado en crear imágenes que se comuniquen con la gente.",
    "author": "Toru Iwatani",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aa31172bb93c00004d9a6f6"
    },
    "text": "Creo que la mejor manera de supervisar es con el ejemplo personal y con revisiones de código frecuentes.",
    "author": "Charles Simonyi",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aa3181fbb93c00004d9a6f8"
    },
    "text": "Existen algunas técnicas básicas para controlar la complejidad. Fundamentalmente, divido y venzo, desgloso las cosas e intento escribir descripciones razonablemente precisas de lo que se supone que debe hacer cada pieza.",
    "author": "Butler Lampson",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aa311f9bb93c00004d9a6f7"
    },
    "text": "La eficiencia del código disminuye con un aumento en el número de personas que trabajan en el programa. Los programas más eficientes son escritos por una sola persona.",
    "author": "Charles Simonyi",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5aa30d4abb93c00004d9a6f5"
    },
    "text": "Te apuesto a que desde tres metros de distancia puedo decir si un programa es malo. Puede que no garantice que sea bueno, pero si se ve mal desde tres metros, te puedo garantizar que no fue escrito con cuidado.",
    "author": "Charles Simonyi",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5aa44e197832df00040ac9b7"
    },
    "text": "Nadie sabe cómo construir sistemas de hardware realmente complicados, por lo que diseñar hardware tiende a ser más simple. El software es mucho más complicado.",
    "author": "Butler Lampson",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aa4511b7832df00040ac9b8"
    },
    "text": "Un programa hermoso es como un teorema hermoso: hace el trabajo con elegancia.",
    "author": "Butler Lampson",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5aa456667832df00040ac9b9"
    },
    "text": "Para tener éxito, debes rodearte de gente muy talentosa cuyas habilidades se combinen muy bien. Ese es el secreto del éxito.",
    "author": "John Warnock",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aa459d77832df00040ac9bc"
    },
    "text": "Comienzo dibujando las estructuras de datos, y paso mucho tiempo pensando en ellas. También pienso en lo que tiene que pasar el programa antes de empezar a escribir código.",
    "author": "Gary Kildall",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aa456d87832df00040ac9ba"
    },
    "text": "No entres en un desarrollo de dos años sin que salga nada en el medio. Haz que salga algo cada dos meses, para que puedas evaluar, reagruparte y reiniciar.",
    "author": "John Warnock",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aa459767832df00040ac9bb"
    },
    "text": "Si aprendes a resolver problemas, puedes pasar por la vida y hacerlo bastante bien.",
    "author": "Gary Kildall",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5aa45f317832df00040ac9c0"
    },
    "text": "Un gran programador piensa en el programa de forma constante, ya sea conduciendo o comiendo. Ese método requiere una increíble cantidad de energía mental.",
    "author": "Bill Gates",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aa4601c7832df00040ac9c1"
    },
    "text": "Los programas realmente geniales que he escrito han sido todos aquellos en los que he pensado durante una gran cantidad de tiempo antes de escribirlos.",
    "author": "Bill Gates",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aa461667832df00040ac9c2"
    },
    "text": "Existe una asombrosa similitud en los tipos de dificultades con las que te encuentras. En las revisiones de diseño, realmente disfruto poder dar consejos, basados en programas que he hecho.",
    "author": "Bill Gates",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9b16b92bad9600044b6fe3"
    },
    "text": "El problema fundamental con el mantenimiento de programas es que corregir un defecto tiene una posibilidad sustancial (20-50 por ciento) de introducir otro. Así que todo el proceso es dos pasos hacia adelante y un paso hacia atrás.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5aa5c874d1481c4acc43aa71"
    },
    "text": "Preocúpate realmente por las herramientas que usas porque son lo que te hacen ser lo mejor que puedes ser.",
    "author": "Addy Osmani",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aa63f3a42fbc6000481ca0d"
    },
    "text": "Lo que me gusta de la programación es que realmente te ayuda a pensar sobre cómo nos comunicamos, cómo pensamos, cómo funciona la lógica, cómo funcionan las artes creativas.",
    "author": "Michael Hawley",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aa6de2101c2c400048eb9a8"
    },
    "text": "Una de las cosas que he estado impulsando es la lectura de código. Creo que es lo más útil que una comunidad de programadores puede hacer por los demás: dedicar tiempo regularmente a leer el código de los demás.",
    "author": "Douglas Crockford",
    "source": "Coders at Work",
    "numberOfVotes": 3,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5aa6dd2101c2c400048eb9a7"
    },
    "text": "Creo que la mejor manera de mejorar JavaScript sería hacerlo más pequeño. Si pudiéramos reducirlo a lo que hace realmente bien y eliminar las características que añaden poco o ningún valor, en realidad sería un lenguaje mejor.",
    "author": "Douglas Crockford",
    "source": "Coders at Work",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5aa6e0d101c2c400048eb9a9"
    },
    "text": "La legibilidad del código es ahora mi primera prioridad. Es más importante que ser rápido, casi tan importante como ser correcto, pero creo que ser legible es en realidad la forma más probable de hacerlo correcto.",
    "author": "Douglas Crockford",
    "source": "Coders at Work",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5aa6e37801c2c400048eb9aa"
    },
    "text": "Parte de lo que hace que la programación sea difícil es que la mayor parte del tiempo estamos haciendo cosas que nunca hemos hecho antes.",
    "author": "Douglas Crockford",
    "source": "Coders at Work",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aa6e8ac01c2c400048eb9ab"
    },
    "text": "Me considero un escritor. A veces escribo en inglés y a veces escribo en JavaScript.",
    "author": "Douglas Crockford",
    "source": "Coders at Work",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5aa63e0642fbc6000481ca0c"
    },
    "text": "La gente debería poder hablar y respirar programas como hablan ahora.",
    "author": "Jaron Lanier",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aa9a89904c8cd0004d472c4"
    },
    "text": "Si empiezas a eliminar cosas, si llegas al punto en que si eliminaras algo más ya no funcionaría, en este punto es hermoso.",
    "author": "Joe Armstrong (programador)",
    "source": "Coders at Work",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5aa8307a94bd610da89b3340"
    },
    "text": "La humanidad está adquiriendo toda la tecnología adecuada por todas las razones equivocadas.",
    "author": "Buckminster Fuller",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aa9aa9f04c8cd0004d472c5"
    },
    "text": "Caracterizo la programación funcional como un ataque radical y elegante a toda la empresa de escribir programas.",
    "author": "Simon Peyton Jones",
    "source": "Coders at Work",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5aab9d9617c21b0004913edc"
    },
    "text": "El tamaño casi siempre implica complejidad, y la complejidad confunde a los programadores. Los programadores confundidos, a su vez, introducen errores (bugs) en los programas.",
    "author": "Marijn Haverbeke",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5aab9ade17c21b0004913edb"
    },
    "text": "Los defectos en los programas informáticos generalmente se llaman bugs. Hace que los programadores se sientan bien al imaginarlos como pequeñas cosas que simplemente se arrastran hacia nuestro trabajo. En realidad, por supuesto, los pusimos ahí nosotros mismos.",
    "author": "Marijn Haverbeke",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aac2850c2138a00046e9183"
    },
    "text": "Cuando estaba en lo que consideraría la cima de mis habilidades, tenía una intuición extremadamente confiable. Hacía cosas y simplemente salían bien.",
    "author": "L. Peter Deutsch",
    "source": "Coders at Work",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aac2af1c2138a00046e9185"
    },
    "text": "De vez en cuando siento la tentación de diseñar un lenguaje de programación, pero luego simplemente me acuesto hasta que se va.",
    "author": "L. Peter Deutsch",
    "source": "Coders at Work",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5aac2cf9c2138a00046e9186"
    },
    "text": "Los sistemas de lenguaje se sostienen sobre un trípode. Está el lenguaje, están las bibliotecas y están las herramientas. Y el éxito de un lenguaje depende de una interacción compleja entre esas tres cosas.",
    "author": "L. Peter Deutsch",
    "source": "Coders at Work",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aac29e1c2138a00046e9184"
    },
    "text": "Haría un caso sólido de que los lenguajes de programación no han mejorado cualitativamente en los últimos 40 años. No existe ningún lenguaje de programación en uso hoy en día que sea cualitativamente mejor que Simula-67.",
    "author": "L. Peter Deutsch",
    "source": "Coders at Work",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5aac303cc2138a00046e9188"
    },
    "text": "En lugar de la progresión de las decenas, durante muchos años he utilizado la progresión más simple de todas, que procede de dos en dos, habiendo descubierto que es útil para la perfección de la ciencia de los números.",
    "author": "Gottfried Wilhelm Leibniz",
    "source": "EXPLICACIÓN DE LA ARITMÉTICA BINARIA",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aac2e8fc2138a00046e9187"
    },
    "text": "Nunca en mis sueños más locos habría predicho la evolución de Internet. Y nunca habría predicho el grado en que la influencia corporativa sobre Internet ha cambiado su carácter con el tiempo.",
    "author": "L. Peter Deutsch",
    "source": "Coders at Work",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aac3a57610d7d0004066303"
    },
    "text": "Nunca he sido un amante del código existente. El código por sí solo casi se pudre y tiene que ser reescrito. Incluso cuando nada ha cambiado, por alguna razón se pudre.",
    "author": "Ken Thompson",
    "source": "Coders at Work",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aac39b1610d7d0004066302"
    },
    "text": "La programación moderna me asusta en muchos aspectos. Me confunde leer un programa que debes leer de arriba a abajo. Dice \"haz algo\". Y vas a buscar \"algo\". Y lo lees y dice, \"haz algo más\" y vas a buscar algo y dice, \"haz algo más\" y tal vez vuelve a la parte superior. Y no se hace nada. Simplemente está relegando el problema a un nivel cada vez más profundo.",
    "author": "Ken Thompson",
    "source": "Coders at Work",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aa9a7b304c8cd0004d472c3"
    },
    "text": "Siempre dedico un día a la semana a aprender cosas nuevas. Eso significa que dedico un 20% más de mi tiempo que mis colegas a aprender cosas nuevas. Ahora, el 20% a interés compuesto significa que después de cuatro años y medio sabré el doble que ellos.",
    "author": "Richard Hamming",
    "source": "Coders at Work",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aad68d17632ba0004ec84ae"
    },
    "text": "Usaré trucos sucios por dos razones. Una es, si realmente me va a dar una mejora de rendimiento. O a veces solo por puro placer. En cualquier caso, lo documento; no solo lo pongo ahí.",
    "author": "Donald Knuth",
    "source": "Coders at Work",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5aac3aa3610d7d0004066304"
    },
    "text": "Desecharé el código tan pronto como quiera añadirle algo y tenga la sensación de que lo que tengo que hacer para añadirlo es demasiado difícil.",
    "author": "Ken Thompson",
    "source": "Coders at Work",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5aad69767632ba0004ec84af"
    },
    "text": "El problema es que codificar no es divertido si todo lo que puedes hacer es llamar a cosas de una biblioteca, si no puedes escribir la biblioteca tú mismo.",
    "author": "Donald Knuth",
    "source": "Coders at Work",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5aad6d0d7632ba0004ec84b0"
    },
    "text": "Cometo errores porque siempre estoy operando en mi límite. Si solo me mantengo en un territorio cómodo todo el tiempo, no es tan divertido.",
    "author": "Donald Knuth",
    "source": "Coders at Work",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aad6dfa7632ba0004ec84b1"
    },
    "text": "Tengo esta necesidad de programar. Me despierto por la mañana con frases de un programa alfabetizado. Antes del desayuno, estoy seguro de que los poetas deben sentir esto, tengo que ir a la computadora y escribir este párrafo y luego puedo comer y soy feliz.",
    "author": "Donald Knuth",
    "source": "Coders at Work",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5aad71337632ba0004ec84b2"
    },
    "text": "Cuantas más variedades de diferentes tipos de notaciones sigan siendo útiles, no solo leas a las personas que codifican como tú.",
    "author": "Donald Knuth",
    "source": "Coders at Work",
    "numberOfVotes": 2,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5ab6e0d632a9950004a2efc2"
    },
    "text": "La buena noticia sobre las computadoras es que hacen lo que les dices que hagan. La mala noticia es que hacen lo que les dices que hagan.",
    "author": "Ted Nelson",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aa6e99001c2c400048eb9ac"
    },
    "text": "Las matemáticas son importantes en la programación, pero es solo una de muchas cosas que son importantes. Si sobreenfatizas las matemáticas, entonces subenfatizas cosas que podrían ser aún más importantes, como la alfabetización.",
    "author": "Douglas Crockford",
    "source": "Coders at Work",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aac3b37610d7d0004066305"
    },
    "text": "Documentar es muy, muy difícil; requiere mucho tiempo. Para hacerlo bien, tienes que hacerlo como programar. Tienes que deconstruirlo, juntarlo de manera agradable, reescribirlo cuando está mal. La gente no hace eso.",
    "author": "Ken Thompson",
    "source": "Coders at Work",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5ab6e20132a9950004a2efc6"
    },
    "text": "Hacer las cosas fáciles es difícil.",
    "author": "Ted Nelson",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5ab6e9e132a9950004a2efc7"
    },
    "text": "La diferencia entre la teoría y la práctica es que en la teoría, no hay diferencia entre la teoría y la práctica.",
    "author": "Richard Moore (ingeniero)",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5ab6ea2a32a9950004a2efc8"
    },
    "text": "Deberías nombrar una variable con el mismo cuidado con el que nombras a un hijo primogénito.",
    "author": "Jim Coplien",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5acca81fe01bb40004668819"
    },
    "text": "La proporción de tiempo dedicado a leer versus escribir supera con creces el 10 a 1. Estamos constantemente leyendo código antiguo como parte del esfuerzo para escribir código nuevo.",
    "author": "Robert C. Martin",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5b579bb420e9780004ba9ac3"
    },
    "text": "No hay nada más permanente que un hackeo temporal.",
    "author": "Kyle Simpson",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5b6d73d6b3f09f0004d9275f"
    },
    "text": "A medida que los números se reducen a los principios más simples, como 0 y 1, se hace evidente un orden maravilloso en todas partes.",
    "author": "Gottfried Wilhelm Leibniz",
    "source": "EXPLICACIÓN DE LA ARITMÉTICA BINARIA",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5ab6e1ad32a9950004a2efc4"
    },
    "text": "En mi segundo año en la escuela de posgrado, tomé un curso de computadoras y fue como si me cayera un rayo.",
    "author": "Ted Nelson",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5ab6e13932a9950004a2efc3"
    },
    "text": "Decían que las computadoras trabajan con números. Esto era absolutamente una tontería. Las computadoras trabajan con información arbitraria de cualquier tipo.",
    "author": "Ted Nelson",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5ab6e1dd32a9950004a2efc5"
    },
    "text": "En este momento eres prisionero de cada aplicación que usas. Solo tienes las opciones que te dio el desarrollador de esa aplicación.",
    "author": "Ted Nelson",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a6ce86f2af929789500e83d"
    },
    "text": "La complejidad mata. Absorbe la vida de los desarrolladores, dificulta la planificación, construcción y prueba de productos, introduce desafíos de seguridad y causa frustración al usuario final y al administrador.",
    "author": "Ray Ozzie",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e882"
    },
    "text": "El software se vuelve más lento más rápido de lo que el hardware se vuelve más rápido.",
    "author": "Niklaus Wirth",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e89e"
    },
    "text": "Una computadora es una máquina estúpida con la capacidad de hacer cosas increíblemente inteligentes, mientras que los programadores informáticos son personas inteligentes con la capacidad de hacer cosas increíblemente estúpidas. Son, en resumen, una combinación perfecta.",
    "author": "David Parnas",
    "numberOfVotes": 3,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a6ce8702af929789500e8c4"
    },
    "text": "Unos pocos meses escribiendo código pueden ahorrarte unas pocas horas en diseño.",
    "author": "Anónimo",
    "numberOfVotes": 2,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a72f8251ac5f022282e4125"
    },
    "text": "¿Estás bastante seguro de que todas esas campanas y silbatos, todas esas maravillosas facilidades de tus llamados lenguajes de programación poderosos, pertenecen al conjunto de soluciones en lugar del conjunto de problemas?",
    "author": "Edsger W. Dijkstra",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a91e3a1c4240c0004265956"
    },
    "text": "Si la gente no cree que las matemáticas sean simples, es solo porque no se dan cuenta de lo complicada que es la vida.",
    "author": "John von Neumann",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a933a408e7b510004cba4bb"
    },
    "text": "C hace que sea fácil dispararte en el pie; C++ lo hace más difícil, pero cuando lo haces, te vuela toda la pierna.",
    "author": "Bjarne Stroustrup",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a933a668e7b510004cba4bc"
    },
    "text": "Si piensas que es simple, entonces has entendido mal el problema.",
    "author": "Bjarne Stroustrup",
    "numberOfVotes": 2,
    "rating": 3
  },
  {
    "_id": {
      "$oid": "5a9342458e7b510004cba4c7"
    },
    "text": "El diseño orientado a objetos son los números romanos de la computación.",
    "author": "Rob Pike",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a93d61c6a584e0004a4a613"
    },
    "text": "Es difícil pensar que una empresa de 2 mil millones de dólares con más de 4.300 personas no pudiera competir con seis personas en vaqueros.",
    "author": "Steve Jobs",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a93ffbae49ad10004edb861"
    },
    "text": "Algunas personas, cuando se enfrentan a un problema, piensan: 'Ya sé, usaré expresiones regulares'. Ahora tienen dos problemas.",
    "author": "Jamie Zawinski",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a943255ee7ed5000496b17c"
    },
    "text": "A veces nos sorprendemos. Por ejemplo, cuando surgió Internet, lo teníamos como una prioridad quinta o sexta.",
    "author": "Bill Gates",
    "numberOfVotes": 1,
    "rating": 2
  },
  {
    "_id": {
      "$oid": "5a9432f0ee7ed5000496b180"
    },
    "text": "Fue un punto de inflexión en mi carrera de programación cuando me di cuenta de que no tenía que ganar todas las discusiones.",
    "author": "Ward Cunningham",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a9435b6ee7ed5000496b18f"
    },
    "text": "Y la programación de computadoras era tan fascinante. Creas tu propio pequeño universo, y luego hace lo que le dices que haga.",
    "author": "Vint Cerf",
    "numberOfVotes": 4,
    "rating": 3.7
  },
  {
    "_id": {
      "$oid": "5a943552ee7ed5000496b18d"
    },
    "text": "Cuanto más limpio y agradable sea el programa, más rápido se ejecutará. Y si no lo hace, será fácil hacerlo rápido.",
    "author": "Joshua Bloch",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9436dcee7ed5000496b194"
    },
    "text": "SQL, Lisp y Haskell son los únicos lenguajes de programación que he visto donde uno pasa más tiempo pensando que tecleando.",
    "author": "Philip Greenspun",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a95a610cb1a4d0004b2987e"
    },
    "text": "Es mejor tener 100 funciones operando en una estructura de datos que tener 10 funciones operando en 10 estructuras de datos.",
    "author": "Alan Perlis",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a95d1077700780004d51db9"
    },
    "text": "La herramienta de depuración más eficaz sigue siendo el pensamiento cuidadoso, junto con sentencias de impresión juiciosamente colocadas.",
    "author": "Brian Kernighan",
    "numberOfVotes": 3,
    "rating": 3.8
  },
  {
    "_id": {
      "$oid": "5a95d7637700780004d51dc5"
    },
    "text": "Los lenguajes informáticos del futuro se preocuparán más por los objetivos y menos por los procedimientos especificados por el programador.",
    "author": "Marvin Minsky",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a95fe167700780004d51dcd"
    },
    "text": "Una computadora merecería ser llamada inteligente si pudiera engañar a un humano haciéndole creer que es humana.",
    "author": "Alan Turing",
    "numberOfVotes": 3,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a96be3ed6959500047aecbd"
    },
    "text": "La forma de detener la entropía en el software es refactorizarlo.",
    "author": "Joseph Yoder (científico de la computación)",
    "source": "Brian Foote y Joseph Yoder, Gran Bola de Lodo",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a96bf21d6959500047aecc0"
    },
    "text": "Las revisiones y la programación en pareja brindan a los programadores algo que su trabajo de otra manera no tendría: una audiencia. Se dice que la luz del sol es un desinfectante poderoso. Una audiencia inmediata de los compañeros proporciona incentivos inmediatos a los programadores para mantener su código claro y comprensible, así como funcional.",
    "author": "Joseph Yoder (científico de la computación)",
    "source": "Brian Foote y Joseph Yoder, Gran Bola de Lodo",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a97f2c0ccdfe50004febf38"
    },
    "text": "Puede que no pienses que los programadores son artistas, pero la programación es una profesión extremadamente creativa. Es creatividad basada en la lógica.",
    "author": "John Romero",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a97f4c5ccdfe50004febf3c"
    },
    "text": "JavaScript es el único lenguaje del que tengo conocimiento que la gente siente que no necesita aprender antes de empezar a usarlo.",
    "author": "Douglas Crockford",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9808951878b40004879f61"
    },
    "text": "Sé humilde, comunícate claramente y respeta a los demás. No cuesta nada ser amable, pero el impacto no tiene precio.",
    "author": "Addy Osmani",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9808dc1878b40004879f63"
    },
    "text": "Decirle a un programador que ya existe una biblioteca para hacer X es como decirle a un compositor que ya hay una canción sobre el amor.",
    "author": "Pete Cordell",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a980f551878b40004879f68"
    },
    "text": "¿Deberían los índices de los arrays comenzar en 0 o 1? Mi compromiso de 0.5 fue rechazado sin, pensé, la debida consideración.",
    "author": "Stan Kelly-Bootle",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a985fd2e93441000489b94d"
    },
    "text": "El propósito de la abstracción no es ser vago, sino crear un nuevo nivel semántico en el que uno pueda ser absolutamente preciso.",
    "author": "Edsger W. Dijkstra",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5a9a9e792bad9600044b6fb5"
    },
    "text": "Ciertamente habrá disrupción laboral. Porque lo que va a suceder es que los robots podrán hacer todo mejor que nosotros.",
    "author": "Elon Musk",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5a9860dbe93441000489b950"
    },
    "text": "A veces, la implementación elegante es una función. No un método. No una clase. No un framework. Solo una función.",
    "author": "John Carmack",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9aa0f72bad9600044b6fb8"
    },
    "text": "La inteligencia artificial es la ciencia de hacer que las máquinas hagan cosas que requerirían inteligencia si las hicieran los hombres.",
    "author": "Marvin Minsky",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9aaf682bad9600044b6fbb"
    },
    "text": "Solo tuve que tomar la idea del hipertexto y conectarla a las ideas de TCP y DNS y —¡ta-da!— la World Wide Web.",
    "author": "Tim Berners-Lee",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9b0d552bad9600044b6fd4"
    },
    "text": "Un proceso computacional es de hecho muy parecido a la idea de un espíritu de un hechicero. No se puede ver ni tocar. No está compuesto de materia en absoluto. Sin embargo, es muy real. Puede realizar trabajo intelectual. Puede responder preguntas. Puede afectar al mundo desembolsando dinero en un banco o controlando un brazo robótico en una fábrica.",
    "author": "Hal Abelson",
    "source": "Estructura e Interpretación de Programas de Computadora",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9b17792bad9600044b6fe5"
    },
    "text": "Uno debe asumir que habrá muchos errores y planificar un procedimiento ordenado para sacarlos a la luz.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 5
  },
  {
    "_id": {
      "_id": "5a9b19662bad9600044b6ff1"
    },
    "text": "Para lograr la integridad conceptual, un diseño debe proceder de una mente o de un pequeño grupo de mentes que estén de acuerdo.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b1d152bad9600044b6ff9"
    },
    "text": "La mejor tecnología nunca tiene tanto impacto como los problemas de novia o novio.",
    "author": "Tom DeMarco",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 1,
    "rating": 3
  },
  {
    "_id": {
      "$oid": "5a9b19952bad9600044b6ff3"
    },
    "text": "El costo de mantenimiento se ve fuertemente afectado por el número de usuarios. Más usuarios encuentran más errores.",
    "author": "Fred Brooks",
    "source": "El Mítico Hombre-Mes",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b1f8c2bad9600044b7003"
    },
    "text": "¡La mayoría de los errores se introducen durante la especificación de requisitos!",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 2,
    "rating": 4.3
  },
  {
    "_id": {
      "$oid": "5a9b21892bad9600044b7006"
    },
    "text": "La programación es similar a un juego de golf. El punto no es meter la bola en el hoyo, sino cuántos golpes se necesitan.",
    "author": "Harlan Mills",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9b22b42bad9600044b700a"
    },
    "text": "Varios estudios han demostrado que las pruebas no son muy eficaces para encontrar errores.",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 2,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5a9b23cd2bad9600044b7010"
    },
    "text": "La clave para mantener bajos los costos de software es escribir código que sea fácilmente modificable.",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 1,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5a9b24492bad9600044b7014"
    },
    "text": "Las nociones de corrección en matemáticas y programas son diferentes. Un modelo matemático debe ser consistente; no necesita coincidir con la realidad (ser correcto), y no necesita ser completo (en el sentido formal). Un modelo de programa debe ser consistente; debe coincidir con la realidad; y debe ser completo (en el sentido de que reacciona con gracia a todas las entradas).",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 2,
    "rating": 3
  },
  {
    "_id": {
      "$oid": "5a9b23ed2bad9600044b7012"
    },
    "text": "La programación es al menos tan difícil como desarrollar una teoría matemática.",
    "author": "Daniel T. Barry",
    "source": "Mitos y Realidades en el Desarrollo de Software",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5a9d2fc8607c5100044dff78"
    },
    "text": "En 1971, cuando me uní al personal del laboratorio de Inteligencia Artificial del MIT, todos los que ayudamos a desarrollar el software del sistema operativo, nos llamamos hackers. No estábamos infringiendo ninguna ley, al menos no al hacer el hacking por el que nos pagaban. Estábamos desarrollando software y nos estábamos divirtiendo. Hacking se refiere al espíritu de diversión en el que estábamos desarrollando software.",
    "author": "Richard Stallman",
    "numberOfVotes": 2,
    "rating": 4.8
  },
  {
    "_id": {
      "$oid": "5a9dc6316744730004f6a1e7"
    },
    "text": "En junio de 1949, la gente había comenzado a darse cuenta de que no era tan fácil hacer los programas bien como parecía en un principio.",
    "author": "Maurice Wilkes",
    "numberOfVotes": 0,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5aa28dd71dcf530004c4bf66"
    },
    "text": "Todo debe hacerse lo más simple posible. Pero para hacer eso tienes que dominar la complejidad.",
    "author": "Butler Lampson",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aa29df5e7e86700048f027d"
    },
    "text": "Si hubiera seguido mi corazón en lugar de los consejos, dBASE estaría mucho más cerca de la perfección hoy en día.",
    "author": "Wayne Ratliff",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5aa29e43e7e86700048f027e"
    },
    "text": "La programación es un poco como el ejército. Ahora que estoy fuera, es genial haber tenido la experiencia.",
    "author": "Wayne Ratliff",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 3
  },
  {
    "_id": {
      "$oid": "5aa2a20ce7e86700048f0282"
    },
    "text": "No me gusta usar ninguna herramienta o programa que no haya escrito yo mismo o sobre el que no tenga algún control.",
    "author": "Jonathan Sachs",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 0,
    "rating": 0
  },
  {
    "_id": {
      "$oid": "5aa2a15fe7e86700048f0281"
    },
    "text": "Si no puedes explicar un programa a ti mismo, la posibilidad de que la computadora lo haga bien es bastante pequeña.",
    "author": "Bob Frankston",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4
  },
  {
    "_id": {
      "$oid": "5aa45ab57832df00040ac9bd"
    },
    "text": "No comento sobre el código en sí porque siento que el código bien escrito está muy bien auto-documentado.",
    "author": "Gary Kildall",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aa45bcf7832df00040ac9be"
    },
    "text": "Cuando un programa es limpio y ordenado, bien estructurado y consistente, puede ser hermoso.",
    "author": "Gary Kildall",
    "source": "Programadores en el Trabajo",
    "numberOfVotes": 1,
    "rating": 4.5
  },
  {
    "_id": {
      "$oid": "5aa6db5d01c2c400048eb9a6"
    },
    "text": "JavaScript, puramente por accidente, se ha convertido en el lenguaje de programación más popular del mundo.",
    "author": "Douglas Crockford",
    "source": "Coders at Work",
    "numberOfVotes": 0,
    "rating": 5
  },
  {
    "_id": {
      "$oid": "5aac2669c2138a00046e9182"
    },
    "text": "El software es una disciplina de detalle, y ese es un problema fundamental profundo y horrendo con el software.",
    "author": "L. Peter Deutsch",
    "source": "Coders at Work",
    "numberOfVotes": 0,
    "rating": 3.5
  },
  {
    "_id": {
      "$oid": "5aac309cc2138a00046e9189"
    },
    "text": "Incluso en los juegos de niños hay cosas que interesan al mayor matemático.",
    "author": "Gottfried Wilhelm Leibniz",
    "numberOfVotes": 1,
    "rating": 4.5
  }
];
