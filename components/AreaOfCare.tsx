import { Slide } from "@/animation/Slide";
import Image from "next/image";
import Link from "next/link";

const AreaOfCare = () => {
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
		{
			title: "Free Tax-Funded Childcare Information",
			content:
				"We offer guidance on applying for free childcare for your 2, 3, and 4-year-olds. Parents may be eligible for government-funded childcare, which can significantly reduce the cost of early education. To learn more about eligibility, visit the [Government Childcare Page] (link) or contact us for assistance.",
			src: "/assets/free-tax-funded2.png",
			color: "#B0FFAE",
		},
	];
	return (
		<section className="md:px-14 px-5 bg-[#F9F7F8] pb-10">
			<h4 className="lg:text-2xl text-lg text-primary font-semibold text-center">Area of Care</h4>
			<h1 className="lg:text-5xl text-4xl font-extrabold text-center mb-[10rem]">Our Services</h1>

			<Slide className="flex gap-x-10 gap-y-40 flex-wrap justify-center">
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
			</Slide>
		</section>
	);
};

export default AreaOfCare;
