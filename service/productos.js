const fetchProductos1 = () => 
    fetch("https://my-json-server.typicode.com/GabrielCabrales/challengealurageek/productos")
    .then(respuesta => respuesta.json());

const fetchProductos2 = () => 
    fetch("https://my-json-server.typicode.com/GabrielCabrales/productosalura/productos")
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
    const producto = { nombre, categoria, precio, descripcion, imgUrl, id: uuid.v4() };

    const saveInEndpoint1 = fetch("https://my-json-server.typicode.com/GabrielCabrales/challengealurageek/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });

    const saveInEndpoint2 = fetch("https://my-json-server.typicode.com/GabrielCabrales/productosalura/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });

    return Promise.all([saveInEndpoint1, saveInEndpoint2]);
};

const deletProductos = (id) => {
    const deleteFromEndpoint1 = fetch(`https://my-json-server.typicode.com/GabrielCabrales/challengealurageek/productos/${id}`, {
        method: "DELETE"
    });

    const deleteFromEndpoint2 = fetch(`https://my-json-server.typicode.com/GabrielCabrales/productosalura/productos/${id}`, {
        method: "DELETE"
    });

    return Promise.all([deleteFromEndpoint1, deleteFromEndpoint2]);
};

const detalleProductos = (id) => {
    const fetchFromEndpoint1 = fetch(`https://my-json-server.typicode.com/GabrielCabrales/challengealurageek/productos/${id}`)
        .then(respuesta => respuesta.json());

    const fetchFromEndpoint2 = fetch(`https://my-json-server.typicode.com/GabrielCabrales/productosalura/productos/${id}`)
        .then(respuesta => respuesta.json());

    return Promise.race([fetchFromEndpoint1, fetchFromEndpoint2]);
};

const actualizarProducto = (nombre, categoria, precio, descripcion, imgUrl, id) => {
    const updatedProduct = { nombre, categoria, precio, descripcion, imgUrl };

    const updateInEndpoint1 = fetch(`https://my-json-server.typicode.com/GabrielCabrales/challengealurageek/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
    });

    const updateInEndpoint2 = fetch(`https://my-json-server.typicode.com/GabrielCabrales/productosalura/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
    });

    return Promise.all([updateInEndpoint1, updateInEndpoint2]);
};

export const datosProductos = {
    listaProductos, 
    deletProductos,
    addProductoSave,
    detalleProductos,
    actualizarProducto,
}