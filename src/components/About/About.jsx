import React from 'react';
import freelance from '../../images/freelance.png';
import './style/About.css';

function About() {
	return (
		<>
			<h1 class='about__title'>Freelancing Services</h1>
			<h3 class='about__subTitle'>Simple, Easy, Fair...</h3>
			<div class='about__imgContainer'>
				<h1 className="about__statement">
					We create clean and effective websites for your
					company! Whether you want a website made from
					scratch or with a particular platform, we got you!
				</h1>
				<img
					class='about__img'
					src={freelance}
					alt='freelance'
				/>
			</div>
			<ul className="about__list">
				<li>
					Experience creating multiple E-Commerce Websites
				</li>
				<li>
					Recreated many existing apps (Netflix, Amazon, Spotify, etc.).
				</li>
				<li>
					Love creating websites for all types of small-businesses!
				</li>
			</ul>
		</>
	);
}

export default About;
