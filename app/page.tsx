import AreaOfCare from "@/components/AreaOfCare";
import ContactUs from "@/components/ContactUs";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<main className="bg-welcome h-screen bg-no-repeat bg-cover">
				<div className="bg-welcome-cloud h-full bg-no-repeat"></div>
				{/* <div className="bg-welcome-cloud-design h-[16rem] bg-no-repeat bg-cover bg-bottom" /> */}
			</main>

			<section className="flex flex-col md:flex-row items-center justify-between md:space-x-10 space-y-5 md:px-14 px-5 py-10">
				<div className="lg:w-1/2">
					<h4 className="lg:text-2xl text-lg text-primary font-semibold">Marvellous Kids Childcare,</h4>
					<h1 className="lg:text-5xl text-4xl font-extrabold">Offer Special Care For Your Children</h1>
					<p className="lg:text-2xl text-lg my-3">
						We provide quality care for children aged 0-16 years, helping them grow in a safe and nurturing environment.
						Whether you need full-time childcare or a nanny to support your family, we are here for you. We also offer
						free tax-funded childcare for eligible 2, 3, and 4-year-olds.
					</p>

					<button className="text-white py-2 px-10 rounded-full bg-gradient-to-r from-primary to-lemon">
						Explore More
					</button>
				</div>

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
				className="h-[17rem] bg-contain bg-no-repeat"
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

				<div className="lg:w-1/2">
					<h4 className="lg:text-2xl text-lg text-primary font-semibold">Marvellous Kids Childcare,</h4>
					<h1 className="lg:text-5xl text-4xl font-extrabold">Offer Special Care For Your Children</h1>
					<p className="lg:text-2xl text-lg my-3">
						We provide quality care for children aged 0-16 years, helping them grow in a safe and nurturing environment.
						Whether you need full-time childcare or a nanny to support your family, we are here for you. We also offer
						free tax-funded childcare for eligible 2, 3, and 4-year-olds.
					</p>
				</div>
			</section>

			<ContactUs />
		</div>
	);
}
