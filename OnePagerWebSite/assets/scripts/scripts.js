// $(document).ready(function(){
//     initNavigation();
    
//     $('.slides-container').slick({
//         arrows: true,
//         dots: true,
//         autoplay: true
//     });
// })


// function initNavigation(){
//     var navToggle = $('.nav-icon');
//     var mainNav = $('.main-nav');
//     var accordionToggle = $('.accordion-toggle');
//     var anchorLinks = $('.anchor-link');

//     navToggle.click(function(){
//         $(this).toggleClass('active');
//         mainNav.toggleClass('active');
//     })

//     accordionToggle.click(function(){
//         $(this).toggleClass('active');
//         $(this).parent().find('.accordion-content').toggleClass('active');
//     })

//     anchorLinks.click(function(e){
//         e.preventDefault();
//         var anchorId = $(this).attr('href');
//         var targetElement = $(anchorId);
//         var animationDuration = 1000;
        
//         $('html, body').animate({
//             scrollTop: parseInt(targetElement.offset().top)
//         }, animationDuration, 'swing');
//     })

//     $('.back-to-top, .logo-link').click(function(e){
//         e.preventDefault();
//         var animationDuration = 1000;

//         $('html, body').animate({
//             scrollTop: 0
//         }, animationDuration, 'swing');
//     })

//     $(document).scroll(function(){
//         var currentScroll = $(document).scrollTop();

//         var scrollItems = anchorLinks.map(function(){
//             var item = $($(this).attr('href'));
//             if(item.length) {
//                 return item;
//             }
//         })

//         var currentLink = scrollItems.map(function(){
//             if(parseInt($(this).offset().top) <= currentScroll) {
//                 return this;
//             }
//         })

//         currentLink = currentLink[currentLink.length - 1];
//         var id = currentLink && currentLink.length ? currentLink[0].id : "";

//         anchorLinks.filter("[href!='#"+id+"']").removeClass('active');
//         navToggle.removeClass('active');
//         mainNav.removeClass('active');
//         anchorLinks.filter("[href='#"+id+"']").addClass('active');
//     })
// }

$(document).ready(function() {
    initNavigation();

    $('.slides-container').slick({
        arrows: true,
        dots: true,
        autoplay: true
    })
})
function initNavigation() {
    //declaration and init of variables
    var navToggle = $('.nav-icon');
    var mainNav = $('.main-nav');
    var accordianToggle = $('.accordian-toggle');
    var anchorLinks = $('.anchor-link');


    navToggle.click(function() {
        $(this).toggleClass('active');
        mainNav.toggleClass('active');
    })

    accordianToggle.click(function() {
        $(this).toggleClass('active');
        $(this).parent().find('.accordian-content').toggleClass('active');
    })

    anchorLinks.click(function(e) {
        e.preventDefault();
        var anchorId = $(this).attr('href');
        var targetElement = $(anchorId);
        var animationDuration = 1000;

        $('html, body').animate({
            scrollTop: parseInt(targetElement.offset().top)
        }, animationDuration, 'swing');
    })
    $('.back-to-top, .logo-link').click(function(e) {
        e.preventDefault();
        var animationDuration = 1000;

        $('html, body').animate({
            scrollTop: 0
        }, animationDuration, 'swing');
        
    })

    $(document).scroll(function() {
        var currentScroll = $(document).scrollTop();

        var scrollItems = anchorLinks.map(function() {
            var item = $($(this).attr('href'));

            if(item.length) {
                return item;
            }
        })

        var currentLink = scrollItems.map(function(){
            if(parseInt($(this).offset().top) <= currentScroll) {
                return this;
            }
        })

        currentLink = currentLink[currentLink.length -1];
        var id = currentLink && currentLink.length ? currentLink[0].id :"";

        anchorLinks.filter("[href! = '#"+id+"']").removeClass('active');
        navToggle.removeClass('active');
        mainNav.removeClass('active');
        anchorLinks.filter("[href! = '#"+id+"']").addClass('active');
    })
}
