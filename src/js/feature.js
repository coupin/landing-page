const u = (function () {
  let currentPosition = 0;
  let paused = false;
  let interval;

  const addMouseenterEventListener = function () {
    document.addEventListener('mouseenter', function (event) {
      if (event.target.classList && event.target.classList.contains('feature')) {
        clearInterval(interval);
        interval = null;
        const element = event.target;
        const elementPosition = element.getAttribute('data-position');
        
        setActiveElement(element, elementPosition);
      }
    }, true);
  };

  const addMouseleaveEventListener = function () {
    document.addEventListener('mouseleave', function() {
      if (event.target.classList && event.target.classList.contains('feature') && !interval) {
        interval = startInterval();
      }
    }, true);
  };

  const startInterval = function () {
    return setInterval(function () {
      if (!paused) {
        currentPosition = parseInt(currentPosition) + 1;
        if (currentPosition > 6) {
          currentPosition = 1;
        }
  
        const element = document.querySelector(`.feature[data-position="${currentPosition}"]`);
        const elementPosition = element.getAttribute('data-position');
        setActiveElement(element, elementPosition);
      }
    }, 5000);
  };

  const setActiveElement = function (element, position) {
    const imageElement = document.querySelector(`.screenshot[data-position="${position}"]`)

    document.querySelectorAll('.screenshot').forEach(function (g) {
      g.classList.remove('active');
    });
    
    document.querySelectorAll('.feature').forEach(function(g) {
      g.classList.remove('active');
    });
    
    imageElement.classList.add('active');
    element.classList.add('active');
    currentPosition = position;
  };

  return {
    start() {
      var waypoint = new Waypoint({
        element: document.getElementById('features'),
        offset: '25%',
        continuous: false,
        handler: function() {
          if (currentPosition === 0 && !interval) {
            addMouseenterEventListener();
            addMouseleaveEventListener();
            const element = document.querySelector(`.feature[data-position="${1}"]`);
            const elementPosition = element.getAttribute('data-position');
            setActiveElement(element, elementPosition);
            interval = startInterval();
          }
        }
      })
    }
  }
})();

export default u;
