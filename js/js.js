  $('.main__sl').slick();
  $('.adv__sl').slick({
  	  asNavFor: '.adv__list'
  });

  $('.adv__list').slick({
  	  asNavFor: '.adv__sl',
  	  arrows: false,
  	  focusOnSelect: true,
  	  slidesToShow: 7,
  });

  $('.about__sl').slick({
	  dots: true,
	  asNavFor: '.about__sl__text'
  });

  $('.about__sl__text').slick({
 	  asNavFor: '.about__sl',
 	  arrows: false
  });


  $('.product__sl__big').slick({
    dots: false,
    arrows: false,
    asNavFor: '.product__sl__sm'
  });

  $('.product__sl__sm').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    focusOnSelect: true,
    asNavFor: '.product__sl__big'
  });

