import Image from "next/image";
import Link from "next/link";

type LogoProps = {
	type?: "design" | "light";
	href?: string;
};

const Logo = ({ type = "design", href = "/" }: LogoProps) => {
	return (
		<>
			{type === "design" ? (
				<Link href={href}>
					<Image src="/assets/logo-design.png" alt="Logo" quality={100} width={175} height={175} />
				</Link>
			) : (
				<Link href={href}>
					<Image src="/assets/logo-white.png" alt="Logo" quality={100} width={175} height={175} />
				</Link>
			)}
		</>
	);
};

export default Logo;
