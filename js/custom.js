//$(document).ready(function(){
//    $(document).on('click','.investors_tabs a', function(){
//        $('.investors_tabs a').removeClass('actv_btnnn');
//        $(this).addClass('actv_btnnn');
//    });
//});


$(document).ready(function () {
    $('.payDtl').hide();
    $('.payDtl1').show();
     $('.payDtl2').show();
    $('.clicktab').click(function () {
        var type = $(this).data('type');
        $('.payDtl').hide();
        $('.payDtl' + type).fadeIn();
        $('.clicktab').removeClass('active');
        $(this).addClass('active');
    });
});



$(document).ready(function () {
var id = 1;
setInterval(function(){
    if(id == 6){
id = 0;
}
if(id <= 5){
stepByStep(id);
}
id++;
}, 5000);

function stepByStep(id){
$(".yearAll a").removeClass('fontClass');
$(".companyCreat").hide();
$("a.circle").removeClass("shadowAll");
$(".circle"+id).addClass("shadowAll");
$(".yearAll a:nth-child("+id+")").addClass('fontClass');

$(".companyCreat"+id).show();
     if(id == 0){
         $(".yearAll a:nth-child(1)").addClass('fontClass');
         $(".companyCreat1").show();
         $(".circle1").addClass("shadowAll");
         $(".line2").animate({
            width: '0%'
            }, 10);
                // $('.line2').css('width', '13%');
            }
if(id == 1){
$(".line2").animate({
width: '25%'
}, 5000);
// $('.line2').css('width', '13%');
}else if (id == "2"){
$(".line2").animate({
width: '50%'
}, 5000);
// $('.line2').css('width', '39%');
}else if (id == "3"){
$(".line2").animate({
width: '75%'
}, 5000);
// $('.line2').css('width', '64%');
}else if (id == "4"){
$(".line2").animate({
width: '100%'
}, 5000);
// $('.line2').css('width', '88%');
}else if (id == "5"){
$(".line2").animate({
width: '100%'
}, 5000);
// $('.line2').css('width', '100%');
}
}

//$(document).on('click', 'a.circle', function () {
//id = $(this).data('id');
//stepByStep(id);
//});
});
//cultre page

$(document).ready(function() {
    $('.slickslide').
    on('init', () => {
        $('.slickslide .slick-slide[data-slick-index="-2"]').addClass('lt2');
        $('.slickslide .slick-slide[data-slick-index="-1"]').addClass('lt1');
        $('.slickslide .slick-slide[data-slick-index="1"]').addClass('gt1');
        $('.slickslide .slick-slide[data-slick-index="2"]').addClass('gt2');
    }).
    slick({
        centerMode: true,
          dots: true,
        centerPadding: 0,
        slidesToShow: 3
    }).
    on('beforeChange', (event, slick, current, next) => {
        $('.slickslide .slick-slide.gt2').removeClass('gt2');
        $('.slickslide .slick-slide.gt1').removeClass('gt1');
        $('.slickslide .slick-slide.lt1').removeClass('lt1');
        $('.slickslide .slick-slide.lt2').removeClass('lt2');

        const lt2 = current < next && current > 0 ? current - 1 : next - 2;
        const lt1 = current < next && current > 0 ? current : next - 1;
        const gt1 = current < next || next === 0 ? next + 1 : current;
        const gt2 = current < next || next === 0 ? next + 2 : current + 1;

        $(`.slickslide .slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
        $(`.slickslide .slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
        $(`.slickslide .slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
        $(`.slickslide .slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');

        // Clone processing when moving from 5 to 0
        if (current === 5 && next === 0) {
            $(`.slickslide .slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
            $(`.slickslide .slick-slide[data-slick-index="${current}"]`).addClass('lt1');
            $(`.slickslide .slick-slide[data-slick-index="${current + 2}"]`).addClass('gt1');
            $(`.slickslide .slick-slide[data-slick-index="${current + 3}"]`).addClass('gt2');
        }

        // Clone processing when moving from 0 to 5
        if (current === 0 && next === 5) {
            $(`.slickslide .slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
            $(`.slickslide .slick-slide[data-slick-index="${current}"]`).addClass('gt1');
            $(`.slickslide .slick-slide[data-slick-index="${current - 2}"]`).addClass('lt1');
            $(`.slickslide .slick-slide[data-slick-index="${current - 3}"]`).addClass('lt2');
        }

        console.log('beforeChange', current, ':', lt2, lt1, next, gt1, gt2);
    });
});


$(document).ready(function() {
    $('.slickslide').
    on('init', () => {
        $('.slickslide .slick-slide[data-slick-index="-2"]').addClass('lt2');
        $('.slickslide .slick-slide[data-slick-index="-1"]').addClass('lt1');
        $('.slickslide .slick-slide[data-slick-index="1"]').addClass('gt1');
        $('.slickslide .slick-slide[data-slick-index="2"]').addClass('gt2');
    }).
    slick({
        centerMode: true,
        //       arrows: false,
        dots:true,
        centerPadding: 0,
        slidesToShow: 3
    }).
    on('beforeChange', (event, slick, current, next) => {
        $('.slickslide .slick-slide.gt2').removeClass('gt2');
        $('.slickslide .slick-slide.gt1').removeClass('gt1');
        $('.slickslide .slick-slide.lt1').removeClass('lt1');
        $('.slickslide .slick-slide.lt2').removeClass('lt2');

        const lt2 = current < next && current > 0 ? current - 1 : next - 2;
        const lt1 = current < next && current > 0 ? current : next - 1;
        const gt1 = current < next || next === 0 ? next + 1 : current;
        const gt2 = current < next || next === 0 ? next + 2 : current + 1;

        $(`.slickslide .slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
        $(`.slickslide .slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
        $(`.slickslide .slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
        $(`.slickslide .slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');

        // Clone processing when moving from 5 to 0
        if (current === 5 && next === 0) {
            $(`.slickslide .slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
            $(`.slickslide .slick-slide[data-slick-index="${current}"]`).addClass('lt1');
            $(`.slickslide .slick-slide[data-slick-index="${current + 2}"]`).addClass('gt1');
            $(`.slickslide .slick-slide[data-slick-index="${current + 3}"]`).addClass('gt2');
        }

        // Clone processing when moving from 0 to 5
        if (current === 0 && next === 5) {
            $(`.slickslide .slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
            $(`.slickslide .slick-slide[data-slick-index="${current}"]`).addClass('gt1');
            $(`.slickslide .slick-slide[data-slick-index="${current - 2}"]`).addClass('lt1');
            $(`.slickslide .slick-slide[data-slick-index="${current - 3}"]`).addClass('lt2');
        }

        console.log('beforeChange', current, ':', lt2, lt1, next, gt1, gt2);
    });
});


//culture page END

// Fixed Header Start

$(window).scroll(function() {

    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixedHeader');
    } else {
        $('.header').removeClass('fixedHeader');
    }
});

// Fixed Header End

// Sidebar Start

$('.navbar-toggler').click(function() {
    if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
        $('.navbar-expand-md .navbar-collapse').css('left', '-250px');
    } else {
        $('.navbar-expand-md .navbar-collapse').css('left', '0px');
    }
});

// Sidebar End

// Navbar Button Style Start

$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    });
});

// Navbar Button Style End

//   Trusted By Slider Start

$('.myslider').slick({
    dots: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: false,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 561,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 415,
            settings: {
                dots: true,
                slidesToShow: 1
            }
        }
    ]
});


    $('.myslidernew').slick({
    dots: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: false,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 561,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 415,
            settings: {
                dots: true,
                slidesToShow: 1
            }
        }
    ]
});



//   Trusted By Slider End


// Custom Select box 

$(document).ready(function() {
    if ($(window).width() <= 767) {
        $('.depSection').click(function() {
            if ($(this).hasClass('show')) {
                $(this).parents('.depDetails').find('.depInner').slideUp();
                $(this).removeClass('show');
            } else {
                $('.depSection').removeClass('show');
                $(this).addClass('show');
                $('.depInner').slideUp();
                $(this).parents('.depDetails').find('.depInner').slideDown();
            }
        });
    }
});

// Custom Select box 

$(document).ready(function() {
    if ($(window).width() <= 767) {
        $('.depInner li').click(function() {
            var elm = $(this).text();
            var elm2 = $(this).parents('.depDetails').find('li.depSection').text(elm);
            $(this).parents('.depDetails').find('li.depSection').removeClass('show');
            $(this).parents('.depInner').slideUp();
        });
    }
});


// career Page Tabs Function

$(document).ready(function() {
    // $('.depList').hide();
    $('.depList').show();
    $('.clickThis').click(function() {
        var type = $(this).data('type');
        $('.depList').hide();
        $('.depList' + type).fadeIn();
        $('.clickThis').removeClass('active');
        $(this).addClass('active');
    });
});

// career Page Tabs Function

$(document).ready(function() {
    if ($(window).width() <= 767) {
        $(document).on("click", function(event) {
            var $trigger = $(".departmentFilter");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                $(".depInner").slideUp("fast");
                $('.depDetails ul li.depSection').removeClass('show');
            }
        });
    }
});



$('.prolftSlick').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [{
        breakpoint: 991,
        settings: {
            arrows: false,
            dots: true,
        }
    }]
});


AOS.init({
    duration: 1000
});
/////////About page//


