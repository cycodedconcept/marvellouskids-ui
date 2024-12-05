"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FAQ = () => {
	const faqs = [
		{
			question: "What services does your company provide in the oil trading industry?",
			answer:
				"We try to bridge the gap between demand and supply, thereby providing oil supply within the West African coast, engaging in the buying and selling of crude oil, conducts thorough market analysis to assess supply and demand dynamics, price trends, adhering to strict compliance with international trade regulations, sanctions, and industry standards governing oil trading activities.",
		},
		{
			question: "What are the benefits of trading oil with your company?",
			answer:
				"We provide a comprehensive range of services, including oil trading, logistics, and risk management, ensuring that our clients receive the best possible service. Our team of experts is always on hand to provide advice and support, helping you to make the most of your oil trading activities.",
		},
		{
			question: "How do I get started with oil trading?",
			answer:
				"If you are new to oil trading, we recommend that you start by learning the basics of the industry, including how oil prices are determined, how to read price charts, and how to place trades. Once you have a good understanding of the market, you can open an account with us and start trading oil.",
		},
		{
			question: "What are the risks involved in oil trading?",
			answer:
				"Oil trading can be a risky business, as prices can be volatile and subject to sudden fluctuations. It is important to be aware of the risks involved and to have a clear risk management strategy in place. Our team of experts can help you to develop a risk management plan that is tailored to your individual needs and circumstances.",
		},
		{
			question: "How can I contact your company for more information?",
			answer:
				"If you would like more information about our oil trading services, or if you have any questions about the industry, please feel free to contact us. Our team of experts is always on hand to provide advice and support, and we are happy to help in any way we can.",
		},
	];

	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	return (
		<div className="md:px-14 px-5 mb-14">
			<div className="mt-10">
				<h4 className="lg:text-2xl text-lg text-primary font-semibold text-center">FAQs</h4>
				<h2 className="lg:text-4xl text-3xl font-light text-center mb-3">Here You Will Find</h2>
				<h1 className="lg:text-5xl text-4xl font-extrabold text-center mb-10">Most Asked Questions</h1>
			</div>

			<div className="space-y-5">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className="border border-primary p-5 rounded-lg cursor-pointer"
						onClick={() => setActiveIndex(index === activeIndex ? null : index)}
					>
						<div className="flex items-center justify-between">
							<h3 className="text-lg font-semibold">{faq.question}</h3>
							{activeIndex === index ? <FaMinus className="text-primary" /> : <FaPlus className="text-primary" />}
						</div>
						{activeIndex === index && <p className="mt-3 text-gray-500">{faq.answer}</p>}
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;
