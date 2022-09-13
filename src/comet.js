// change color

var Comet = function(top, left, timeBetweenSteps) {
  RandomSpaceObject.call(this, top, left, timeBetweenSteps);
  //UFO should fade in/out and move quickly across the screen (straight lines)
  this.$node.addClass('comet');

  this.setPosition(top, left);
};

Comet.prototype = Object.create(RandomSpaceObject.prototype);
Comet.prototype.constructor = Comet;

Comet.prototype.step = function() {
  RandomSpaceObject.prototype.step.call(this);
  var newTop = this.$node.offset().top;
  var newLeft = this.$node.offset().left;
  this.setPosition(newTop, newLeft + 20);
};

window['addComet'] = Comet;