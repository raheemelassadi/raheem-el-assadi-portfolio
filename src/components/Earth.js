import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import countries from './custom.geo.json';
import lines from './lines.json';
import map from './map.json';
import ThreeGlobe from 'three-globe';

import './globe.scss'




const EarthGlobe = () => {
    const containerRef = useRef(null);
  
    useEffect(() => {
      let renderer, camera, scene, controls;
      let mouseX = 0;
      let mouseY = 0;
      let windowHalfX = window.innerWidth / 2;
      let windowHalfY = window.innerHeight / 2;
      let Globe;
  
      init();
      initGlobe();
      onWindowResize();
      animate();
  
      function init() {
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        containerRef.current.appendChild(renderer.domElement);
      
        scene = new THREE.Scene();
      
        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xbbbbbb, 0.3);
        scene.add(ambientLight);
        scene.background = new THREE.Color(0x000000); // Set background color to black
      
        camera = new THREE.PerspectiveCamera();
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      
        // Add directional lights
        const dLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dLight.position.set(-800, 2000, 400);
        camera.add(dLight);
      
        const dLight1 = new THREE.DirectionalLight(0x7982f6, 1);
        dLight1.position.set(-200, 500, 200);
        camera.add(dLight1);
      
        const dLight2 = new THREE.PointLight(0x8566cc, 0.5);
        dLight2.position.set(-200, 500, 200);
        camera.add(dLight2);
      
        camera.position.z = 400;
        camera.position.x = 0;
        camera.position.y = 0;
      
        scene.add(camera);
      
        scene.fog = new THREE.Fog(0x535ef3, 400, 2000);
      
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dynamicDampingFactor = 0.01;
        controls.enablePan = false;
        controls.minDistance = 400;
        controls.maxDistance = 400;
        controls.rotateSpeed = 0.8;
        controls.enableRotate = true;
        controls.autoRotate = true;
      
        controls.minPolarAngle = Math.PI / 3.5;
        controls.maxPolarAngle = Math.PI - Math.PI / 3;
      
        window.addEventListener('resize', onWindowResize, false);
        document.addEventListener('mousemove', onMouseMove);
      }
      
  
      function initGlobe() {
        Globe = new ThreeGlobe({
          waitForGlobeReady: true,
          animateIn: true,
        })
          .hexPolygonsData(countries.features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.7)
          .showAtmosphere(true)
          .atmosphereColor('#3a228a')
          .atmosphereAltitude(0.25);
  
        setTimeout(() => {
          Globe.arcsData(lines.pulls)
            .arcColor((e) => (e.status ? '#9cff00' : '#ff4000'))
            .arcAltitude((e) => e.arcAlt)
            .arcStroke((e) => (e.status ? 0.5 : 0.3))
            .arcDashLength(0.9)
            .arcDashGap(4)
            .arcDashAnimateTime(2000)
            .arcsTransitionDuration(2000)
            .arcDashInitialGap((e) => e.order * 1)
            .labelsData(map.maps)
            .labelColor(() => '#ffcb21')
            .labelDotRadius(0.3)
            .labelSize((e) => e.size)
            .labelText('city')
            .labelResolution(6)
            .labelAltitude(0.01)
            .pointsData(map.maps)
            .pointColor(() => '#ffffff')
            .pointsMerge(true)
            .pointAltitude(0.07)
            .pointRadius(0.05);
        }, 1000);
  
        Globe.rotateY(-Math.PI * (5 / 9));
        Globe.rotateZ(-Math.PI / 6);
        const globeMaterial = Globe.globeMaterial();
        globeMaterial.color = new THREE.Color(0x3a228a);
        globeMaterial.emissive = new THREE.Color(0x220038);
        globeMaterial.emissiveIntensity = 0.1;
        globeMaterial.shininess = 0.7;
  
        scene.add(Globe);
      }
  
      function onMouseMove(event) {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
      }
  
      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        windowHalfX = window.innerWidth / 1.5;
        windowHalfY = window.innerHeight / 1.5;
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
  
      function animate() {
        camera.position.x +=
          Math.abs(mouseX) <= windowHalfX / 2 ? (mouseX / 2 - camera.position.x) * 0.005 : 0;
        camera.position.y += (-mouseY / 2 - camera.position.y) * 0.005;
        camera.lookAt(scene.position);
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
  
      // Clean up
      return () => {
        renderer.dispose();
        containerRef.current.removeChild(renderer.domElement);
      };
    }, []);
  
    return <div ref={containerRef} className='globe-container'/>;
  };
  
  export default EarthGlobe;
  