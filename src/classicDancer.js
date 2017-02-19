var ClassicDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="beyonce"><img src="https://31.media.tumblr.com/ce27425fa583c8f73d98ca9dc56716d6/tumblr_inline_n4i9fiD9LB1rr8huq.gif"></span>');
};

ClassicDancer.prototype = Object.create(Dancer.prototype);
ClassicDancer.prototype.constructor = ClassicDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
ClassicDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  this.slide();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};
ClassicDancer.prototype.slide = function() {
  this.$node.animate({left: '+=300'}, 2000);
  this.$node.animate({left: '-=300'}, 1000);
};


// ClassicDancer.prototype.setSize = function(size) { 
//   var styleSettings = {
//     size: size; //add a + 'px';
//   };
//   this.$node.css(styleSettings);
// };
