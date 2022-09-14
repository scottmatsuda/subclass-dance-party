describe('comet', function() {

  var comet, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    comet = new Comet(10, 20, 1000);
  });

  it('should have a jQuery $node object', function() {
    expect(comet.$node).to.be.an.instanceof(jQuery);
  });

  it('should have the ability to go right', function() {
    expect(comet.goingRight).to.not.be.undefined;
  });

});
