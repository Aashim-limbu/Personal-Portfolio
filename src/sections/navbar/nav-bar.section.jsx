import "./navbar.style.css";
import data from "./data";
import { VscSymbolColor } from "react-icons/vsc";
import ReactLogo from "../../assets/logo_adobe_express.svg";
function NavBar() {
	return (
		<nav id="nav">
			<div className="container nav_container">
				<a href="/index.html" className="nav_logo">
					<img src={ReactLogo} alt="Logo" />
				</a>
				<ul className="nav_menu">
					{data.map((element) => (
						<li key={element.id}>
							<a href={element.link}>{element.title}</a>
						</li>
					))}
				</ul>
				<button id="theme_icon">
					<VscSymbolColor />
				</button>
			</div>
		</nav>
	);
}

export default NavBar;
