import { Box, Link as ChakraLink, Flex } from "@chakra-ui/react";
import { Outlet, Link as RouterLink, useLocation } from "react-router-dom";
import { NavigationContainer } from "./navigation_component_styles";
import { useEffect, useState } from "react";

const NavigationComponent = () => {
	const location = useLocation();
	const [currentLocation, setCurrentLocation] = useState("Home");

	// Map pathnames to readable names

	useEffect(() => {
		const routeMapping = {
			"/": "Home",
			"/about-me": "About Me",
			"/skills": "Skills",
			"/projects": "Projects",
			"/work-experience": "Work Experience",
			"/contact": "Contact",
		};
		// Update currentLocation based on the pathname
		setCurrentLocation(routeMapping[location.pathname] || "Home");
	}, [location]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "auto", // Corrected scroll behavior
		});
	};

	return (
		<>
			<NavigationContainer>
				<Box
					background="#1B1B1B"
					width="100%"
					padding="4"
					color="white"
					display="flex"
					alignItems="center"
					justifyContent="center"
					height={{
						base: "60px",
						sm: "60px",
						lgTo2xl: "unset",
					}}>
					<Flex
						gap={{
							base: "2",
							sm: "5",
							lg: "20",
							xl: "20",
						}}
						display={{
							base: "none",
							sm: "none",
							lg: "flex",
							xl: "flex",
						}}
						alignItems="center">
						<RouterLink to="/">
							<ChakraLink
								onClick={scrollToTop}
								color={currentLocation === "Home" ? "blue.300" : ""}
								display="flex"
								justifyContent="center"
								alignItems="center"
								padding="10px"
								_hover={{ textDecoration: "underline", color: "#3F8E00" }}>
								Home
							</ChakraLink>
						</RouterLink>
						<RouterLink to="/about-me">
							<ChakraLink
								onClick={scrollToTop}
								color={currentLocation === "About Me" ? "blue.300" : ""}
								display="flex"
								justifyContent="center"
								alignItems="center"
								padding="10px"
								_hover={{ textDecoration: "underline", color: "#3F8E00" }}>
								About Me
							</ChakraLink>
						</RouterLink>
						<RouterLink to="/skills">
							<ChakraLink
								onClick={scrollToTop}
								color={currentLocation === "Skills" ? "blue.300" : ""}
								display="flex"
								justifyContent="center"
								alignItems="center"
								padding="10px"
								_hover={{ textDecoration: "underline", color: "#3F8E00" }}>
								Skills
							</ChakraLink>
						</RouterLink>
						<RouterLink to="/projects">
							<ChakraLink
								onClick={scrollToTop}
								color={currentLocation === "Projects" ? "blue.300" : ""}
								display="flex"
								justifyContent="center"
								alignItems="center"
								padding="10px"
								_hover={{ textDecoration: "underline", color: "#3F8E00" }}>
								Projects
							</ChakraLink>
						</RouterLink>
						<RouterLink to="/work-experience">
							<ChakraLink
								onClick={scrollToTop}
								color={currentLocation === "Work Experience" ? "blue.300" : ""}
								display="flex"
								justifyContent="center"
								alignItems="center"
								padding="10px"
								_hover={{ textDecoration: "underline", color: "#3F8E00" }}>
								Work Experience
							</ChakraLink>
						</RouterLink>
						<RouterLink to="/contact">
							<ChakraLink
								onClick={scrollToTop}
								color={currentLocation === "Contact" ? "blue.300" : ""}
								display="flex"
								justifyContent="center"
								alignItems="center"
								padding="10px"
								_hover={{ textDecoration: "underline", color: "#3F8E00" }}>
								Contact
							</ChakraLink>
						</RouterLink>
					</Flex>
				</Box>
			</NavigationContainer>

			<Outlet />
		</>
	);
};

export default NavigationComponent;
