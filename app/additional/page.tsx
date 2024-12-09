import React from "react";
import Image from "next/image";
import ContactUs from "@/components/ContactUs";
import { Slide } from "@/animation/Slide";
import Link from "next/link";

const AdditionalPage = () => {
	const areaOfCare = [
		{
			title: "Free Tax-Funded Childcare for 2, 3, and 4-Year-Olds",
			content:
				"At Marvellous Kids Childcare, we offer free tax-funded childcare for eligible 2, 3, and 4-year-olds. This allows parents to take advantage of government support while ensuring their child receives high-quality care and early learning opportunities. Contact us to find out if you qualify and how to apply.",
			src: "/assets/free-tax-funded.png",
			color: "#E0F5FF",
		},
		{
			title: "Childcare Services (Ages 0-16)",
			content:
				"We offer childcare services for children from birth to 16 years old, ensuring that each age group has the care and attention they need. Our trained staff provide a variety of activities aimed at helping children develop their skills, creativity, and confidence.",
			src: "/assets/childcare-service.png",
			color: "#DEDBFF",
		},
		{
			title: "Nanny Services on Request",
			content:
				"We understand that each family has unique needs, so we offer nanny services upon request. Whether you need a live-in nanny or a nanny to stay with your children until you return from work, we provide reliable and loving caregivers. Our nannies are experienced, vetted, and available for both short-term and long-term care.",
			src: "/assets/nanny-service.png",
			color: "#F1FFB5",
		},
		{
			title: "Helpful Articles and Advice",
			content:
				"At Marvellous Kids Childcare, we offer free tax-funded childcare for eligible 2, 3, and 4-year-olds. This allows parents to take advantage of government support while ensuring their child receives high-quality care and early learning opportunities. Contact us to find out if you qualify and how to apply.",
			src: "/assets/article-and-advice.png",
			color: "#B6E5FF",
		},
	];
	return (
		<div>
			<main className="h-[calc(100vh-5rem)] bg-dreams-begin3 bg-no-repeat bg-cover  text-white text-center md:px-14 px-5 pt-40 flex flex-col items-center">
				<Slide className="lg:w-2/3">
					<h1 className="md:text-6xl sm:text-5xl text-4xl font-extrabold">
						Where Little Dreams Begin and Families Thrive
					</h1>
					<p className="text-lg sm:font-semibold mt-5">
						Our professional team and flexible services, including trusted nanny support and free tax-funded childcare
						for eligible families, are here to make parenting less stressful and more rewarding.
					</p>
				</Slide>
			</main>

			<section className="py-20 flex flex-col space-y-10">
				<div className="flex items-center md:flex-row flex-col gap-10 md:px-14 px-5">
					<Slide towards="left" delay={0.5} className="w-full">
						<h4 className="lg:text-2xl text-lg text-primary font-semibold mt-2">We Are Your Trusted Partner</h4>
						<h1 className="lg:text-5xl text-4xl font-extrabold">Finding the Perfect Match</h1>
						<p className="text-lg mt-2">
							We take the time to match families with the ideal caregiver by considering key factors such as the
							child&apos;s age, specific requirements, experience level, and expectations. Our goal is to connect you
							with the best-suited childcare professional for your unique needs.
						</p>
					</Slide>

					<Image
						className="w-full"
						src="/assets/trusted-partners.png"
						alt="Trusted partners"
						width={500}
						height={500}
					/>
				</div>

				<div className="flex items-center md:flex-row-reverse flex-col gap-10 md:px-14 px-5">
					<Slide towards="right" delay={0.5} className="w-full">
						<h4 className="lg:text-2xl text-lg text-primary font-semibold mt-2">We Are Your Trusted Partner</h4>
						<h1 className="lg:text-5xl text-4xl font-extrabold">Finding the Perfect Match</h1>
						<p className="text-lg mt-2">
							We take the time to match families with the ideal caregiver by considering key factors such as the
							child&apos;s age, specific requirements, experience level, and expectations. Our goal is to connect you
							with the best-suited childcare professional for your unique needs.
						</p>
					</Slide>

					<Image
						className="w-full"
						src="/assets/trusted-partners.png"
						alt="Trusted partners"
						width={500}
						height={500}
					/>
				</div>
			</section>

			{/* CTA */}
			<Slide className="flex flex-col items-center space-y-5 md:px-14 px-5 text-center mb-20">
				<p className="md:text-2xl text-lg font-semibold">
					At Marvellous Kids, we are more than just a childcare provider—we are your trusted partner in ensuring your
					children are cared for with love, attention, and professionalism.
				</p>
				<button className="text-white py-2 px-10 rounded-full bg-gradient-to-r from-primary to-lemon">
					Book A Visit
				</button>
			</Slide>

			{/* Area Of Care */}
			<section className="md:px-14 px-5 bg-[#F9F7F8] py-10">
				<Slide delay={0.5} className="flex flex-col items-center text-center">
					<h4 className="lg:text-2xl text-lg text-primary font-semibold">Area of Care</h4>
					<h1 className="lg:text-5xl text-4xl font-extrabold capitalize lg:w-2/3">
						we are more than just a childcare provider
					</h1>
					<p className="mb-[10rem] md:text-2xl text-lg mt-2 font-medium lg:px-40">
						At Marvellous Kids Childcare and Nanny Services, we make finding reliable childcare simple and stress-free.
						By sharing your specific requirements, we connect you with experienced caregivers tailored to your needs.
						Here&apos;s how we cater to various childcare situations:
					</p>
				</Slide>

				<div className="flex gap-x-10 gap-y-40 flex-wrap justify-center">
					{areaOfCare.map((area) => (
						<div
							key={area.title}
							className="w-[350px] rounded-[2.5rem] p-8 flex flex-col"
							style={{ background: `${area.color}` }}
						>
							<Image src={area.src} alt={area.title} width={300} height={200} className="-mt-[10rem] mb-2" />
							<h3 className="text-2xl font-bold pb-3">{area.title}</h3>
							<p>{area.content}</p>
							<div className="flex-grow"></div>
							<Link href="/" className="text-primary font-bold self-end mt-5">
								Read More
							</Link>
						</div>
					))}
				</div>
			</section>

			<section
				className="bg-cover h-[37rem] w-full bg-no-repeat lg:px-14 px-5 mb-20"
				style={{
					background:
						"linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/care-for-every-child.png')",
				}}
			>
				<Slide delay={0.5} className="flex flex-col items-center justify-center text-white text-center h-full">
					<h1 className="lg:text-6xl md:text-5xl text-4xl font-extrabold mb-5">
						Where Care Meets Growth For Every Child
					</h1>
					<h3 className="lg:text-2xl text-lg font-semibold mb-8">
						We understand the importance of finding the right caregiver quickly. That’s why the majority of families
						secure their perfect childcare match with us within just a week of making their request.
					</h3>
					<h3 className="lg:text-2xl text-lg font-semibold mb-3">
						Let Marvellous Kids help you find the ideal childcare solution to support your family’s needs.
					</h3>

					<button className="text-white py-2 px-10 rounded-full bg-gradient-to-r from-primary to-lemon">Join Us</button>
				</Slide>
			</section>

			{/* Emergency Solution */}
			<section className="pb-20 flex flex-col space-y-10">
				<div className="flex items-center lg:flex-row flex-col gap-10 md:px-14 px-5">
					<Slide towards="left" delay={0.5} className="w-full">
						<h4 className="lg:text-2xl text-lg text-primary font-semibold mt-2">Sudden Change Of Plans</h4>
						<h1 className="lg:text-5xl text-4xl font-extrabold mb-3">Our Emergency Childcare Solution</h1>
						<p className="mb-3">
							Has your regular childcare arrangement fallen through at the last minute? Or perhaps your child has taken
							ill, and you need immediate support? Don&apos;t worry—Marvellous Kids Childcare and Nanny Services is here
							to help!
						</p>
						<p className="mb-3">
							With our quick-response system, you can find emergency childcare or a professional caregiver for a sick
							child who&apos;s ready to step in without delay. Simply contact us directly to discuss your needs, and
							we&apos;ll connect you with a trusted nanny or babysitter.
						</p>
						<p>
							Rest assured, even in urgent situations, your child will be cared for by experienced and reliable hands.
							We&apos;re here to provide peace of mind when you need it most.
						</p>
					</Slide>

					<Image
						className="w-full"
						src="/assets/sudden-change-of-plans.png"
						alt="Emergency Solutions"
						width={500}
						height={500}
					/>
				</div>
			</section>

			<ContactUs />
		</div>
	);
};

export default AdditionalPage;
