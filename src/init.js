$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var top = 100;
      var left = 100 + (i * 50);
      window.dancers[i].lineUp(top, left);
    }

  });
  $('.scatterButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var top1 = $('body').height() * Math.random();
      var left1 = $('body').width() * Math.random();
      window.dancers[i].setPosition(top1, left1);
    }
  });

  $('body').on('mouseover', '.minion', function() {
    console.log(this);
    $(this).toggleClass('one'); 
  });

  $('body').on('mouseover', '.beyonce', function() {
    var min = Infinity; 
    var closest = null;
    var beyonce = $(this)[0];
    var currentTopString = beyonce.style.top;
    var currentTop = Number(currentTopString.substring(0, currentTopString.length - 2));
    var currentLeftString = beyonce.style.left;
    var currentLeft = Number(currentLeftString.substring(0, currentLeftString.length - 2));
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].constructor === ClassicDancer) {
        continue;
      }
      var topString = window.dancers[i].$node[0].style.top;
      var top = Number(topString.substring(0, topString.length - 2));
      var leftString = window.dancers[i].$node[0].style.left;
      var left = Number(leftString.substring(0, leftString.length - 2));
      var val = (top - currentTop) * (top - currentTop) + (left - currentLeft) * (left - currentLeft);
      if (val < min) {
        min = val;
        closest = window.dancers[i];
        console.log('closest is ' + closest);
      }
    }
    if (closest !== null) {
      var closestTop = Number(closest.$node[0].style.top.substring(0, closest.$node[0].style.top.length - 2));
      var closestLeft = Number(closest.$node[0].style.left.substring(0, closest.$node[0].style.left.length - 2));

      var topDiff = closestTop - currentTop;
      var leftDiff = closestLeft - currentLeft;
      console.log('closest is at ' + topDiff + ', ' + leftDiff);

      var move = {
        'transform': 'translate(' + leftDiff + 'px,' + topDiff + 'px)',
        'transition-duration': '2s'
      };
      $(this).css(move);
      setTimeout(closest.$node.toggleClass('one'));
    }

  });
});

