import "./navbar.style.css";
import data from "./data";
import ReactLogo from "../../assets/logo_adobe_express.svg";
import Button from "../../components/Button/button.component.jsx";
function NavBar() {
	return (
		<nav id="nav">
			<div className="container nav_container">
				<a href="index.html" className="nav_logo">
					<img src={ReactLogo} alt="Logo" />
				</a>
				<ul className="nav_menu">
					{data.map((element) => (
						<li key={element.id}>
							<a href={element.link}>{element.title}</a>
						</li>
					))}
				</ul>
				<Button primary>Click me</Button>
			</div>
		</nav>
	);
}

export default NavBar;
