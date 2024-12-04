import Logo from "@/ui/Logo";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
	const products = [
		{ title: "Pricing", href: "/" },
		{ title: "Overview", href: "/" },
		{ title: "Browse", href: "/" },
		{ title: "Assisibility", href: "/" },
	];

	const solutions = [
		{ title: "Brainstorming", href: "/" },
		{ title: "Ideation", href: "/" },
		{ title: "Wireframing", href: "/" },
		{ title: "Research", href: "/" },
	];

	const resources = [
		{ title: "Help Center", href: "/" },
		{ title: "Blog", href: "/" },
		{ title: 'Tutorials"', href: "/" },
	];

	const company = [
		{ title: "About", href: "/" },
		{ title: "Press", href: "/" },
		{ title: "Events", href: "/" },
		{ title: "Careers", href: "/" },
	];

	return (
		<section className="bg-[#F9F7F8]">
			<div
				style={{ backgroundImage: "url('/assets/darkblue-cloud.png')" }}
				className="h-[25rem] bg-cover bg-no-repeat -mb-40"
			/>
			<div className="bg-darkBlue text-[#B4B3B4] md:px-14 px-5 py-5">
				<div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-10 mb-8">
					<div className="col-span-2">
						<Logo type="light" />

						<h3>
							<span className="text-white">Locations:</span> 485 Bayshore Blvd. Str Ikeja, Lagos State, NG 95124
						</h3>

						<h3>
							<span className="text-white">Opening & Closing Hours:</span> Sunday: 08:00 AM - 10:00 PM Monday - Friday:
							06:00 AM - 12:00 AM
						</h3>
					</div>

					<ul>
						<h3 className="text-white text-lg font-bold mb-5">Product</h3>
						<div className="flex flex-col space-y-5">
							{products.map((product, index) => (
								<li key={index}>
									<Link href={product.href}>{product.title}</Link>
								</li>
							))}
						</div>
					</ul>

					<ul>
						<h3 className="text-white text-lg font-bold mb-5">Solutions</h3>
						<div className="flex flex-col space-y-5">
							{solutions.map((solution, index) => (
								<li key={index}>
									<Link href={solution.href}>{solution.title}</Link>
								</li>
							))}
						</div>
					</ul>

					<ul>
						<h3 className="text-white text-lg font-bold mb-5">Resources</h3>
						<div className="flex flex-col space-y-5">
							{resources.map((resource, index) => (
								<li key={index}>
									<Link href={resource.href}>{resource.title}</Link>
								</li>
							))}
						</div>
					</ul>

					<ul>
						<h3 className="text-white text-lg font-bold mb-5">Company</h3>
						<div className="flex flex-col space-y-5">
							{company.map((company, index) => (
								<li key={index}>
									<Link href={company.href}>{company.title}</Link>
								</li>
							))}
						</div>
					</ul>
				</div>

				<div className="h-[0.5px] bg-white w-full" />

				<div className="flex justify-between items-center mt-8">
					<p className="py-5">&copy; 2024 Marvellous kids childcare. All rights reserved.</p>

					<ul className="flex space-x-8">
						<Link href="/">Terms</Link>
						<Link href="/">Privacy</Link>
						<Link href="/">Contact</Link>
					</ul>

					<span className="text-white flex items-center space-x-5">
						<FaYoutube size={24} className="cursor-pointer" />
						<FaFacebookF size={24} className="cursor-pointer" />
						<FaTwitter size={24} className="cursor-pointer" />
						<FaInstagram size={24} className="cursor-pointer" />
						<FaLinkedinIn size={24} className="cursor-pointer" />
					</span>
				</div>
			</div>
		</section>
	);
};

export default Footer;
