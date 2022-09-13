var Planet = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  RandomSpaceObject.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.size = Math.floor(Math.random() * 100);

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
  var radius;
  var midTop = $('#sun').offset().top;
  console.log('midTop:', midTop);
  var midLeft = $('#sun').offset().left;
  console.log('midLeft', midLeft);
  console.log(this);
  console.log(this.size);
  var styleSettings = {
    animation: 'rotatePlanet 5s linear infinite',
    top: '43%', //Mid value,
    left: '49.5%', //mid value,
    'transform-origin': '50% 100px',
    height: this.size + 'px',
    width: this.size + 'px'
  };

  this.$node.css(styleSettings);
};


/* Planet.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  RandomSpaceObject.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.setPosition();

}; */

window['addPlanet'] = Planet;