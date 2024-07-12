(() => {
    const $accessRegistro = document.getElementById("accessRegistro");
    const $accessIngreso = document.getElementById("accessIngreso");
    const $accessAdmin = document.getElementById("accessAdmin");
    const $formularioRegistro = document.getElementById("formularioRegistro");
    const $formularioIngreso = document.getElementById("formularioIngreso");
    const $formularioAdmin = document.getElementById("formularioAdmin");
    const rootStyles = document.documentElement.style;

    const $buttonAccessAdmin = document.querySelector("[data-buttonAccessAdmin ]");
    const $buttonAccessUser = document.querySelector("[data-buttonAccessUser]");
    const $buttonRegisterUser = document.querySelector("[data-buttonRegisterUser]");
    const $buttonChangePassword = document.querySelector("[data-buttonChangePassword]");

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

    $buttonAccessUser.addEventListener('click', (event) => {
        event.preventDefault();
        newAlert();
    });
    $buttonChangePassword.addEventListener('click', (event) => {
        event.preventDefault();
        newAlert();
    });
    $buttonRegisterUser.addEventListener('click', (event) => {
        event.preventDefault();
        newAlert();
    });
    $buttonAccessAdmin.addEventListener('click', (event) => {
        event.preventDefault();
        const $inputUserAdmin = document.querySelector("[data-inputUserAdmin]").value;
        const $inputPassAdmin = document.querySelector("[data-inputPassAdmin]").value;

        if ($inputUserAdmin === "@dllanosr" && $inputPassAdmin === "admin123") {
            (async () => {
                await Swal.fire({
                    title: "<span class='alertTitle'>Bienvenido</span>",
                    icon: "success",
                    iconColor: "#4CE66D",
                    background: "#2d2c2e",
                    timer: 1500,
                    showConfirmButton: false,
                });
                if (true) {
                    window.location.href = "inicio_admin.html"
                }
            })()
        } else {
            newAlert()
        }
    });

    $accessIngreso.addEventListener('click', () => {
        rootStyles.setProperty("--background-login", "url(../imagenes/wallpaper.jpg) fixed center");
        if ($accessRegistro.classList.contains("input__mode")) {
            $accessRegistro.classList.remove("input__mode");
            $accessIngreso.classList.add("input__mode");
            $formularioRegistro.classList.remove("input__mode");
            $formularioIngreso.classList.add("input__mode");
        } else {
            $accessAdmin.classList.remove("input__mode");
            $accessIngreso.classList.add("input__mode");
            $formularioAdmin.classList.remove("input__mode");
            $formularioIngreso.classList.add("input__mode");
        }
    });
    $accessRegistro.addEventListener('click', () => {
        rootStyles.setProperty("--background-login", "url(../imagenes/wallpaper3.jpg) fixed center");
        if ($accessIngreso.classList.contains("input__mode")) {
            $accessIngreso.classList.remove("input__mode");
            $accessRegistro.classList.add("input__mode");
            $formularioIngreso.classList.remove("input__mode");
            $formularioRegistro.classList.add("input__mode");
        } else {
            $accessAdmin.classList.remove("input__mode");
            $accessRegistro.classList.add("input__mode");
            $formularioAdmin.classList.remove("input__mode");
            $formularioRegistro.classList.add("input__mode");
        }
    });
    $accessAdmin.addEventListener('click', () => {
        rootStyles.setProperty("--background-login", "url(../imagenes/wallpaper1.jpg) fixed center");
        if ($accessRegistro.classList.contains("input__mode")) {
            $accessRegistro.classList.remove("input__mode");
            $accessAdmin.classList.add("input__mode");
            $formularioRegistro.classList.remove("input__mode");
            $formularioAdmin.classList.add("input__mode");
        } else {
            $accessIngreso.classList.remove("input__mode");
            $accessAdmin.classList.add("input__mode");
            $formularioIngreso.classList.remove("input__mode");
            $formularioAdmin.classList.add("input__mode");
        }
    });
})()
