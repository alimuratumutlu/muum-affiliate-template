import { Button } from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons-react";

import { LINKEDIN_URL } from "@/constants/AccountLinks";

import classes from "@/styles/Buttons.module.css";

export default function MuumButton() {
	return (
		<Button
			className={classes.control}
			size="lg"
			variant="gradient"
			gradient={{ from: "blue", to: "cyan", deg: 226 }}
			rightSection={<IconBrandLinkedin />}
			onClick={() => window.open(LINKEDIN_URL, "_blank", "noopener noreferrer")}
		>
			Murat Umutlu
		</Button>
	);
}
