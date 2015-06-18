var THREE         = require('three');
var OrbitControls = require('three-orbit-controls')(THREE);
var dat           = require('dat-gui');
var Stats         = require('stats-js');

var stats = new Stats(); stats.domElement.style.position = 'absolute';
document.body.appendChild(stats.domElement);

var renderer, camera, scene;
var counter = 0;

renderer = new THREE.WebGLRenderer( {
    antialias : true,
    clearColor: 0
} );
document.body.appendChild(renderer.domElement)

camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 4000 );
camera.position.set(0, 45, 240);
controls = new OrbitControls(camera, renderer.domElement);
controls.maxDistance = 500;

scene = new THREE.Scene();

function update()
{
    stats.begin();


    renderer.render(scene, camera);
    stats.end()
    
    requestAnimationFrame(update);
}

// var gui = new dat.GUI()
// gui.add(camera.position, 'x', 0, 400)
// gui.add(camera.position, 'y', 0, 400)
// gui.add(camera.position, 'z', 0, 400)

onResize();
update();
window.onresize = onResize;
function onResize(){
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}