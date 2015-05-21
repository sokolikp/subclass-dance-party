var KittenDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('kitten-dancer'); //= $('<span class="dancer blinky-dancer"></span>');
  this.$node.prepend('<img id="kitten" src="characters/kitten.gif">')
};

KittenDancer.prototype = Object.create(Dancer.prototype);
KittenDancer.prototype.constructor = KittenDancer;
KittenDancer.prototype.oldStep = KittenDancer.prototype.step;
KittenDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};
