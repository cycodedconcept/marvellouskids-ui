"use client";
import Logo from "@/ui/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "Why us", href: "/why-us" },
	{ name: "Area of Care", href: "/area-of-care" },
	{ name: "Our Space", href: "/our-space" },
	{ name: "More", href: "/more" },
];

const NavBar = () => {
	const [activeNav, setActiveNav] = useState("/");
	const [mobileNav, setMobileNav] = useState(false);
	const pathname = usePathname();

	return (
		<header className="sticky top-0 bg-white z-50">
			<div className="flex items-center justify-between md:px-14 px-5 py-3 bg-white">
				<Logo />

				{/* Desktop Navigation */}
				<nav className="md:flex items-center space-x-5 hidden">
					<ul className="flex items-center space-x-8">
						{navLinks.map(({ href, name }) => (
							<li
								key={name}
								className={`hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-lemon ${
									pathname === href && "bg-clip-text text-transparent bg-gradient-to-r from-primary to-lemon"
								}`}
							>
								<Link href={href} onClick={() => setActiveNav(href)}>
									{name}
								</Link>
							</li>
						))}
					</ul>

					<div className="space-x-5 hidden lg:flex text-lg">
						<Link
							href="/contact-us"
							className="border border-primary py-2 px-5 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-primary to-lemon"
						>
							Contact Us
						</Link>
						<Link
							href="/get-started"
							className="text-white py-2 px-10 rounded-full bg-gradient-to-r from-primary to-lemon"
						>
							Join Now
						</Link>
					</div>
				</nav>

				{/* Mobile Navigation */}
				<nav
					className={`absolute bg-white w-full left-0 p-5 -z-10 md:hidden flex transition-all duration-300 ease-in-out ${
						mobileNav ? "top-20" : "-top-96"
					}`}
				>
					<ul>
						{navLinks.map((link) => (
							<li
								key={link.name}
								className={`${
									pathname === link.href && "bg-clip-text text-transparent bg-gradient-to-r from-primary to-lemon"
								} py-2 text-lg font-semibold`}
								onClick={() => {
									setMobileNav(false);
								}}
							>
								<Link href={link.href}>{link.name}</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Mobile menu */}
				<div onClick={() => setMobileNav((prev) => !prev)} className="flex flex-col space-y-2 cursor-pointer md:hidden">
					<div
						className={`h-1 w-8 rounded-full bg-primary transition-all duration-300 ${
							mobileNav && "rotate-45 translate-y-2"
						}`}
					/>
					<div
						className={`h-1 w-8 rounded-full bg-primary transition-all duration-300 ${
							mobileNav && "-rotate-45 -translate-y-1"
						}`}
					/>
				</div>
			</div>
		</header>
	);
};

export default NavBar;
