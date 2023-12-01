import Image from "next/image";
import Link from "next/link";
import classes from "./Logo.module.css";
import cx from "clsx";

/* Logo will be dependent on theme */

export default function Logo() {
	return (
		<Link href={"/"}>
			<Image
				className={cx(classes.icon, classes.dark)}
				src={"/muum-light-mode.png"}
				alt="logo"
				width={133}
				height={55}
			/>
			<Image
				className={cx(classes.icon, classes.light)}
				src={"/muum-dark-mode.png"}
				alt="logo"
				width={133}
				height={55}
			/>
		</Link>
	);
}
