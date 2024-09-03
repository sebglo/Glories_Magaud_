// import React from 'react';
// import 'aframe';
// import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
// import sky from "./models/sky.jpg";
// import land from "./models/vaporwave_mountains.glb";
// import character from "./models/drone.glb"; // Chemin vers votre modèle 3D du personnage


// const App = () => {
  
//   const loader = new GLTFLoader();
//   // Charger le personnage
//   loader.load(character, (d) => {
//     const characterEntity = document.getElementById("character");
//     characterEntity.object3D.add(d.scene);
//     characterEntity.object3D.position.set(20, 10, -30); // Ajuster la position du personnage
//     characterEntity.object3D.scale.set(1, 1, 1); // Ajuster l'échelle du personnage si nécessaire
//     characterEntity.object3D.rotation.set(0, Math.PI, 0); // Ajuster la rotation si nécessaire
//   });
//   loader.load(land, (d) => {
//     const entity = document.getElementById("land");
//     entity.object3D.add(d.scene);
//   })
//     return (
//       <a-scene>
//         <a-assets>
//           <img id="sky" src={sky} alt="" />
//         </a-assets>
//         <a-entity id="land" position="0 0 0" scale="15 15 15">
//         </a-entity>
//         <a-entity id="character" position="0 0 0">
//         </a-entity>
//         <a-sky color="FFFFFF" material="src:#sky" rotation="0 0 0">
//         </a-sky>
//       </a-scene>
//     )
// }

// export default App;


// import React, { useEffect } from 'react';
// import 'aframe';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import sky from "./models/sky.jpg";
// import land from "./models/vaporwave_mountains.glb";
// import drone from "./models/drone.glb"; // Chemin vers votre modèle 3D du drone

// const App = () => {
//   useEffect(() => {
//     const loader = new GLTFLoader();
//     // Charger le terrain
//     loader.load(land, (d) => {
//       const landEntity = document.getElementById('land');
//       landEntity.object3D.add(d.scene);
//     });

//     // Charger le drone
//     loader.load(drone, (d) => {
//       const droneEntity = document.getElementById('drone');
//       droneEntity.object3D.add(d.scene);
//       droneEntity.object3D.position.set(20, 10, -30); // Position initiale du drone
//       droneEntity.object3D.scale.set(1, 1, 1); // Échelle du drone
//       droneEntity.object3D.rotation.set(0, Math.PI, 0); // Rotation du drone

//       // Exemple de mouvement simple avec une animation
//       // Définir une animation basique pour faire bouger le drone
//       droneEntity.setAttribute('animation', {
//         property: 'position',
//         to: '25 10 -30',
//         dur: 2000,
//         easing: 'linear',
//         loop: true
//       });
//     });
//   }, []);

//   return (
//     <a-scene>
//       <a-assets>
//         <img id="sky" src={sky} alt="" />
//       </a-assets>
//       <a-entity id="land" position="0 0 0" scale="15 15 15"></a-entity>
//       <a-entity id="drone" position="0 1 0">
//         {/* Le modèle du drone est chargé ici */}
//       </a-entity>
//       <a-sky color="FFFFFF" material="src:#sky" rotation="0 0 0"></a-sky>
//     </a-scene>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import 'aframe';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import sky from "./models/sky.jpg";
import land from "./models/vaporwave_mountains.glb";
import drone from "./models/drone.glb"; // Chemin vers votre modèle 3D du drone

const App = () => {
  useEffect(() => {
    const loader = new GLTFLoader();
    
    // Charger le terrain
    loader.load(land, (d) => {
      const landEntity = document.getElementById('land');
      landEntity.object3D.add(d.scene);
    });

    // Charger le drone
    loader.load(drone, (d) => {
      const droneEntity = document.getElementById('drone');
      droneEntity.object3D.add(d.scene);
      droneEntity.object3D.position.set(20, 10, -30); // Position initiale du drone
      droneEntity.object3D.scale.set(1, 1, 1); // Échelle du drone
      droneEntity.object3D.rotation.set(0, Math.PI, 0); // Rotation du drone

      // Exemple de mouvement simple avec une animation
      // Définir une animation basique pour faire bouger le drone
      droneEntity.setAttribute('animation', {
        property: 'position',
        to: '25 10 -30',
        dur: 2000,
        easing: 'linear',
        loop: true
      });
    });
  }, []);

  return (
    <a-scene>
      <a-assets>
        <img id="sky" src={sky} alt="" />
      </a-assets>

      <a-entity id="land" position="0 0 0" scale="15 15 15"></a-entity>

      {/* Drone avec caméra intégrée */}
      <a-entity id="drone" position="20 10 -30">
        <a-camera position="10 10 -10" look-controls="enabled: true">
          <a-cursor></a-cursor>
        </a-camera>
      </a-entity>

      <a-sky color="FFFFFF" material="src:#sky" rotation="0 0 0"></a-sky>
    </a-scene>
  );
}

export default App;
