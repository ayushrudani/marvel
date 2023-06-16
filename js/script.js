var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

var moviecontauiner = document.getElementById("movies-container");
for (i = 1; i < 11; i++) {
    moviecontauiner.innerHTML += `<!-- Box-${i} -->
    <div class="box">
        <div class="box-img">
            <img src="./assets/img/m${i}.jpg" alt="">
        </div>
        <h3>Venom</h3>
        <span>120 min | Action</span>
    </div>`
}