window.onload = function() {
  require("particles.js");

  particlesJS.load('particles-js', 'assets/particles.json', function() {
  Particles.init({
    selector: '.background',
    color: '#000000',
    connectParticles: true,
    minDistance: 120,
    speed: 1,
    maxParticles: 100,
    sizeVariations: 5,
  });
  });
};