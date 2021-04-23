import React from 'react';
import App1 from "./dropDownApp";

export default {
	title: "Dropdown",
	component: App1,
	parameters: {
		info: `
Testing the case where prop types dont work
`
	},
}
export const Dropdown = () => <App1 />;