//FORMACION ACADEMICA
function verificarFormacionAcademica(diplomados, especialidades, maestrias, doctorados){
    let total = 0;
    let puntosDiplomados = diplomados == 0 ? 0 : (diplomados - 1) + 2;
    let puntosEspecialidad = especialidades == 0 ? 0 : 4 + ((especialidades - 1) * 2);

    puntosDiplomados = puntosDiplomados >= 4 ? 4 : puntosDiplomados; 
    total = puntosDiplomados + puntosEspecialidad;
    return total;
}
module.exports = verificarFormacionAcademica