"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three"; // npm install three @types/three
// import myImage from "../public/assets/abstractimage.jpg";
import stars from "../public/assets/stars.jpg";
import mars from "../public/assets/mars.jpg";
import GuestLectures from "../components/GuestLectures/GuestLectures";
import OurSponsors from "../components/OurSponsors/OurSponsors";
import Footer from "../components/Footer";
import Landing from "../components/Landing/landing";
import Navbar from "../components/Landing/navbar";
import Events from "../components/Events/Events";

const ThreeScene = () => {
  if (typeof window !== 'undefined') {
    const containerRef = useRef<HTMLDivElement>(null);
    const parentDiv = useRef<HTMLDivElement>(null);
    const sec1ref = useRef<HTMLDivElement>(null);
    const sec2ref = useRef<HTMLDivElement>(null);
    const sec3ref = useRef<HTMLDivElement>(null);
    const sec4ref = useRef<HTMLDivElement>(null);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
    });
    const directionalLight = new THREE.DirectionalLight(0x860111, 2);


    // console.log(window.innerWidth, window.innerHeight);

    useEffect(() => {
      if (typeof window !== "undefined") {
        // Code related to window should be inside this block

        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current?.appendChild(renderer.domElement);
        camera.position.set(0, 30, 60);

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(mars.src, () => {
          renderer.render(scene, camera);
        });

        const sphereGeometry = new THREE.SphereGeometry(40, 64, 32);
        const sphereMaterial = new THREE.MeshPhysicalMaterial({ map: texture });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);

        directionalLight.position.set(0, 40, 0);
        scene.add(directionalLight);

        const animate = (): void => {
          requestAnimationFrame(animate);
          sphere.rotation.y += 0.001;
          renderer.render(scene, camera);
        };
        animate();

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

    },);

    const handleScroll = (): void => {
      const sec1: number = sec1ref.current!.offsetTop;
      const sec2: number = sec2ref.current!.offsetTop;
      const sec3: number = sec3ref.current!.offsetTop;
      const sec4: number = sec4ref.current!.offsetTop;
      const scroll: number | undefined = parentDiv.current?.scrollTop;
      const height: number = window.innerHeight;

      // (s, s, s) - (f, f, f)
      // s + (f - s) * (scroll-sec1!)/(sec2!-sec1!)

      if (scroll && scroll < sec2) {
        camera.position.set(
          // (0, 30, 60) - (-70, 0, 200)
          0 + ((-70 - 0) * (scroll - sec1)) / height,
          30 + ((0 - 30) * (scroll - sec1)) / height,
          60 + ((200 - 60) * (scroll - sec1)) / height
        );
        directionalLight.position.set(
          // (0, 40, 0) - (-60, 0, 0)
          0 + ((-60 - 0) * (scroll - sec1)) / height,
          40 + ((0 - 40) * (scroll - sec1)) / height,
          0
        );
        camera.fov = 45 + ((30 - 45) * (scroll - sec1)) / height; // 45 to 30

        camera.updateProjectionMatrix();
      } else if (scroll && scroll <= sec3) {
        camera.position.set(
          // (-70, 0, 200) - (70, 0, 200)
          -70 + ((70 - -70) * (scroll - sec2)) / height,
          0,
          200
        );
        directionalLight.position.set(
          // (-60, 0, 0) - (60, 0, 0)
          -60 + ((60 - -60) * (scroll - sec2)) / height,
          0,
          scroll <= sec2 + height / 2
            ? 0 + ((40 - 0) * (scroll - sec2)) / (height / 2)
            : 40 - ((40 - 0) * (scroll - (sec2 + height / 2))) / (height / 2)
        );
        camera.fov = 30;

        camera.updateProjectionMatrix();
      } else if (scroll && scroll <= sec4) {
        camera.position.set(
          // (70, 0, 200) - (0, 30, 60)
          70 + ((0 - 70) * (scroll - sec3)) / height,
          0 + ((30 - 0) * (scroll - sec3)) / height,
          200 + ((60 - 200) * (scroll - sec3)) / height
        );
        directionalLight.position.set(
          // (60, 0, 0) - (0, 40, 0)
          60 + ((0 - 60) * (scroll - sec3)) / height,
          0 + ((40 - 0) * (scroll - sec3)) / height,
          0
        );
        camera.fov = 30 + ((45 - 30) * (scroll - sec3)) / height; // 30 to 45

        camera.updateProjectionMatrix();
      } else {
        camera.position.set(0, 30, 60);
        directionalLight.position.set(0, 40, 0);
        camera.fov = 45;
      }
    };
    renderer.render(scene, camera);

    return (

      <div
        className={`w-screen h-screen m-0 p-0 bg-cover bg-center bg-[${stars.src}]`}
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
      </div>
    );
  };
};
export default ThreeScene;
