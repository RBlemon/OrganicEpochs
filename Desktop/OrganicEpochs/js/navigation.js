	
	/*使得导航栏一直在最上方*/
    $(document).ready(function() {
        var navOffset=$(".nav_ul").offset().top;

        $(window).scroll(function(){

            var scrollPos=$(window).scrollTop();

            if(scrollPos >=navOffset){

                $(".nav_ul").addClass("fixed");

                $(".nav").addClass("full");

            }else{

                $(".nav_ul").removeClass("fixed");

                $(".nav").removeClass("full");
            }

         });
    });

  
