//FORMACION ACADEMICA
function verificarFormacionAcademica(diplomados, especialidades, maestrias, doctorados){
    let total = 0;
    if (diplomados == 0) return total;
    total = (diplomados - 1) + 2;
    return total;
}
module.exports = verificarFormacionAcademica