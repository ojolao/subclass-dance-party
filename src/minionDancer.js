var MinionDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="minion"><img src="https://s-media-cache-ak0.pinimg.com/originals/36/b1/6c/36b16cc68bbbca07f1c37183112de693.gif"></span>');
};


MinionDancer.prototype = Object.create(Dancer.prototype);
MinionDancer.prototype.constructor = MinionDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
MinionDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  //this.slide();
  this.jump();
  //ClassicDancer.prototype.slide.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
};

MinionDancer.prototype.jump = function() {
  this.$node.animate({top: '+=50'}, 250);
  this.$node.animate({top: '-=50'}, 250);
};