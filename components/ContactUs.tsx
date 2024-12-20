"use client";

import React from "react";
import Image from "next/image";
import { Slide } from "@/animation/Slide";
import { useForm } from "react-hook-form";

type FormData = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	message: string;
};

const ContactUs = () => {
	const { handleSubmit, register, reset } = useForm<FormData>();
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const [isSubmitted, setIsSubmitted] = React.useState(false);

	async function onSubmit(data: FormData) {
		try {
			setIsSubmitting(true);
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email/send-email`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
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
		<section className="bg-[#F9F7F8] md:px-14 px-5 py-20 flex lg:flex-row flex-col gap-y-10">
			<Slide className="lg:w-[40%] w-full flex flex-col lg:pt-24">
				<div className="self-center mb-5">
					<Image src="/assets/circle-design.png" alt="Circle Design" width={50} height={50} />
				</div>
				<div>
					<h4 className="lg:text-2xl text-lg text-primary font-semibold">Contact Us</h4>
					<h1 className="lg:text-5xl text-4xl font-extrabold text-darkBlue">
						You&apos;ve Got Questions <br /> Feel Free to Ask
					</h1>
				</div>
			</Slide>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="lg:w-[60%] w-full flex flex-col space-y-5 lg:border-l-2 lg:pl-5 lg:border-l-black"
			>
				{/* First and Last Name */}
				<div className="flex justify-between lg:space-x-10 space-x-2">
					<div className="flex flex-col w-full">
						<label htmlFor="firstName" className="text-lg">
							First Name
						</label>
						<input
							required
							type="text"
							id="firstName"
							placeholder="Enter your First Name"
							className="h-14 px-2 border border-black rounded-md bg-white w-full"
							{...register("firstName")}
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="lastName" className="text-lg">
							Last Name
						</label>
						<input
							required
							type="text"
							id="lastName"
							placeholder="Enter your Last Name"
							className="h-14 px-2 border border-black rounded-md bg-white w-full"
							{...register("lastName")}
						/>
					</div>
				</div>

				{/* Email and Phone */}
				<div className="flex justify-between lg:space-x-10 space-x-2">
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
				</div>

				{/* Message */}
				<div>
					<label htmlFor="message" className="text-lg">
						Message
					</label>
					<textarea
						id="message"
						placeholder="Enter your Message"
						className="px-2 border border-black rounded-md bg-white w-full"
						cols={30}
						rows={6}
						required
						{...register("message")}
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
	);
};

export default ContactUs;
