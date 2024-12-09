"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FAQ = () => {
	const faqs = [
		{
			question: "What skills should a nanny have?",
			answer:
				"You should have experience of working with children, either as a nanny or in other childcare settings, as well as good organisational skills and the ability to cook.",
		},
		{
			question: "Do nannies need qualifications?",
			answer:
				"Formal childcare qualifications are not needed though some clients do insist on this as part of their criteria. Some nannies do have childcare qualifications such as Cache, however some just have a good level of childcare experience, along with a paediatric first aid certificate and a valid DBS. Good references are also required.",
		},
		{
			question: "Do nannies do housework?",
			answer:
				"Live-in nannies do anything relating to the children. In addition, you should be prepared to help with things such as running errands, family shopping etc., and ensuring you are flexible.",
		},
		{
			question: "Do nannies get breaks?",
			answer:
				"What your day as a live-in nanny looks like will largely depend on the ages of the children you are working with. If there are older children who are at school and/or nursery then there may be time during the day for a break. However, if the role has younger children then it may be more difficult - in this case we encourage nannies to take a break when the children are napping.",
		},
		{
			question: "How many families can a nanny work for?",
			answer: "As many as you want and your time allows for.",
		},
		{
			question: "Can a nanny work from her own home?",
			answer: "No",
		},
	];

	const [activeIndex, setActiveIndex] = useState<number | null>(faqs[0] ? 0 : null);

	return (
		<div className="md:px-14 px-5 mb-20">
			<div className="mt-10">
				<h4 className="lg:text-2xl text-lg text-primary font-semibold text-center">FAQs</h4>
				<h2 className="lg:text-4xl text-3xl font-light text-center mb-3">Here You Will Find</h2>
				<h1 className="lg:text-5xl text-4xl font-extrabold text-center mb-10">Most Asked Questions</h1>
			</div>

			<div className="space-y-5">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className="border border-primary p-5 rounded-lg cursor-pointer shadow-md"
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
