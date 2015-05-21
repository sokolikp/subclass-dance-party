var NinjaTurtleDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('ninja-turtle-dancer');// = $('<span class="dancer ninja-turtle-dancer"></span>');
  this.$node.prepend('<img id="ninjaTurtle" src="characters/NinjaTurtle.gif" />')
};

NinjaTurtleDancer.prototype = Object.create(Dancer.prototype);
NinjaTurtleDancer.prototype.constructor = NinjaTurtleDancer;
NinjaTurtleDancer.prototype.oldStep = NinjaTurtleDancer.prototype.step;
NinjaTurtleDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.slideToggle();
};
