import classNames from "classnames";
export const BUTTON_TYPE = {
	primary: "BUTTON/PRIMARY",
	secondary: "BUTTON/SECONDARY",
};
export default function Button({
	primary,
	secondary,
	white,
	children,
	...rest
}) {
	const classes = classNames({
		"mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm":
			primary,
		"mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-100 rounded text-indigo-700 px-8 py-3 text-sm":
			white,
		"mx-2 my-2 bg-gray-300 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-indigo-700 px-8 py-3 text-sm":
			secondary,
	});
	return (
		<>
			<button className={classes} {...rest}>
				{children}
			</button>
		</>
	);
}
Button.propTypes = {
	checkVariationValue: ({ primary, secondary, white }) => {
		const count = Number(!!primary) + Number(!!secondary) + Number(!!white);
		if (count > 1) {
			return new Error(
				"Only one of primary, secondary, success, warning, danger can be true"
			);
		}
	},
};
