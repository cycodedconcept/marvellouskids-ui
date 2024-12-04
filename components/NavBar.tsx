import Logo from "@/ui/Logo";
import Link from "next/link";

const NavBar = () => {
	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "Why us", href: "/why-us" },
		{ name: "Area of Care", href: "/area-of-care" },
		{ name: "Our Space", href: "/our-space" },
		{ name: "More", href: "/more" },
	];

	return (
		<header className="sticky top-0 bg-white">
			<div className="flex items-center justify-between px-14 py-3">
				<Logo />

				<nav className="flex items-center space-x-5">
					<ul className="flex items-center space-x-10">
						{navLinks.map(({ href, name }) => (
							<li key={name}>
								<Link href={href}>{name}</Link>
							</li>
						))}
					</ul>

					<div className="space-x-5 hidden lg:flex text-lg">
						<button className="border border-primary py-2 px-5 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-primary to-lemon">
							Contact Us
						</button>
						<button className="text-white py-2 px-10 rounded-full bg-gradient-to-r from-primary to-lemon">
							Join Now
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
