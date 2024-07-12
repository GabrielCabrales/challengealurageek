import { datosProductos } from "../service/productos.js"

const $printProductos = document.querySelector("[data-mostrarProducto]");

const printCategory = (category) => {
  const categoryParent = document.createElement("div")
  categoryParent.classList.add("category_items")
  categoryParent.classList.add("filtro")
  categoryParent.innerHTML = `
  <div class="category__head"> 
  <p class="category__title">${category}</p>
  <button id="btn_aument" class="btn__category__show btn_category__height">Ver todo</button>
  <button id="btn__reduce" class="btn__category__hide btn_category__height btn__ocultar">Ocultar</button>
</div>
<div id="container__category" class="category__position category__height"></div>
`;
  return categoryParent
}
const printProductos = (nombre, precio, imgUrl, id, categoria) => {
  const anhadirLinea = document.createElement("div");
  anhadirLinea.classList.add("producto__target");
  const contenido = `
    <img class="producto__target__img" src="${imgUrl}" alt="">
    <p class="producto__target__name">${nombre}</p>
    <p class="producto__target__precio">COP/ ${precio}</p>
    <a class="producto__target__ver" href="html/producto.html?id=${id}">Ver Producto</a>
    <p class="producto__target__category">${categoria}<p>
  `;
  anhadirLinea.innerHTML = contenido;
  return anhadirLinea;
};

let category = [
  "Funko",
  "Juegos",
  "Accesorios",
  "Gadgets",
  "Comics",
  "Personalizados",
  "Otros",
];

const printPosition = (position) => {
  const categoryPosition = document.getElementsByClassName("category__position")[position]
  const btnShow = document.getElementsByClassName("btn__category__show")[position]
  const btnHide = document.getElementsByClassName("btn__category__hide")[position]

  btnShow.addEventListener(("click"), () => {
    categoryPosition.classList.remove("category__height");
    btnHide.classList.remove("btn__ocultar");
    btnShow.classList.add("btn__ocultar");
  })
  btnHide.addEventListener(("click"), () => {
    categoryPosition.classList.add("category__height")
    btnShow.classList.remove("btn__ocultar")
    btnHide.classList.add("btn__ocultar")
  })
}

(() => {
  for (let i = 0; i < category.length; i++){
    if (category[i]) {
      $printProductos.appendChild(printCategory(category[i]))
    }
  }
})()
const categorySubContain = document.getElementsByClassName("category__position")

datosProductos.listaProductos().then((data) => {
  data.forEach(({ categoria, nombre, precio, imgUrl, id }) => {
    const nuevaLinea = printProductos(nombre, precio, imgUrl, id, categoria);
    const mostrar = document.getElementsByClassName("category_items")

    for (let i = 0; i < category.length; i++){
      if (category[i] === categoria) {
        mostrar[i].classList.remove("filtro")
        categorySubContain[i].appendChild(nuevaLinea)
        printPosition(i)
      }
    }
  })
}).catch((error) => Swal.fire({
  title: "<span class='alertTitle'>UPS</span>",
  html: "<span class='alerttext'>Ocurrió un error al conectar con el Servidor</span>",
  icon: "error",
  iconColor: "#fd1f4a",
  background: "#2d2c2e",
  timer: 3000,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: false,
  showConfirmButton: false,
}));
