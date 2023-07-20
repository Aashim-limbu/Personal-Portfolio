import classNames from "classnames";
import './card.style.css'
function Card({ children, className, onClick }) {
	const classes = classNames("card", className);

	return (
		<article className={classes} onClick={onClick}>
			{children}
		</article>
	);
}

export default Card;
