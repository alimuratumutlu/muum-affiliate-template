import React from "react";
import { MantineProvider } from "@mantine/core";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ReactComponentRenderable } from "@/types";

import AddtoCartButton from "./AddtoCartButton.component"; // Replace with the actual path

describe("AddtoCartButton", () => {
	const renderWithMantine = (component: ReactComponentRenderable) => {
		return render(<MantineProvider>{component}</MantineProvider>);
	};

	it("renders with the correct title", () => {
		const title = "Add to Cart";
		renderWithMantine(
			<AddtoCartButton
				title={title}
				startColor="red"
				endColor="blue"
				onClick={() => {}}
			/>
		);
		expect(screen.getByRole("button", { name: title })).toBeInTheDocument();
	});

	it("calls onClick when clicked", () => {
		const handleClick = jest.fn();
		renderWithMantine(
			<AddtoCartButton
				title="Add to Cart"
				startColor="red"
				endColor="blue"
				onClick={handleClick}
			/>
		);
		fireEvent.click(screen.getByRole("button", { name: "Add to Cart" }));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
