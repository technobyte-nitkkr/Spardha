"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import stars from "../public/assets/stars.jpg";
// import mars_displacement from "../public/assets/displacement.jpeg";
// import mars2 from "../public/assets/mars2.jpg";
// import mars_normal from "../public/assets/mars_normal1.png";
import GuestLectures from "../components/GuestLectures/GuestLectures";
import OurSponsors from "../components/OurSponsors/OurSponsors";
import Navbar from "../components/Landing/navbar";
import Landing from "../components/Landing/landing";
import Events from "../components/Events/Events";
import Footer from "../components/Footer";
import { PopUp } from "../components/PopUp/PopUp";
import Loading from "./loading";
import darkEarth from "../public/assets/darkearth.jpg";

const ThreeScene = () => {
  if (typeof window !== "undefined") {
    const containerRef = useRef<HTMLDivElement>(null);
    const parentDiv = useRef<HTMLDivElement>(null);
    const sec1ref = useRef<HTMLDivElement>(null);
    const sec2ref = useRef<HTMLDivElement>(null);
    const sec3ref = useRef<HTMLDivElement>(null);
    const sec4ref = useRef<HTMLDivElement>(null);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1920 / 1080, 0.1, 10000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const directionalLight = new THREE.DirectionalLight(0x000000, 2); // red
    const directionalLight2 = new THREE.DirectionalLight(0x000000, 1); // blue
    const textureLoader = new THREE.TextureLoader();
    // const diffuseMap = textureLoader.load(mars2.src);
    // const normalMap = textureLoader.load(mars_normal.src);
    // const displacementMap = textureLoader.load(mars_displacement.src);
    const earth = textureLoader.load(darkEarth.src);

    useEffect(() => {
      if (typeof window !== "undefined") {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current?.appendChild(renderer.domElement);
        camera.position.set(0, 100, 60);

        // ERROR gen: use const variables who are not reassigned. // modify to let...
        const targetZoom = new THREE.Vector3(0, 30, 60);
        const initialTime = Date.now();

        const sphereGeometry = new THREE.SphereGeometry(40, 64, 32);
        const sphereMaterial = new THREE.MeshPhysicalMaterial({
          map: earth
        });
        // const sphereMaterial = new THREE.MeshPhysicalMaterial({
        //   map: diffuseMap,
        //   normalMap,
        //   displacementMap,
        //   roughness: 0.7,
        //   metalness: 0.5,
        //   side: THREE.FrontSide,
        //   shadowSide: THREE.DoubleSide,
        // });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);

        directionalLight.castShadow = true;
        directionalLight.position.set(0, 40, 0);
        directionalLight2.position.set(0, -40, 0);
        scene.add(directionalLight);
        scene.add(directionalLight2);
        directionalLight.color.set(0xffffff);
        // directionalLight.color.set(0xff1a1a);
        // directionalLight2.color.set(0x4d4dff);

        const animate = (): void => {
          requestAnimationFrame(animate);
          sphere.rotation.y += 0.001;
          renderer.render(scene, camera);
        };
        animate();

        const zoomToTarget = (): void => {
          const currentTime = Date.now();
          const elapsedTime = currentTime - initialTime;

          const progress = Math.min(elapsedTime / 15000, 1); // change 20000 to adjust the duration

          const newPosition = new THREE.Vector3();
          newPosition.x = THREE.MathUtils.lerp(
            camera.position.x,
            targetZoom.x,
            progress
          );
          newPosition.y = THREE.MathUtils.lerp(
            camera.position.y,
            targetZoom.y,
            progress
          );
          newPosition.z = THREE.MathUtils.lerp(
            camera.position.z,
            targetZoom.z,
            progress
          );

          camera.position.copy(newPosition);

          if (newPosition.distanceTo(targetZoom) > 0.1) {
            requestAnimationFrame(zoomToTarget);
          }
        };

        zoomToTarget();

        const handleResize = (): void => {
          const width: number = window.innerWidth;
          const height: number = window.innerHeight;

          camera.aspect = width / height;
          camera.updateProjectionMatrix();

          renderer.setSize(width, height);
        };
        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }
      else {
        return;
      }
    });

    const handleScroll = (): void => {
      const sec1: number | undefined = sec1ref.current?.offsetTop;
      const sec2: number | undefined = sec2ref.current?.offsetTop;
      const sec3: number | undefined = sec3ref.current?.offsetTop;
      const sec4: number | undefined = sec4ref.current?.offsetTop;
      const scroll: number | undefined = parentDiv.current?.scrollTop;
      const height: number = window.innerHeight;

      // (s, s, s) - (f, f, f)
      // s + (f - s) * (scroll-sec1!)/(sec2!-sec1!)

      if (scroll && scroll < sec2!) {
        camera.position.set(
          // (0, 30, 60) - (-70, 0, 200)
          0 + ((-70 - 0) * (scroll - sec1!)) / height,
          30 + ((0 - 30) * (scroll - sec1!)) / height,
          60 + ((200 - 60) * (scroll - sec1!)) / height
        );
        directionalLight.position.set(
          // (0, 40, 0) - (-60, 0, 0)
          0 + ((-60 - 0) * (scroll - sec1!)) / height,
          40 + ((0 - 40) * (scroll - sec1!)) / height,
          0
        );
        directionalLight2.position.set(
          // (0, -40, 0) - (60, 0, 0)
          0 + ((60 - 0) * (scroll - sec1!)) / height,
          -40 + ((0 - -40) * (scroll - sec1!)) / height,
          0
        );
        camera.fov = 45 + ((30 - 45) * (scroll - sec1!)) / height; // 45 to 30

        camera.updateProjectionMatrix();
      } else if (scroll && scroll <= sec3!) {
        camera.position.set(
          // (-70, 0, 200) - (70, 0, 200)
          -70 + ((70 - -70) * (scroll - sec2!)) / height,
          0,
          200
        );
        directionalLight.position.set(
          // (-60, 0, 0) - (60, 0, 0)
          -60 + ((60 - -60) * (scroll - sec2!)) / height,
          0,
          scroll <= sec2! + height / 2
            ? 0 + ((40 - 0) * (scroll - sec2!)) / (height / 2)
            : 40 - ((40 - 0) * (scroll - (sec2! + height / 2))) / (height / 2)
        );
        directionalLight2.position.set(
          // (60, 0, 0) - (-60, 0, 0)
          60 + ((-60 - 60) * (scroll - sec2!)) / height,
          0,
          scroll <= sec2! + height / 2
            ? 0 + ((-40 - 0) * (scroll - sec2!)) / (height / 2)
            : -40 - ((-40 - 0) * (scroll - (sec2! + height / 2))) / (height / 2)
        );
        directionalLight2.position.set(
          // (60, 0, 0) - (-60, 0, 0)
          60 + ((-60 - 60) * (scroll - sec2!)) / height,
          0,
          scroll <= sec2! + height / 2
            ? 0 + ((-40 - 0) * (scroll - sec2!)) / (height / 2)
            : -40 - ((-40 - 0) * (scroll - (sec2! + height / 2))) / (height / 2)
        );
        camera.fov = 30;

        camera.updateProjectionMatrix();
      } else if (scroll && scroll <= sec4!) {
        camera.position.set(
          // (70, 0, 200) - (0, 30, 60)
          70 + ((0 - 70) * (scroll - sec3!)) / height,
          0 + ((30 - 0) * (scroll - sec3!)) / height,
          200 + ((60 - 200) * (scroll - sec3!)) / height
        );
        directionalLight.position.set(
          // (60, 0, 0) - (0, 40, 0)
          60 + ((0 - 60) * (scroll - sec3!)) / height,
          0 + ((40 - 0) * (scroll - sec3!)) / height,
          0
        );
        directionalLight2.position.set(
          // (-60, 0, 0) - (0, -40, 0)
          -60 + ((0 - -60) * (scroll - sec3!)) / height,
          0 + ((-40 - 0) * (scroll - sec3!)) / height,
          0
        );
        camera.fov = 30 + ((45 - 30) * (scroll - sec3!)) / height; // 30 to 45

        camera.updateProjectionMatrix();
      } else {
        camera.position.set(0, 30, 60);
        directionalLight.position.set(0, 40, 0);
        directionalLight2.position.set(0, -40, 0);
        camera.fov = 45;
      }
    };

    return (
      <div
        className={`w-screen h-screen m-0 p-0 bg-cover bg-center`}
        ref={containerRef}
        style={{
          backgroundImage: `url(${stars.src})`,
        }}
      >
        <div
          className="absolute overflow-y-scroll w-full h-full scroll-smooth snap-y snap-mandatory font-orbitron-l"
          onScroll={handleScroll}
          ref={parentDiv}
        >
          <section
            className="h-screen w-full snap-center"
            id="Home"
            ref={sec1ref}
          >
            <Navbar />
            <Landing />
          </section>
          <section
            className="h-screen w-full snap-center"
            id="Events"
            ref={sec2ref}
          >
            <Events />
          </section>
          <section
            className="h-screen w-full snap-center flex items-center"
            id="GuestLectures"
            ref={sec3ref}
          >
            {" "}
            <GuestLectures />{" "}
          </section>
          <section
            className="h-screen w-full snap-center flex items-center"
            id="Sponsors"
            ref={sec4ref}
          >
            {" "}
            <OurSponsors />{" "}
          </section>
          <section className="h-[15%] w-full snap-center">
            <Footer />
          </section>
        </div>
        <PopUp />
      </div>
    );
  }
  return <Loading />;
};

export default ThreeScene;
