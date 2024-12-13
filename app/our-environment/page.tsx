import { Slide } from "@/animation/Slide";
import { fullEnvironment_API } from "@/data/ourEnvironment";
import Image from "next/image";

const OurEnvironment = () => {
	const environment = fullEnvironment_API;

	return (
		<div className="mb-14">
			<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
				{environment.map((env, index) => (
					<Slide
						key={env.alt}
						className="flex items-center justify-center"
						towards={index % 2 === 0 ? "left" : "right"}
						delay={0.5}
					>
						<Image src={env.src} alt={env.alt} width={500} height={500} quality={100} />
					</Slide>
				))}
			</div>
		</div>
	);
};

export default OurEnvironment;
