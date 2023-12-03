import { useState } from "react";
import { Checkbox } from "@mantine/core";

import classes from "@/styles/Buttons.module.css";

interface CheckboxButtonProps {
	label: string;
	checked?: boolean;
}

export default function CheckboxButton({
	label,
	checked,
}: CheckboxButtonProps) {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<Checkbox
			className={classes.checkboxButton}
			label={label}
			checked={checked}
			onChange={(event) => setIsChecked(event.currentTarget.checked)}
			wrapperProps={{
				onClick: () => setIsChecked((c) => !c),
			}}
		/>
	);
}
