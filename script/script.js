// var TxtType = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];

//     if (this.isDeleting) {
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

//     var that = this;
//     var delta = 200 - Math.random() * 100;

//     if (this.isDeleting) { delta /= 2; }

//     if (!this.isDeleting && this.txt === fullTxt) {
//         delta = this.period;
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         this.loopNum++;
//         delta = 500;
//     }

//     setTimeout(function() {
//         that.tick();
//     }, delta);
// };
// data_type = '[ "Gallery " ]';
// data_period = "2000"
// window.onload = function() {
//     var elements = document.getElementsByClassName('typewrite');
//     var toRotate = data_type;
//     var period = data_period;
//     new TxtType(elements[0], JSON.parse(toRotate), period);
//     var css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".typewrite > .wrap { border-right: 0.07em solid black}";
//     document.body.appendChild(css);
// };
/////////////////////////////////////////////////////////////////////////////////
let mainNavLinks = document.querySelectorAll("nav div ul li a");
let mainSections = document.querySelectorAll("main div");
let lastId;
let cur = [];
window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;
    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (section != null) {
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add("nav-active");
            } else {
                link.classList.remove("nav-active");
            }
        }
    });
    if ($('.dropdown-item').hasClass('nav-active')) {
        $('#navbarCollapse .navbar-nav .dropdown button').addClass('nav-active');
    } else {
        $('#navbarCollapse .navbar-nav .dropdown button').removeClass('nav-active');
    }
});
console.log($('#nat').hasClass('.nav-active'));

$(".dropdown, .btn-group").hover(function() {
    var dropdownMenu = $(this).children(".dropdown-menu");
    if (dropdownMenu.is(":visible")) {
        dropdownMenu.parent().toggleClass("open");
    }
});

// $('.navbar-custom button').click(function() {
//     console.log($('.navbar-custom .navbar-collapse').css('background'));
//     if ($('.navbar-collapse').css('background') == 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')
//         $('.navbar-collapse').css('background', '#2dcaa8')
//     else
//         $('.navbar-collapse').css('background', 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')

// });

$('.fa').prop('target', '_blank');
$('.card').hover(
    function() {
        $(this).children('.card-block').addClass('info');
        $(this).children('.card-img-top').css('opacity', '.25');
        // css({ 'opacity': '1' }, { 'position': 'absolute' }, { 'top': '0' }, { 'z-index': '1' });
    },
    function() {
        $(this).children('.card-block').removeClass('info');
        $(this).children('.card-img-top').css('opacity', '1');

    }
)