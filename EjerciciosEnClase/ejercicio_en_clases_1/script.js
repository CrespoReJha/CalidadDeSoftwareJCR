//FORMACION ACADEMICA
function verificarFormacionAcademica(diplomados, especialidades, maestrias, doctorados){
    let total = 0;
    let puntosDiplomados = diplomados == 0 ? 0 : (diplomados - 1) + 2;
    let puntosEspecialidad = especialidades == 0 ? 0 : 4 + ((especialidades - 1) * 2);
    let puntosMaestria = maestrias == 0 ? 0 : 8 + ((maestrias - 1) * 3);
    let puntosDoctorado = doctorados > 1 ? 12 : doctorados * 12;

    puntosDiplomados = puntosDiplomados >= 4 ? 4 : puntosDiplomados; 
    puntosEspecialidad = puntosEspecialidad >= 6 ? 6 : puntosEspecialidad;
    puntosMaestria = puntosMaestria >= 11 ? 11 : puntosMaestria;

    total = puntosDiplomados + puntosEspecialidad + puntosMaestria + puntosDoctorado;
    total = total >= 12 ? 12 : total;
    return total;
}

function verificarActualizacionAcademica(asistencias){
    let puntosAsistencia = asistencias * 0.5;
    return puntosAsistencia > 6 ? 6 : puntosAsistencia;
}

function verificarExperienciaProfesional(antiguedad, experiencia, docencia){
    let total = 0;
    let puntosAntiguedad = antiguedad > 4 ? 4 : antiguedad;
    let puntosExperiencia = experiencia > 4 ? 4 : experiencia;
    let puntosDocencia = docencia > 1 ? 2 : docencia * 2;
    total = puntosAntiguedad + puntosExperiencia + puntosDocencia;
    return total;
}

function verificarProduccionIntelectual(articulos){
    return 0;
}

module.exports = {
    verificarFormacionAcademica, 
    verificarActualizacionAcademica,
    verificarExperienciaProfesional,
    verificarProduccionIntelectual
}