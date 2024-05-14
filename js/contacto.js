const $mostrarContacto = document.getElementById("contacto");
const $cerrarContacto = document.getElementById("cerrar__contacto");
const $formularioContacto = document.getElementById("formularioContacto");

$cerrarContacto.addEventListener('click', (event) => {
    event.preventDefault();
    if ($formularioContacto.name.value) {
        $formularioContacto.name.value = "";
        $formularioContacto.email.value = "";
        $formularioContacto.mensaje.value = "";
    }
    $mostrarContacto.classList.remove('show');
});

function irContacto() {
    $mostrarContacto.classList.add('show');
    window.location.href = "#contacto"
}

function formularioContacto(event) {
    event.preventDefault()
    if ($formularioContacto.name.value == "") {
        Swal.fire("Campo nombre es obligatorio")
        $formularioContacto.name.focus()
    } else if ($formularioContacto.email.value == "") {
        Swal.fire("Campo e-mail es obligatorio")
        $formularioContacto.email.focus()
    } else if ($formularioContacto.mensaje.value == "") {
        Swal.fire("Campo Mensaje es obligatorio")
        $formularioContacto.mensaje.focus()

    } else if ($formularioContacto.email.value.indexOf('@') == -1 ||
        $formularioContacto.email.value.indexOf('.') == -1) {
        Swal.fire("e-mail inválido")
    }
    Swal.fire("Este formulario es de prueba y no esta vinculado aún")
};
$formularioContacto.addEventListener('submit', formularioContacto);