$(document).ready(function(){
    $('#btn').click(function(){
      $('.pen').fadeToggle();
    });
//     $('#quotes').click(function(){
//         $('.quotes1').fadeToggle();
//     });
//     $('#choose').mouseover(function(){
//        $('.intro1').fadeOut(1000);
//        $('.intro2').fadeOut(1000);
//     });
//     $('#choose').mouseover(function(){
//       $('.intro').fadeIn(2000);
//       $('.intro3').fadeIn(2000);
//     });
//     $('#heading1').mouseover(function(){
//       $('.intro').fadeOut(1000);
//       $('.intro3').fadeOut(1000);
//    });
//    $('#heading1').mouseover(function(){
//     $('.intro1').fadeIn(2000);
//     $('.intro2').fadeIn(2000);
//  });
 $('#content').mouseover(function(){
  $('.intro').fadeOut(2000);
  $('.intro3').fadeOut(2000);
  $('.intro1').fadeOut(2000);
       $('.intro2').fadeOut(2000);
 });
 $('#content').mouseleave(function(){
  $('.intro').fadeIn(2000);
  $('.intro3').fadeIn(2000);
  $('.intro1').fadeIn(2000);
  $('.intro2').fadeIn(2000);
 });
});

new PureCounter({
  // Setting that can't' be overriden on pre-element
  selector: ".purecounter", // HTML query selector for spesific element

  // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
  start: 0, // Starting number [uint]
  end: 60, // End number [uint]
  duration: 10, // The time in seconds for the animation to complete [seconds]
  delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]

});

new PureCounter({
  // Setting that can't' be overriden on pre-element
  selector: ".purecounter1", // HTML query selector for spesific element

  // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
  start: 0, // Starting number [uint]
  end: 85, // End number [uint]
  duration: 10, // The time in seconds for the animation to complete [seconds]
  delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]

});

new PureCounter({
  // Setting that can't' be overriden on pre-element
  selector: ".purecounter2", // HTML query selector for spesific element

  // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
  start: 0, // Starting number [uint]
  end: 4, // End number [uint]
  duration: 10, // The time in seconds for the animation to complete [seconds]
  delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]

});

new PureCounter({
  // Setting that can't' be overriden on pre-element
  selector: ".purecounter3", // HTML query selector for spesific element

  // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
  start: 0, // Starting number [uint]
  end: 34, // End number [uint]
  duration: 10, // The time in seconds for the animation to complete [seconds]
  delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
  
});
