(() => {
    const $closeSession = document.getElementById("closeSession");

    $closeSession.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.href = "../index.html"
    });
})()
