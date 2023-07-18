import "./header.style.css";
import { data } from "./socials";
import HeaderImage from "../../assets/Document199_page-0001-min.jpeg";
function Header() {
	return (
		<header id="header">
			<div className="container header_container">
				<div className="header_profile">
					<img src={HeaderImage} alt="Profile_Picture" />
				</div>
				<h3>Aashim Limbu</h3>
				<p>
					Passionate Full Stack Developer specializing in front end development
					with a focus on building out functional and dynamic user interfaces
					using React.js. Currently expanding skills in backend development.
					Seeking to create seamless and impactful web experiences
				</p>
				<div className="header_cta">
					<a href="#contact"> Let's Talk</a>
					<a href="#portfolio"> My Work</a>
				</div>
				<div className="header_socials">
					<ul>
						{data.map((element) => (
							<a
								key={element.id}
								href={element.link}
								target="_blank"
								rel="noopener noreferrer"
								alt="linked-in"
							>
								{element.icon}
							</a>
						))}
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
