const plantillaInter = [
    // TITULARES
    { nombre: "Sommer", pos: "POR", rit: 83, tir: 82, pas: 85, reg: 89, def: 50, fis: 87, med: 87, titular: true },
    { nombre: "Dimarco", pos: "DEF", rit: 80, tir: 78, pas: 84, reg: 82, def: 79, fis: 77, med: 85, titular: true },
    { nombre: "Calhanoglu", pos: "MED", rit: 71, tir: 81, pas: 87, reg: 82, def: 81, fis: 73, med: 86, titular: true },
    { nombre: "Barella", pos: "MED", rit: 80, tir: 78, pas: 84, reg: 86, def: 81, fis: 76, med: 87, titular: true },
    { nombre: "Lautaro Martínez", pos: "DEL", rit: 81, tir: 88, pas: 75, reg: 84, def: 51, fis: 83, med: 88, titular: true },
    
    // SUPLENTES
    { nombre: "Josep Martínez", pos: "POR", rit: 75, tir: 71, pas: 67, reg: 74, def: 26, fis: 76, med: 75, titular: false },
    { nombre: "Bastoni", pos: "DEF", rit: 74, tir: 46, pas: 75, reg: 76, def: 88, fis: 82, med: 87, titular: false },
    { nombre: "Frattesi", pos: "MED", rit: 82, tir: 77, pas: 78, reg: 82, def: 73, fis: 72, med: 81, titular: false },
    { nombre: "Mkhitaryan", pos: "MED", rit: 77, tir: 78, pas: 82, reg: 83, def: 72, fis: 75, med: 83, titular: false },
    { nombre: "Marcus Thuram", pos: "DEL", rit: 86, tir: 83, pas: 76, reg: 82, def: 50, fis: 80, med: 85, titular: false },
];

window.registrarEquipo(plantillaInter);
