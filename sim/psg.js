const plantillaPsg = [
    // TITULARES
    { nombre: "Chevalier", pos: "POR", rit: 84, tir: 79, pas: 73, reg: 86, def: 50, fis: 80, med: 83, titular: true },
    { nombre: "Hakimi", pos: "DEF", rit: 92, tir: 79, pas: 82, reg: 83, def: 82, fis: 79, med: 89, titular: true },
    { nombre: "Fabián Ruiz", pos: "MED", rit: 61, tir: 77, pas: 80, reg: 81, def: 75, fis: 72, med: 85, titular: true },
    { nombre: "Vitinha", pos: "MED", rit: 72, tir: 80, pas: 86, reg: 90, def: 75, fis: 70, med: 89, titular: true },
    { nombre: "Dembélé", pos: "DEL", rit: 91, tir: 88, pas: 83, reg: 93, def: 50, fis: 69, med: 90, titular: true },
    
    // SUPLENTES
    { nombre: "Safonov", pos: "POR", rit: 79, tir: 74, pas: 75, reg: 80, def: 44, fis: 77, med: 78, titular: false },
    { nombre: "Marquinhos", pos: "DEF", rit: 78, tir: 56, pas: 75, reg: 74, def: 89, fis: 80, med: 87, titular: false },
    { nombre: "Zaïre-Emery", pos: "MED", rit: 79, tir: 68, pas: 76, reg: 79, def: 75, fis: 79, med: 80, titular: false },
    { nombre: "Joao Neves", pos: "MED", rit: 74, tir: 69, pas: 80, reg: 84, def: 82, fis: 83, med: 85, titular: false },
    { nombre: "Kvaratskhelia", pos: "DEL", rit: 86, tir: 80, pas: 83, reg: 88, def: 58, fis: 78, med: 87, titular: false },
];

window.registrarEquipo(plantillaPsg);
