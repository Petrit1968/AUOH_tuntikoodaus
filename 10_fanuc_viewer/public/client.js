import * as THREE from "three";

const scene = new THREE.Scene();
const renderer = THREE.WebGLRenderer();

const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75,aspect)
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const render = ()=>{
    renderer.render(scene, camera );
    requestAnimationFrame(render);

}

render();


let socket = io("https://fanuc-ws-server29.herokuapp.com/", {withCredentials: false});

socket.on("joint_values", (joint_values) =>{

    console.log(joint_values);
})