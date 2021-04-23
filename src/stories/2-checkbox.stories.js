import React from 'react';
import CheckBox from "./checkboxApp.js";

export default {
	title: "checkbox",
	component: CheckBox,
	parameters: {
		info: `
Testing the case where prop types dont work
`
	},
}
export const checkboxGroup= () => <CheckBox />;
