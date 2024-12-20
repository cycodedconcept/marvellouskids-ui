"use client";

import { Slide } from "@/animation/Slide";
import { sidebarContent_JOB } from "@/data/sidebarContent";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import { getNames } from "country-list";

type NannyData = {
	name: string;
	email: string;
	phone: string;
	country: string;
	document: FileList;
};

const Nanny = () => {
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
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { register, handleSubmit, reset } = useForm<NannyData>();

	async function onSubmit(data: NannyData) {
		const formData = new FormData();

		formData.append("name", data.name);
		formData.append("email", data.email);
		formData.append("country", data.country);
		formData.append("phone", data.phone);
		formData.append("document", data.document[0]);

		try {
			setIsSubmitting(true);
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/nanny/nanny-email`, {
				method: "POST",
				body: formData,
			});

			if (!response.ok) {
				throw new Error("Failed to send data");
			}
			setIsSubmitted(true);
		} catch (error) {
			throw error;
		} finally {
			setIsSubmitting(false);
			// Reset the form
			reset();
		}
	}

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
					<h1 className="lg:text-6xl sm:text-5xl md:w-[34rem] text-4xl font-extrabold mb-5">
						Live-In Nanny Job Description
					</h1>

					{/* <form className="flex items-center md:flex-row flex-col gap-5 mb-5 text-lg justify-center w-full">
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
					</form> */}

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

			{/* Contact us */}
			<section className="bg-[#F9F7F8] md:px-14 px-5 py-20 flex lg:flex-row flex-col gap-y-10">
				<Slide className="lg:w-[40%] w-full flex flex-col lg:pt-24">
					<div className="self-center mb-5">
						<Image src="/assets/circle-design.png" alt="Circle Design" width={50} height={50} />
					</div>
					<div>
						<h4 className="lg:text-2xl text-lg text-primary font-semibold">Contact Us</h4>
						<h1 className="lg:text-5xl text-4xl font-extrabold text-darkBlue">Want to become a Nanny? Join now</h1>
					</div>
				</Slide>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="lg:w-[60%] w-full flex flex-col space-y-5 lg:border-l-2 lg:pl-5 lg:border-l-black"
				>
					{/* Name and Email */}
					<div className="flex justify-between lg:space-x-10 space-x-2">
						<div className="flex flex-col w-full">
							<label htmlFor="name" className="text-lg">
								Name
							</label>
							<input
								required
								type="text"
								id="name"
								placeholder="Enter your Full name"
								className="h-14 px-2 border border-black rounded-md bg-white w-full"
								{...register("name")}
							/>
						</div>
						<div className="flex flex-col w-full">
							<label htmlFor="email" className="text-lg">
								Email
							</label>
							<input
								required
								type="email"
								id="email"
								placeholder="Enter your Email"
								className="h-14 px-2 border border-black rounded-md bg-white w-full"
								{...register("email")}
							/>
						</div>
					</div>

					{/* Phone and Country */}
					<div className="flex justify-between lg:space-x-10 space-x-2">
						<div className="flex flex-col w-full">
							<label htmlFor="phone" className="text-lg">
								Phone
							</label>
							<input
								required
								type="tel"
								id="phone"
								placeholder="Enter your Phone Number"
								className="h-14 px-2 border border-black rounded-md bg-white w-full"
								{...register("phone")}
							/>
						</div>
						<div className="flex flex-col w-full">
							<label htmlFor="country" className="text-lg">
								Country of Residence
							</label>

							<select
								required
								id="country"
								className="h-14 px-2 border border-black rounded-md bg-white w-full"
								{...register("country")}
							>
								<option value="" hidden>
									Select your country
								</option>
								{getNames().map((country: string) => (
									<option key={country} value={country}>
										{country}
									</option>
								))}
							</select>
						</div>
					</div>

					{/* UPLOAD CV/RESUME */}
					<div className="flex flex-col w-full">
						<label htmlFor="resume" className="text-lg">
							Upload CV/Resume
						</label>
						<input
							required
							type="file"
							accept=".pdf,.doc,.docx"
							id="resume"
							placeholder="Upload your CV/Resume"
							className="h-14 w-full rounded-md border border-black file:mr-4 file:py-2 file:px-8 file:h-full file:border-0 file:text-sm file:font-semibold file:bg-black/15 file:text-textColor hover:file:bg-black/15"
							{...register("document")}
						/>
					</div>

					{/* Terms and Submit Button */}
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
							disabled={isSubmitting}
						>
							{isSubmitting ? "Submitting..." : "Submit"}
						</button>
					</div>

					{isSubmitted && (
						<p className="text-green-500 text-lg font-semibold">
							Thank you for submitting your application. We will get back to you soon.
						</p>
					)}
				</form>
			</section>
		</div>
	);
};

export default Nanny;
