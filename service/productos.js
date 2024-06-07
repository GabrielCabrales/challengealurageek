const fetchProductos1 = () => 
    fetch("https://my-json-server.typicode.com/GabrielCabrales/challengealurageek/productos")
    .then(respuesta => respuesta.json());

const fetchProductos2 = () => 
    fetch("https://otro-json-server.typicode.com/usuario/challengealurageek/productos")
    .then(respuesta => respuesta.json());

const listaProductos = async () => {
    try {
        const [productos1, productos2] = await Promise.all([fetchProductos1(), fetchProductos2()]);
        return [...productos1, ...productos2];
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
};

const addProductoSave = (nombre, categoria, precio, descripcion, imgUrl) => {
    return fetch("https://my-json-server.typicode.com/GabrielCabrales/challengealurageek/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, categoria, precio, descripcion, imgUrl, id: uuid.v4() })
    });
}

const deletProductos = (id) => {
    return fetch(`https://my-json-server.typicode.com/GabrielCabrales/challengealurageek/productos/${id}`, {
        method: "DELETE"
    });
}

const detalleProductos = (id) => {
    return fetch(`https://my-json-server.typicode.com/GabrielCabrales/challengealurageek/productos/${id}`)
        .then(respuesta => respuesta.json());
};

const actualizarProducto = (nombre, categoria, precio, descripcion, imgUrl, id) => {
    return fetch(`https://my-json-server.typicode.com/GabrielCabrales/challengealurageek/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, categoria, precio, descripcion, imgUrl })
    });
}

export const datosProductos = {
    listaProductos, 
    deletProductos,
    addProductoSave,
    detalleProductos,
    actualizarProducto,
}