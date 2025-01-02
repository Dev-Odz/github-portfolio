import { Box, Image, Text } from "@chakra-ui/react";

const IconComponent = ({ icon, label }) => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			height="150px">
			<Image
				src={icon}
				height={{
					base: "50px",
					sm: "80px",
					lg: "100px",
				}}
				width={{
					base: "50px",
					sm: "80px",
					lg: "100px",
				}}
				marginBottom="1.25rem"
			/>

			<Text color="black" fontWeight="light" fontSize="20px">
				{label}
			</Text>
		</Box>
	);
};

export default IconComponent;
