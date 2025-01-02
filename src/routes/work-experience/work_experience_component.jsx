import { Box, Center, Text, Grid, Span } from "@chakra-ui/react";
import { WorkExperienceContainer } from "./work_experience_styles";

const WorkExperienceComponent = () => {
	return (
		<WorkExperienceContainer>
			<Center>
				<Box
					p="4"
					borderColor="black"
					color="black"
					borderWidth="5px"
					width={{
						base: "80vw",
						sm: "70vw",
						md: "70vw",
						lgTo2xl: "65vw",
					}}
					textAlign="center"
					fontWeight="bold"
					fontSize="30px"
					letterSpacing="10px">
					WORK EXPERIENCE
				</Box>
			</Center>

			<Grid
				templateColumns={{
					base: "repeat(1, 1fr)",
					sm: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
					lgToXl: "repeat(2, 1fr)",
				}}
				columnGap={{
					base: "10",
					sm: "10",
					lgToXl: "10",
				}}
				rowGap="10"
				autoRows="auto"
				p={{
					base: "80px 20px 50px 20px",
					sm: "80px 40px 50px 40px",
				}}>
				<Box
					borderColor="darkgray"
					color="black"
					borderRadius="14px"
					borderWidth="1.5px"
					fontWeight="semibold">
					<Box p="6" backgroundColor="#1B1B1B" borderTopRadius="14px">
						<Text color="whiteAlpha.800" fontSize="1.5rem">
							Via Appia Philippines, Inc.
						</Text>
						<Text
							color="whiteAlpha.500"
							fontSize=".75rem"
							fontStyle="italic"
							paddingBottom="15px">
							June 2022 - May 2024
						</Text>
						<Text color="whiteAlpha.800" fontSize="1rem">
							Innovations Engineer
						</Text>
					</Box>
					<Box padding="10px 20px 20px">
						<Box>
							<Span>{"● "}</Span>
							<Span fontSize="1rem" fontWeight="bold">
								Mobile Development:{" "}
							</Span>
							<Span fontSize="1rem" color="blackAlpha.700">
								Built NICT LIFE PH, a mobile app utilizing OutSystems for
								front-end and Appian for back-end operations.
							</Span>
						</Box>
						<Box>
							<Span>{"● "}</Span>
							<Span fontSize="1rem" fontWeight="bold">
								Web Solutions:{" "}
							</Span>
							<Span fontSize="1rem" color="blackAlpha.700">
								Delivered Hotel Booking App using OutSystems and Property
								Management app with Flutter, Node.js, and Appian.
							</Span>
						</Box>
						<Box>
							<Span>{"● "}</Span>
							<Span fontSize="1rem" fontWeight="bold">
								Documentation & Communication:{" "}
							</Span>
							<Span fontSize="1rem" color="blackAlpha.700">
								Authored technical/functional specifications and maintained
								clear communication with project teams.
							</Span>
						</Box>
						<Box>
							<Span>{"● "}</Span>
							<Span fontSize="1rem" fontWeight="bold">
								Collaboration:{" "}
							</Span>
							<Span fontSize="1rem" color="blackAlpha.700">
								Assisted sales and pre-sales teams by providing technical
								service estimates and resolving application issues for clients.
								Played a key role in designing the structure of the HMO App,
								including defining the API structure, creating 20+ user stories,
								and gathering and documenting system requirements to support
								development. Explored and integrated technologies like Flutter
								and Node.js to build a scalable proof-of-concept application,
								successfully demonstrating core functionalities and preparing
								the project for future deployment.
							</Span>
						</Box>
					</Box>
				</Box>
				{/* PHILSYS */}
				<Box
					borderColor="darkgray"
					color="black"
					borderRadius="14px"
					borderWidth="1.5px"
					fontWeight="semibold">
					<Box p="6" backgroundColor="#1B1B1B" borderTopRadius="14px">
						<Text color="whiteAlpha.800" fontSize="1.5rem">
							Philippine Statistics Authority (PSA) – Philippine Identification
							System
						</Text>
						<Text
							color="whiteAlpha.500"
							fontSize=".75rem"
							fontStyle="italic"
							paddingBottom="15px">
							August 2020 - July 2021
						</Text>
						<Text color="whiteAlpha.800" fontSize="1rem">
							Information Systems Analyst I
						</Text>
					</Box>
					<Box padding="10px 20px 30px">
						<Box>
							<Span>{"● "}</Span>
							<Span fontSize="1rem" fontWeight="bold">
								Desktop Development:{" "}
							</Span>
							<Span fontSize="1rem" color="blackAlpha.700">
								Developed a custom inventory system to automate the stock
								inventory process, transitioning from manual to digital
								tracking. Additionally, created a task notification system to
								monitor employee tasks and outputs, improving accountability and
								productivity. Both systems were built using VB.Net and MySQL,
								resulting in a 50% reduction in inventory processing time and a
								30% improvement in task completion rates across the
								organization.
							</Span>
						</Box>
						<Box>
							<Span>{"● "}</Span>
							<Span fontSize="1rem" fontWeight="bold">
								Duties:{" "}
							</Span>
							<Span fontSize="1rem" color="blackAlpha.700">
								Provided on-site technical support and issue resolution for
								PhilSys operations. That includes troubleshooting malfunction
								and errors of the PhilSys Registration System and properly
								handles and documents all of the transactions and issues from
								the Province.
							</Span>
						</Box>
						<Box>
							<Span>{"● "}</Span>
							<Span fontSize="1rem" fontWeight="bold">
								Collaboration:{" "}
							</Span>
							<Span fontSize="1rem" color="blackAlpha.700">
								Developed a solution to avoid duplication and ensure the
								accuracy of the data being submitted and entered into the
								system. The solution I implemented required users to provide
								screenshots as part of the validation process during PhilSys
								Registration Step 1 and Step 2.
							</Span>
						</Box>
					</Box>
				</Box>

				{/* SOFT ARTIFACT INC. */}
				<Box
					borderColor="darkgray"
					color="black"
					borderRadius="14px"
					borderWidth="1.5px"
					fontWeight="semibold">
					<Box p="6" backgroundColor="#1B1B1B" borderTopRadius="14px">
						<Text color="whiteAlpha.800" fontSize="1.5rem">
							Soft Artifact Incorporated
						</Text>
						<Text
							color="whiteAlpha.500"
							fontSize=".75rem"
							fontStyle="italic"
							paddingBottom="15px">
							April 2019 - August 2019
						</Text>
						<Text color="whiteAlpha.800" fontSize="1rem">
							Software Developer
						</Text>
					</Box>
					<Box padding="10px 20px 30px">
						<Box>
							<Span>{"● "}</Span>
							<Span fontSize="1rem" fontWeight="bold">
								Desktop Development:{" "}
							</Span>
							<Span fontSize="1rem" color="blackAlpha.700">
								Developed an additional feature for an existing application, the
								Goods Receipt – Bill of Quantities System Module and Return,
								using JavaFX and MySQL. This feature streamlined the processing
								of goods receipts and returns, reducing processing time by 40%
								and ensuring accurate tracking of over 5,000 transactions
								monthly.
							</Span>
						</Box>
						<Box>
							<Span>{"● "}</Span>
							<Span fontSize="1rem" fontWeight="bold">
								Other Duties:{" "}
							</Span>
							<Span fontSize="1rem" color="blackAlpha.700">
								Migrated existing system modules, receipt reports, and platform
								reports from Java Swing to Java-FX. The migration modernized the
								application, improved UI responsiveness, and enhanced the
								overall user experience while maintaining robust functionality.
							</Span>
						</Box>
					</Box>
				</Box>

				{/* PROVINCIAL GOVERNMENT OF SOUTH COTABATO */}
				<Box
					borderColor="darkgray"
					color="black"
					borderRadius="14px"
					borderWidth="1.5px"
					fontWeight="semibold">
					<Box p="6" backgroundColor="#1B1B1B" borderTopRadius="14px">
						<Text color="whiteAlpha.800" fontSize="1.5rem">
							Provincial Government Office – Arts, Culture, Tourism, and Museum
							Development Promotion Unit (ACTM - DPU)
						</Text>
						<Text
							color="whiteAlpha.500"
							fontSize=".75rem"
							fontStyle="italic"
							paddingBottom="15px">
							July 2017 - December 2018
						</Text>
						<Text color="whiteAlpha.800" fontSize="1rem">
							IT Officer
						</Text>
					</Box>
					<Box padding="10px 20px 30px">
						<Box>
							<Span>{"● "}</Span>
							<Span fontSize="1rem" fontWeight="bold">
								Desktop Development:{" "}
							</Span>
							<Span fontSize="1rem" color="blackAlpha.700">
								Automated museum inventory processes by developing the Community
								Museum Inventory System. Designed and implemented office and
								costume inventory systems using VB.Net and MSSQL, facilitating a
								seamless transition from manual to digital monitoring. This
								system enhanced efficiency by reducing item retrieval time by
								70% and improving data accuracy by 90%, while digitizing records
								for over 1,500 museum items and artifacts.
							</Span>
						</Box>
						<Box>
							<Span>{"● "}</Span>
							<Span fontSize="1rem" fontWeight="bold">
								Other Duties:{" "}
							</Span>
							<Span fontSize="1rem" color="blackAlpha.700">
								Coordinated and documented key team meetings to ensure effective
								communication and action tracking. With a 93% typing-speed, I
								was able to maximize the documentation and alteration of the
								documents during live meeting.
							</Span>
						</Box>
					</Box>
				</Box>
			</Grid>
		</WorkExperienceContainer>
	);
};

export default WorkExperienceComponent;
