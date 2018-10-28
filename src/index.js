new WOW().init();

let progress1 = $('#progess1');
let width = 0;
let timer = setInterval(function(){
    if (width >= 100) {
        width = 0;
    }
    if (width < 25) {
        progress1.removeClass('bg-danger');
        progress1.addClass('bg-dark');
    } else if (width < 50) {
        progress1.removeClass('bg-dark');
        progress1.addClass('bg-success');
    } else if (width < 75) {
        progress1.removeClass('bg-success');
        progress1.addClass('bg-warning');
    } else {
        progress1.removeClass('bg-warning');
        progress1.addClass('bg-danger');
    }
    width++;
    progress1.width(width + '%');
    progress1.text(`${width}-运营研究社ing...`);
}, 100);

$('.card').addClass('wow fadeInUp');
$('.card').attr('data-wow-duration', '2.5s');
$('p').addClass('wow fadeInLeft');
$('h4').addClass('wow fadeInRight');
$('.list-group').children().addClass('wow fadeInUp');
