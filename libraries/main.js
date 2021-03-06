
// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Ronit Singh"],
    typeSpeed: 60,
    backSpeed: 100,
    loop: true
});

$(window).scroll(function () {

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
        $('.scroll-up-btn').addClass("show");
    } else {
        $('.scroll-up-btn').removeClass("show");
    }
});

// slide-up script
$('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

$('.navbar ul li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

document.getElementById("formSubmit").addEventListener("click", function (event) {
    event.preventDefault()
});
