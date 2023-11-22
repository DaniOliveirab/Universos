function aparecerMenu() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        document.querySelector(".icon").src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "img/close_white_36dp.svg";
    }
}
// Selecione os elementos "a" pelos IDs
var heartO = document.getElementById("heart-o");
var heart = document.getElementById("heart");

// Adicione um evento de clique ao ícone "fa fa-heart-o"
heartO.addEventListener("click", function () {
    // Alternar entre os ícones "fa fa-heart-o" e "fa fa-heart"
    heartO.style.display = "none";
    heart.style.display = "inline";
});

// Adicione um evento de clique ao ícone "fa fa-heart"
heart.addEventListener("click", function () {
    // Alternar entre os ícones "fa fa-heart" e "fa fa-heart-o"
    heart.style.display = "none";
    heartO.style.display = "inline";
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
});
function changeBg(bg, title){
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("img/${bg}"`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if(content.classList.contains(title)){
            content.classList.add('active');
        }
    });
}