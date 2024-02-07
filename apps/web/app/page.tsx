"use client";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import stars from "../public/assets/stars.jpg";
import stars_jugaad from "../public/assets/stars_jugaad.jpg"
import GuestLectures from "../components/GuestLectures/GuestLectures";
import OurSponsors from "../components/OurSponsors/OurSponsors";
import Navbar from "../components/Landing/navbar";
import Landing from "../components/Landing/landing";
import Events from "../components/Events/Events";
import Footer from "../components/Footer";
import PopUp from "../components/PopUp/PopUp";
import NotificationsPopUp from "../components/Landing/NotificationPopUp";
import Loading from "./loading";
import darkEarth from "../public/assets/orange-details-moon-texture-concept.jpg";
import "@fontsource/orbitron";
import "@fontsource/orbitron/400.css"; 
import "./page.module.css"
const ThreeScene = () => {
  if (typeof window !== "undefined") {
    const containerRef = useRef<HTMLDivElement>(null);
    const parentDiv = useRef<HTMLDivElement>(null);
    const sec1ref = useRef<HTMLDivElement>(null);
    const sec2ref = useRef<HTMLDivElement>(null);
    const sec3ref = useRef<HTMLDivElement>(null);
    const sec4ref = useRef<HTMLDivElement>(null);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const directionalLight = new THREE.DirectionalLight(0x000000, 2); // red
    const directionalLight2 = new THREE.DirectionalLight(0x000000, 1); // blue
    const textureLoader = new THREE.TextureLoader();
    const earth = textureLoader.load(darkEarth.src);
    const splineViewer = document.createElement("script");
    splineViewer.type = "module";
    splineViewer.src =
      "https://unpkg.com/@splinetool/viewer@1.0.50/build/spline-viewer.js";
    document.head.appendChild(splineViewer);

    useEffect(() => {
      const splineViewerElement = document.createElement("spline-viewer");
      splineViewerElement.setAttribute(
        "url",
        "https://prod.spline.design/DKl0M3fONV9qvLeP/scene.splinecode"
      );
    
    
      containerRef.current?.appendChild(splineViewerElement);

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.set(0, 100, 60);

      const targetZoom = new THREE.Vector3(0, 15, 90);
      const initialTime = Date.now();

      const sphereGeometry = new THREE.SphereGeometry(40, 64, 32);
      const sphereMaterial = new THREE.MeshPhysicalMaterial({
        map: earth,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(sphere);

      directionalLight.castShadow = true;
      directionalLight.position.set(0, 40, 0);
      directionalLight2.position.set(0, -40, 0);
      scene.add(directionalLight);
      scene.add(directionalLight2);
      directionalLight.color.set(0xffffff);

      const animate = (): void => {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.001;
        renderer.render(scene, camera);
      };
      animate();

      const zoomToTarget = (): void => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - initialTime;

        const progress = Math.min(elapsedTime / 15000, 1);

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
      // const handleScroll = (): void => {
      //   const secRefs = [sec1ref, sec2ref, sec3ref, sec4ref];
      //   const scroll: number | undefined = parentDiv.current?.scrollTop;
      //   const height: number = window.innerHeight;
  
      //   if (scroll !== undefined) {
      //     secRefs.forEach((secRef, index) => {
      //       const section: number | undefined = secRef.current?.offsetTop;
      //       const nextSection: number | undefined = secRefs[index + 1]?.current?.offsetTop;
  
      //       if (section !== undefined && nextSection !== undefined) {
      //         if (scroll >= section && scroll <= nextSection) {
      //           const progress = (scroll - section) / (nextSection - section);
  
      //           if (index === 0 || index === 3) {
      //             // First and last sections
      //             camera.position.set(
      //               0 + progress * (60 - 0),
      //               30 + progress * (0 - 30),
      //               60 + progress * (200 - 60)
      //             );
  
      //             directionalLight.position.set(
      //               0 + progress * (0 - 60),
      //               40 + progress * (0 - 40),
      //               0
      //             );
  
      //             directionalLight2.position.set(
      //               0 + progress * (0 - 60),
      //               -40 + progress * (0 - -40),
      //               0
      //             );
      //           } else if (index === 1) {
      //             // Second section (move to the left)
      //             camera.position.set(-70, 0, 200);
      //             directionalLight.position.set(-60, 0, 40);
      //             directionalLight2.position.set(60, 0, -40);
      //             camera.fov = 30;
      //             camera.updateProjectionMatrix();
      //           } else if (index === 2) {
      //             // Third section (move to the right)
      //             camera.position.set(70, 30, 200);
      //             directionalLight.position.set(60, 40, 0);
      //             directionalLight2.position.set(-60, -40, 0);
      //             camera.fov = 45;
      //             camera.updateProjectionMatrix();
      //           }
  
      //           return () => {
      //             // Clean up when the component unmounts
      //             document.head.removeChild(splineViewer);
      //             containerRef.current?.removeChild(splineViewerElement);
      //           };
      //         }
      //       }
      //     });
      //   }
      // };
  
      
      const handleScroll = (): void => {
        const secRefs = [sec1ref, sec2ref, sec3ref, sec4ref];
        const scroll: number | undefined = parentDiv.current?.scrollTop;
        const height: number = window.innerHeight;
  
        if (scroll !== undefined) {
          secRefs.forEach((secRef, index) => {
            const section: number | undefined = secRef.current?.offsetTop;
            const nextSection: number | undefined = secRefs[index + 1]?.current?.offsetTop;
  
            if (section !== undefined && nextSection !== undefined) {
              if (scroll >= section && scroll <= nextSection) {
                const progress = (scroll - section) / (nextSection - section);
  
                if (index === 0 || index === 3) {
                  // First and last sections
                  camera.position.set(
                    0 + progress * (60 - 0),
                    30 + progress * (0 - 30),
                    60 + progress * (200 - 60)
                  );
  
                  directionalLight.position.set(
                    0 + progress * (0 - 60),
                    40 + progress * (0 - 40),
                    0
                  );
  
                  directionalLight2.position.set(
                    0 + progress * (0 - 60),
                    -40 + progress * (0 - -40),
                    0
                  );
                } else if (index === 1) {
                  // Second section (move to the left)
                  camera.position.set(-70, 0, 200);
                  directionalLight.position.set(-60, 0, 40);
                  directionalLight2.position.set(60, 0, -40);
                  camera.fov = 30;
                  camera.updateProjectionMatrix();
                } else if (index === 2) {
                  // Third section (move to the right)
                  camera.position.set(70, 30, 200);
                  directionalLight.position.set(60, 40, 0);
                  directionalLight2.position.set(-60, -40, 0);
                  camera.fov = 45;
                  camera.updateProjectionMatrix();
                }
  
                return;
              }
            }
          });
        }
      };  

      if (parentDiv.current) {
        parentDiv.current.addEventListener("scroll", handleScroll);
      }

      return () => {
        window.removeEventListener("resize", handleResize);
        if (parentDiv.current) {
          parentDiv.current.removeEventListener("scroll", handleScroll);
        }
      };
    }, []);

    const [visible, setVisible] = useState<boolean>(false);
    const [visibleNotifications, setVisibleNotifications] =
      useState<boolean>(false);

      return (
        <div className="w-screen h-screen m-0 p-0">
          <PopUp visible={visible} setVisible={setVisible} />
          <NotificationsPopUp
            visibleNotifications={visibleNotifications}
            setVisibleNotifications={setVisibleNotifications}
          />
          <div
            className={`w-screen h-screen m-0 p-0 bg-cover bg-center`}
            ref={containerRef}
            style={{
              backgroundImage: `url(${stars.src})`,
            }}
          >
          <div
          className="jugaad_image absolute bottom-0 right-0 w-[257px] h-[127px] z-10"
          style={{
            backgroundImage: `url(${stars_jugaad.src})`,
            
          }}
        ></div>
            
            <div
              className="absolute overflow-y-scroll w-full h-full scroll-smooth snap-y snap-mandatory font-orbitron-l z-10"
              ref={parentDiv}
            >
  
            <section
              className="h-screen w-full snap-center flex flex-col md:gap-4"
              id="Home"
              ref={sec1ref}
            >
              <Navbar />
              <Landing
                visibleNotifications={visibleNotifications}
                setVisibleNotifications={setVisibleNotifications}
              />
            </section>

            <section
              className="h-screen w-full snap-center"
              id="Events"
              ref={sec2ref}
            >
              <Events visible={visible} setVisible={setVisible} />
            </section>
            <section
              className="h-screen w-full snap-center flex items-center"
              id="GuestLectures"
              ref={sec3ref}
            >
              <GuestLectures />
            </section>
            <section
              className="h-screen w-full snap-center flex items-center"
              id="Sponsors"
              ref={sec4ref}
            >
              <OurSponsors />
            </section>
            <section className="h-[15%] w-full snap-center">
              <Footer />
            </section>

          </div>
        </div>
      </div>

    );
  }

  return <Loading />;
};

export default ThreeScene;
