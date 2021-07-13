// Made with Zdog

let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas-formas',
  dragRotate: true,
  // stop spinning when drag starts
  onDragStart: function() {
    isSpinning = false;
  },
});

// circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 100,
  translate: { z: 40 },
  stroke: 20,
  color: '#474159',
});
new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  translate: { z: 70 },
  stroke: 20,
  color: '#474159',
});
new Zdog.Ellipse({
  addTo: illo,
  diameter: 60,
  translate: { z: 100 },
  stroke: 20,
  color: '#474159',
});

// square
new Zdog.Rect({
  addTo: illo,
  width: 100,
  height: 100,
  translate: { z: -40 },
  stroke: 12,
  color: '#474159',
  fill: true,
});
let head = new Zdog.Shape({
  addTo: illo,
  stroke: 40,
  color: '#474159',
});

function animate() {
  illo.rotate.y += isSpinning ? 0.03 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();
