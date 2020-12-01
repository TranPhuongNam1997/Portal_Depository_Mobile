$( document ).ready(function() {

    $('.swiper-play').click(function () {
        $(this).toggleClass('active');

    });


    //js menubar
    // $(".menuchild").hide();
    // $(".has-dropdown.active .menuchild").show();
    // $("header.active .has-dropdown.active .menuchild").hide();
    // $(".has-dropdown").click(function(){
    //     $(".has-dropdown").removeClass('rotate-down');
    //
    //     $(".menuchild").slideUp();
    //     if(!$(this).children(".menuchild").is(":visible"))
    //     {
    //         $(this).children(".menuchild").slideDown();
    //         $(this).addClass('rotate-down');
    //     }
    // });





    //js tinh vi tri menu con
    // $('header.active .menu-parent > li').off('mouseover').on('mouseover', function () {
    //     //     var _windowScroll = $(window).scrollTop();
    //     //
    //     //     // tinh vị trí của của menu-parent > li
    //     //     var _offset = $(this).offset();
    //     //     $('.menuchild', $(this)).css({"display":"block", "top": (_offset.top - _windowScroll) + "px", "left": _offset.left + "px" })
    //     // }).off('mouseout').on('mouseout', function () {
    //     //     $('.menuchild', $(this)).css({ "top": "-1000px", "left": "-1000px","display":"none" })
    //     // });
    //     //
    //     //
    //     //
    //     // $('.icon-close-ip').click(function () {
    //     //     $('.text-null').val("");
    //     // });
    //     //
    //     // // expand narrow header
    //     // $('.btn-narrow').click(function () {
    //     //     $(this).toggleClass('active');
    //     //     $('header').addClass('active');
    //     //     $('main').addClass('active');
    //     //
    //     //
    //     //
    //     //     //js tinh vi tri menu con
    //     //     $('header.active .menu-parent > li').off('mouseover').on('mouseover', function () {
    //     //         var _windowScroll = $(window).scrollTop();
    //     //
    //     //         // tinh vị trí của của menu-parent > li
    //     //         var _offset = $(this).offset();
    //     //         $('.menuchild', $(this)).css({"display":"block", "top": (_offset.top - _windowScroll) + "px", "left": _offset.left + "px" })
    //     //     }).off('mouseout').on('mouseout', function () {
    //     //         $('.menuchild', $(this)).css({ "top": "-1000px", "left": "-1000px","display":"none" })
    //     //     });
    //     //     $(this).hide();
    //     //     $('.btn-expand').show();
    //     // });
    //     // $('.btn-expand').hide();
    //     // $('.btn-expand').click(function () {
    //     //     $('header.active .menu-parent > li').off('mouseover').on('mouseover', function () {
    //     //         return false;
    //     //     }).off('mouseout').on('mouseout', function () {
    //     //         return false;
    //     //     });
    //     //     $(this).hide();
    //     //     $('.btn-narrow').show();
    //     //     $('header').removeClass('active');
    //     //     $('main').removeClass('active');
    //     // });
    //js input file

    $('input[type="file"]').each(function() {
        // get label text
        var label = $(this).parents('.form-group').find('label').text();
        label = (label) ? label : 'Upload File';

        // wrap the file input
        $(this).wrap('<div class="input-file"></div>');
        // display label
        $(this).before('<span class="btn">'+label+'</span>');
        // we will display selected file here
        $(this).before('<span class="file-selected"></span>');

        // file input change listener
        $(this).change(function(e){
            // Get this file input value
            var val = $(this).val();

            // Let's only show filename.
            // By default file input value is a fullpath, something like
            // C:\fakepath\Nuriootpa1.jpg depending on your browser.
            var filename = val.replace(/^.*[\\\/]/, '');

            // Display the filename
            $(this).siblings('.file-selected').text(filename);
        });
    });

    // Open the file browser when our custom button is clicked.
    $('.input-file .btn').click(function() {
        $(this).siblings('input[type="file"]').trigger('click');
    });

    $('.box-search input').focus(function() {
        $(this).addClass('active');
    });








    //nut scroll top

    $("#back-to-top").click(function () {
        $("html, body").animate({scrollTop : 0},"slow");
        return false;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >=300) {
            $('#back-to-top').show();
        }
        if ($(window).scrollTop() >=100) {
            $('.header >.head-top').addClass('active');

            $('.btn-search.img-light').click(function () {
                // $('.header >.head-top').removeClass('active').removeClass('active-search');
                // $('.block-search-mb').slideUp();
                if(resuit == false){
                    $('.header >.head-top').addClass('active');
                }
            });

        }
        if ($(window).scrollTop() < 100) {
            $('.header >.head-top').removeClass('active');

            $('.btn-search.img-light').click(function () {
                $('.header >.head-top').removeClass('active').removeClass('active-search');
                $('.block-search-mb').slideUp();

            });

        }


        else {
            $('#back-to-top').hide();
            // $('.head-top').removeClass('active');
        }

    });
    $('.box-search').focus(function () {
        $(this).addClass('active');
    });
    var resuit = $('.header >.head-top').hasClass('active');

    var resuit1 = $('.header >.head-top').hasClass('active-search');




    // $('.btn-search').click(function () {
    //     $('.header >.head-top').addClass('active');
    //
    //     if(resuit == false){
    //         // alert('asdad')
    //     }
    //     $('.header >.head-top').toggleClass('active-search');
    //
    //     $('.block-search-mb').toggle();
    //
    //     $('.btn-search').toggleClass('active');
    //     if(resuit1 == true){
    //         $('.btn-search').click(function () {
    //             $('.header >.head-top').removeClass('active');
    //         });
    //     }
    // });

    $('.btn-search.search-dark').click(function () {
        $('.header >.head-top').addClass('active').addClass('active-search');
        $('.block-search-mb').slideDown(200);
    });
    $('.btn-search.img-light').click(function () {
        $('.header >.head-top').removeClass('active').removeClass('active-search');
        $('.block-search-mb').slideUp(200);
        // if(resuit == false){
        //     $('.header >.head-top').addClass('active');
        // }
    });
    $('.btn-search.img-dark').click(function () {
        $('.header >.head-top').addClass('active').addClass('active-search');
        $('.block-search-mb').slideDown(200);
    });







    $('.show-menu').click(function () {

        $('.navigation').addClass('active');
    });
    $('.navigation .show-menu').click(function () {

        $('.navigation').removeClass('active');
    });



    $(".menu-child").hide();

    // $(".has-dropdown.active .menuchild").show();
    // $("header.active .has-dropdown.active .menuchild").hide();

    $(".navigation nav > ul > li .menu-top").click(function(){
        $(".navigation nav > ul > li .menu-top").removeClass('rotate-down');
        $(".menu-child").slideUp();
        if(!$(this).next(".menu-child").is(":visible"))
        {
            $(this).next(".menu-child").slideDown();
            $(this).addClass('rotate-down');
        }
    });






    // custom datepicker
 //
 //    jQuery('.datepicker-vsd').datetimepicker({
 //        timepicker:false,
 //        format: 'd/m/Y'
 //    });
 //    jQuery('.datetimepicker-vsd').datetimepicker({
 //        format: 'd/m/Y H:m'
 //    });
 //    $.datetimepicker.setLocale('vi');
 //
 //    $('input[name="daterange"]').daterangepicker({
 //        opens: 'left',
 //        "autoApply": true
 //    },
 // function(start, end, label) {
 //        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
 //    });


});

$(document).click(function (event) {
    // Check if clicked outside target
    if (!($(event.target).closest(".box-search").length)) {
        // Hide target
        $(".box-search input").removeClass('active');
    }

    if (!($(event.target).closest(".header >.head-top").length)) {
        // Hide target
        // $('.head-top').removeClass('active');

        var resuit = $('.header >.head-top').hasClass('active');
        $('.block-search-mb').slideUp(200);
        $('.btn-search').removeClass('active');

        $('.header >.head-top').removeClass('active').removeClass('active-search');
        //

    }

    if ($(window).scrollTop() >=100) {
        var resuit = $('.header >.head-top').hasClass('active');
        if(resuit == false){
            if (!($(event.target).closest(".header >.head-top").length)) {
                $('.header >.head-top').addClass('active');
            }
        }

    }

});