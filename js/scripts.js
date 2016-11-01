if(!$('#mobile-menu-toggler').is(':visible')) {
    var $navAffix = $('#nav-affix');
    if($navAffix.length) {
      $navAffix.width($navAffix.outerWidth(true)-32);
      $(window).on('resize', function() {
        $navAffix.width($navAffix.outerWidth(true)-32);
      });
      $navAffix.affix({
        offset: {
          top: $navAffix.position().top - 20,
          bottom: $('footer').outerHeight(true) + 40
        }
      });
      if($('.wrapper-content-right').outerHeight(true) < $navAffix.outerHeight(true))
        $('.wrapper-content-right').height($navAffix.outerHeight(true));
      $('body').scrollspy();
    }
  } else {
    $('.wrapper-navleft').hide();
    $('#mobile-menu-toggler').click(function() {
      $('.wrapper-navleft').toggle();
    })
  }


$(document).ready(function() {
  var $nav = $('#nav');
  var $element = $nav.find('.w--current').addClass('link-active');
  var $uls = $element.parents('ul');
  for(var i = 0; i < $uls.length; i++)
  $($uls[i]).prev().addClass('link-active');

  $as = $nav.find('a');
  var position
  for(var i = 0; i < $as.length; i++) {
    if($as[i] == $element[0]) {
      position = i;
    }
  }

  //prev
  if(position == 0)
  $('#docs-previous').hide();
  else
  $('#docs-previous').attr('href', $($as[position-1]).attr('href'));

  //next
  if(position == $as.length)
  $('#docs-next').hide();
  else
  $('#docs-next').attr('href', $($as[position+1]).attr('href'));

  //top
  //console.log($($uls[0]).prev('a'));
  if($uls.length > 0 && $($uls[0]).prev('a').length > 0)
  $('#docs-top').attr('href', $($uls[0]).prev('a').attr('href'));
  else
  $('#docs-top').hide();

  $('.changeimg img').on('click', function(){
	$(this).hide();
	var current = $('.changeimg img').index(this);
	console.log();
	var images = $(this).closest('.changeimg').find('img');
	if ( ( images.index(this) + 1) == images.length ) {		
		images.eq(0).show();
	}
	else{
		$(this).next().show();
	}
  });
  
});