const listaProductos = () => fetch("https://my-json-server.typicode.com/GabrielCabrales/challengealurageek/productos").then(respuesta => respuesta.json()); 

const addProductoSave = (nombre, categoria, precio, descripcion, imgUrl) => {
    return fetch("https://my-json-server.typicode.com/GabrielCabrales/challengealurageek/productos", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
        body: JSON.stringify({ nombre, categoria, precio, descripcion, imgUrl, id: uuid.v4() })
})
}

const deletProductos = (id) => {
    return fetch(`https://my-json-server.typicode.com/GabrielCabrales/challengealurageek/productos/${id}`,
        {
            method: "DELETE"
        })
}

const detalleProductos = (id) => {
    return fetch(`https://my-json-server.typicode.com/GabrielCabrales/challengealurageek/productos/${id}`).then(respuesta => respuesta.json()
    );
};

const actualizarProducto = (nombre, categoria, precio, descripcion, imgUrl, id) => {
    return fetch(`https://my-json-server.typicode.com/GabrielCabrales/challengealurageek/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, categoria, precio, descripcion, imgUrl})
    })
}

export const datosProductos = {
    listaProductos, 
    deletProductos,
    addProductoSave,
    detalleProductos,
    actualizarProducto,
}