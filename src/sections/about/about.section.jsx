import "./about.style.css";
import { data } from "./about.data";
import Card from "../../components/Card/card.component";
import {GoDownload} from 'react-icons/go'
import Resume from'../../assets/AashimResume.pdf'
import AboutImage from "../../assets/Document199_page-0001-min.jpeg";
function About() {
	return (
		<section id="about">
			<div className="container about_container">
				<div className="about_left">
					<div className="about_potrait">
						<img src={AboutImage} alt="potrait_image" />
					</div>
				</div>
				<div className="about_right">
					<h2>About Me</h2>
					<div className="about_cards">
                     {
                        data.map(element=> (
                            <Card key={element.id} className="about_card">
                                <span className="about_cardIcon">{element.icon}</span>
                                <h5>{element.title}</h5>
                                <small>{element.desc}</small>
                            </Card>
                        ))
                     }
                    </div>
					<p>
						Hello! I'm excited to present my portfolio project, showcasing my
						journey in front-end development. Over the past three months, I have
						been fully immersed in learning and mastering the art of front-end
						development, focusing on creating functional and interactive user
						interfaces using HTML, CSS, and JavaScript. I've honed my skills in
						crafting responsive layouts, animating elements, and utilizing
						JavaScript libraries and frameworks like React and Vue.js. This
						journey has ignited a passion within me, and I'm eager to become a
						full-stack developer in the near future. With relentless enthusiasm
						for learning and growth, I am open to collaboration and pushing the
						boundaries of what's possible in web development. My goal is to
						create comprehensive and innovative web applications that leave a
						lasting impact. Thank you for exploring my portfolio, and I welcome
						any suggestions or opportunities to collaborate. Let's build a
						brighter digital future together!
					</p>
                    <a href={Resume} className="btn primary" download>
                        Download Resume
                        <GoDownload/>
                        </a>
				</div>
			</div>
		</section>
	);
}

export default About;
