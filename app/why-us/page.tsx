"use client";

import { Slide } from "@/animation/Slide";
import AreaOfCare from "@/components/AreaOfCare";
import Image from "next/image";

const WhyUsPage = () => {
	return (
		<div>
			<main className="bg-dreams-begin bg-no-repeat bg-cover h-screen flex justify-end md:px-32">
				<Slide towards="right">
					<div className="flex items-center flex-col text-center p-5 text-white md:w-[32rem] w-screen bg-gradient-to-t md:from-primary/75 md:via-primary/95 md:to-lemon/75 from-primary/50 via-primary/70 to-lemon/50 h-full inset-0 transform md:skew-x-12">
						<h1 className="md:text-5xl text-4xl font-extrabold pt-40 mb-5">
							Where Little Dreams Begin and Families Thrive
						</h1>

						<p className="text-lg font-semibold">
							Our professional team and flexible services, including trusted nanny support and free tax-funded childcare
							for eligible families, are here to make parenting less stressful and more rewarding.
						</p>

						<div className="absolute hidden md:block -left-8 bottom-0 h-full w-[20px] bg-gradient-to-t from-primary via-primary/95 to-lemon transform  mt-5"></div>
					</div>
				</Slide>
			</main>

			{/* Opening and Closing Hours */}
			<Slide delay={0.5} className="md:px-14 px-5 py-10">
				<div className="bg-primary text-white rounded-2xl p-10 flex md:flex-row flex-col items-center md:space-x-8 space-y-10">
					<div>
						<div className="flex space-x-2">
							<Image src="/assets/heartbeat.png" width={35} height={35} alt="Heartbeat" />
							<h3 className="text-2xl font-semibold">Rush contact</h3>
						</div>

						<p className="text-lg mt-5">
							Marvellous Kids Childcare and Nanny Services is here to meet your needs. We are committed to making a
							positive difference in the lives of children and their families.
						</p>

						<div className="text-2xl font-semibold mt-10">
							<h2>Call:</h2>
							<div className="ml-14">
								<h2> 020 - 3624 - 6795</h2>
								<h2> 079 - 4790 - 0277</h2>
							</div>
						</div>
					</div>

					<div>
						<div className="flex space-x-2">
							<Image src="/assets/calender.png" width={35} height={35} alt="Calender" />
							<h3 className="text-2xl font-semibold">Opening & Closing Hours</h3>
						</div>
						<p className="text-lg mt-5">
							Vestibulum sagittis arcu in nulla ultrices tempus. Pellentesque nec fringilla dolor. In egestas faucibus
							dui, ac accumsan dui euismod vitae. Morbi laoreet nec justo eget
						</p>

						<div className="mt-14 flex flex-col space-y-5 text-lg">
							<ul className="flex items-center justify-between">
								<li>Mon - Fri</li>
								<li>07:00AM -06:00PM</li>
							</ul>

							<ul className="flex items-center justify-between">
								<li>Sat - Sun</li>
								<li>10:00AM -04:00PM</li>
							</ul>
						</div>
					</div>
				</div>
			</Slide>

			{/* Our Story */}
			<section className="relative flex md:flex-row flex-col items-center justify-between md:px-14 px-5 gap-10 pt-10 sm:pb-20">
				<div
					style={{ backgroundImage: "url('/assets/left-purple-design.png')" }}
					className="absolute hidden md:block left-0 -top-10 bg-no-repeat bg-contain h-[700px] w-[500px] -z-10"
				/>

				<Slide towards="left" delay={0.5} className="w-full">
					<h4 className="lg:text-2xl text-lg text-primary font-semibold">Our Mission Statement</h4>
					<h1 className="lg:text-5xl text-4xl font-extrabold">Our Mission At Marvellous Kids Childcare LTD</h1>
					<p className="mt-5 text-lg">
						It is to provide a warm, safe, and stimulating environment where every child is nurtured and encouraged to
						grow. We are passionate about fostering creativity, building confidence, and supporting children in their
						journey to reach their full potential. Every day, we aim to create a space where children feel valued,
						loved, and inspired to learn.
					</p>
				</Slide>

				<Image className="w-full" src="/assets/our-story.png" alt="Our Story" width={500} height={500} />
			</section>

			{/* Our Story */}
			<section className="relative flex md:flex-row flex-col-reverse items-center justify-between md:px-14 px-5 gap-10 pt-10">
				<div
					style={{ backgroundImage: "url('/assets/right-purple-design.png')" }}
					className="absolute hidden md:block right-0 -top-10 bg-no-repeat bg-contain h-[700px] w-[500px] -z-10"
				/>

				<Image className="w-full" src="/assets/our-story.png" alt="Our Story" width={500} height={500} />

				<Slide towards="right" delay={0.5} className="w-full">
					<h4 className="lg:text-2xl text-lg text-primary font-semibold">Our Vision Statement</h4>
					<h1 className="lg:text-5xl text-4xl font-extrabold">Our Vision For Marvellous Kids Childcare LTD</h1>
					<p className="mt-5 text-lg">
						We want to become a trusted and respected name in childcare, known for providing exceptional care and
						education. I see a future where every child who comes through our doors feels empowered, celebrated, and
						ready to take on the world with curiosity and confidence. Together, we&apos;re not just shaping little minds
						- we&apos;re shaping brighter futures.
					</p>
				</Slide>
			</section>

			{/* Cloud Design */}
			<div
				className="lg:h-[17rem] md:h-[10rem] h-[8rem] bg-contain bg-no-repeat bg-[#F9F7F8]"
				style={{ backgroundImage: "url('/assets/special-care-cloud.png')" }}
			/>

			<section className="mb-14">
				<AreaOfCare />
			</section>
		</div>
	);
};

export default WhyUsPage;
