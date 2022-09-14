var RandomSpaceObject = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();
};

RandomSpaceObject.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

RandomSpaceObject.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

