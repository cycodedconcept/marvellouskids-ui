"use client";

import { Slide } from "@/animation/Slide";
import { sidebarContentData } from "@/data/sidebarContent";
import ContactUsForm from "@/ui/ContactUsForm";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AreaOfCare = () => {
	const sidebarContent = sidebarContentData;
	const [activeContent, setActiveContent] = React.useState(sidebarContent[0]);

	return (
		<div>
			<main className="h-screen bg-dreams-begin2 bg-no-repeat bg-cover bg-right-top text-white lg:text-left text-center md:px-14 px-5 pt-40">
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

			<section className="mt-10 mb-20 md:px-14 px-5 grid lg:grid-cols-3 grid-cols-1 lg:gap-x-5 gap-y-5">
				{/* Sidebar */}
				<aside className="flex flex-col space-y-5 bg-[#B0FFAE] rounded-2xl py-5 px-2.5 col-span-1 h-fit">
					{sidebarContent.map((content) => (
						<div
							key={content.title}
							className={`text-xl p-2 flex items-center justify-between border border-black rounded-full hover:bg-gray-100 cursor-pointer ${
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
									<h2 key={index} className="text-3xl font-bold mt-5 text-darkBlue">
										{item.text}
									</h2>
								);
							case "h5":
								return (
									<h5 key={index} className="text-2xl font-semibold mt-5 text-darkBlue">
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
									<ul key={index} className={`list-none mt-5`}>
										{item?.items?.map((listItem, index) => (
											<li
												key={index}
												className={`${
													item.listType === "ordered"
														? "list-decimal"
														: "before:content-['✔'] before:absolute before:-left-5"
												} relative
												 before:mr-2 before:text-green-500`}
											>
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

					<ContactUsForm />
				</div>
			</section>

			{/* Our Tuition */}
			<div className="text-center pb-20 pt-10 bg-[#F9F7F8] flex flex-col items-center">
				<h4 className="lg:text-2xl text-lg text-primary font-semibold">Our Tuition</h4>
				<h1 className="lg:text-5xl text-4xl font-extrabold">
					Affordable, Flexible & <br /> Transparent Tuition
				</h1>

				{/* Table */}
				<div className="w-full flex lg:justify-center overflow-x-scroll">
					<table className="my-10 min-w-[60rem]">
						<thead>
							<tr>
								<th className="p-2"></th>
								<th className="p-2">0 - 2 Years Olds</th>
								<th className="p-2">2 - 3 Years Olds</th>
								<th className="p-2">3 - 4 Years Olds</th>
							</tr>
						</thead>

						<tbody>
							<tr className="border-b">
								<td className="p-3 text-start font-semibold">Full Weeks / 06:30AM - 07:00PM (Monday to Friday)</td>
								<td className="p-3">£316.00</td>
								<td className="p-3">£316.00</td>
								<td className="p-3">£316.00</td>
							</tr>

							<tr className="border-b">
								<td className="p-3 text-start font-semibold">Full Day / 06:30AM - 07:00PM</td>
								<td className="p-3">£93.00</td>
								<td className="p-3">£93.00</td>
								<td className="p-3">£93.00</td>
							</tr>

							<tr className="border-b">
								<td className="p-3 text-start font-semibold">Morning / 06:30AM - 01:00PM</td>
								<td className="p-3">£59.00</td>
								<td className="p-3">£59.00</td>
								<td className="p-3">£59.00</td>
							</tr>

							<tr className="border-b">
								<td className="p-3 text-start font-semibold">Afternoon / 06:30AM - 07:00PM</td>
								<td className="p-3">£59.00</td>
								<td className="p-3">£59.00</td>
								<td className="p-3">£59.00</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AreaOfCare;
