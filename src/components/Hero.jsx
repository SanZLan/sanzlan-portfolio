import { motion, useScroll, useMotionValue } from "framer-motion";
import React, { useRef, useEffect } from "react";
import Voyager from "./Voyager";
import Position from "./Position";

const Hero = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const layer1 = useMotionValue("0vh");
	const layer2 = useMotionValue("0vh");
	const layer3 = useMotionValue("0vh");
	const textY = useMotionValue("0vh");

	useEffect(() => {
		const unsubscribeLayer1 = scrollYProgress.onChange((value) =>
			layer1.set(`${value * 200}vh`)
		);

		const unsubscribeLayer2 = scrollYProgress.onChange((value) =>
			layer2.set(
				value <= 0.5 ? `${value * 200}vh` : `${(value - 0.5) * 120 + 100}vh`
			)
		);

		const unsubscribeLayer3 = scrollYProgress.onChange((value) =>
			layer3.set(value <= 0.5 ? `${value * 200}vh` : `${100}vh`)
		);

		const unsubscribeTextY = scrollYProgress.onChange((value) =>
			textY.set(
				value <= 0.5 ? `${value * 200}vh` : `${(value - 0.5) * 150 + 100}vh`
			)
		);

		return () => {
			unsubscribeLayer1();
			unsubscribeLayer2();
			unsubscribeLayer3();
			unsubscribeTextY();
		};
	}, [scrollYProgress, layer1, layer2, layer3, textY]);

	return (
		<div
			ref={ref}
			className='relative top-0 w-full h-hero overflow-hidden grid'>
			<motion.div style={{ y: textY }} className='relative z-10 -mt-0'>
				<div className='parallax__content relative ml-4 top-[8%] sm:ml-8 sm:top-[10%] lg:top-[10%] w-full mx-auto lg:pl-[6rem] lg:pr-[6rem] xl:pl-[10rem] xl:pr-40 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row lg:items-end'>
					<div className='flex-1 lg:mb-0'>
						<h1 className='font-medium max-w-[80%] text-white text-[40px] sm:text-[38px] md:text-[50px] lg:text-[70px] 2xl:text-[120px] 3xl:text-[150px]'>
							SANTIAGO ZULUAGA
						</h1>
						<Position />
					</div>
					<div className='flex-1 flex justify-start lg:justify-center mt-4 sm:mt-14 lg:mt-10 2xl:mt-0'>
						<div className='font-bold text-[25px] mt-8 lg:-mb-4 xl:mb-0 sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left'>
							Passionate about <br /> science, technology and astronomy.
						</div>
					</div>
				</div>
			</motion.div>

			<motion.div
				className='absolute h-screen inset-0 z-0'
				style={{
					backgroundImage: `url(./Layer1.png)`,
					backgroundPosition: "top",
					backgroundSize: "cover",
					y: layer1,
					willChange: "transform",
				}}
			/>
			<motion.div
				className='absolute h-screen inset-0 z-20'
				style={{
					backgroundImage: `url(./Layer2.png)`,
					backgroundPosition: "top",
					backgroundSize: "cover",
					y: layer2,
					willChange: "transform",
				}}
			/>
			<motion.div
				className='absolute h-screen inset-0 z-30'
				style={{
					backgroundImage: `url(./Layer3.png)`,
					backgroundPosition: "top",
					backgroundSize: "cover",
					y: layer3,
					willChange: "transform",
				}}
			/>
			<Voyager />
		</div>
	);
};

export default React.memo(Hero);
