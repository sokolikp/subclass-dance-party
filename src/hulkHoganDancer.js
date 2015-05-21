var HulkHoganDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('hulk-hogan-dancer');// = $('<span class="dancer hulk-hogan-dancer"></span>');
  this.$node.prepend('<img id="hulkHogan" src="characters/hulkHogan.gif">')
};

HulkHoganDancer.prototype = Object.create(Dancer.prototype);
HulkHoganDancer.prototype.constructor = HulkHoganDancer;
HulkHoganDancer.prototype.oldStep = HulkHoganDancer.prototype.step;
HulkHoganDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.fadeToggle();
};
