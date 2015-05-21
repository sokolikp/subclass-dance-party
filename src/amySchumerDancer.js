var AmySchumerDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('amy-schumer-dancer');// = $('<span class="dancer amy-schumer-dancer"></span>');
  this.$node.prepend('<img id="amySchumer" src="characters/amySchumer.gif">')
};

AmySchumerDancer.prototype = Object.create(Dancer.prototype);
AmySchumerDancer.prototype.constructor = AmySchumerDancer;
AmySchumerDancer.prototype.oldStep = AmySchumerDancer.prototype.step;
AmySchumerDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.fadeToggle();
};
