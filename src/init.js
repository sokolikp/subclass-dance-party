$(document).ready(function(){
  window.dancers = [];
  window.backgrounds = ['backgrounds/boxingRing.jpg', 'backgrounds/Crossfit.jpg', 'backgrounds/MortalKombat.jpg', 'backgrounds/RainbowRoad.png', 'backgrounds/Yacht.jpg'];


  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      35 + ($("body").height()-155) * Math.random(),
      20 + ($("body").width()-140) * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  // $('.generateBackgroundButton').on('click', function(event){

  //   // call function that generates random background
  //   $('body').css({background-image: someVarName})
  // });

  $('#lineUpButton').on('click', function(event){
    //var leftRightBuffer = 200;
    var spreadDistance = 45;//($("body").width()-(2*leftRightBuffer))/window.dancers.length;
    var totalRealEstate = (window.dancers.length-1) * spreadDistance;
    var leftRightBuffer = ($("body").width() - totalRealEstate)/2;
    //console.log('spread');
    //console.log(spreadDistance);
    for(var i=0; i<window.dancers.length; i++) {
      var $dancer = window.dancers[i].$node;
      $dancer.css({top: $("body").height()/2, left: leftRightBuffer + i*spreadDistance});
    }
  });

  $('#randomizeDancersButton').on('click', function(event){
    for(var i=0; i<window.dancers.length; i++) {
      var $dancer = window.dancers[i].$node;
      var randTop = 35 + ($("body").height()-155) * Math.random();
      var randLeft = 20 + ($("body").width()-120) * Math.random();
      $dancer.css({top: randTop, left: randLeft});
    }
  });

  $('#danceWithPartnerButton').on('click', function(event){

    var dancersCopy = window.dancers.slice();
    for(var i=0; i<dancersCopy.length; i++) {
      var min = Number.MAX_VALUE;
      var $closestDancer;
      if(dancersCopy[i] !== undefined) {
        var index;
        for(var j=0; j<dancersCopy.length; j++) {
          if(i !== j && dancersCopy[j] !== undefined) {
            var $dancer1 = dancersCopy[i].$node;
            var $dancer2 = dancersCopy[j].$node;
            var dancer1XPos = $dancer1.offset().left;
            var dancer1YPos = $dancer1.offset().top;
            var dancer2XPos = $dancer2.offset().left;
            var dancer2YPos = $dancer2.offset().top;
            var distance = Math.sqrt(Math.abs(dancer1XPos - dancer2XPos)*Math.abs(dancer1XPos - dancer2XPos) + Math.abs(dancer1YPos - dancer2YPos)*Math.abs(dancer1YPos - dancer2YPos));
            if(distance < min) {
              min = distance;
              index = j;
              $closestDancer = $dancer2;
            }
          }
        }
        $closestDancer.css({left: $dancer1.offset().left + 30, top: $dancer1.offset().top});
        dancersCopy[i] = undefined;
        dancersCopy[index] = undefined;
      }
    }
  });

  $('body').on('mouseenter', '.dancer', function(event){
    // toggle transition class
    $(this).removeClass('spin-animate-out');
    $(this).addClass('spin-animate-in');
  });

  $('body').on('mouseleave', '.dancer', function(event){
    // toggle transition class
    $(this).removeClass('spin-animate-in');
    $(this).addClass('spin-animate-out');
  });


  $('#changeBackgroundButton').on('click', function(event){
    var rand = Math.floor(Math.random() * window.backgrounds.length);

    $('body').css({"background-image": 'url("' + window.backgrounds[rand] + '")'});

  });


});

