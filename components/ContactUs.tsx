const ContactUs = () => {
	return (
		<section className="bg-[#F9F7F8] md:px-14 px-5 py-20 flex items-center lg:flex-row flex-col gap-y-10">
			<div className="lg:w-[40%] w-full">
				<h4 className="lg:text-2xl text-lg text-primary font-semibold">Contact Us</h4>
				<h1 className="lg:text-5xl text-4xl font-extrabold">
					You&apos;ve Got Questions <br /> Feel Free to Ask
				</h1>
			</div>

			<form className="lg:w-[60%] w-full flex flex-col space-y-5 lg:border-l-2 lg:pl-5 lg:border-l-black">
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
		</section>
	);
};

export default ContactUs;