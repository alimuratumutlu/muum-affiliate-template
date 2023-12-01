import Link from "next/link";

import { HeaderRoutes } from "@/routes/HeaderRoutes";

import classes from "./HeaderLinks.module.css";

export default function HeaderLinks() {
	return (
		<>
			{HeaderRoutes.map((link) => (
				<Link key={link.label} href={link.link} className={classes.link}>
					{link.label}
				</Link>
			))}
		</>
	);
}
