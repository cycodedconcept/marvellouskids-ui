import { useForm, ValidationError } from "@formspree/react";

const ContactUsForm = () => {
	const [state, handleSubmit] = useForm("manyzlgk");

	if (state.succeeded) {
		return (
			<section className="bg-[#F9F7F8] md:px-14 px-5 py-20 flex justify-center">
				<div className="text-center">
					<h1 className="lg:text-4xl text-2xl font-bold text-primary">Thank you for reaching out!</h1>
					<p className="mt-4 text-lg text-darkBlue">We&apos;ll get back to you as soon as possible.</p>
				</div>
			</section>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="w-full flex flex-col space-y-5 lg:border-l-2 lg:pl-5 lg:border-l-black">
			{/* First and Last Name */}
			<div className="flex justify-between lg:space-x-10 space-x-2">
				<div className="flex flex-col w-full">
					<label htmlFor="firstname" className="text-lg">
						First Name
					</label>
					<input
						required
						type="text"
						id="firstname"
						name="firstname"
						placeholder="Enter your First Name"
						className="h-14 px-2 border border-black rounded-md bg-white w-full"
					/>
					<ValidationError prefix="First Name" field="firstname" errors={state.errors} />
				</div>
				<div className="flex flex-col w-full">
					<label htmlFor="lastname" className="text-lg">
						Last Name
					</label>
					<input
						required
						type="text"
						id="lastname"
						name="lastname"
						placeholder="Enter your Last Name"
						className="h-14 px-2 border border-black rounded-md bg-white w-full"
					/>
					<ValidationError prefix="Last Name" field="lastname" errors={state.errors} />
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
						name="email"
						placeholder="Enter your Email"
						className="h-14 px-2 border border-black rounded-md bg-white w-full"
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
				</div>
				<div className="flex flex-col w-full">
					<label htmlFor="phone" className="text-lg">
						Phone
					</label>
					<input
						required
						type="tel"
						id="phone"
						name="phone"
						placeholder="Enter your Phone Number"
						className="h-14 px-2 border border-black rounded-md bg-white w-full"
					/>
					<ValidationError prefix="Phone" field="phone" errors={state.errors} />
				</div>
			</div>

			{/* Message */}
			<div>
				<label htmlFor="message" className="text-lg">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					placeholder="Enter your Message"
					className="px-2 border border-black rounded-md bg-white w-full"
					cols={30}
					rows={6}
				/>
				<ValidationError prefix="Message" field="message" errors={state.errors} />
			</div>

			{/* Terms and Submit Button */}
			<div className="flex sm:flex-row flex-col sm:items-center justify-between space-y-3">
				<div>
					<input type="checkbox" id="terms" className="accent-primary" />
					required
					<label htmlFor="terms" className="text-lg ml-3">
						I agree with Terms of Use and Privacy Policy
					</label>
				</div>
				<button
					type="submit"
					className="text-white py-2 px-10 rounded-full bg-gradient-to-r from-primary to-lemon self-start"
					disabled={state.submitting}
				>
					{state.submitting ? "Submitting..." : "Submit"}
				</button>
			</div>
		</form>
	);
};

export default ContactUsForm;
