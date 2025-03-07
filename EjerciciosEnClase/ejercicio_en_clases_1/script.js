//FORMACION ACADEMICA
function verificarFormacionAcademica(diplomados, especialidades, maestrias, doctorados){
    let total = 0;
    if (diplomados == 0) return total;
    let puntosDiplomados = (diplomados - 1) + 2;
    puntosDiplomados = puntosDiplomados >= 4 ? 4 : puntosDiplomados; 
    total = puntosDiplomados
    return total;
}
module.exports = verificarFormacionAcademica