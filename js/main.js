$(function () {
    "use strict";


    /* ==========================================================================
   countdown
   ========================================================================== */

    $('.countdown').downCount({
        date: '09/15/2015 12:00:00' // m/d/y
    });


    /* ==========================================================================
   lightbox
   ========================================================================== */


    $('.venobox').venobox();


    /* ==========================================================================
   wow.js   
   ========================================================================== */


    new WOW().init();


    /* ==========================================================================
   fade  
   ========================================================================== */

    $('.hero-section').hide().fadeIn(2000);


    /* ==========================================================================
   Form   
   ========================================================================== */


    var $form = $('#mc-form');

    $('#mc-subscribe').on('click', function (event) {
        if (event) event.preventDefault();
        register($form);
    });


    function register($form) {
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            cache: false,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            error: function (err) {
                $('#mc-notification').hide().html('<span class="alert">Could not connect to server. Please try again later.</span>').fadeIn("slow");
            },
            success: function (data) {

                if (data.result != "success") {
                    var message = data.msg.substring(4);
                    $('#mc-notification').hide().html('<span class="alert">' + message + '</span>').fadeIn("slow");
                    
                } else {
                    var message = data.msg.substring(4);
                    $('#mc-notification').hide().html('<span class="success">' + 'با تشکر  یک ایمیل تایید برای شما ارسال شد' + '</span>').fadeIn("slow");
                    
                }
            }
        });
    }




});