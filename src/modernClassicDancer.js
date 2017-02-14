var ModernClassicDancer = function(top, left, timeBetweenSteps) {
  ClassicDancer.call(this, top, left, timeBetweenSteps);
  this.speed = 'fast';
  this.gender = 'female';
};


ModernClassicDancer.prototype = Object.create(ClassicDancer.prototype);
ModernClassicDancer.prototype.constructor = ModernClassicDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
ModernClassicDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};