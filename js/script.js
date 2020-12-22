$('.num_page').click(function(){
    $('.num_page').removeClass('.active')
    $('.num_page').css("background-color","transparent")
    $('.num_page p').css("color","#000")
    $(this).addClass('.active')
    $(this).css("background-color","red")
    $(this).find("p").css("color","#fff")
})


// mob mune nav



$('.burger_button').click(function(){
    if( !$('.burger_button').hasClass('active')){
        $('.burger_button').addClass('active')
        $('.burger_menu_content').fadeIn()
        $('.burger_content_mune').css("left","0")

    }else{
        $('.burger_button').removeClass('active')
        $('.burger_menu_content').fadeOut()
    }
})
$('.burger_button_close').click(function(){
    $('.burger_menu_content').fadeOut()
    $('.burger_button').removeClass('active')
    $('.burger_content_mune').css("left","-90%")
})

$('.button_mune_catalog').click(function(){
    $('.burger_content_mune').css({
        'left':'-90%',
        'transition':'.4s'
    })
})
$('.burger_back_to_menu').click(function(){
    $('.burger_content_mune').css({
        'left':'0',
        'transition':'.4s'
    })
})


// mob mune/



// mob filters


$('.mob_filters_button').click(function(){
    if( !$('.mob_filters_button').hasClass('active')){
        $('.mob_filters_button').addClass('active')
        $('.mob_filters_wrapper').fadeIn()
        

    }else{
        $('.mob_filters_button').removeClass('active')
        $('.mob_filters_wrapper').fadeOut()
    }
})

$('.btn_filters_close').click(function(){
    $('.mob_filters_button').removeClass('active')
    $('.mob_filters_wrapper').fadeOut()
})


$('.link_fil_brand').click(function(){
    $('.fil_brand_items').css({
        'right':'0',
        'transition':'.4s'
    })
})
$('.fil_brand_title').click(function(){
    $('.fil_brand_items').css({
        'right':'-100%',
        'transition':'.4s'
    })
    $('.fil_sourceType_items').css({
        'right':'-100%',
        'transition':'.4s'
    })
    $('.fil_power_items').css({
        'right':'-100%',
        'transition':'.4s'
    })
    $('.fil_temperature_items').css({
        'right':'-100%',
        'transition':'.4s'
    })
    $('.fil_protocol_items').css({
        'right':'-100%',
        'transition':'.4s'
    })
    $('.fil_management_items').css({
        'right':'-100%',
        'transition':'.4s'
    })
})


// source


$('.link_fil_source').click(function(){
    $('.fil_sourceType_items').css({
        'right':'0',
        'transition':'.4s'
    })
})

// source/



// power



$('.link_fil_power').click(function(){
    $('.fil_power_items').css({
        'right':'0',
        'transition':'.4s'
    })
})



// power/


// temperature

$('.link_fil_temperature').click(function(){
    $('.fil_temperature_items').css({
        'right':'0',
        'transition':'.4s'
    })
})


// temperature/



// protocol


$('.link_fil_protocol').click(function(){
    $('.fil_protocol_items').css({
        'right':'0',
        'transition':'.4s'
    })
})


// protocol/




// management




$('.link_fil_management').click(function(){
    $('.fil_management_items').css({
        'right':'0',
        'transition':'.4s'
    })
})





// management/

// mob filters/





$('.filter ul li').click(function(){
    $('.filter ul li').removeClass('link_active')
    $(this).addClass('link_active')
    
})

$('.nav_product ul li').click(function(){
    $('.nav_product ul li').removeClass('link_active')
    $(this).addClass('link_active')
    
})





