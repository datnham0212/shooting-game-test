$(document).ready(function() {

    function playGunShot(){
        var gunshot = new Audio('sfx/mouseclick.mp3');
        gunshot.play();
    }
    $(document).click(playGunShot);

    function shotCount(){
        var score = parseInt($('.score').text())
        $('.score').text(score + 100);
    }

    function spawning(){

        var number_of_targets = $('.target').length;

        if (number_of_targets < 5) {
            var single_target = $('<div class="target"></div>');
            $('.container').append(single_target);

            var maxWidth = $('.container').width() - $(single_target).width();
            var maxHeight = $('.container').height() - $(single_target).height();

            var newLeft = (maxWidth - 100) * Math.random();
            var newTop = (maxHeight -100) * Math.random();

            single_target.css({
                'left': newLeft + 'px',
                'top': newTop + 'px',
                'position': 'absolute'
            });

            single_target.on('click', function() {
                shotCount();
                $(this).remove();
            });
        }
    }
    setInterval(spawning, 600);
});