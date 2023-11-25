"use client"
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import stars from '../public/assets/stars.jpg'
import mars_displacement from '../public/assets/displacement.jpeg'
import mars2 from '../public/assets/mars2.jpg'
import mars_normal from '../public/assets/mars_normal1.png'
import GuestLectures from '../components/GuestLectures/GuestLectures';
import OurSponsors from '../components/OurSponsors/OurSponsors';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentDiv = useRef<HTMLDivElement>(null);
  const sec1ref = useRef<HTMLDivElement>(null);
  const sec2ref = useRef<HTMLDivElement>(null);
  const sec3ref = useRef<HTMLDivElement>(null);
  const sec4ref = useRef<HTMLDivElement>(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1920/1080, 0.1, 10000);
  const renderer = new THREE.WebGLRenderer();
  const directionalLight = new THREE.DirectionalLight(0x000000, 2); // red
  const directionalLight2 = new THREE.DirectionalLight(0x000000, 1); // blue
  const textureLoader = new THREE.TextureLoader();
  const diffuseMap = textureLoader.load(mars2.src);
  const normalMap = textureLoader.load(mars_normal.src);
  const displacementMap = textureLoader.load(mars_displacement.src);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.set(0, 3000, 60);
      var targetZoom = new THREE.Vector3(0, 30, 60);
      var initialTime = Date.now();

      var sphereGeometry = new THREE.SphereGeometry(40, 64, 32);
      var sphereMaterial = new THREE.MeshPhysicalMaterial({
        map: diffuseMap,
        normalMap: normalMap,
        displacementMap: displacementMap,
        roughness: 0.7,
        metalness: 0.5,
        side: THREE.FrontSide,
        shadowSide: THREE.DoubleSide
      });
      var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(sphere);

      directionalLight.castShadow = true
      directionalLight.position.set(0, 40, 0)
      directionalLight2.position.set(0, -40, 0)
      scene.add(directionalLight);
      scene.add(directionalLight2);
      directionalLight.color.set(0xFF1A1A)
      directionalLight2.color.set(0x4D4DFF)

      // const loader = new THREE.CubeTextureLoader();
      // const spaceTexture = loader.load([
      //   'stars.jpg', 'stars.jpg',
      //   'stars.jpg', 'stars.jpg',
      //   'stars.jpg', 'stars.jpg'
      // ], () => {
      //   renderer.render(scene, camera);
      // });

      // scene.background = spaceTexture;

      const bgTexture = textureLoader.load(stars.src, () => {
        renderer.render(scene, camera);
      });

      const bgGeometry = new THREE.SphereGeometry(5000, 64, 32);
      bgGeometry.scale(-1, 1, 1);
      const bgMaterial = new THREE.MeshBasicMaterial({ map: bgTexture });
      const bg = new THREE.Mesh(bgGeometry, bgMaterial);
      scene.add(bg);

      const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.0005;
        renderer.render(scene, camera);
      }
      animate();

      const zoomToTarget = () => {
        var currentTime = Date.now();
        var elapsedTime = currentTime - initialTime;

        var progress = Math.min(elapsedTime / 50000, 1); // change 20000 to adjust the duration

        var newPosition = new THREE.Vector3();
        newPosition.x = THREE.MathUtils.lerp(camera.position.x, targetZoom.x, progress);
        newPosition.y = THREE.MathUtils.lerp(camera.position.y, targetZoom.y, progress);
        newPosition.z = THREE.MathUtils.lerp(camera.position.z, targetZoom.z, progress);

        camera.position.copy(newPosition);

        if (newPosition.distanceTo(targetZoom) > 0.1) {
          requestAnimationFrame(zoomToTarget);
        }
      }

      zoomToTarget();

      const handleResize = () => {
        const width: number = window.innerWidth;
        const height: number = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const handleScroll = () => {
    const sec1: number | undefined = sec1ref.current?.offsetTop;
    const sec2: number | undefined = sec2ref.current?.offsetTop;
    const sec3: number | undefined = sec3ref.current?.offsetTop;
    const sec4: number | undefined = sec4ref.current?.offsetTop;
    const scroll: number | undefined = parentDiv.current?.scrollTop;
    const height: number = window.innerHeight;

    // (s, s, s) - (f, f, f)
    // s + (f - s) * (scroll-sec1!)/(sec2!-sec1!)

    if (scroll && scroll < sec2!) {

      camera.position.set( // (0, 30, 60) - (-70, 0, 200)
        0 + (-70 - 0) * (scroll - sec1!) / height,
        30 + (0 - 30) * (scroll - sec1!) / height,
        60 + (200 - 60) * (scroll - sec1!) / height
      );
      directionalLight.position.set( // (0, 40, 0) - (-60, 0, 0)
        0 + (-60 - 0) * (scroll - sec1!) / height,
        40 + (0 - 40) * (scroll - sec1!) / height,
        0
      );
      directionalLight2.position.set( // (0, -40, 0) - (60, 0, 0)
        0 + (60 - 0) * (scroll - sec1!) / height,
        -40 + (0 - (-40)) * (scroll - sec1!) / height,
        0
      );
      camera.fov = 45 + (30 - 45) * (scroll - sec1!) / height; // 45 to 30

      camera.updateProjectionMatrix();
    } else if (scroll && scroll <= sec3!) {

      camera.position.set( // (-70, 0, 200) - (70, 0, 200)
        -70 + (70 - (-70)) * (scroll - sec2!) / height,
        0,
        200
      );
      directionalLight.position.set( // (-60, 0, 0) - (60, 0, 0)
        -60 + (60 - (-60)) * (scroll - sec2!) / height,
        0,
        (scroll <= sec2! + height / 2) ?
          0 + (40 - 0) * (scroll - sec2!) / (height / 2) :
          40 - (40 - 0) * (scroll - (sec2! + height / 2)) / (height / 2)
      );
      directionalLight2.position.set( // (60, 0, 0) - (-60, 0, 0)
        60 + (-60 - 60) * (scroll - sec2!) / height,
        0,
        (scroll <= sec2! + height / 2) ?
          0 + (-40 - 0) * (scroll - sec2!) / (height / 2) :
          -40 - (-40 - 0) * (scroll - (sec2! + height / 2)) / (height / 2)
      );
      camera.fov = 30;

      camera.updateProjectionMatrix();
    } else if (scroll && scroll <= sec4!) {

      camera.position.set( // (70, 0, 200) - (0, 30, 60)
        70 + (0 - 70) * (scroll - sec3!) / height,
        0 + (30 - 0) * (scroll - sec3!) / height,
        200 + (60 - 200) * (scroll - sec3!) / height
      );
      directionalLight.position.set( // (60, 0, 0) - (0, 40, 0)
        60 + (0 - 60) * (scroll - sec3!) / height,
        0 + (40 - 0) * (scroll - sec3!) / height,
        0
      );
      directionalLight2.position.set( // (-60, 0, 0) - (0, -40, 0)
        -60 + (0 - (-60)) * (scroll - sec3!) / height,
        0 + (-40 - 0) * (scroll - sec3!) / height,
        0
      );
      camera.fov = 30 + (45 - 30) * (scroll - sec3!) / height; // 30 to 45

      camera.updateProjectionMatrix();
    } else {
      camera.position.set(0, 30, 60);
      directionalLight.position.set(0, 40, 0);
      directionalLight2.position.set(0, -40, 0);
      camera.fov = 45;
    }
  };
  renderer.render(scene, camera);

  return (
    <>
      <div className='w-screen h-screen m-0 p-0 bg-cover bg-center' ref={containerRef}>
        <div className='absolute overflow-y-scroll w-full h-full scroll-smooth snap-y snap-mandatory' ref={parentDiv} onScroll={handleScroll}>
          <section className='h-screen w-full snap-center' ref={sec1ref}>Section 1</section>
          <section className='h-screen w-full snap-center' ref={sec2ref}>Section 2</section>
          <section className='h-screen w-full snap-center flex items-center' ref={sec3ref}> <GuestLectures /> </section>
          <section className='h-screen w-full snap-center flex items-center' ref={sec4ref}> <OurSponsors /> </section>
          <section className='h-1/3 w-full snap-center bg-black'>Footer</section>
        </div>
      </div>
    </>
  )
};
export default ThreeScene;
