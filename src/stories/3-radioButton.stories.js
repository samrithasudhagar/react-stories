import React from 'react';
import RadioGroup from "./radiobuttonApp";

export default {
	title: "radiobutton",
	component: RadioGroup,
	parameters: {
		info: `
Testing the case where prop types dont work
`
	},
}
export const radioGroup= () => <RadioGroup />;