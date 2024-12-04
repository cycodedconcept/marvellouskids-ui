import Image from "next/image";

type LogoProps = {
	type?: "design" | "light";
};

const Logo = ({ type = "design" }: LogoProps) => {
	return (
		<>
			{type === "design" ? (
				<Image src="/assets/logo-design.png" alt="Logo" quality={100} width={175} height={175} />
			) : (
				<Image src="/assets/logo-white.png" alt="Logo" quality={100} width={175} height={175} />
			)}
		</>
	);
};

export default Logo;
