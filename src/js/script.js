 import * as THREE from 'three';

 const renderer = new THREE.WebGL3DRender();

 renderer.setSize(window.innerWidth, window.innerHeight);

 document.body.appendChild(renderer.domElement);