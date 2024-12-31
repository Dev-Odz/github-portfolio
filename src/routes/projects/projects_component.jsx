import { Box, Center, Text, Grid, Image, Button, Flex } from "@chakra-ui/react";
import { ProjectsContainer } from "./projects_styles";
import crownClothingImage from "../../assets/image/crown-clothing.png";
import polarExpressImage from "../../assets/image/polar_express_ticket_app.png";
import calculatorImage from "../../assets/image/calculator.png";
import { Link } from "react-router-dom";

const ProjectsComponent = () => {
	return (
		<ProjectsContainer>
			<Center>
				<Box
					p="4"
					borderColor="black"
					color="black"
					borderWidth="5px"
					width="55vw"
					textAlign="center"
					fontWeight="bold"
					fontSize="30px"
					letterSpacing="10px">
					Projects
				</Box>
			</Center>

			<Text
				color="black"
				p="50px 100px 0px"
				wordSpacing="2px"
				letterSpacing="1px"
				lineHeight="2rem"
				textIndent="20"
				textAlign="center">
				Here are some of my personal projects, including an overview of each and
				details about the tech stack used.
			</Text>

			<Grid
				templateColumns={{
					base: "repeat(1, 1fr)",
					sm: "repeat(1, 1fr)",
					md: "repeat(3, 1fr)",
					lgTo2xl: "repeat(4, 1fr)",
				}}
				columnGap="10"
				rowGap="20"
				p="30px 40px 50px 40px">
				<Box display="flex" flexDirection="column">
					<Box
						height="300px"
						width="100%"
						overflow="hidden"
						marginBottom="1rem">
						<Image
							src={crownClothingImage}
							height="300px"
							width="100%"
							objectFit="cover"
							borderRadius="14px"
							transition="transform 1.5s ease"
							_hover={{
								transform: "scale(1.1)", // Scales the image by 10%
							}}
						/>
					</Box>

					<Text
						fontSize="24px"
						fontWeight="extrabold"
						color="black"
						paddingBottom="20px">
						Crown Clothing App
					</Text>

					<Text
						fontSize="14px"
						fontWeight="normal"
						color="#9c9c9c"
						paddingBottom="20px">
						An e-commerce application designed for a seamless online shopping
						experience. It features a sleek interface, dynamic product listings,
						and a fully functional shopping cart. This app was built using React
						and the Netlify as the database.
					</Text>

					<Box width="50%">
						<Link
							to="https://odz-crown-clothing.netlify.app/"
							target="_blank"
							rel="noopener noreferrer">
							<Button
								width="100%"
								backgroundColor="#3F8E00"
								color="#FFFFFF"
								href="https://odz-crown-clothing.netlify.app/">
								<Flex width="100%" justifyContent="space-between">
									<Text>Visit app</Text>
									<Text fontWeight="bold">{">"}</Text>
								</Flex>
							</Button>
						</Link>
					</Box>
				</Box>
				<Box display="flex" flexDirection="column">
					<Box
						height="300px"
						width="100%"
						overflow="hidden"
						marginBottom="1rem">
						<Image
							src={polarExpressImage}
							height="300px"
							width="100%"
							objectFit="cover"
							borderRadius="14px"
							transition="transform 1.5s ease"
							_hover={{
								transform: "scale(1.1)", // Scales the image by 10%
							}}
						/>
					</Box>

					<Text
						fontSize="24px"
						fontWeight="extrabold"
						color="black"
						paddingBottom="20px">
						Polar Express Ticket App
					</Text>

					<Text
						fontSize="14px"
						fontWeight="normal"
						color="#9c9c9c"
						paddingBottom="20px">
						Polar Express Help Desk, is a ticketing system designed to
						streamline issue reporting and resolution between users and
						developers. It provides a user-friendly interface for submitting
						tickets, tracking updates, and viewing company announcements, making
						it easier to address technical issues efficiently. This app was
						built using NextJS and AWS S3 as the database.
					</Text>

					<Box width="50%">
						<Link
							to="https://main.d2qe5ofbfzqhpl.amplifyapp.com/"
							target="_blank"
							rel="noopener noreferrer">
							<Button
								width="100%"
								backgroundColor="#3F8E00"
								color="#FFFFFF"
								href="https://odz-crown-clothing.netlify.app/">
								<Flex width="100%" justifyContent="space-between">
									<Text>Visit app</Text>
									<Text fontWeight="bold">{">"}</Text>
								</Flex>
							</Button>
						</Link>
					</Box>
				</Box>
				<Box display="flex" flexDirection="column">
					<Box
						height="300px"
						width="100%"
						overflow="hidden"
						marginBottom="1rem">
						<Image
							src={calculatorImage}
							height="300px"
							width="100%"
							objectFit="cover"
							borderRadius="14px"
							transition="transform 1.5s ease"
							_hover={{
								transform: "scale(1.1)", // Scales the image by 10%
							}}
						/>
					</Box>

					<Text
						fontSize="24px"
						fontWeight="extrabold"
						color="black"
						paddingBottom="20px">
						Calculator App
					</Text>

					<Text
						fontSize="14px"
						fontWeight="normal"
						color="#9c9c9c"
						paddingBottom="20px">
						A simple calculator app that includes basic mathematic operation
						such as addition, subtraction, multiplication, and division. The
						tech used in this app is Flutter.
					</Text>

					<Box width="50%">
						<Link
							to="https://odz-calculator-app.netlify.app/"
							target="_blank"
							rel="noopener noreferrer">
							<Button
								width="100%"
								backgroundColor="#3F8E00"
								color="#FFFFFF"
								href="https://odz-crown-clothing.netlify.app/">
								<Flex width="100%" justifyContent="space-between">
									<Text>Visit app</Text>
									<Text fontWeight="bold">{">"}</Text>
								</Flex>
							</Button>
						</Link>
					</Box>
				</Box>
			</Grid>
		</ProjectsContainer>
	);
};

export default ProjectsComponent;
