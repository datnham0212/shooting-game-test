$(document).ready(function() {

    function playGunShot(){
        var gunshot = new Audio('sfx/laser.mp3');
        gunshot.play();
    }
    $(document).click(playGunShot);

    function bouncing(){
        var maxWidth = $(window).width() - $('.target').width();
        var maxHeight = $(window).height() - $('.target').height();

        var newLeft = maxWidth * Math.random();
        var newTop = maxHeight * Math.random();

        $('.target').animate({left: newLeft, top: newTop}, 1500, function() {bouncing();}
        );
    }

    bouncing();
});