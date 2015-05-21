var SpidermanDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('spiderman-dancer');// = $('<span class="dancer hulk-hogan-dancer"></span>');
  this.$node.prepend('<img src="characters/spiderman.gif" />')
};

SpidermanDancer.prototype = Object.create(Dancer.prototype);
SpidermanDancer.prototype.constructor = SpidermanDancer;
SpidermanDancer.prototype.oldStep = SpidermanDancer.prototype.step;
SpidermanDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.fadeToggle();
};
