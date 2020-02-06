/*----------EXAMPLE-----------*/

/*//every document where we write a jQuery code has to start like this $(document).ready(function(){})
$(document).ready(function(){//this ensures that this code can only run after the document has been loaded
    //$() = this is the selector 
    //we select the h1 element, and then we use the click method, so when we click on the h1 element and select this and then it changes the CSS style of that element. In this case, when we click on an h1 element, the background of that element turns red
    $('h1').click(function(){
        //we select this element. this keyword now means our h1 element because thats what we selected in the first place
      $(this).css('background-color', '#ff0000');
    })
    
});*/

$(document).ready(function(){
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down"){/*if the user scrolls down to this section, we want the sticky navigation to appear*/
            $('nav').addClass('sticky');/*add the class sticky*/
        } else{/*if it scrolls up, the sticky nav will disappear*/
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;' /*we want the sticky nav to happen 60px before we hit the section we defined*/   
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);/*we select the class for the I'm hungry button, and when we click on it, the browser will scroll to the top of the section plans(pricing plan) section in 1000 millisecond or 1 second*/
    });
    
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });
    
    
    /* Navigation Scroll */
    /*got online: https://css-tricks.com/snippets/jquery/smooth-scrolling/*/
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {/*it selects the link element where the href attribute starts with a hash symbol, then we click it*/
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1)+']');
              if (target.length) { /*if that element exists, then we scroll to it*/
                  $('html, body').animate({scrollTop: target.offset().top}, 1000);
                  return false;
              }
          }
      });
    });
    
    
    /* Animations on scroll */
    /*https://raw.githubusercontent.com/daneden/animate.css/master/animate.css*/
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    
    /* MOBILE NAV */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');/*this variable will be the result of selecting the navigation*/
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);/*what slideToggle does is open and close a box, by how many seconds it will take, in this case we have 200 milliseconds or 0.2 seconds*/
        
        if(icon.hasClass('ion-navicon-round')){/*if the variable icon has the class of the ion-navicon-round, then we want the icon to have another class which is the close icon*/
            icon.addClass('ion-close-round');/*add the close class*/
            icon.removeClass('ion-navicon-round');/*add the navi class*/
        } else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
        
    });
    
    /*GMAPS*/
    var map = new GMaps({ /*http://hpneo.github.io/gmaps/examples/basic.html*/
      div: '.map', /*this is where we'll display our map*/
        /*the coordinates of our points*/
      lat: 38.7436266,
      lng: -9.05,
      zoom:12
    });
    
    /*http://hpneo.github.io/gmaps/examples/markers.html*/
    map.addMarker({
        lat: 38.7436266,
        lng: -9.1602037,
        title: 'Lisbon',
        infoWindow: {
            content: '<p>Our Lisbon HQ</p>'
        }
    });
    
});




