$(document).ready(function() {
    $('.moveTestimonials').Slider('.dot', {
        width: 500
    });
    $('.teamMove').Slider('.dotMedia', {
        width: 1200
    });
});
//navigator
$(document).ready(function() {
    $('.myNavbar').Navigate();
    $('.myNavbar1').Navigate();
});
//accordion
$(document).ready(function() {
        $(".accordion").Accordion();
        $(".accordion1").Accordion();
    })
    //progress
$(document).scroll(function() {
    if (window.pageYOffset > 200) {
        $('.number').Progress('.count', 35, 1)
        $('.number').Progress('.count1', 3352, 1)
        $('.number').Progress('.count2', 55, 1)
        $('.number').Progress('.count3', 98, 1)
        $('.progressName').Progress('.count4', 50, 5);
        $('.progressName').Progress('.count5', 20, 5);
        $('.progressName').Progress('.count6', 87, 5);
        $('.progressName').Progress('.count7', 37, 5);
    };

});
//Skill bar don't use in future
$(document).scroll(function() {
    if (window.pageYOffset > 400) {
        $().skillBar(50, '.progressFirst')
        $().skillBar(20, '.progressSecond')
        $().skillBar(87, '.progressThird')
        $().skillBar(37, '.progressFourth')
    }

})