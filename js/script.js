(() => {
    const $buttonNavegacion = document.getElementById("button__navegacion");
    const $barraNavegacion = document.getElementById("container__navegacion");
    const $container = document.querySelector(".container");
    const $menuAutomatico = document.querySelectorAll('.lista__navegacion a[href^="#"]');
    const $darkmode = document.getElementById("button__darkmode");
    const $footer = document.getElementById("footer");

    $buttonNavegacion.addEventListener('click', () => {
        if ($barraNavegacion.classList.contains('active')) {
            $barraNavegacion.classList.remove('active');
            $buttonNavegacion.classList.remove('active');
            $container.classList.remove('reduce');
            $footer.classList.remove('reduce');
        } else {
            $barraNavegacion.classList.add('active');
            $buttonNavegacion.classList.add('active');
            $container.classList.add('reduce');
            $footer.classList.add('reduce');
        }
    });

    $darkmode.addEventListener('click', () => {
        if ($darkmode.classList.contains('on')) {
            $darkmode.classList.remove('on');
            document.body.classList.remove('dark');
        } else {
            $darkmode.classList.add('on');
            document.body.classList.add('dark');
        }
    });
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute("id");
                const menuLink = document.querySelector(`.lista__navegacion a[href="#${id}"]`);
                if (entry.isIntersecting) {
                    document.querySelector(".lista__navegacion a.select").classList.remove("select");
                    menuLink.classList.add("select");
                }
            })
        },
        { rootMargin: "-30% 0px -70% 0px" }
    );

    $menuAutomatico.forEach(menuLink => {
        menuLink.addEventListener('click', () => {
            if ($barraNavegacion.classList.contains('active')) {
                $buttonNavegacion.classList.remove('active');
                $barraNavegacion.classList.remove('active');
                $container.classList.remove('reduce');
                $footer.classList.remove('reduce');
            };
        });
        const hash = menuLink.getAttribute("href");
        const target = document.querySelector(hash);
        if (target) {
            observer.observe(target);
        }
    });
})()
