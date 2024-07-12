import { datosProductos } from "../service/productos.js"

const $mostrarProductos = document.querySelector("[data-mostrarProducto]");
const $buttonShowUsers = document.querySelector("[data-buttonShowUsers]");
const $buttonModifyProducts = document.querySelector("[data-buttonModifyProducts]");

const mostrarProductos = (nombre, precio, imgUrl, id, categoria) => {
    const anhadirLinea = document.createElement("div")
    anhadirLinea.classList.add("producto__target")
    const contenido = `
    <img class="producto__target__img" src="${imgUrl}" alt="">
    <p class="producto__target__name">${nombre}</p>
    <p class="producto__target__precio">S/ ${precio}</p>
    <div class="producto__target__buttonsAdmin">
            <a class="producto__target__editar" href="editarProducto.html?id=${id}">Editar</a>
            <a class="producto__target__ver" href="producto.html?id=${id}">Ver</a>
            <span data-btnEliminarProducto class="producto__target__eliminar" id="${id}">Eliminar</span>
    </div>
    <p class="producto__target__category">${categoria}<p>
  `;
    anhadirLinea.innerHTML = contenido;
    const $eliminarProducto = anhadirLinea.querySelector("[data-btnEliminarProducto]");
    $eliminarProducto.addEventListener('click', () => {
        const id = $eliminarProducto.id;
        datosProductos.deletProductos(id).then(respuesta => {
           (respuesta);
           location.reload();
        }).catch(err => Swal.fire("Error al eliminar producto"))
    });
    return anhadirLinea;
};

datosProductos.listaProductos().then((data) => {
    data.forEach(({ nombre, precio, imgUrl, id, categoria }) => {
        const nuevaLinea = mostrarProductos(nombre, precio, imgUrl, id,categoria);
        $mostrarProductos.appendChild(nuevaLinea);
    });
}).catch((error) => Swal.fire({
    title: "<span class='alertTitle'>Sin datos</span>",
    html: "<span class='alerttext'>Por favor inténtelo más tarde </span>",
    icon: "error",
    iconColor: "#fd1f4a",
    background: "#2d2c2e",
    timer: 5000,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: false,
    showConfirmButton: true,
    confirmButtonColor: "#295afa",
    confirmButtonAriaLabe: "Confirmar",
})
);

const newAlert = () => {
    Swal.fire({
        title: "<span class='alertTitle'>Estamos en desarrollo para mejorar tu experiencia.</span>",
        html: "<span class='alerttext'>Estos formularios son de prueba y no almacenan la información</span>",
        background: "#2d2c2e",
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: false,
        showConfirmButton: true,
        confirmButtonColor: "#295afa",
        confirmButtonAriaLabe: "Confirmar",
        imageUrl: "../imagenes/endesarrollo.svg",
        imageWidth: "250px",
        imageAlt: "En Desarrollo",
    })
};

$buttonShowUsers.addEventListener('click', (event) => {
    event.preventDefault();
    newAlert();
});
$buttonModifyProducts.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "addProductos.html"
});
