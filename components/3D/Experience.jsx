"use client";
import { Float, PerspectiveCamera, useScroll } from "@react-three/drei";
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import Background from "./Environment/Background";
import { Plane } from "./Meshes/PaperPlane";
import { Cloud1 } from "./Meshes/Cloud1";
import { Cloud3 } from "./Meshes/Cloud3";
import { Cloud2 } from "./Meshes/Cloud2";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { TextSection } from "./TextSection";
import { gsap } from "gsap";
import { fadeOnBeforeCompile } from "@/utils/fadeMaterials";

const LINE_NB_POINTS = 12000;
const CURVE_DISTANCE = 190;
const SLIDING_THRESHOLD = 80;
export default function Experience({}) {
  const curvePoints = useMemo(() => {
    return [
      new THREE.Vector3(0, -10, 0),
      new THREE.Vector3(0, -10, -1 * CURVE_DISTANCE),
      new THREE.Vector3(100 / 2, -10, -2 * CURVE_DISTANCE),
      new THREE.Vector3(0, -10, -3 * CURVE_DISTANCE),
      new THREE.Vector3(0 / 2, -10, -4 * CURVE_DISTANCE),
      // new THREE.Vector3(10, -10, -5 * CURVE_DISTANCE),
      new THREE.Vector3(50, -10, -6 * CURVE_DISTANCE),
      // new THREE.Vector3(-20, -10, -7 * CURVE_DISTANCE),
      new THREE.Vector3(-20, -10, -8 * CURVE_DISTANCE),
      // new THREE.Vector3(-20, -10, -9 * CURVE_DISTANCE),
      // new THREE.Vector3(120, -10, -10 * CURVE_DISTANCE),
      new THREE.Vector3(120, -10, -11 * CURVE_DISTANCE),
      // new THREE.Vector3(0, -10, -12 * CURVE_DISTANCE),
      new THREE.Vector3(0, -10, -13 * CURVE_DISTANCE),
      new THREE.Vector3(0, -10, -14 * CURVE_DISTANCE),
      new THREE.Vector3(0, -10, -15 * CURVE_DISTANCE),
    ];
  }, []);
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(curvePoints, false, "catmullrom", 0.5);
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, []);

  const extrudeSettings = {
    steps: LINE_NB_POINTS,
    extrudePath: curve,
    bevelEnabled: false,
  };

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.4);
    shape.lineTo(0, 0.4);

    return shape;
  }, []);
  // -------------------------- Text Section && Cloud arrays  --------------------------
  const Clouds1 = useMemo(() => {
    return [
      {
        position: new THREE.Vector3(-95, -50, -970),
        scale: new THREE.Vector3(30, 30, 30),
        intensity: 0.3,
        speed: 0.1,
      },
      {
        position: new THREE.Vector3(105, -50, -90),
        scale: new THREE.Vector3(60, 60, 60),
        intensity: 0.3,
        speed: 0.1,
      },
      {
        position: new THREE.Vector3(194, -55, -380),
        scale: new THREE.Vector3(35, 35, 35),
        intensity: 0.5,
        speed: 0.1,
      },
      {
        position: new THREE.Vector3(-120, -40, -500),
        scale: new THREE.Vector3(50, 50, 50),
        intensity: 0.3,
        speed: 0.1,
      },
      {
        position: new THREE.Vector3(119, -35, -1250),
        scale: new THREE.Vector3(30, 30, 30),
        intensity: 0.3,
        speed: 0.1,
      },
    ];
  }, []);
  const Clouds2 = useMemo(() => {
    return [
      {
        position: new THREE.Vector3(-60, -60, -90),
        scale: new THREE.Vector3(45, 45, 45),
        intensity: 0.3,
        speed: 0.1,
      },
      {
        position: new THREE.Vector3(180, -89, -490),
        scale: new THREE.Vector3(30, 30, 30),
        intensity: 0.3,
        speed: 0.1,
      },
      {
        position: new THREE.Vector3(-125, -99, -1300),
        scale: new THREE.Vector3(30, 30, 30),
        intensity: 0.3,
        speed: 0.1,
      },
    ];
  }, []);
  const Clouds3 = useMemo(() => {
    return [
      {
        position: new THREE.Vector3(-115, -15, -280),
        scale: new THREE.Vector3(45, 45, 45),
        intensity: 0.2,
        speed: 0.3,
      },
      {
        position: new THREE.Vector3(-155, -45, -680),
        scale: new THREE.Vector3(45, 45, 45),
        intensity: 0.2,
        speed: 0.3,
      },
      {
        position: new THREE.Vector3(145, -90, -880),
        scale: new THREE.Vector3(45, 45, 45),
        intensity: 0.2,
        speed: 0.3,
      },
    ];
  }, []);
  const textsections = useMemo(() => {
    return [
      {
        railDirection: 0.16,
        position: new THREE.Vector3(
          curvePoints[1].x - 40,
          curvePoints[1].y + 20,
          curvePoints[1].z
        ),
        title: "Info Panel 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab vero aspernatur nostrum recusandae.",
      },
      {
        railDirection: -0.16,
        position: new THREE.Vector3(
          curvePoints[2].x + 15,
          curvePoints[2].y + 20,
          curvePoints[2].z
        ),
        title: "Info Panel 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab vero aspernatur nostrum recusandae.",
      },
      {
        railDirection: 0.16,
        position: new THREE.Vector3(
          curvePoints[3].x - 40,
          curvePoints[3].y + 20,
          curvePoints[3].z
        ),
        title: "Info Panel 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab vero aspernatur nostrum recusandae.",
      },
      {
        railDirection: -0.16,
        position: new THREE.Vector3(
          curvePoints[5].x + 15,
          curvePoints[5].y + 20,
          curvePoints[5].z
        ),
        title: "Info Panel 4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab vero aspernatur nostrum recusandae.",
      },
    ];
  }, []);

  // ------------------------------------------------------------------------------

  const cameraGroup = useRef(null);
  const planeGroup = useRef(null);
  const CameraFocusRail = useRef(null);
  const camera = useRef(null);
  const scroll = useScroll();
  const lastScroll = useRef(0);
  const [Fov, setFov] = useState(30);
  useFrame((_state, delta) => {
    // if(document.visibilityState && !document.hidden){
    //   console.log("inside!: ", document.visibilityState)
    // ------- Responsiveness -------
    if (window.innerWidth > window.innerHeight) {
      //desktop camera Fov and Text size
      if (Fov != 30) {
        setFov(30);
      }
    } else {
      //Mobile camera Fov and Text size
      if (Fov != 80) {
        setFov(80);
      }
    }
    const scrollOffset = Math.max(0, scroll.offset);
    let friction = 1;
    let curPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );
    // ------- Camera-Text Focus Rail -------
    let resetCamera = true;
    const defaultposition = new THREE.Vector3(0, 0, -75);
    textsections.forEach((TextSection) => {
      let distance = null;
      if (cameraGroup?.current?.position) {
        const position = cameraGroup.current.position.clone();

        distance = TextSection.position.distanceTo(
          position.add(defaultposition)
        );
        const modDistance = distance;
        if (modDistance < SLIDING_THRESHOLD) {
          friction = Math.max(distance / SLIDING_THRESHOLD, 0.1);
          // Camera is near Text
          resetCamera = false;
          let rot = Math.min(
            0.25,
            (1 - modDistance / SLIDING_THRESHOLD) * TextSection.railDirection
          );
          const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(0, rot, 0)
          );
          CameraFocusRail.current?.quaternion.slerp(
            targetCameraQuaternion,
            delta * 4
          );
        }
      }
    });
    if (resetCamera) {
      const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(0, 0, 0)
      );
      CameraFocusRail.current?.quaternion.slerp(targetCameraQuaternion, delta);
    }

    let lerpedScrollOffset = THREE.MathUtils.lerp(
      lastScroll.current,
      scrollOffset,
      delta * friction
    );
    // PROTECT BELOW 0 AND ABOVE 1
    lerpedScrollOffset = Math.min(lerpedScrollOffset, 1);
    lerpedScrollOffset = Math.max(lerpedScrollOffset, 0);

    lastScroll.current = lerpedScrollOffset;
    tl.current?.seek(lerpedScrollOffset * tl.current.duration());
    // Follow CurvePath and tilt plane
    const curPoint = curve?.getPoint(lerpedScrollOffset);
    curPointIndex = Math.min(
      Math.round(lerpedScrollOffset * linePoints.length),
      linePoints.length - 1
    );
    // const curPoint = linePoints[curPointIndex];
    const z = curPoint.z + 68;
    cameraGroup.current?.position.lerp(
      new THREE.Vector3(curPoint.x, cameraGroup.current?.position.y, z),
      delta * 24
    );
    if (curPointIndex > 0) {
      const pointHead =
        linePoints[Math.min(curPointIndex - 1, linePoints.length - 1)];
      const xDisplacement = (pointHead.x - linePoints[curPointIndex].x) * 80;

      // PI/2 --> left
      // -PI/2 --> right
      const angleRot =
        (xDisplacement < 0 ? -1 : 1) *
        Math.min(Math.abs(xDisplacement), Math.PI / 3);
      const targetPlaneQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          planeGroup.current?.rotation.x,
          planeGroup.current?.rotation.y,
          angleRot / 2
        )
      );
      const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          cameraGroup.current?.rotation.x,
          angleRot / 10,
          cameraGroup.current?.rotation.z
        )
      );
      planeGroup.current?.quaternion.slerp(targetPlaneQuaternion, delta * 2);
      cameraGroup.current?.quaternion.slerp(targetCameraQuaternion, delta / 2);
    }
  });

  const tl = useRef();
  const backgroundColors = useRef({
    colorA: "#30A2FF",
    colorB: "#C9E8F5",
  });
  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#F2E74B",
      colorB: "#F2E96B",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#D9A714",
      colorB: "#D98F07",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#F2D129",
      colorB: "#F2D230",
    });
    tl.current.pause();
  }, []);
  return (
    <>
      <directionalLight
        castShadow={false}
        position={[0, 13, 1]}
        intensity={1.2}
      />
      {/* <OrbitControls enableZoom /> */}
      <group ref={cameraGroup}>
        <Background backgroundColors={backgroundColors.current} />
        <group ref={CameraFocusRail} position={[0, 2, 15]}>
          <PerspectiveCamera
            makeDefault
            fov={Fov}
            // position={[0, 2, 15]}
            ref={camera}
          />
        </group>
        <group ref={planeGroup} scale={[2, 2, 2]}>
          <Float floatIntensity={2} speed={2} rotationIntensity={0.4}>
            <Plane />
          </Float>
        </group>
      </group>

      {/* --------- Clouds --------- */}
      {Clouds1.map((cloud, index) => {
        return (
          <Float
            key={index}
            floatIntensity={cloud.intensity}
            speed={cloud.speed}
          >
            <Cloud1
              position={cloud.position}
              scale={cloud.scale}
              rotation={[0, 45, 0]}
            />
          </Float>
        );
      })}
      {Clouds2.map((cloud, index) => {
        return (
          <Float
            key={index}
            floatIntensity={cloud.intensity}
            speed={cloud.speed}
          >
            <Cloud2
              position={cloud.position}
              scale={cloud.scale}
              rotation={[0, 45, 0]}
            />
          </Float>
        );
      })}
      {Clouds3.map((cloud, index) => {
        return (
          <Float
            key={index}
            floatIntensity={cloud.intensity}
            speed={cloud.speed}
          >
            <Cloud3
              position={cloud.position}
              scale={cloud.scale}
              rotation={[0, 45, 0]}
            />
          </Float>
        );
      })}
      {/* --------- PATH --------- */}
      <group scale={[1, 1, 1]}>
        <mesh>
          <extrudeGeometry args={[shape, extrudeSettings]} />
          <meshStandardMaterial
            color={"#ffffff"}
            opacity={0.8}
            transparent
            onBeforeCompile={fadeOnBeforeCompile}
          />
        </mesh>
      </group>

      {/* --------- TEXT --------- */}

      {textsections.map((textsection, index) => {
        return <TextSection key={index} {...textsection} />;
      })}
    </>
  );
}
