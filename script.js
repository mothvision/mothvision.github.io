// Made with Zdog

// create illo
const illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
  });
  
  // add circle
  new Zdog.Ellipse({
    addTo: illo,
    width: 40,
    height: 40,
    // position further back
    translate: { z: -50 },
    stroke: 50,
    color: '#92d4d6',
    fill: true,
  }); 
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 400,
    stroke: 80,
    color: '#fff',
  });
  new Zdog.Rect({
    addTo: illo,
    width: 40,
    height: 40,
    // position further back
    translate: { z: -1 },
    stroke: 120,
    color: '#94ba8a',
    fill: true,
  });

  function animate() {
    illo.rotate.y +=0.02;
    illo.rotate.x +=0.02;
    illo.rotate.z +=0.04;
    illo.updateRenderGraph();
    requestAnimationFrame( animate);
  }
  
  animate();
  
  // update & render
  illo.updateRenderGraph();


  