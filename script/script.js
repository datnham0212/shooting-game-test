$(document).ready(function() {

    function playGunShot(){
        var gunshot = new Audio('sfx/laser.mp3');
        gunshot.play();
    }
    $(document).click(playGunShot);

    function shotCount(){
        var score = parseInt($('.score').text())
        $('.score').text(score + 100);
    }

    function bouncing(single_target){
        var maxWidth = $('.container').width() - $(single_target).width();
        var maxHeight = $('.container').height() - $(single_target).height();

        var newLeft = maxWidth * Math.random();
        var newTop = maxHeight * Math.random();

        $(single_target).animate({left: newLeft, top: newTop}, 1000, function() {bouncing(single_target);}
        );
    }

    $('.target').each(function() {
        bouncing(this);
        $(this).on('click', shotCount);
    });

});