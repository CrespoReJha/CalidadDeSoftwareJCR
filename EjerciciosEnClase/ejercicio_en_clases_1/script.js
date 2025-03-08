//FORMACION ACADEMICA
function verificarFormacionAcademica(diplomados, especialidades, maestrias, doctorados){
    let total = 0;
    let puntosDiplomados = diplomados == 0 ? 0 : (diplomados - 1) + 2;
    let puntosEspecialidad = especialidades == 0 ? 0 : 4 + ((especialidades - 1) * 2);
    let puntosMaestria = maestrias * 8;

    puntosDiplomados = puntosDiplomados >= 4 ? 4 : puntosDiplomados; 
    puntosEspecialidad = puntosEspecialidad >= 6 ? 6 : puntosEspecialidad;
    total = puntosDiplomados + puntosEspecialidad + puntosMaestria;
    return total;
}
module.exports = verificarFormacionAcademica