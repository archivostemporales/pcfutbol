const plantillaSevilla = [
    // TITULARES
    { nombre: "Nyland", pos: "POR", rit: 76, tir: 75, pas: 77, reg: 75, def: 47, fis: 74, med: 76, titular: true },
    { nombre: "Gudelj", pos: "DEF", rit: 46, tir: 73, pas: 78, reg: 69, def: 76, fis: 84, med: 77, titular: true },
    { nombre: "Ejuke", pos: "MED", rit: 90, tir: 69, pas: 71, reg: 82, def: 37, fis: 63, med: 78, titular: true },
    { nombre: "Sow", pos: "MED", rit: 78, tir: 69, pas: 73, reg: 76, def: 74, fis: 78, med: 76, titular: true },
    { nombre: "Alexis", pos: "DEL", rit: 68, tir: 78, pas: 78, reg: 81, def: 48, fis: 59, med: 76, titular: true },

    // SUPLENTES
    { nombre: "Álvaro", pos: "POR", rit: 75, tir: 71, pas: 68, reg: 76, def: 47, fis: 73, med: 74, titular: false },
    { nombre: "Carmona", pos: "DEF", rit: 80, tir: 65, pas: 69, reg: 73, def: 73, fis: 67, med: 76, titular: false },
    { nombre: "Mendy", pos: "MED", rit: 69, tir: 61, pas: 67, reg: 70, def: 74, fis: 83, med: 76, titular: false },
    { nombre: "Joan Jordán", pos: "MED", rit: 48, tir: 74, pas: 77, reg: 74, def: 68, fis: 75, med: 76, titular: false },
    { nombre: "Adams", pos: "DEL", rit: 77, tir: 72, pas: 56, reg: 70, def: 29, fis: 75, med: 73, titular: false }
];

window.registrarEquipo(plantillaSevilla);


    //    { nombre: "Loïc Badé", pos: "DFC", rit: 76, tir: 36, pas: 58, reg: 65, def: 81, fis: 80, med: 80, titular: true },
    //    { nombre: "Saúl", pos: "MC", rit: 65, tir: 74, pas: 77, reg: 76, def: 76, fis: 75, med: 79, titular: true },
    //    { nombre: "Dodi Lukébakio", pos: "ED", rit: 87, tir: 77, pas: 73, reg: 81, def: 44, fis: 69, med: 78, titular: true },

    //    { nombre: "Djibril Sow", pos: "MC", rit: 72, tir: 68, pas: 75, reg: 77, def: 74, fis: 75, med: 78, titular: true },
    //    { nombre: "Albert Sambi Lokonga", pos: "MCD", rit: 67, tir: 67, pas: 76, reg: 78, def: 73, fis: 71, med: 77, titular: true },
    //    { nombre: "Isaac Romero", pos: "DC", rit: 81, tir: 77, pas: 66, reg: 74, def: 42, fis: 78, med: 77, titular: true },
    //    { nombre: "Gonzalo Montiel", pos: "LD", rit: 76, tir: 60, pas: 71, reg: 74, def: 74, fis: 72, med: 77, titular: true },
    //    { nombre: "Kelechi Iheanacho", pos: "DC", rit: 75, tir: 76, pas: 71, reg: 78, def: 38, fis: 64, med: 77, titular: false },
    //    { nombre: "Suso", pos: "ED", rit: 64, tir: 75, pas: 80, reg: 81, def: 35, fis: 55, med: 77, titular: false },
    //    { nombre: "Valentín Barco", pos: "LI", rit: 78, tir: 66, pas: 75, reg: 77, def: 67, fis: 61, med: 76, titular: true },
    //    { nombre: "Adrià Pedrosa", pos: "LI", rit: 85, tir: 63, pas: 70, reg: 72, def: 71, fis: 67, med: 76, titular: true },

    //    { nombre: "Peque", pos: "MCO", rit: 71, tir: 74, pas: 70, reg: 76, def: 46, fis: 64, med: 75, titular: false },
    //    { nombre: "Tanguy Nianzou", pos: "DFC", rit: 63, tir: 37, pas: 55, reg: 60, def: 75, fis: 76, med: 75, titular: false },
    //   { nombre: "Marcão", pos: "DFC", rit: 53, tir: 42, pas: 61, reg: 62, def: 76, fis: 78, med: 75, titular: false },

    //    { nombre: "Lucien Agoumé", pos: "MCD", rit: 63, tir: 54, pas: 69, reg: 71, def: 72, fis: 73, med: 74, titular: false },
    //    { nombre: "Juanlu Sánchez", pos: "LD", rit: 77, tir: 62, pas: 69, reg: 72, def: 67, fis: 67, med: 73, titular: false },

    //    { nombre: "Kike Salas", pos: "DFC", rit: 65, tir: 41, pas: 58, reg: 59, def: 71, fis: 73, med: 71, titular: false },
    //    { nombre: "Chidera Ejuke", pos: "EI", rit: 84, tir: 66, pas: 64, reg: 81, def: 31, fis: 52, med: 71, titular: false },
    //    { nombre: "Gerard Fernández", pos: "DC", rit: 71, tir: 71, pas: 62, reg: 73, def: 35, fis: 56, med: 70, titular: false },
    //    { nombre: "Pedro Ortiz", pos: "MCD", rit: 51, tir: 57, pas: 65, reg: 64, def: 65, fis: 66, med: 66, titular: false },
    //    { nombre: "Idumbo", pos: "EI", rit: 83, tir: 60, pas: 57, reg: 71, def: 27, fis: 42, med: 66, titular: false },
    //    { nombre: "Mateo Mejía", pos: "DC", rit: 76, tir: 65, pas: 54, reg: 65, def: 27, fis: 61, med: 64, titular: false },
    //    { nombre: "Alberto Flores", pos: "POR", rit: 63, tir: 62, pas: 61, reg: 65, def: 32, fis: 63, med: 63, titular: false },
    //    { nombre: "Manu Bueno", pos: "MC", rit: 61, tir: 51, pas: 64, reg: 66, def: 58, fis: 51, med: 63, titular: false },
    //    { nombre: "Matías Árbol", pos: "POR", rit: 64, tir: 62, pas: 60, reg: 64, def: 30, fis: 62, med: 62, titular: false }
