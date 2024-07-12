import { datosProductos } from "../service/productos.js"

const $detalleProducto = document.querySelector("[data-detalleProducto]");


const showInfoProducto = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id == null) {
        (async() => {
            await Swal.fire({
            title: "<span class='alertTitle'>Sin datos</span>",
            html: "<span class='alerttext'>Por favor seleccione un producto </span>",
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
            if (window.history.back() == null) {
                window.location.href = "../index.html"
            } else {
                window.history.back();
            }
        })()   
    }
    try {
        const detProduc = await datosProductos.detalleProductos(id);
        if (detProduc.id) {
            const nombre = detProduc.nombre;
            const categoria = detProduc.categoria;
            const precio = detProduc.precio;
            const imgUrl = detProduc.imgUrl;
            const descripcion = detProduc.descripcion;
            const addNuevalinea = document.createElement("div");
            addNuevalinea.classList.add("items__producto");
            const addContenido = `
                <p class="item__producto__subtitle">${categoria}</p>
                <div class="item__producto">    
                    <img class="item__producto__img" src="${imgUrl}">
                    <div class="item__producto__details">
                        <p class="item__producto__details__name" >${nombre}</p>
                        <p class="item__producto__details__precio" >COP/${precio}</p>
                        <p class="item__producto__details__detalle" >${descripcion}</p>
                    </div>
                </div>
                `;
            addNuevalinea.innerHTML = addContenido;
            $detalleProducto.appendChild(addNuevalinea);
        } else {
            throw new Error()
        }
    } catch {
        (async () => {
            await Swal.fire({
                title: "<span class='alertTitle'>Error al obtener datos</span>",
                html: "<span class='alerttext'>Por favor seleccione un producto </span>",
                icon: "error",
                iconColor: "#fd1f4a",
                background: "#2d2c2e",
                timer: 5000,
                allowOutsideClick: true,
                allowEscapeKey: true,
                allowEnterKey: true,
                stopKeydownPropagation: false,
                showConfirmButton: true,
                //customClass: {
                //  popup: "popup__class"
                //}
                confirmButtonColor: "#295afa",
                confirmButtonAriaLabe: "Confirmar",
                //imageUrl: "",
                //imageWidth: "",
                //imageHeight: "",
                //imageAlt:"",
            })
            if (window.history.back() == null) {
                window.location.href = "../index.html"
            } else {
                window.history.back();
            }
        })();
    };


};
showInfoProducto();
