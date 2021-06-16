(function() {
    //a partir de que punto del scroll vertical de la ventana mostrará el botón
    const ishow = 800
    const $divtop = document.getElementById("btn-home")
    window.addEventListener("scroll", function() {
        if(document.documentElement.scrollTop > ishow){
            $divtop.style.display = "inherit"
        }
        else {
            $divtop.style.display = "none"
        }
    })
})()