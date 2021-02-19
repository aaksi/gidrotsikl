$(function(){
  
    $('.banner-section__slider').slick({
        dots: true,
        autoplay:true,
        prevArrow:'<button class="banner-section__slider-btn banner-section__slider-btn--left" ><img src="images/icons/arrow-left.svg" alt=""></button>',
        nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btn--right" ><img src="images/icons/arrow-right.svg" alt=""></button>',
    });

    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        
    })


    $('.product-item__favorite').on('click', function(){
        $(this).toggleClass('product-item__favorite--active');
    });

    $('.products__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'<button class="products__slider-btn products__slider-btn--left" ><img src="images/icons/arrow-black-left.svg" alt=""></button>',
        nextArrow:'<button class="products__slider-btn products__slider-btn--right" ><img src="images/icons/arrow-black-right.svg" alt=""></button>',
    });
});