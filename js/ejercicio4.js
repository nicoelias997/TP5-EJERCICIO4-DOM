const fecha = document.getElementById("fecha");
const hora = document.getElementById("hora");
const box2 = document.getElementById("box2")

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const dias = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    let diaSemana;
    let fechaActual = new Date();

    if(dias[fechaActual.getDate()] == undefined){
        diaSemana = dias[fechaActual.getDate() - 7]
    }

    fecha.className = "fs-3 py-3 text-center text-white";
    fecha.innerHTML = `${diaSemana} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`


    setInterval(() => {

        let horaActual = new Date();

    let formato = "";
    if(horaActual.getHours() > 12){
        formato = "PM"
    } else {
        formato = "AM"
    }
    
    let segundos;
    if(horaActual.getSeconds() < 10){
        segundos = `0${horaActual.getSeconds()}`
    } else {
        segundos = horaActual.getSeconds()
    }
    
    let minutos;
    if(horaActual.getMinutes() < 10){
        minutos = `0${horaActual.getMinutes()}`
    } else {
        minutos = horaActual.getMinutes()
    }

    let horas;
    if(horaActual.getHours() < 10){
        horas = `0${horaActual.getHours()}`
    } else {
        horas = horaActual.getHours()
    }
    
    hora.className = "d-flex align-items-center"
    hora.innerHTML = `
    <div class="d-flex align-items-center justify-content-center col text-center py-5">
    <p class="fs-1 text-white p-1">${horas} : ${minutos} : </p>

    <p class="fs-5 lh-1 text-white p-1">${formato}<br>${segundos}</p>
    <div>
    `
    }
    ,100)
    