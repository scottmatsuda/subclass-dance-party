$(document).ready(function() {
  window.dancers = [];

  $('.addSpaceObjectButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    if (dancerMakerFunctionName === 'addPlanet') {
      $('.planetContainer').append(dancer.$node);
    } else {
      $('.canvas').append(dancer.$node);
    }
    window.dancers.push(dancer);
  });

  $('.clearButton').on('click', function() {
    window.dancers = [];
    $('.canvas').html('<div id="sun"></div><div class="planetContainer"></div>');
  });

  $('.lineUpButton').on('click', function(event) {
    var planetCalled = false;
    window.dancers.forEach(function(dancer) {
      var isPlanet = dancer instanceof Planet;
      if (isPlanet) {
        if (!planetCalled) {
          dancer.lineUp();
          planetCalled = true;
        }
      } else {
        dancer.lineUp();
      }

    });
  });

});

