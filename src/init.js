$(document).ready(function(){
  window.dancers = [];

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
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  // $('.generateBackgroundButton').on('click', function(event){

  //   // call function that generates random background
  //   $('body').css({background-image: someVarName})
  // });

  $('.lineUpButton').on('click', function(event){
    //var leftRightBuffer = 200;
    var spreadDistance = 45;//($("body").width()-(2*leftRightBuffer))/window.dancers.length;
    var totalRealEstate = (window.dancers.length-1) * spreadDistance;
    var leftRightBuffer = ($("body").width() - totalRealEstate)/2;
    //console.log('spread');
    //console.log(spreadDistance);
    for(var i=0; i<window.dancers.length; i++) {
      var $dancer = window.dancers[i].$node;
      $dancer.css({top: $("body").height()/2, left: leftRightBuffer + i*spreadDistance});
      console.log('height', $("body").height()/2);
      console.log('actual offset', $dancer.offset().top);
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
          //$closest = window.dancers[j]
          if(i !== j && dancersCopy[j] !== undefined) {
            var $dancer1 = dancersCopy[i].$node;
            var $dancer2 = dancersCopy[j].$node;
            //var $closestDancer = dancer2;
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
        //var pair = [$dancer1, $closestDancer];
        // get $dancer1 and $closesDancer together
        $closestDancer.css({left: $dancer1.offset().left + 30, top: $dancer1.offset().top});
        dancersCopy[i] = undefined;
        dancersCopy[index] = undefined;
      }
    }
  });

  $('img').on('mouseover', function(event){
    // toggle transition class
  });

  $('#randomizeDancersButton').on('click', function(event){
    // do stuff
  });

  $('#changeBackgroundButton').on('click', function(event){
    // do stuff
  });


});

