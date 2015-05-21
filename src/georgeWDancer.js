var GeorgeWDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('george-w-dancer');// = $('<span class="dancer amy-schumer-dancer"></span>');
  this.$node.prepend('<img src="characters/georgeW.gif">')
};

GeorgeWDancer.prototype = Object.create(Dancer.prototype);
GeorgeWDancer.prototype.constructor = GeorgeWDancer;
GeorgeWDancer.prototype.oldStep = GeorgeWDancer.prototype.step;
GeorgeWDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.fadeToggle();
};
