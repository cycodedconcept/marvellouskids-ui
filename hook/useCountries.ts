"use client";

import { useEffect, useState } from "react";

export const useCountries = () => {
	const [countries, setCountries] = useState<string[]>([]);

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const response = await fetch("https://restcountries.com/v3.1/all");
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				const countryList = data.map((country: { name: { common: string } }) => country.name.common).sort();
				setCountries(countryList);
			} catch (error) {
				console.error("Error fetching countries:", error);
			}
		};

		fetchCountries();
	}, []);

	return countries;
};
