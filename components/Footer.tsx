import Logo from "@/ui/Logo";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
	const company = [
		{ title: "Why Us", href: "/why-us" },
		{ title: "Area Of Cares", href: "/area-of-care" },
		{ title: "Nanny", href: "/nanny" },
		{ title: "Our Enviroment", href: "/our-environment" },
		{ title: "Our Solution", href: "/our-solution" },
	];

	const services = [
		{ title: "Childcare Services", href: "/" },
		{ title: "Nanny Services On Request", href: "/nanny" },
		{ title: "Free Tax-Funded Childcare", href: "/" },
		{ title: "Parent Resources", href: "/" },
		{ title: "Helpful Article & Advice", href: "/" },
	];

	const more = [
		{ title: "FAQ", href: "/faq" },
		{ title: "Contact us", href: "/contact-us" },
		{ title: "Blog", href: "/" },
		{ title: "Help Center", href: "/" },
	];

	return (
		<section className="bg-[#F9F7F8]">
			<div
				style={{ backgroundImage: "url('/assets/darkblue-cloud.png')" }}
				className="h-[25rem] bg-cover bg-no-repeat -mb-40 -mt-14"
			/>
			<div className="bg-darkBlue text-[#B4B3B4] md:px-14 px-5 py-5">
				<div className="grid lg:grid-cols-5 grid-cols-2 gap-10 mb-8">
					<div className="col-span-2">
						<Logo type="light" />

						<h3>
							<span className="text-white">Locations:</span> 485 Bayshore Blvd. Str Ikeja, Lagos State, NG 95124
						</h3>

						<h3>
							<span className="text-white">Opening & Closing Hours: </span>
							Mon - Fri: 06:30AM - 07:00PM Sat - Sun 10:00AM - 04:00PM
						</h3>
					</div>

					<ul>
						<h3 className="text-white text-lg font-bold mb-5">Product</h3>
						<div className="flex flex-col space-y-5">
							{company.map((el, index) => (
								<li key={index} className="hover:underline w-fit">
									<Link href={el.href}>{el.title}</Link>
								</li>
							))}
						</div>
					</ul>

					<ul>
						<h3 className="text-white text-lg font-bold mb-5">Solutions</h3>
						<div className="flex flex-col space-y-5">
							{services.map((el, index) => (
								<li key={index} className="hover:underline w-fit">
									<Link href={el.href}>{el.title}</Link>
								</li>
							))}
						</div>
					</ul>

					<ul>
						<h3 className="text-white text-lg font-bold mb-5">Resources</h3>
						<div className="flex flex-col space-y-5">
							{more.map((el, index) => (
								<li key={index} className="hover:underline w-fit">
									<Link href={el.href}>{el.title}</Link>
								</li>
							))}
						</div>
					</ul>
				</div>

				<div className="h-[0.5px] bg-white w-full" />

				<div className="flex lg:flex-row flex-col justify-between items-center mt-14 mb-10 gap-y-5">
					<p className="text-center">&copy; 2024 Marvellous kids childcare. All rights reserved.</p>

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
