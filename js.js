$(function(){

  // Button Control
  $('.auto').on('click touchend',function(){
    $('.button-container').addClass('automatic');
    $('#cube').addClass('autoSpin');
  });
  $('.manual').on('click touchend',function(){
    $('.button-container').removeClass('automatic');
    $('#cube').removeClass('autoSpin');
  });

  // Cube animation control
  var startX, startY;
  var mouveEndX, mouveEndY;
  var finalX = 0, finalY = 0;
  var endX = 0, endY = 0;

  // Catch the starting point
  function start(e, positionX, positionY) {
    e.preventDefault();
    e.stopPropagation();
    startX = positionX;
    startY = positionY;
    $('#cube').css('transition-duration','0s');
  }

  // Check position while moving
  function move(e, mouveEndX, mouveEndY) {
    e.preventDefault();
    e.stopPropagation();
    differenceX = mouveEndX - startX ;
    differenceY = startY - mouveEndY ;
    finalX = endX + differenceX ;
    finalY = endY + differenceY;
    $('#cube')[0].style.webkitTransform = 'translateZ( -100px ) rotateX(' + finalY  + 'deg) rotateY(' + finalX + 'deg)';
    $('#cube')[0].style.MozTransform = 'translateZ( -100px ) rotateX(' + finalY  + 'deg) rotateY(' + finalX + 'deg)';

  }

  // Terminate animation. TODO optimize
  function end(e, positionX, positionY) {
    endX = finalX + (differenceX /10);
    endY = finalY + (differenceY / 10);
    $('#cube').css('transition-duration','1s');
    $('#cube')[0].style.webkitTransform = 'translateZ( -100px ) rotateX(' + endY  + 'deg) rotateY(' + endX + 'deg)';
    $('#cube')[0].style.MozTransform = 'translateZ( -100px ) rotateX(' + endY  + 'deg) rotateY(' + endX + 'deg)';

  }

  // Set functions for mouse and touch events.
  $(".cube-container")
  .bind('mouseenter','#cube', function(e) { start(e, e.pageX, e.pageY) })
  .bind('mousemove','#cube', function(e){ move(e, e.pageX, e.pageY) })
  .bind('mouseleave','#cube', function(e) { end() })
  .bind('touchstart','#cube', function(e) { start(e, e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY)})
  .bind('touchmove','#cube', function(e){ move(e, e.originalEvent.changedTouches[0].pageX, e.originalEvent.changedTouches[0].pageY) })
  .bind('touchend','#cube', function(e) { end() });

})





