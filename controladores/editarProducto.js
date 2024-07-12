import { datosProductos } from "../service/productos.js"

const $nombre = document.querySelector("[data-addProductoNombre]");
const $categoria = document.querySelector("[data-addProductoCategoria]");
const $precio = document.querySelector("[data-addProductoPrecio]");
const $descripcion = document.querySelector("[data-addProductoDescripcion]");
const $imgUrl = document.querySelector("[data-addProductoURLImg]");

const infoProducto = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id == null) {
        (async () => {
            await Swal.fire({
                title: "<span class='alertTitle'>Sin datos</span>",
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
            if (window.history.back() == null) {
                window.location.href = "../index.html"
            } else {
                window.history.back();
            }
        })();
    }
    try {
        const cargarDatosProductos = await datosProductos.detalleProductos(id);
        if (cargarDatosProductos.id) {
            $categoria.value = cargarDatosProductos.categoria;
            $nombre.value = cargarDatosProductos.nombre;
            $precio.value = cargarDatosProductos.precio;
            $descripcion.value = cargarDatosProductos.descripcion;
            $imgUrl.value = cargarDatosProductos.imgUrl;
        } else {
            throw new Error();
        } 
    } catch (error) {
        (async () => {
            await Swal.fire({
                title: "<span class='alertTitle'>Error al obtener datos</span>",
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
            if (window.history.back() == null) {
                window.location.href = "inicio_admin.html"
            } else {
                window.history.back();
            }
        })();
    };


};
infoProducto();

const $actualizarProducto = document.querySelector("[data-addProductoSave]");

$actualizarProducto.addEventListener('click', (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    
    const nombre = $nombre.value;
    const categoria = $categoria.value;
    const precio = $precio.value;
    const descripcion = $descripcion.value;
    const imgUrl = $imgUrl.value;

    if (categoria == "") {
        Swal.fire("La categoría es obligatorio")
        $categoria.focus();
    } else if (nombre == "") {
        Swal.fire("El nombre del producto es obligatorio")
        $nombre.focus();
    } else if (precio == "") {
        Swal.fire("El precio es obligatorio")
        $precio.focus();
    } else if (precio <= 0) {
        Swal.fire("El precio no puede ser 0")
        $precio.focus();
    } else if (precio.indexOf('.') == -1) {
        Swal.fire("El precio debe tener 2 números decimales")
        precio.focus();
    } else

     if (descripcion == "") {
        Swal.fire("Campo descripción es obligatorio")
        $descripcion.focus();
    } else if (imgUrl == "") {
        Swal.fire("Campo obligatorio ingresar la url de la imagen")
        $imgUrl.focus();
    } else {
        datosProductos.actualizarProducto(nombre, categoria, precio, descripcion, imgUrl, id).then(respuesta => {
            console.log(respuesta)
        }).catch(err => Swal.fire({
            title: "<span class='alertTitle'>Error al actualizar producto</span>",
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
