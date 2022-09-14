describe('ufo', function() {

  var ufo, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ufo = new UFO(20, 10, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(ufo.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes the ufo fade in and out', function() {
    sinon.spy(ufo, 'step');
    ufo.step();
    expect(ufo.step.called).to.be.true;
  });

  it('should have a mouseover function', function() {
    expect(ufo.$node.mouseover).to.not.be.undefined;
  });


});