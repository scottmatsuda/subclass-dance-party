var Comet = function(top, left, timeBetweenSteps) {
  RandomSpaceObject.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('comet');

  this.goingRight = true;

  this.setPosition(top, left);
};

Comet.prototype = Object.create(RandomSpaceObject.prototype);
Comet.prototype.constructor = Comet;

Comet.prototype.step = function() {
  RandomSpaceObject.prototype.step.call(this);
  var newTop = this.$node.offset().top;
  var newLeft = this.$node.offset().left;
  this.goingRight ? this.setPosition(newTop, newLeft + 20) : this.setPosition(newTop, newLeft - 20);
};

Comet.prototype.lineUp = function() {
  var direction = '180deg';
  if (!this.goingRight) {
    direction = '0deg';
  }
  var styleSettings = {
    transform: 'rotate(' + direction + ')'
  };

  this.$node.css(styleSettings);
  this.goingRight = !this.goingRight;

};

window['addComet'] = Comet;