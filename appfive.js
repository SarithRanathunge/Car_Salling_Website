//Variables for setup

let container;
let camera;
let renderer;
let scene;
let house;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 2.1, 9);

  const ambient = new THREE.AmbientLight(0xffffff, 6);
  scene.add(ambient);

  const light1 = new THREE.DirectionalLight(0xffffff, 1);
  const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
  const light3 = new THREE.DirectionalLight(0xffffff, 0.5);
  const light4 = new THREE.DirectionalLight(0xffffff, 1);
  const light5 = new THREE.DirectionalLight(0xffffff, 0.5);
  light1.position.set(-20, 45, 0);
  light2.position.set(20, 45, 0);
  light3.position.set(-10, 0, 30);
  light4.position.set(10, 0, 30);
  light5.position.set(0.05, 5, 60);
  scene.add(light1);
  scene.add(light2);
  scene.add(light3);
  scene.add(light4);
  scene.add(light5);
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./mercedes/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    house = gltf.scene.children[0];
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  house.rotation.z += 0.005;
  renderer.render(scene, camera);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
