const plantillaChelsea = [
    // TITULARES
    { nombre: "Robert Sánchez", pos: "POR", rit: 79, tir: 77, pas: 75, reg: 79, def: 59, fis: 77, med: 78, titular: true },
    { nombre: "Marc Cucurella", pos: "DEF", rit: 75, tir: 64, pas: 79, reg: 80, def: 82, fis: 79, med: 84, titular: true },
    { nombre: "Caicedo", pos: "MED", rit: 71, tir: 64, pas: 78, reg: 81, def: 84, fis: 82, med: 87, titular: true },
    { nombre: "Palmer", pos: "MED", rit: 75, tir: 83, pas: 87, reg: 87, def: 50, fis: 65, med: 87, titular: true },
    { nombre: "Joao Pedro", pos: "DEL", rit: 78, tir: 78, pas: 72, reg: 81, def: 37, fis: 70, med: 79, titular: true },
    
    // SUPLENTES
    { nombre: "Jörgensen", pos: "POR", rit: 77, tir: 76, pas: 72, reg: 78, def: 45, fis: 77, med: 77, titular: false },
    { nombre: "Reece James", pos: "DEF", rit: 76, tir: 71, pas: 82, reg: 77, def: 81, fis: 81, med: 81, titular: false },
    { nombre: "Enzo Fernández", pos: "MED", rit: 68, tir: 75, pas: 85, reg: 81, def: 73, fis: 75, med: 84, titular: false },
    { nombre: "Andrey Santos", pos: "MED", rit: 74, tir: 69, pas: 74, reg: 78, def: 77, fis: 80, med: 80, titular: false },
    { nombre: "Sterling", pos: "DEL", rit: 82, tir: 74, pas: 74, reg: 82, def: 42, fis: 48, med: 78, titular: false },
];

window.registrarEquipo(plantillaChelsea);
