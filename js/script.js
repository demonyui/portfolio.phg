// ko lay code
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
    if (event.keyCode == 123) {
        event.preventDefault();
    }
});
document.addEventListener('contextmenu',
    event => event.preventDefault()
);
// fix menu
// document.addEventListener("DOMContentLoaded", function () {
//     window.addEventListener('scroll', function () {
//         if (window.scrollY > 50) {
//             document.getElementById('navbar_top').classList.add('fixed-top');
//             // add padding top to show content behind navbar
//             navbar_height = document.querySelector('.navbar').offsetHeight;
//             document.body.style.paddingTop = navbar_height + 'px';
//         } else {
//             document.getElementById('navbar_top').classList.remove('fixed-top');
//             // remove padding top from body
//             document.body.style.paddingTop = '0';
//         }
//     });
// });
// avatar about me
$(document).ready(function () {
    $('#ava1').addClass('animate__animated animate__fadeInRight');
    setTimeout(function () {
        $('#ava1').removeClass('animate__fadeInRight');
        $('#ava1').addClass('animate__shakeX animate__infinite');
        const element = document.querySelector('#ava1');
        element.style.setProperty('--animate-duration', '15s');
    }, 1000);
});
$(document).ready(function () {
    $('.about1a, .about1b').addClass('animate__animated animate__fadeInUp');
});
$(document).ready(function () {
    $('.content').addClass('animate__animated animate__fadeInUp');
});
// statement
$(document).ready(function () {
    $('.anhmilton').addClass('animate__animated animate__backInLeft');
    setTimeout(function () {
        $('.anhmilton').removeClass('animate__backInLeft');
        $('.anhmilton').addClass('animate__shakeX animate__infinite');
        const element = document.querySelector('.anhmilton');
        element.style.setProperty('--animate-duration', '15s');
    }, 1000);
});
$(document).ready(function () {
    $('.milton').addClass('animate__animated animate__fadeInUp animate__delay-1s');
});
$(document).ready(function () {
    $('.contenta').addClass('animate__animated animate__fadeInUp');
});
// skills
$(document).ready(function () {
    $('.load').addClass('animate__animated animate__rotateIn');
});
// projects
$(document).ready(function () {
    $('.projectbox').addClass('animate__animated animate__backInLeft');
});
// contact
$(document).ready(function () {
    $('.imagecontact').addClass('animate__animated animate__fadeInLeftBig');
});
$(document).ready(function () {
    $('.contactbox').addClass('animate__animated animate__backInUp animate__delay-1s');
});