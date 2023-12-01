import Image from "next/image";

/* Logo will be dependent on theme */

export default function Logo() {
	return (
		<Image src={"/muum-dark-mode.png"} alt="logo" width={133} height={55} />
	);
}
