"use client";

import { Slide } from "@/animation/Slide";
import ContactUs from "@/components/ContactUs";
import { sidebarContent_JOB } from "@/data/sidebarContent";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const FindJobs = () => {
	const data = [
		{
			color: "#B0FFAE",
			image: { src: "/assets/line-design.png", alt: "Line Design" },
			title: "Registration",
			description: "Apply to register and become a candidate",
		},
		{
			color: "#F1FFB5",
			image: { src: "/assets/line-design.png", alt: "Line Design" },
			title: "Why Register",
			description: "Why register with Greycoat Lumleys?",
		},
		{
			color: "#E0F5FF",
			image: { src: "/assets/line-design.png", alt: "Line Design" },
			title: "Recommend",
			description: "Recommend a friend and receive rewards",
		},
		{
			color: "#DEDBFF",
			image: { src: "/assets/line-design.png", alt: "Line Design" },
			title: "Get In Touch",
			description: "Get in touch with one of our friendly team",
		},
	];
	const sidebarContent = sidebarContent_JOB;

	const [activeContent, setActiveContent] = useState(sidebarContent[0]);

	return (
		<div>
			<main
				className="bg-cover h-[calc(100vh-5rem)] w-full bg-no-repeat lg:px-14 px-5"
				style={{
					background:
						"linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/care-for-every-child.png')",
					backgroundPosition: "center",
				}}
			>
				<Slide delay={0.5} className="flex flex-col items-center justify-center text-white text-center h-full">
					<h1 className="lg:text-6xl sm:text-5xl text-4xl font-extrabold mb-5">Live-In Nanny Job Description</h1>

					<form className="flex items-center md:flex-row flex-col gap-5 mb-5 text-lg justify-center w-full">
						<label htmlFor="find-job">Find A Job</label>
						<div className="flex items-center text-textColor md:w-[30rem] w-full">
							<select className="h-14 pl-5 pr-20 rounded-l-full border border-gray-300">
								<option>Keywords</option>
							</select>

							<input
								className="h-14 px-5 w-full rounded-r-full border border-gray-300"
								type="text"
								id="find-job"
								placeholder="Location"
							/>
						</div>
					</form>

					<Link
						href="/get-started"
						className="text-white py-2 px-10 rounded-full bg-gradient-to-r from-primary to-lemon"
					>
						Join Now
					</Link>
				</Slide>
			</main>

			<div className="grid lg:grid-cols-4 grid-cols-2 gap-10 bg-[#F9F7F8] py-20 md:px-14 px-5">
				{data.map(({ color, image, title, description }, index) => (
					<Slide delay={0.2 * index} key={title} className="flex items-center justify-center">
						<div className="flex flex-col items-center">
							<div style={{ backgroundColor: color }} className="h-40 w-40 rounded-full grid place-content-center">
								<Image src={image.src} alt={image.alt} width={50} height={50} />
							</div>
							<div className="flex flex-col space-y-2 items-center text-center mt-5">
								<h2 className="text-lg font-semibold">{title}</h2>
								<p>{description}</p>
							</div>
						</div>
					</Slide>
				))}
			</div>

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
														: item.listType === "unordered"
														? "list-disc"
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
				</div>
			</section>

			<ContactUs />
		</div>
	);
};

export default FindJobs;
