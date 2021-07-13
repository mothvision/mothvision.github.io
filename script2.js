const illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas2',
  });
  var eyeGroup = new Zdog.Group({
    addTo: illo,
    translate: { z: 70 },
  });
  new Zdog.Shape({
    addTo: illo,
    path: [
      { x: -12, y: -20}, // start at top left
      { x:  12, y: -20}, // line to top right
      { x: 12, y:  20}, // line to bottom left
      { x:  -12, y:  20}, // line to bottom right
    ],
    closed: false,
    stroke: 10,
    color: '#474159',
    translate: { x: 28, y:-30, z: 50},
    rotate: {z: -Zdog.TAU/3 },
  });
  new Zdog.Shape({
    addTo: illo,
    // no path set, default to single point
    stroke: 20,
    color: '#474159',
    translate: {x:50, y:50, z:-30},
  });
  new Zdog.Shape({
    addTo: illo,
    // no path set, default to single point
    stroke: 20,
    color: '#474159',
    translate: {x:50, y:50, z:20},
  });
  new Zdog.Shape({
    addTo: illo,
    path: [
      { x:   0, y: -20},
      { x:  20,y:  20},
      { x: -20,y:  20},
    ],
    closed: false, // unclosed
    stroke: 10,
    color: '#474159',
    translate: {x: 70},
  });
  // add circle
  let head = new Zdog.Shape({
    addTo: illo,
    stroke: 100,
    color: '#92d4d6',
  });
    head.copy({
    translate: { x: -48, z: 100},
    color: '#94ba8a',
  });
  let dome = new Zdog.Hemisphere({
    addTo: illo,
    diameter: 20,
    // fill enabled by default
    // disable stroke for crisp edge
    stroke: false,
    color: '#bfa1db',
    backface: '#bfa1db',
    translate: {x:50, y:70, z:20},
    rotate: { x: -Zdog.TAU/4 },
  });
  let dome2 = new Zdog.Hemisphere({
    addTo: illo,
    diameter: 20,
    // fill enabled by default
    // disable stroke for crisp edge
    stroke: false,
    color: '#bfa1db',
    backface: '#bfa1db',
    translate: {x:50, y:70, z:-20},
    rotate: { x: -Zdog.TAU/4 },
  });
  function animate() {
    // rotate illo each frame
    illo.rotate.z +=0.03
    illo.rotate.y -=0.04
    illo.rotate.x +=0.02
    illo.updateRenderGraph();
    // animate next frame
    requestAnimationFrame( animate );
  }
  // start animation
  animate();