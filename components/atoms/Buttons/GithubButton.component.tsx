import { Button } from "@mantine/core";
import { IconBrandGithubFilled } from "@tabler/icons-react";

import { GITHUB_REPO_URL } from "@/constants/AccountLinks";

import classes from "@/styles/Buttons.module.css";

export default function GithubButton() {
	return (
		<Button
			className={classes.control}
			size="lg"
			variant="default"
			color="gray"
			leftSection={<IconBrandGithubFilled />}
			onClick={() =>
				window.open(GITHUB_REPO_URL, "_blank", "noopener noreferrer")
			}
		>
			See on Github
		</Button>
	);
}
