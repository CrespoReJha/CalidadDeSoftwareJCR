let _diplomados = document.getElementById("diplomados");
let _especialidades = document.getElementById("especialidades");
let _maestrias = document.getElementById("maestrias");
let _doctorados = document.getElementById("doctorados");
let _asistencias = document.getElementById("asistencias");
let _antiguedad = document.getElementById("antiguedad");
let _experiencia = document.getElementById("experiencia");
let _docencia = document.getElementById("docencia");
let _articulos = document.getElementById("articulos");

let _diplomadosPuntaje = document.getElementById("diplomados-puntaje");
let _especialidadesPuntaje = document.getElementById("especialidades-puntaje");
let _maestriasPuntaje = document.getElementById("maestrias-puntaje");
let _doctoradosPuntaje = document.getElementById("doctorados-puntaje");
let _asistenciasPuntaje = document.getElementById("asistencias-puntaje");
let _antiguedadPuntaje = document.getElementById("antiguedad-puntaje");
let _experienciaPuntaje = document.getElementById("experiencia-puntaje");
let _docenciaPuntaje = document.getElementById("docencia-puntaje");
let _articulosPuntaje = document.getElementById("articulos-puntaje");

let subFormacionAcademica = document.getElementById(
  "subtotal-formacion-academica"
);
let subActualizacionAcademica = document.getElementById(
  "subtotal-actualizacion-academica"
);
let subExperienciaProfesional = document.getElementById(
  "subtotal-experiencia-profesional"
);
let subProduccionIntelectual = document.getElementById(
  "subtotal-produccion-intelectual"
);
let totalPuntaje = document.getElementById("total");

function verificarFormacionAcademica(
  diplomados,
  especialidades,
  maestrias,
  doctorados
) {
  let total = 0;
  let puntosDiplomados = diplomados == 0 ? 0 : diplomados - 1 + 2;
  let puntosEspecialidad =
    especialidades == 0 ? 0 : 4 + (especialidades - 1) * 2;
  let puntosMaestria = maestrias == 0 ? 0 : 8 + (maestrias - 1) * 3;
  let puntosDoctorado = doctorados > 1 ? 12 : doctorados * 12;

  puntosDiplomados = puntosDiplomados >= 4 ? 4 : puntosDiplomados;
  puntosEspecialidad = puntosEspecialidad >= 6 ? 6 : puntosEspecialidad;
  puntosMaestria = puntosMaestria >= 11 ? 11 : puntosMaestria;

  total =
    puntosDiplomados + puntosEspecialidad + puntosMaestria + puntosDoctorado;
  _diplomadosPuntaje.value = puntosDiplomados;
  _especialidadesPuntaje.value = puntosEspecialidad;
  _maestriasPuntaje.value = puntosMaestria;
  _doctoradosPuntaje.value = puntosDoctorado;
  total = total >= 12 ? 12 : total;
  return total;
}

function verificarActualizacionAcademica(asistencias) {
  let puntosAsistencia = asistencias * 0.5;
  puntosAsistencia = puntosAsistencia > 6 ? 6 : puntosAsistencia;
  _asistenciasPuntaje.value = puntosAsistencia;
  return puntosAsistencia;
}

function verificarExperienciaProfesional(antiguedad, experiencia, docencia) {
  let total = 0;
  let puntosAntiguedad = antiguedad > 4 ? 4 : antiguedad;
  let puntosExperiencia = experiencia > 4 ? 4 : experiencia;
  let puntosDocencia = docencia > 1 ? 2 : docencia * 2;
  _antiguedadPuntaje.value = puntosAntiguedad;
  _experienciaPuntaje.value = puntosExperiencia;
  _docenciaPuntaje.value = puntosDocencia;
  total = puntosAntiguedad + puntosExperiencia + puntosDocencia;
  return total;
}

function verificarProduccionIntelectual(articulos) {
  let puntosArticulos = articulos > 2 ? 2 : articulos;
  _articulosPuntaje.value = puntosArticulos;
  return puntosArticulos;
}

function calcularTotal() {
  let total =
    parseInt(subFormacionAcademica.value) +
    parseInt(subActualizacionAcademica.value) +
    parseInt(subExperienciaProfesional.value) +
    parseInt(subProduccionIntelectual.value);

  total = total >= 30 ? 30 : total;
  totalPuntaje.value = total;
}

_diplomados.addEventListener("change", (event) => {
  subFormacionAcademica.value = verificarFormacionAcademica(
    parseInt(_diplomados.value),
    parseInt(_especialidades.value),
    parseInt(_maestrias.value),
    parseInt(_doctorados.value)
  );
  calcularTotal();
});

_especialidades.addEventListener("change", (event) => {
  subFormacionAcademica.value = verificarFormacionAcademica(
    parseInt(_diplomados.value),
    parseInt(_especialidades.value),
    parseInt(_maestrias.value),
    parseInt(_doctorados.value)
  );
  calcularTotal();
});

_maestrias.addEventListener("change", (event) => {
  subFormacionAcademica.value = verificarFormacionAcademica(
    parseInt(_diplomados.value),
    parseInt(_especialidades.value),
    parseInt(_maestrias.value),
    parseInt(_doctorados.value)
  );
  calcularTotal();
});

_doctorados.addEventListener("change", (event) => {
  subFormacionAcademica.value = verificarFormacionAcademica(
    parseInt(_diplomados.value),
    parseInt(_especialidades.value),
    parseInt(_maestrias.value),
    parseInt(_doctorados.value)
  );
  calcularTotal();
});

_asistencias.addEventListener("change", (event) => {
  subActualizacionAcademica.value = verificarActualizacionAcademica(
    parseInt(_asistencias.value)
  );
  calcularTotal();
});

_antiguedad.addEventListener("change", (event) => {
  subExperienciaProfesional.value = verificarExperienciaProfesional(
    parseInt(_antiguedad.value),
    parseInt(_experiencia.value),
    parseInt(_docencia.value)
  );
  calcularTotal();
});

_experiencia.addEventListener("change", (event) => {
  subExperienciaProfesional.value = verificarExperienciaProfesional(
    parseInt(_antiguedad.value),
    parseInt(_experiencia.value),
    parseInt(_docencia.value)
  );
  calcularTotal();
});

_docencia.addEventListener("change", (event) => {
  subExperienciaProfesional.value = verificarExperienciaProfesional(
    parseInt(_antiguedad.value),
    parseInt(_experiencia.value),
    parseInt(_docencia.value)
  );
  calcularTotal();
});

_articulos.addEventListener("change", (event) => {
  subProduccionIntelectual.value = verificarProduccionIntelectual(
    parseInt(_articulos.value)
  );
  calcularTotal();
});
