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
$(document).ready(function() {
    $('.number').Progress('.count', 1)
    $('.number').Progress('.count1', 1)
    $('.number').Progress('.count2', 1)
    $('.number').Progress('.count3', 1)
    $('.progressName').Progress('.count4', 20);
    $('.progressName').Progress('.count5', 20);
    $('.progressName').Progress('.count6', 20);
    $('.progressName').Progress('.count7', 20);
});
//Skill bar don't use in future
$(document).ready(function() {
    $().skillBar('.count4', '.progressFirst')
    $().skillBar('.count5', '.progressSecond')
    $().skillBar('.count6', '.progressThird')
    $().skillBar('.count7', '.progressFourth')
})