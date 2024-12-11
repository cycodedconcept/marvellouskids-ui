import type { Metadata } from "next";
import { Itim } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Marvellous Kids Childcare",
	description: "Where Little Dreams Begin and Families Thrive",
};

const ItimFont = Itim({
	weight: "400",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${ItimFont.className} text-textColor overflow-x-hidden`}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
