import { Box, Center, Text } from "@chakra-ui/react";
import { AboutMeContainer } from "./about_me_component_styles";

const AboutMeComponent = () => {
	return (
		<AboutMeContainer>
			<Center>
				<Box
					p="4"
					borderColor="black"
					color="black"
					borderWidth="5px"
					width="65vw"
					textAlign="center"
					fontWeight="bold"
					fontSize="30px"
					letterSpacing="10px">
					ABOUT ME
				</Box>
			</Center>

			<Text
				color="black"
				p={{
					base: "80px 70px 0px 35px",
					smToXl: "80px 80px 0px 80px",
				}}
				wordSpacing="2px"
				letterSpacing="1px"
				lineHeight="2rem"
				textIndent="20">
				Hi, I'm Odeh Mark Lozano, a Full-Stack Developer with a strong passion
				for building impactful web and mobile applications that deliver seamless
				user experiences. I hold a Bachelor’s degree in Computer Engineering
				from Notre Dame of Marbel University and have diverse professional
				experience across roles in software development, systems analysis, and
				innovation.
			</Text>
			<Text
				color="black"
				p={{
					base: "20px 70px 0px 35px",
					smToXl: "80px 80px 0px 80px",
				}}
				wordSpacing="2px"
				letterSpacing="1px"
				lineHeight="2rem"
				textIndent="20">
				Over the years, I’ve developed expertise in a wide range of
				technologies, including React, Node.js, Flutter, Laravel, and VB.NET. My
				focus extends to learning containerization tools like Docker and
				Kubernetes, modern architectures, such as microservices and event-driven
				designs, enabling me to craft scalable and efficient systems.
			</Text>
			<Text
				color="black"
				p={{
					base: "20px 70px 0px 35px",
					smToXl: "80px 80px 0px 80px",
				}}
				wordSpacing="2px"
				letterSpacing="1px"
				lineHeight="2rem"
				textIndent="20">
				In addition to technical skills, I’ve honed my problem-solving
				abilities, working on solutions that span mobile app development,
				database management (MySQL and MSSQL), and front-end frameworks like
				TailwindCSS.
			</Text>
			<Text
				color="black"
				p={{
					base: "20px 70px 0px 35px",
					smToXl: "80px 80px 0px 80px",
				}}
				wordSpacing="2px"
				letterSpacing="1px"
				lineHeight="2rem"
				textIndent="20">
				My goal is to continuously expand my skill set, ensuring I stay on the
				cutting edge of full-stack development. Some highlights of my journey
				include: Championing innovation as an Innovations Engineer at Via Appia
				Philippines, where I contributed to process improvements and software
				solutions. Collaborating on national-scale systems during my tenure as
				an Information System Analyst at the Philippine Statistics Authority.
			</Text>
			<Text
				color="black"
				p={{
					base: "20px 70px 0px 35px",
					smToXl: "80px 80px 0px 80px",
				}}
				wordSpacing="2px"
				letterSpacing="1px"
				lineHeight="2rem"
				textIndent="20">
				Currently, I’m focused on building my portfolio by crafting dynamic
				React-based projects and deploying them using AWS and serverless
				frameworks. I’m also refining my expertise in React Native for mobile
				development and exploring advanced testing techniques to ensure
				high-quality software delivery.
			</Text>
			<Text
				color="black"
				p={{
					base: "20px 70px 0px 35px",
					smToXl: "80px 80px 0px 80px",
				}}
				wordSpacing="2px"
				letterSpacing="1px"
				lineHeight="2rem"
				textIndent="20">
				Beyond my technical work, I find joy in music, particularly through
				choir participation, which has taught me teamwork, discipline, and the
				importance of creating harmony in both code and life. I’m on a mission
				to grow as a Full-Stack Developer, building solutions that make a
				difference while connecting with like-minded professionals to create,
				learn, and innovate together. Let’s connect—I’d love to collaborate and
				bring ideas to life!
			</Text>
		</AboutMeContainer>
	);
};

export default AboutMeComponent;
