//dots appears
$(document).ready(function() {
    var img = ['img/head1.jpg', 'img/head2.jpg', 'img/head3.jpg']
    $('.dotHead').click(function() {
        y = $(this).index();
        $('.headBackImg').css('background-image', 'url(' + img[y] + ')');
        $('.dotHead').removeClass('active');
        $(this).addClass('active');
    })
});
//dots position
$.fn.Slider = function(dotName, setting = {}) {
        var self = $(this);
        $(document).ready(function() {
            var width = setting.width;
            $(dotName).click(function(e) {
                y = $(this).index();
                x = y * width;
                self.css('right', x + 'px');
                $(dotName).removeClass('active');
                $(this).addClass('active');
            })
        });
    }
    //responsive dots
$(function() {
    var dot = '<li class="dotMedia"></li>';
    var countPerson = $('.mediaPerson').length;
    var countDots = 3;
    var added = false;

    function checkSize() {
        if (!added && $(window).width() < 1000) {
            for (i = 0; i < (countPerson - countDots); i++) {
                $('.dotesMedia').append(dot);
            }
            added = true;

        }
    }
    $(window).resize(checkSize);
    checkSize();
});

//menu Icon
$(document).ready(function() {
    var action = 1;
    $('#menuIcon').on('click', menuIcon);

    function menuIcon() {
        if (action == 1) {
            $(this).css("left", "22%");
            $('.menuLine').css({ 'display': 'block', 'left': '0' });
            $('span i').removeClass('fa-bars').addClass('fa-times');
            action = 2;
        } else {
            $(this).css("left", "0");
            $('.menuLine').css({ 'left': '-25%', 'display': 'none' });
            $('span i').removeClass('fa-times').addClass('fa-bars');
            action = 1;
        }
        if (action == 2) {
            $('.main').click(function(e) {
                $('.menuLine').css('left', '-25%');
                $('#menuIcon').css("left", "0");
                $('span i').removeClass('fa-times').addClass('fa-bars');
                action = 1;
            });
        }
    }
});
//scrollUp
$(document).ready(function() {
    $(function() {
        $.scrollUp({
            scrollName: 'scrollUp',
            topDistance: '300',
            topSpeed: 300,
            animation: 'fade',
            animationInSpeed: 200,
            animationOutSpeed: 200,
            scrollText: '<i class="fa fa-angle-double-up" aria-hidden="true"></i>',
            activeOverlay: false,
        });
    });
});
//Navigator Page 
$.fn.Navigate = function() {
    var self = $(this)
    $(this).children().click(function(e) {
        var i = $(this).index();
        self.children().removeClass('active');
        $(this).toggleClass('active');
        self.parent().siblings('.text').children().removeClass('show').eq(i).addClass('show');
    });
};
//Accordion Page 
$.fn.Accordion = function() {
        var accordion = $(this);
        accordion.children(".accordion_topic").click(function() {
            $(this).find('i').toggleClass('fa-minus');
            $(this).find(".accord_content").slideToggle();
            $(this).siblings().find(".accord_content").slideUp().siblings().find('i').removeClass('fa-minus');
        })
    }
    //progress bar first line
var count = 0;

$.fn.Progress = function(countClass, endCount, speed) {

    function myCount(e) {

        count++;
        if (count > endCount) {

            clearInterval(myInterval);
            return false;
        }
        $(countClass).text(count);

    }
    var myInterval = setInterval(myCount, speed);

};
//skill BAr
$.fn.skillBar = function(count, whichWidth) {
        $(whichWidth).css({
            'width': count + '%',
            'transition': '1.8s all'
        })
    }
    //calendar menu table
$(document).ready(function() {
    $('.titleS ul li').click(function() {
        $('.titleS ul li').removeClass('active')
        $(this).toggleClass('active');
    });
});
//