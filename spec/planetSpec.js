describe('planet', function() {

  var planet, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    planet = new Planet();
  });

  it('should have a jQuery $node object', function() {
    expect(planet.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a set position function that makes the planet revolve around the sun', function() {
    sinon.spy(planet.$node, 'css');
    blinkyDancer.setPosition(top, left, size);
    expect(planet.$node.css.called).to.be.true;
  });

  // describe('dance', function() {
  //   it('should call step at least once per second', function() {

  //     sinon.spy(blinkyDancer, 'step');
  //     expect(blinkyDancer.step.callCount).to.be.equal(0);
  //     clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
  //     clock.tick(timeBetweenSteps);

  //     expect(blinkyDancer.step.callCount).to.be.equal(1);

  //     clock.tick(timeBetweenSteps);
  //     expect(blinkyDancer.step.callCount).to.be.equal(2);
  //   });
  // });
});
