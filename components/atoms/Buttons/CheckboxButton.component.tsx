import { Checkbox } from "@mantine/core";

import classes from "@/styles/Buttons.module.css";

interface CheckboxButtonProps {
	label: string;
	checked?: boolean;
	setChecked?: (checked: boolean) => void;
}

export default function CheckboxButton({
	label,
	checked,
	setChecked,
}: CheckboxButtonProps) {
	return (
		<Checkbox
			className={classes.checkboxButton}
			label={label}
			checked={checked}
			onChange={(event) => setChecked?.(event.currentTarget.checked)}
		/>
	);
}
