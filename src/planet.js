var Planet = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  RandomSpaceObject.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.radius;

  //this.$node.addClass('planet');
};

Planet.prototype = Object.create(RandomSpaceObject.prototype);
Planet.prototype.constructor = Planet;
/*
Planet.prototype.setPosition = function() {
  var radius;

  var styleSettings = {
    'transform-origin': '50% 10px'
  };

};

 */
/* Planet.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  RandomSpaceObject.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.setPosition();

}; */

window['addPlanet'] = Planet;