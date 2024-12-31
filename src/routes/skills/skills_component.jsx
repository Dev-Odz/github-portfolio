import { Box, Center, Text, Grid } from "@chakra-ui/react";
import { SkillsContainer } from "./skills_component_styles";
import html5 from "../../assets/icons/html-5.png";
import css3 from "../../assets/icons/css-3.png";
import javascript from "../../assets/icons/js.png";
import java from "../../assets/icons/java.png";
import dart from "../../assets/icons/dart-programming-language-icon.png";
import php from "../../assets/icons/php.png";
import flutter from "../../assets/icons/flutter-icon.png";
import react from "../../assets/icons/physics.png";
import express from "../../assets/icons/express-js-icon.png";
import nodejs from "../../assets/icons/node-js-icon.png";
import appian from "../../assets/icons/Appian-final.png.webp";
import mysql from "../../assets/icons/mysql-icon.png";
import mssql from "../../assets/icons/sql-server-icon.png";
import mongodb from "../../assets/icons/mongodb-icon.png";
import postgresql from "../../assets/icons/postgresql-icon (1).png";
import git from "../../assets/icons/git-icon.png";
import github from "../../assets/icons/github-icon.png";
import outsystems from "../../assets/icons/avatar.png";
import adobePhotoshop from "../../assets/icons/adobe-photoshop-icon.png";
import IconComponent from "./../../components/icons/icon_component";

const SkillsComponent = () => {
	return (
		<SkillsContainer>
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
					TOOLS AND SKILLS
				</Box>
			</Center>

			<Box p="80px 40px" display="flex" flexDirection="column">
				{/* LANGUAGE */}
				<Text
					color="black"
					fontWeight="bold"
					fontSize="25px"
					letterSpacing="10px">
					LANGUAGE:
				</Text>
				<Grid
					templateColumns={{
						base: "repeat(2, 1fr)",
						sm: "repeat(3, 1fr)",
					}}
					gap={{
						base: "5",
						sm: "5",
					}}
					p="30px 40px 50px 40px">
					<IconComponent icon={html5} label={"html5".toUpperCase()} />
					<IconComponent icon={css3} label={"css3".toUpperCase()} />
					<IconComponent icon={javascript} label={"javascript".toUpperCase()} />
					<IconComponent icon={java} label={"java".toUpperCase()} />
					<IconComponent icon={dart} label={"dart".toUpperCase()} />
					<IconComponent icon={php} label={"php".toUpperCase()} />
				</Grid>

				{/* FRAMEWORKS */}
				<Text
					color="black"
					fontWeight="bold"
					fontSize="25px"
					letterSpacing="10px">
					FRAMEWORKS:
				</Text>
				<Grid
					templateColumns={{
						base: "repeat(2, 1fr)",
						sm: "repeat(3, 1fr)",
					}}
					gap={{
						base: "5",
						sm: "5",
					}}
					p="30px 40px 50px 40px">
					<IconComponent icon={flutter} label={"flutter".toUpperCase()} />
					<IconComponent icon={react} label={"react".toUpperCase()} />
					<IconComponent icon={express} label={"express-js".toUpperCase()} />
				</Grid>

				{/* BACKEND */}
				<Text
					color="black"
					fontWeight="bold"
					fontSize="25px"
					letterSpacing="10px">
					BACKEND:
				</Text>
				<Grid
					templateColumns={{
						base: "repeat(2, 1fr)",
						sm: "repeat(3, 1fr)",
					}}
					gap={{
						base: "5",
						sm: "5",
					}}
					p="30px 40px 50px 40px">
					<IconComponent icon={nodejs} label={"nodejs".toUpperCase()} />
					<IconComponent icon={appian} label={"appian".toUpperCase()} />
				</Grid>

				{/* DATABASES */}
				<Text
					color="black"
					fontWeight="bold"
					fontSize="25px"
					letterSpacing="10px">
					DATABASES:
				</Text>
				<Grid
					templateColumns={{
						base: "repeat(2, 1fr)",
						sm: "repeat(3, 1fr)",
					}}
					gap={{
						base: "5",
						sm: "5",
					}}
					p="30px 40px 50px 40px">
					<IconComponent icon={mysql} label={"mysql".toUpperCase()} />
					<IconComponent icon={mssql} label={"mssql".toUpperCase()} />
					<IconComponent icon={mongodb} label={"mongodb".toUpperCase()} />
					<IconComponent icon={postgresql} label={"postgresql".toUpperCase()} />
				</Grid>

				{/* TOOLS */}
				<Text
					color="black"
					fontWeight="bold"
					fontSize="25px"
					letterSpacing="10px">
					TOOLS:
				</Text>
				<Grid
					templateColumns={{
						base: "repeat(2, 1fr)",
						sm: "repeat(3, 1fr)",
					}}
					gap={{
						base: "5",
						sm: "5",
					}}
					p="30px 40px 50px 40px">
					<IconComponent icon={git} label={"git".toUpperCase()} />
					<IconComponent icon={github} label={"github".toUpperCase()} />
					<IconComponent icon={outsystems} label={"outsystems".toUpperCase()} />
					<IconComponent
						icon={adobePhotoshop}
						label={"postgresql".toUpperCase()}
					/>
				</Grid>
			</Box>
		</SkillsContainer>
	);
};

export default SkillsComponent;
