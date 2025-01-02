import { Box, Heading, Text, Button, Image, Flex } from "@chakra-ui/react";
import profilePicture from "../../assets/image/profile_picture_2.jpg";
import { HomeContainer } from "./home_component_styles";
import AboutMeComponent from "../about-me/about_me_component";
import SkillsComponent from "../skills/skills_component";
import WorkExperienceComponent from "../work-experience/work_experience_component";
import ProjectsComponent from "../projects/projects_component";
import ContactComponent from "../contacts/contact_component";

const HomeComponent = () => {
	return (
		<HomeContainer>
			<Box
				display="flex"
				paddingTop={{
					base: "160px",
					sm: "160px",
					lgTo2xl: "180px",
				}}>
				<Box display="flex" flexDirection="column">
					<Flex flexBasis="50%" justify="center">
						<Image
							boxSize="350px"
							borderRadius="full"
							fit="cover"
							src={profilePicture}
							alt="Dan Abramov"
						/>
					</Flex>
					<Box
						padding={{
							base: "30px",
							sm: "40px",
							lgTo2xl: "180px",
						}}
						marginBottom="80px">
						<Heading
							fontWeight="extrabold"
							fontSize="44px"
							color="#FFFFFF"
							padding="20px 0px"
							lineHeight="52px">
							Odeh Mark Lozano
						</Heading>
						<Text color="#9C9C9C" paddingBottom="10px">
							Hi, I’m a Full-Stack Developer with expertise in React, Node.js,
							PHP, and Flutter.
						</Text>
						<Text color="#9C9C9C" paddingBottom="10px">
							I thrive on solving complex problems and creating impactful
							solutions.
						</Text>
						<Text color="#9C9C9C" paddingBottom="50px">
							With a strong foundation in Computer Engineering and multiple
							certifications, I combine technical skills with creativity to
							deliver exceptional results. Let’s connect and build something
							amazing!
						</Text>
						<a
							href="../../assets/Resume - Odeh Mark Lozano.docx"
							download="Resume-Odeh Mark Lozano.docx">
							<Button width="60%" backgroundColor="#3F8E00" color="#FFFFFF">
								Download CSV
							</Button>
						</a>
					</Box>

					{/* ABOUT ME */}
					<AboutMeComponent />

					{/* SKILLS */}
					<SkillsComponent />

					{/* WORK EXPERIENCE */}
					<WorkExperienceComponent />

					{/* PROJECTS */}
					<ProjectsComponent />

					{/* CONTACT ME */}
					<ContactComponent />
				</Box>
			</Box>
		</HomeContainer>
	);
};

export default HomeComponent;
