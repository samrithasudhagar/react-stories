import React from 'react';
import App from "./preLoaderApp.js";
import Apps from "./postLoaderApp";
import App1 from "./iconApp";
import App2 from "./error";
import App3 from "./disabled"
export default {
	title: "Input",
	component: App,
	parameters: {
		info: `
Testing the case where prop types dont work
`
	},
}
export const PreLoader = () => <App />;
export const PostLoader = () => <Apps />;
export const icon = () => <App1 />;
export const erroredInput= () => <App2 />;
export const disabledInput= () => <App3 />;