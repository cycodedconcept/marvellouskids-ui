import { Slide } from "@/animation/Slide";
import AreaOfCare from "@/components/AreaOfCare";
import ContactUs from "@/components/ContactUs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<main className="bg-welcome h-[calc(100vh+5rem)] w-full bg-no-repeat bg-cover bg-bottom sm:pt-10 pt-28 md:px-20 px-5 flex flex-col sm:items-start items-center">
				<Slide className="md:bg-welcome-cloud bg-welcome-cloud-mobilie lg:bg-cover bg-contain bg-no-repeat sm:h-[561.41px] h-[23rem] w-[23rem] sm:w-[643px] sm:pt-10 pt-14 flex flex-col items-center sm:justify-center text-center">
					<h3 className="sm:text-3xl text-lg font-semibold">Welcome To</h3>
					<h1 className="sm:text-6xl text-3xl text-primary font-extrabold mb-3">
						Marvellous Kids Childcare & Nanny Services
					</h1>
					<h3 className="sm:text-3xl text-lg font-semibold sm:pr-20 pr-8 mb-5">
						Caring for Your Children, Supporting Your Family.
					</h3>

					<button className="text-white py-2 px-10 rounded-full bg-gradient-to-r from-primary to-lemon capitalize lg:text-2xl md:text-xl text-lg">
						Book a visit
					</button>
				</Slide>
			</main>
			<section className="flex flex-col md:flex-row items-center justify-between md:space-x-10 space-y-5 md:px-14 px-5 pb-10">
				<Slide delay={0.5} className="lg:w-1/2">
					<h4 className="lg:text-2xl text-lg text-primary font-semibold">Marvellous Kids Childcare,</h4>
					<h1 className="lg:text-5xl text-4xl font-extrabold">Offer Special Care For Your Children</h1>
					<p className="lg:text-2xl text-lg my-3">
						We provide quality care for children aged 0-16 years, helping them grow in a safe and nurturing environment.
						Whether you need full-time childcare or a nanny to support your family, we are here for you. We also offer
						free tax-funded childcare for eligible 2, 3, and 4-year-olds.
					</p>

					<Link
						href="/area-of-care"
						className="text-white py-2 px-10 rounded-full bg-gradient-to-r from-primary to-lemon md:w-fit w-full"
					>
						Explore More
					</Link>
				</Slide>

				<Image
					src="/assets/offer-special-care.png"
					alt="Offer special care for children"
					className="lg:w-1/2"
					width={500}
					height={500}
				/>
			</section>

			{/* Cloud Design */}
			<div
				className="lg:h-[17rem] md:h-[10rem] h-[8rem] bg-contain bg-no-repeat bg-[#F9F7F8]"
				style={{ backgroundImage: "url('/assets/special-care-cloud.png')" }}
			/>

			<AreaOfCare />

			<section className="py-20">
				<h4 className="lg:text-2xl text-lg text-primary font-semibold text-center">Our Space</h4>
				<h1 className="lg:text-5xl text-4xl font-extrabold text-center mb-10">Explore Our Environment</h1>

				<div className="grid grid-cols-4">
					{Array.from({ length: 12 }).map((_, index) => (
						<Image
							key={index}
							src="/assets/free-tax-funded-square.png"
							alt="Free Tax Funded"
							width={500}
							height={500}
						/>
					))}
				</div>
			</section>

			<section className="flex flex-col md:flex-row items-center justify-between md:space-x-10 space-y-5 md:px-14 px-5 py-10">
				<Image
					src="/assets/offer-special-care2.png"
					alt="Offer special care for children"
					className="lg:w-1/2"
					width={500}
					height={500}
				/>

				<Slide towards="right" delay={0.5} className="lg:w-1/2">
					<h4 className="lg:text-2xl text-lg text-primary font-semibold">Marvellous Kids Childcare,</h4>
					<h1 className="lg:text-5xl text-4xl font-extrabold">Offer Special Care For Your Children</h1>
					<p className="lg:text-2xl text-lg my-3">
						We provide quality care for children aged 0-16 years, helping them grow in a safe and nurturing environment.
						Whether you need full-time childcare or a nanny to support your family, we are here for you. We also offer
						free tax-funded childcare for eligible 2, 3, and 4-year-olds.
					</p>
				</Slide>
			</section>

			<ContactUs />
		</div>
	);
}
