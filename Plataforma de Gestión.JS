function agendarTutoria() {
    const inputEstudiante = document.getElementById("nombreEstudiante");
    const tutorSeleccionado = document.getElementById("tutorSeleccionado").value;
    const horarioTutoría = document.getElementById("horarioTutoría").value;

    const nombreEstudiante = inputEstudiante.value.trim();

    if (nombreEstudiante === "") {
        alert("Por favor, ingrese su nombre para procesar la tutoría.");
        return;
    }

    document.getElementById("resEstudiante").innerText = nombreEstudiante;
    document.getElementById("resTutor").innerText = tutorSeleccionado;
    document.getElementById("resHorario").innerText = horarioTutoría;

    const resultadoBox = document.getElementById("resultadoBox");
    resultadoBox.style.display = "block";

    inputEstudiante.value = "";
}