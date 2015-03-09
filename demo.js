var THREE = require('three/three.min');
var createOrbitViewer = require('three-orbit-viewer')(THREE);

var app = createOrbitViewer({
    clearColor: 0x000000,
    clearAlpha: 1.0,
    fov: 65,
    position: new THREE.Vector3(1, 1, -2)
})
 
var geo = new THREE.BoxGeometry(1,1,1)
var mat = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xffffff })
var box = new THREE.Mesh(geo, mat)
app.scene.add(box)
 
app.on('tick', function(dt) {
    //.. handle pre-render updates     
})