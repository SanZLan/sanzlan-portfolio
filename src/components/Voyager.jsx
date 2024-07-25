import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useScroll, useTransform, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";

import voyagerModel from "../assets/3d/voyager.glb";
import Loader from "./Loader";

const Voyager = ({ scale, position, scrollContaienr }) => {
	const { scene } = useGLTF(voyagerModel);

	const { scrollYProgress } = useScroll({
		target: scrollContaienr,
		offset: ["start start", "end start"],
	});

	let rotationX1 = useMotionValue(0);
	let rotationY1 = useMotionValue(0);
	let positionX = useMotionValue(0);
	let positionY = useMotionValue(0);
	let positionZ = useMotionValue(0);

	rotationX1 = useTransform(scrollYProgress, [0, 1], ["0.3", "-1"]);
	rotationY1 = useTransform(
		scrollYProgress,
		[0, 0.2, 1],
		["-0.8", "-1.6", "-10"]
	);
	positionX = useTransform(
		scrollYProgress,
		[0, 0.2, 1],
		[position[0], "0", "-3"]
	);
	positionY = useTransform(
		scrollYProgress,
		[0, 0.2, 1],
		[position[1], "-2", "5"]
	);
	positionZ = useTransform(
		scrollYProgress,
		[0, 0.2, 1],
		[position[2], "0", "0"]
	);

	return (
		<motion.mesh
			position={[positionX, positionY, positionZ]}
			scale={scale}
			rotation={[rotationX1, rotationY1, 0]}>
			<primitive object={scene} />
		</motion.mesh>
	);
};

const Lights = () => {
	const directionalLightRef = useRef();
	const pointLightRef = useRef();
	const spotLightRef = useRef();
	const hemisphereLightRef = useRef();

	return (
		<>
			<directionalLight
				position={[2, 2, 2]}
				intensity={1}
				ref={directionalLightRef}
			/>
			<ambientLight intensity={0.3} />
			<pointLight position={[10, 0, 10]} intensity={2} ref={pointLightRef} />
			<spotLight
				position={[-20, 0, 3]}
				angle={0.15}
				penumbra={0}
				intensity={0.5}
				ref={spotLightRef}
			/>
			<hemisphereLight
				skyColor='#b1e1ff'
				groundColor='#000000'
				intensity={1}
				ref={hemisphereLightRef}
			/>
		</>
	);
};

const VoyagerCanvas = ({ scrollContaienr }) => {
	const [scale, setScale] = useState([2, 2, 2]);
	const [position, setPosition] = useState([0.2, -0.7, 0]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 500) {
				setScale([0.3, 0.3, 0.3]);
				setPosition([0, 3, -5]);
			} else if (window.innerWidth < 768) {
				setScale([0.3, 0.3, 0.3]);
				setPosition([1.5, 5, -5]);
			} else if (window.innerWidth < 1024) {
				setScale([0.33, 0.33, 0.33]);
				setPosition([2.5, 5, -7]);
			} else if (window.innerWidth < 1280) {
				setScale([0.5, 0.5, 0.5]);
				setPosition([3, 5.5, -10]);
			} else if (window.innerWidth < 1536) {
				setScale([0.66, 0.66, 0.66]);
				setPosition([3, 5, -10]);
			} else {
				setScale([1, 1, 1]);
				setPosition([6, 5, -15]);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<Canvas
			className={`!absolute w-full h-screen bg-transparent z-40`}
			camera={{ near: 0.1, far: 1000 }}>
			<Suspense fallback={<Loader />}>
				<Lights />
				<Voyager scale={scale} position={position} ref={scrollContaienr} />
			</Suspense>
		</Canvas>
	);
};

export default React.memo(VoyagerCanvas);
