// fade (opacity)

var UFO = function(top, left, timeBetweenSteps) {
  timeBetweenSteps += 4000;
  RandomSpaceObject.call(this, top, left, timeBetweenSteps);
  //UFO should fade in/out and move quickly across the screen (straight lines)
  this.$node.addClass('ufo');
};

UFO.prototype = Object.create(RandomSpaceObject.prototype);
UFO.prototype.constructor = UFO;

// step
// fade out
// fade in in a new location

UFO.prototype.step = function() {

  $('.ufo').fadeOut(this.timeBetweenSteps / 2);

  var newPos = {
    top: $('body').height() * Math.random(),
    left: $('body').width() * Math.random(),
  };

  $('.ufo').css(newPos);

  $('.ufo').fadeIn(this.timeBetweenSteps / 2);
  RandomSpaceObject.prototype.step.call(this);
};

window['addUFO'] = UFO;