$(function () {

    let bizarro = $('#bizarros').offset().top,
        servicio = $('#servicio').offset().top,
        galeria = $('#galeria').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function () {
        let bizarro = $('#bizarros').offset().top,
            servicio = $('#servicio').offset().top,
            galeria = $('#galeria').offset().top,
            contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#enlace-bizarros').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: bizarro - 120
        }, 600);
    });

    $('#enlace-servicio').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio - 130
        }, 600);
    });

    $('#enlace-galeria').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria - 120
        }, 600);
    });

    $('#enlace-contacto').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto - 120
        }, 600);
    });

    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.galery-card').show('1000');
        } else {
            $('.galery-card').not('.' + valor).hide('1000');
            $('.galery-card').filter('.' + valor).show('1000');
        }
    });
});