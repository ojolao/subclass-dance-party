var ClassicDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.size = 10; 
  this.setSize(this.size);
  // this.speed = 'slow';
  // this.gender = 'male';
};


ClassicDancer.prototype = Object.create(BlinkyDancer.prototype);
ClassicDancer.prototype.constructor = ClassicDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
ClassicDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  this.size += 10;
};

ClassicDancer.prototype.setSize = function(size) { 
  var styleSettings = {
    size: size; //add a + 'px';
  };
  this.$node.css(styleSettings);
};
