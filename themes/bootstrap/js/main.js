jQuery(window).load(function() {
	// Animate loader off screen
	jQuery(".se-pre-con").fadeOut("slow");;
});
jQuery(document).ready(function() {
    function initialization(){
		jQuery('#fullpage').fullpage({
			
			anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage', 'lastPage'],
			resize: false,
			animateAnchor:false,
			scrollOverflow: true,
			fitSection: false,
			menu: '#menu',
			css3: true,

		});
	}

	//fullPage.js initialization
	initialization();


	jQuery('.moveSectionDown').click(function(e){
		e.preventDefault();
		jQuery.fn.fullpage.moveSectionDown();
	});

    jQuery(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
				dots: false,
                arrows: true
              }
            },
            {
              breakpoint: 920,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
				dots: false,
                arrows: true,
                vertical:true
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: true,
				dots: false,
                slidesToShow: 2,
                vertical:true,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 620,
              settings: {
              	arrows: false,
              	dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

        ]
    });

});