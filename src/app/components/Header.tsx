import Link from "next/link";

export default function Header() {
	return (
		<header>
			<h1>header</h1>
			<nav>
				nav:
				<Link href={"/"}>Home</Link>
				<Link href={"/build-routine"}>Build Routine</Link>
				<Link href={"/load-routine"}>Load Routine</Link>
				<Link href={"poses"}>Poses</Link>
			</nav>
		</header>
	);
}
