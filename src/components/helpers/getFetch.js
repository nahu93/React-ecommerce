

export const productos = [
    { id : 1, nombre: 'Barcelona',precio: 5200, foto: '../multimedia/barcelona.jpg'},
    { id : 2, nombre: 'Paris', precio: 5500,foto: "../multimedia/paris.jpg"},
    { id : 3, nombre: 'ManchesterCity', precio: 5000,foto: "../multimedia/manchestercity.jpg"},
    { id : 4, nombre:'RealMadrid', precio: 5100 , foto: "../multimedia/realmadrid.jpg"},
    { id : 5, nombre:'Chelsea', precio: 4900,foto: "../multimedia/chelsea.jpg"},
    { id : 6, nombre:'Juventus', precio: 5700,foto: "../multimedia/juventus.jpg"},
    { id : 7, nombre:'Liverpool', precio: 5800,foto: "../multimedia/liverpool.jpg"},
    { id : 8, nombre:'Bayern', precio: 5200,foto: "../multimedia/bayern.jpg"},
    { id : 9, nombre:'Olympique',precio: 5300,foto: "../multimedia/olympique.jpg"},
    { id : 10,nombre:'Milan',precio: 5700,foto: "../multimedia/milan.jpg" },
];




export const getFetch = new Promise ((aceptado, rechazada)=> {
    setTimeout (()=>{
        aceptado(productos)
    },3000);
})


