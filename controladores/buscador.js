document.addEventListener("keyup", (e) => {
    if (e.target.matches("[data-buscador]")) {
        if (e.key === "Escape") e.target.value = ""
        document.querySelectorAll(".producto__target").forEach((product) => 
            product.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                ? product.classList.remove("filtro")
                : product.classList.add("filtro")
        );
    }
}); 