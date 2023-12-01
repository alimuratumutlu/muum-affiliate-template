import Image from "next/image";
import Link from "next/link";

/* Logo will be dependent on theme */

export default function Logo() {
	return (
		<Link href={"/"}>
			<Image src={"/muum-dark-mode.png"} alt="logo" width={133} height={55} />
		</Link>
	);
}
