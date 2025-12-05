import * as THREE from 'three';
import { MMDLoader } from 'three/addons/loaders/MMDLoader.js';
import { MMDAnimationHelper } from 'three/addons/animation/MMDAnimationHelper.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
camera.position.set(0, 15, 35);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const helper = new MMDAnimationHelper();

const loader = new MMDLoader();

loader.loadWithAnimation(
  'penguin.pmx',
  'TuxHello.vmd',
  (mmd) => {
    const mesh = mmd.mesh;
    const animation = mmd.animation;

    scene.add(mesh);

    helper.add(mesh, {
      animation: animation,
      physics: true,
      alpha: true
    });

    animate();
  }
);

function animate() {
  requestAnimationFrame(animate);

  helper.update(0.01);
  renderer.render(scene, camera);
}
