const peliculas = [
    {
        titulo: "Alita: Battle Angel",
        descripcion: "Alita es un cyborg que se despierta en la clínica de un médico sin recordar quién es. La cyborg deberá usar sus extraordinarias habilidades para combatir contra enemigos terribles, mientras trata de descubrir la verdad sobre su pasado.",
        duracionygenero: "2h 2 min - Acción/Ciencia ficción",
        imagen: "alita.jpg"
    },
    {
        titulo: "Anon",
        descripcion: "En un futuro cercano, donde se graban los recuerdos privados y los crímenes han cesado, un detective con problemas se cruza con una joven que parece haber subvertido el sistema.",
        duracionygenero: "1h 40min - Suspenso/Ciencia ficción",
        imagen: "Anon.jpg"
    },
    {
        titulo: "Battle Royale",
        descripcion: "Cuarenta y dos estudiantes de noveno grado son enviados a una isla desértica. Ellos reciben un mapa, comida, y varias armas. Un collar explosivo le es colocado alrededor de su cuello. Si ellos rompen una regla, el collar explota. Su misión es matarse entre ellos y ser el último en sobrevivir. Esa persona puede dejar la isla. Si hay más de uno vivo, los collares explotan y los matan a todos.",
        duracionygenero: "2h 2min - Suspenso/Ciencia ficción",
        imagen: "BattleRoyale.jpg"
    },
    {
        titulo: "Children of Men",
        descripcion: "Desde hace décadas no ha nacido ningún bebé en la Tierra y el mundo, excepto Inglaterra, ahora un Estado totalitario, es un caos. Un hombre lucha por salvar a una joven embarazada mientras se ve inmerso en el conflicto entre Gobierno y rebeldes.",
        duracionygenero: "1h 49min - Suspenso/Acción",
        imagen: "Children.jpeg"
    },
    {
        titulo: "Cloverfield: Monstruo",
        descripcion: "Una cámara de video graba los terribles eventos que se desarrollan cuando una criatura monstruosa ataca Nueva York, provocando a su paso muerte y destrucción.",
        duracionygenero: "1h 25min - Terror/Acción",
        imagen: "cloverfield.jpeg"
    },
    {
        titulo: "Come True",
        descripcion: "Una joven estudiante decide participar en un estudio del sueño. Cuando comienza a investigar sus terribles pesadillas, se da cuenta de que los monstruos pueden ser más reales de lo que imaginaba.",
        duracionygenero: "1h 40min - Terror/Ciencia ficción",
        imagen: "cometrue.jpeg"
    },
    {
        titulo: "No respires",
        descripcion: "Unos ladrones saben que un ciego guarda mucho dinero en su vivienda y entran en su casa para robarle. Pero descubren que el hombre guarda un secreto terrible y lo que parecía un atraco sencillo se termina convirtiendo en la peor pesadilla de sus vidas.",
        duracionygenero: "1h 28min - Terror/Crimen",
        imagen: "NoRespires.jpg"
    },
    {
        titulo: "Ex-Máquina",
        descripcion: "Un joven programador que trabaja en una compañía de Internet es elegido para evaluar las capacidades y la conciencia de una hermosa y sofisticada robot.",
        duracionygenero: "1h 48min - Suspenso/Ciencia ficción",
        imagen: "ExMachina.jpg"
    },
    {
        titulo: "Farenheit 451",
        descripcion: "En una realidad distópica donde los libros son prohibidos y quemados, un bombero comienza a leer en secreto y descubre una rebelión subterránea comprometida en la protección de la literatura.",
        duracionygenero: "1h 40min - Suspenso/Ciencia ficción",
        imagen: "Fahrenheit451.jpeg"
    },
    {
        titulo: "Ghost in the Shell: Vigilante del futuro ",
        descripcion: "Un híbrido entre humana y robot, única en su especie, lidera un equipo de élite en la batalla que los enfrenta a un enemigo muy poderoso que pretende destruir los avances en cibertecnología de Hanka, una compañía que fabrica robots.",
        duracionygenero: "1h 47min - Acción/Ciencia ficción",
        imagen: "GhostShell.jpeg"
    },
    {
        titulo: "HardCore Henry",
        descripcion: "Un videojuego de acción en primera persona sigue a Henry, un androide que debe salvar a su esposa de un villano con poderes telequinéticos.",
        duracionygenero: "1h 36min - Acción/Ciencia ficción",
        imagen: "hardcorehenry.jpeg"
    },
    {
        titulo: "John Wick",
        descripcion: "John Wick es una franquicia estadounidense de suspenso y acción neo-noir creada por Derek Kolstad y producidas por Lionsgate a través de Summit Entertainment. La franquicia esta centrada en John Wick, un ex asesino a sueldo que se ve obligado a regresar al inframundo criminal que había abandonado anteriormente.",
        duracionygenero: "Saga - Acción",
        imagen: "JohnWick.jpeg"
    },
    {
        titulo: "",
        descripcion: "",
        duracionygenero: "",
        imagen: ".jpg"
    },
     {
        titulo: "",
        descripcion: "",
        duracionygenero: "",
        imagen: ".jpg"
    },
     {
        titulo: "",
        descripcion: "",
        duracionygenero: "",
        imagen: ".jpg"
    },
];

function recomendarPelicula() {
    const index = Math.floor(Math.random() * peliculas.length);
    const pelicula = peliculas[index];
    const contenedor = document.getElementById("pelicula-info");

    contenedor.innerHTML = `
        <h2>${pelicula.titulo}</h2>
        <p>${pelicula.descripcion}</p>
        <img src="${pelicula.imagen}" alt="${pelicula.titulo}" width="170">
        <p>${pelicula.duracionygenero}</p>
    `;
}