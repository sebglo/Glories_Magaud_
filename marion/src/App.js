import React, { useEffect } from 'react';
import "aframe";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import sky from "./models/night-sky-stars.jpg";
import mountains from "./models/mountainous_desert.glb";
import bunker from "./models/star_wars_endor_bunker.glb"
import character from "./models/kera_the_archer_desert_fox.glb"
import walking from "./models/Walking.fbx"


const App = () => {
  useEffect(() =>{
  const gltfLoader = new GLTFLoader();
  const fbxLoader = new FBXLoader();
  gltfLoader.load(mountains, (d) => {
    const entity = document.getElementById("mountains");
    entity.object3D.add(d.scene);
  });

  gltfLoader.load(bunker, (d) => {
    const bunkerEntity = document.getElementById("bunker");
    bunkerEntity.object3D.add(d.scene);
    bunkerEntity.object3D.rotation.set(0, 45, 0);
  });

    // Charger le personnage
    gltfLoader.load(character, (d) => {
      const characterEntity = document.getElementById("character");
      characterEntity.object3D.add(d.scene);
      characterEntity.object3D.position.set(5, -5, 10); // Ajuster la position du personnage
      characterEntity.object3D.scale.set(2, 2, 2); // Ajuster l'échelle du personnage si nécessaire
      characterEntity.object3D.rotation.set(0, 0, 0); // Ajuster la rotation si nécessaire
    });

    fbxLoader.load(walking, (d) => {
      const walkingEntity = document.getElementById("walking");
      walkingEntity.object3D.add(d.scene);
      walkingEntity.object3D.position.set(5, -5, 10);
      walkingEntity.object3D.scale.set(1, 1, 1);
      walkingEntity.object3D.rotation.set(0, 0, 0);
    });
}, []);

  return (  
    <a-scene>
      <a-assets>
        <img id="sky" src={sky} alt="sky" crossOrigin="anonymous"/>
      </a-assets>
      <a-entity id="mountains" position = "0 -100 0" scale ="-1 -1 -1"></a-entity>
      <a-entity id="bunker" position = "15 15 5" scale ="3 3 3"></a-entity>
      <a-entity id="character" position="0 0 0" animation-mixer="clip: *; loop: repeat; timeScale: 1"></a-entity>
      <a-entity id="walking"></a-entity>
      <a-sky src='#sky' rotation="0 0 0"></a-sky>
    </a-scene>
  )
}

export default App;
