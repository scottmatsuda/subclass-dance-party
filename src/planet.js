var Planet = function(top, left, timeBetweenSteps) {
  RandomSpaceObject.call(this, top, left, timeBetweenSteps);
  this.size = Math.floor(Math.random() * 200);
  this.$node.addClass('planet');
  this.spin();
};

Planet.prototype = Object.create(RandomSpaceObject.prototype);
Planet.prototype.constructor = Planet;

Planet.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
    animation: ''
  };
  this.$node.css(styleSettings);

};

Planet.prototype.spin = function() {
  var radius = this.size * 3;
  if (radius < 100) {
    radius = 100;
  }

  var midTop = $('#sun').offset().top;
  var midLeft = $('#sun').offset().left;

  var time = Math.floor(radius / 10 ) || 1;

  var styleSettings = {
    animation: 'spin ' + time + 's linear infinite',
    top: 'calc(50% - ' + radius + 'px)',
    left: '50%',
    'transform-origin': '50%' + radius + 'px',
    height: this.size + 'px',
    width: this.size + 'px'
  };

  this.$node.css(styleSettings);
};

Planet.prototype.lineUp = function() {
  $('.planetContainer').toggleClass('reversePlanets');
};

window['addPlanet'] = Planet;