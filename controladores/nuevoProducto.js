import { datosProductos } from "../service/productos.js"

const $addProductoSave = document.querySelector("[data-addProductoSave]");


$addProductoSave.addEventListener('click', (evento) => {
    evento.preventDefault();

    const categoria = document.querySelector("[data-addProductoCategoria]").value;
    const nombre = document.querySelector("[data-addProductoNombre]").value;
    const precio = document.querySelector("[data-addProductoPrecio]").value;
    const descripcion = document.querySelector("[data-addProductoDescripcion]").value;
    const imgUrl = document.querySelector("[data-addProductoURLImg]").value;

    const newAlert = (mensaje) => {
        Swal.fire({
            title: `<span class='alertTitle'>${mensaje}</span>`,
            icon: "error",
            iconColor: "#fd1f4a",
            background: "#2d2c2e",
            timer: 1000,
            allowOutsideClick: true,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            //showConfirmButton: true,
            //confirmButtonColor: "#295afa",
            //confirmButtonAriaLabe: "Confirmar"
        })
    }

    if (categoria == "") {
        newAlert("La categoría es obligatorio");
    } else if (nombre == "") {
        newAlert("El nombre del producto es obligatorio")
    } else if (precio == "") {
        newAlert("El precio es obligatorio")
    } else if (precio.indexOf('.') == -1) {
        newAlert("El precio debe tener 2 números decimales")
    } else if (descripcion == "") {
        newAlert("Campo descripción es obligatorio")
    } else if (imgUrl == "") {
        newAlert("Campo obligatorio ingresar la url de la imagen")
    } else {
        datosProductos.addProductoSave(nombre, categoria, precio, descripcion, imgUrl).then(respuesta => {
            console.log(respuesta);
            window.location.href = "inicio_admin.html"
        }).catch(err => Swal.fire({
            title: "<span class='alertTitle'>Error al guardar producto</span>",
            html: "<span class='alerttext'>Por favor seleccione un producto </span>",
            icon: "error",
            iconColor: "#fd1f4a",
            background: "#2d2c2e",
            timer: 4000,
            allowOutsideClick: true,
            allowEscapeKey: true,
            allowEnterKey: true,
            stopKeydownPropagation: false,
            showConfirmButton: true,
            confirmButtonColor: "#295afa",
            confirmButtonAriaLabe: "Confirmar",
        })
        )
        window.location.href = "inicio_admin.html"
    }
});
