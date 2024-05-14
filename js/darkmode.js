const $darkmode = document.getElementById("button__darkmode");





$darkmode.addEventListener('click', () => {
    if ($darkmode.classList.contains('on')) {
        $darkmode.classList.remove('on');
        document.body.classList.remove('dark');
    } else {
        $darkmode.classList.add('on');
        document.body.classList.add('dark');
    }
});