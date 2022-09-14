var UFO = function(top, left, timeBetweenSteps) {
  timeBetweenSteps = timeBetweenSteps * 10 + 1000;
  RandomSpaceObject.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('ufo');

  this.$node.mouseover(function(event) {
    console.log('mouseover');
    console.log('this.$node', this);
    var $element = $(this);
    setInterval(function() {
      $element.toggle();
    }, 100);
    setTimeout(function() {
      $element.remove();
    }, 2000);
  });

};

UFO.prototype = Object.create(RandomSpaceObject.prototype);
UFO.prototype.constructor = UFO;

UFO.prototype.step = function() {

  var element = $(this.$node);
  var fadeTime = this.timeBetweenSteps / 4;
  setTimeout(function() {
    element.fadeOut(fadeTime);
  }, this.timeBetweenSteps / 4);

  var newPos = {
    top: $('body').height() * Math.random(),
    left: $('body').width() * Math.random(),
  };

  setTimeout(function() {
    element.css(newPos);
  }, this.timeBetweenSteps / 2);

  setTimeout(function() {
    element.fadeIn(fadeTime);
  }, this.timeBetweenSteps / 2);

  RandomSpaceObject.prototype.step.call(this);
};

UFO.prototype.lineUp = function() {
  var styleSettings = {
    visibility: 'hidden'
  };

  this.$node.css(styleSettings);
};

window['addUFO'] = UFO;