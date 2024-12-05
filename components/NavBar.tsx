"use client";
import Logo from "@/ui/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useState } from "react";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "Why us", href: "/why-us" },
	{ name: "Area of Care", href: "/area-of-care", sub: { name: "Additional", href: "/additional" } },
	{ name: "Our Space", href: "/our-space" },
	{ name: "More", href: "/more", sub: { name: "FAQ", href: "/faq" } },
];

const NavBar = () => {
	const [activeNav, setActiveNav] = useState("/");
	const [showDropdown, setShowDropdown] = useState("");
	const [mobileNav, setMobileNav] = useState(false);
	const pathname = usePathname();

	function closeMobileNav() {
		setMobileNav(false);
	}

	return (
		<header className="sticky top-0 bg-white z-50">
			<div className="flex items-center justify-between md:px-14 px-5 py-3 bg-white">
				<Logo />

				{/* Desktop Navigation */}
				<nav className="md:flex items-center space-x-5 hidden">
					<ul className="flex items-center space-x-8">
						{navLinks.map(({ href, name, sub }) => (
							<div
								className="relative"
								onMouseEnter={() => {
									setShowDropdown(name);
								}}
								onMouseLeave={() => setShowDropdown("")}
								key={name}
							>
								<li
									className={`hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-lemon ${
										pathname === href && "bg-clip-text text-transparent bg-gradient-to-r from-primary to-lemon"
									} ${sub && "flex items-center space-x-2"} cursor-pointer`}
								>
									<Link href={href} onClick={() => setActiveNav(href)}>
										{name}
									</Link>
									{sub && (
										<span
											className={`hidden md:block transition-transform duration-300 ease ${
												showDropdown === name && "rotate-180"
											}`}
										>
											▼
										</span>
									)}
								</li>

								{sub && showDropdown === name && (
									<ul className="absolute bg-white p-2 top-5 left-0 w-40 shadow-lg">
										<li
											className={`p-2 hover:bg-gray-100 ${
												pathname === sub.href && "bg-clip-text text-transparent bg-gradient-to-r from-primary to-lemon"
											}`}
										>
											<Link href={sub.href}>{sub.name}</Link>
										</li>
									</ul>
								)}
							</div>
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
					className={`absolute bg-white w-full left-0 p-5 -z-10 md:hidden flex flex-col transition-all duration-300 ease-in-out ${
						mobileNav ? "top-20" : "-top-96"
					}`}
				>
					<ul>
						{navLinks.map(({ name, href, sub }) => (
							<li key={name} className="py-2 text-lg font-semibold relative">
								<div
									className={`flex justify-between items-center cursor-pointer ${
										pathname === href && "bg-clip-text text-transparent bg-gradient-to-r from-primary to-lemon"
									}`}
									onClick={() => setShowDropdown(showDropdown === name ? "" : name)}
								>
									<Link href={href} onClick={() => closeMobileNav()}>
										{name}
									</Link>
									{sub && <span className="ml-2">{showDropdown === name ? "▲" : "▼"}</span>}
								</div>

								{/* Dropdown for mobile */}
								{sub && showDropdown === name && (
									<ul className="mt-2 ml-4 space-y-2 text-gray-600 rounded-lg">
										<li className=" hover:bg-gray-100 rounded p-2">
											<Link href={sub.href} onClick={() => closeMobileNav()}>
												{sub.name}
											</Link>
										</li>
									</ul>
								)}
							</li>
						))}
					</ul>

					<div className="flex flex-col space-y-5 text-lg mt-5">
						<Link
							href="/contact-us"
							className="text-center border border-primary py-2 px-8 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-primary to-lemon"
							onClick={() => closeMobileNav()}
						>
							Contact Us
						</Link>
						<Link
							href="/get-started"
							className="text-center text-white py-2 px-10 rounded-full bg-gradient-to-r from-primary to-lemon"
							onClick={() => closeMobileNav()}
						>
							Join Now
						</Link>
					</div>
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
