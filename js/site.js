$(document).ready(function() {
    var $navbar = $("#mNavbar");
    
    AdjustHeader(); // Incase the user loads the page from halfway down (or something);
    $(window).scroll(function() {
        AdjustHeader();
    });
    
    function AdjustHeader(){
      if ($(window).scrollTop() > 60) {
        if (!$navbar.hasClass("fixed-top")) {
          $navbar.addClass("fixed-top");
        }
      } else {
        $navbar.removeClass("fixed-top");
      }
    }

    $('.portfolio-box').hover(
      function() {
        $(this).addClass("portfolio-box-hover");
        $(this).find(".portfolio-text").addClass("portfolio-text-hover");
      },
      function() {
        $(this).removeClass("portfolio-box-hover");
        $(this).find(".portfolio-text").removeClass("portfolio-text-hover")
      })

    $("#gallery-artwork").unitegallery({
      tile_enable_image_effect:true,
	    tile_image_effect_reverse:true,
    });

    $("#gallery-animation").unitegallery({
      tile_enable_image_effect:true,
	    tile_image_effect_reverse:true,
    });

    $("#gallery-digital-media").unitegallery({
      tile_enable_image_effect:true,
	    tile_image_effect_reverse:true,
    });

    $(".pb-artwork").click(function() {
      $('.artwork').show();
      
      $('.animation').hide();
      
      $('.digital-media').hide();
    })

    $(".pb-animation").click(function() {
      $('.animation').show();
      $('.artwork').hide();
      $('.digital-media').hide();
    })

    $(".pb-digital-media").click(function() {
      $('.animation').hide();
      $('.artwork').hide();
      $('.digital-media').show();
    })
  });