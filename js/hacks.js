$(window).scroll(function(){
    parallax();
})

function parallax() {
    var wScroll = $(window).scrollTop();
    console.log(wScroll);


    $('.parallax--bg').css('background-position',
        'center ' + (wScroll * 0.5) + 'px')


    $('.new-parallax-1').css('background-position',
        'center '+ [(wScroll * 0.1) - 45] + 'px'
    )

    $('.new-parallax-2').css('background-position',
        'center '+ [(wScroll * 0.1) - 500] + 'px'
    )

    $('.new-parallax-3').css('background-position',
        'center '+ [(wScroll * 0.1) - 500] + 'px'
    )

    $('.new-parallax-4').css('background-position',
        'center '+ [(wScroll * 0.1) - 650] + 'px'
    )

}


