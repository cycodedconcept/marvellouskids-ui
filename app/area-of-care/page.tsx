"use client";

import { sidebarContentData } from "@/data/sidebarContent";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AreaOfCare = () => {
	const sidebarContent = sidebarContentData;
	const [activeContent, setActiveContent] = React.useState(sidebarContent[0]);

	return (
		<div>
			<main className="h-screen bg-dreams-begin2 bg-no-repeat bg-cover bg-right-top text-white lg:text-left text-center md:px-14 px-5 pt-40">
				<div className="lg:w-2/3">
					<h1 className="md:text-6xl sm:text-5xl text-4xl font-extrabold">
						Where Little Dreams Begin and Families Thrive
					</h1>
					<p className="text-lg sm:font-semibold mt-5">
						Our professional team and flexible services, including trusted nanny support and free tax-funded childcare
						for eligible families, are here to make parenting less stressful and more rewarding.
					</p>
				</div>
			</main>

			<section className="mt-10 mb-20 md:px-14 px-5 grid lg:grid-cols-3 grid-cols-1 lg:gap-x-5 gap-y-5">
				{/* Sidebar */}
				<aside className="flex flex-col space-y-5 bg-[#B0FFAE] rounded-2xl py-5 px-2.5 col-span-1 h-fit">
					{sidebarContent.map((content) => (
						<div
							key={content.title}
							className={`text-xl p-2 flex items-center justify-between border-2 border-black rounded-full hover:bg-gray-100 cursor-pointer ${
								activeContent.title === content.title ? "bg-gray-100" : ""
							}`}
							onClick={() => setActiveContent(content)}
						>
							<button>{content.title}</button>
							<FaArrowRight />
						</div>
					))}
				</aside>

				{/* content */}
				<div className="col-span-2">
					{activeContent.content.map((item, index) => {
						switch (item.type) {
							case "img":
								return (
									<Image
										key={index}
										src={item?.src || ""}
										alt={item?.alt || "Image"}
										className="w-full h-96 object-cover rounded-2xl"
										width={500}
										height={500}
									/>
								);
							case "h2":
								return (
									<h2 key={index} className="text-3xl font-bold mt-5">
										{item.text}
									</h2>
								);
							case "h5":
								return (
									<h5 key={index} className="text-2xl font-semibold mt-5">
										{item.text}
									</h5>
								);
							case "p":
								return (
									<p key={index} className="mt-5 text-lg">
										{item.text}
									</p>
								);
							case "list":
								return (
									<ul key={index} className="list-none mt-5">
										{item?.items?.map((listItem, index) => (
											<li key={index} className="before:content-['✔'] before:mr-2 before:text-green-500">
												{listItem}
											</li>
										))}
									</ul>
								);
							default:
								return null;
						}
					})}

					{/* Contact Us */}
					<h5 className="text-2xl font-semibold mt-5">Information for new Patient</h5>
					<p className="text-lg mb-5">Your email address will not be published. Required fields are marked</p>

					<form className="w-full flex flex-col space-y-5 lg:border-l-2 lg:pl-5 lg:border-l-black">
						<div className="flex justify-between lg:space-x-10 space-x-2">
							<div className="flex flex-col w-full">
								<label htmlFor="firstname" className="text-lg">
									First Name
								</label>
								<input
									type="text"
									id="firstname"
									placeholder="Enter you First Name"
									className="h-14 px-2 border-2 border-black rounded-md bg-white w-full"
								/>
							</div>
							<div className="flex flex-col w-full">
								<label htmlFor="lastname" className="text-lg">
									Last Name
								</label>
								<input
									type="text"
									id="lastname"
									placeholder="Enter your Last Name"
									className="h-14 px-2 border-2 border-black rounded-md bg-white w-full"
								/>
							</div>
						</div>

						<div className="flex justify-between lg:space-x-10 space-x-2">
							<div className="flex flex-col w-full">
								<label htmlFor="email" className="text-lg">
									Email
								</label>
								<input
									type="email"
									id="email"
									placeholder="Enter your Email"
									className="h-14 px-2 border-2 border-black rounded-md bg-white w-full"
								/>
							</div>
							<div className="flex flex-col w-full">
								<label htmlFor="phone" className="text-lg">
									Phone
								</label>
								<input
									type="tel"
									id="phone"
									placeholder="Enter your Phone Number"
									className="h-14 px-2 border-2 border-black rounded-md bg-white w-full"
								/>
							</div>
						</div>

						<div>
							<label htmlFor="message" className="text-lg">
								Message
							</label>
							<textarea
								className="px-2 border-2 border-black rounded-md bg-white w-full"
								id="message"
								placeholder="Enter your Message"
								cols={30}
								rows={6}
							/>
						</div>

						<div className="flex sm:flex-row flex-col sm:items-center justify-between space-y-3">
							<div>
								<input type="checkbox" id="terms" className="accent-primary" />
								<label htmlFor="terms" className="text-lg ml-3">
									I agree with Terms of Use and Privacy Policy
								</label>
							</div>

							<button
								type="submit"
								className="text-white py-2 px-10 rounded-full bg-gradient-to-r from-primary to-lemon self-start"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default AreaOfCare;
