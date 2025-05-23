import liamPic from '../../assets/Liam2.JPG';
import './style.css';

export function Home() {
	return (
		<div class="home">
			<center>
			<div class="image-cropper">
			<a href="" target="_blank">
				<img src={liamPic} alt="Picture of Liam" class="round-image" />
			</a></div></center>
			<h1 data-aos="fade-in">Hey! It's Liam 🌊</h1>
			<p data-aos="fade-in">I'm a combined Biochemistry/Chemistry student at the University of British Columbia! Below are some cool thing's I've worked on or been a part of.</p>
			<section>
				<Resource
					title="PLAICRAFT"
					description="A complete data analysis of user data generated on a multiplayer Minecraft server."
					href="https://preactjs.com/tutorial"
				/>
				<Resource
					title="UBC DSCI 100 Repo"
					description="My repository for some side projects while completing UBC's DSCI 100 course."
					href="https://github.com/liammurray123/DSCI-100/"
				/>
				<Resource
					title="Blocked and Loaded"
					description="A research paper I wrote as part of UBC's Science One program."
					href="https://github.com/liammurray123/Blocked-and-Loaded-Repository"
				/>
			</section>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} data-aos="fade-in" target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
