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






$('#photo_two').click(function(){
    $('.block_photo').fadeOut()
    $('.block_photo_two').fadeIn()
})
$('#photo_one').click(function(){
    $('.block_photo').fadeOut()
    $('.block_photo_one').fadeIn()
})
$('#photo_three').click(function(){
    $('.block_photo').fadeOut()
    $('.block_photo_three').fadeIn()
})
$('#photo_four').click(function(){
    $('.block_photo').fadeOut()
    $('.block_photo_four').fadeIn()
})

$('#photo_five').click(function(){
    $('.block_photo').fadeOut()
    $('.block_photo_five').fadeIn()
})
$('#photo_six').click(function(){
    $('.block_photo').fadeOut()
    $('.block_photo_six').fadeIn()
})

$('#photo_seven').click(function(){
    $('.block_photo').fadeOut()
    $('.block_photo_seven').fadeIn()
})
$('#photo_eight').click(function(){
    $('.block_photo').fadeOut()
    $('.block_photo_eight').fadeIn()
})

$('#photo_nine').click(function(){
    $('.block_photo').fadeOut()
    $('.block_photo_nine').fadeIn()
})
$('#photo_ten').click(function(){
    $('.block_photo').fadeOut()
    $('.block_photo_ten').fadeIn()
})
$('#photo_eleven').click(function(){
    $('.block_photo').fadeOut()
    $('.block_photo_eleven').fadeIn()
})


$('#photo_twenty').click(function(){
    $('.block_photo').fadeOut()
    $('.block_photo_twenty').fadeIn()
})




$('.viewing_photo').on('mousemove',(e) =>{
    const x = e.pageX / ($(window).width() / 2);
    const y = e.pageY / ($(window).height() / 2);
    

    $('.bg_img').css({
        
        'top': '-' + y * 30 + 'px',
        'left': '-' + x * 100 + 'px',
    });
})




$('.chenge .chenge_item').click(function(){
    $('.chenge .chenge_item').removeClass('span_active')
    $(this).addClass('span_active')
})


$('.chenge .description').click(function(){
    $('.block_description').fadeIn()
    $('.block_comments').fadeOut()
})

$('.chenge .comments').click(function(){
    $('.block_description').fadeOut()
    $('.block_comments').fadeIn()
    
})

let tab_links = document.querySelectorAll('.item_tabs');
let tab_content = document.querySelectorAll('.delivery_tab');

for (let el of tab_links) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        tab_links.forEach(link => link.classList.remove('item_tabs_ative'));
        el.classList.add('item_tabs_ative');
        let index = el.getAttribute('data-index');
        for (let grid of tab_content) {
            let grid__index = grid.getAttribute('data-index');
            if (grid__index === index) {
                tab_content.forEach(grid => grid.classList.remove('delivery_tab_active'));
                grid.classList.add('delivery_tab_active');
            }
        }
    });
}



$('.similar_products_slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      }
      
    ]
});


$('.mob_slider_block').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
})








$('.head_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
  });






    $('.button_item').click(function(){
        $('.button_item').removeClass('span_active')
        $(this).addClass('span_active')

    })


    $('.slider_bestseller_block .slider_content_newItem').slick({
        dots: true,
        infinite: false,
        speed: 300,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                   
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                   
                }
            }
           
            
        ]
    })

    $('.slider_newItem_block .slider_content_newItem').slick({
        dots: true,
        infinite: false,
        speed: 300,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: false,
                dots: false
              }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                   
                }
            }
          
           
            
        ]
    })




  $('.button_item_newItem').click(function(){
    $('.slider_newItem_block').css({'opacity':'1', 'z-index':'1'})
    $('.slider_bestseller_block').css("opacity","0")
  })
   
  $('.button_item_bestsellers').click(function(){
    $('.slider_newItem_block').css({'opacity':'0', 'z-index':'-1'})
    $('.slider_bestseller_block').css("opacity","1")
  })
   







  $('.lighting_slick').slick({
    dots: true,
    infinite: false,
    speed: 300,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: false,
                dots: false
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: false,
                dots: false
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: false,
                dots: true
            }
        },
        
       
        
    ]
    })



// $('.btn_open').click(function(){
//     if( !$('.company_logos_wrapper').hasClass('active')  ){
//         $('.company_logos_wrapper').addClass('active')
//         $('.company_logos_wrapper').css({
//             'height':'380px',
//             'transition':'.4s'
//         })
//         $('.btn_open').html("<p>roll up</p>")

//     }else{
//         $('.company_logos_wrapper').removeClass('active')
//         $('.company_logos_wrapper').css({
//             'height':'140px',
//             'transition':'.4s'
//         })
//         $('.btn_open').html("<p>Show more</p>")
//     }
// })



$('.btn_open').click(function(){
    if( !$('.company_logos_wrapper').hasClass('logos_wrapper_active')  ){
        $('.company_logos_wrapper').addClass('logos_wrapper_active')
       
        $('.btn_open').html("<p>roll up</p>")

    }else{
        $('.company_logos_wrapper').removeClass('logos_wrapper_active')
        
        $('.btn_open').html("<p>Show more</p>")
    }
})







if($(window).width() < 770){
    $('.banner_content').slick({
        dots: true,
        infinite: true,
        speed: 300,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 420,
              settings: {
                infinite: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 5000,
              }
            }
           
           
            
        ]
    })

    $('.company_logos_wrapper').slick({
        dots: true,
        infinite: false,
        speed: 300,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                
                }
            }
           
           
            
        ]
    })


    
}










