import { Box, Center, Input, Textarea, VStack } from "@chakra-ui/react";
import { ContactContainer } from "./contact_styles";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactComponent = () => {
	const form = useRef();
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const onChangeFormInput = (e) => {
		const { name, value } = e.currentTarget;
		setFormState((currentValue) => ({ ...currentValue, [name]: value }));
	};

	const clearData = () => {
		setFormState(() => ({
			name: "",
			email: "",
			message: "",
		}));
	};

	emailjs.init({
		publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
		// Do not allow headless browsers
		blockHeadless: true,
		limitRate: {
			// Set the limit rate for the application
			id: "app",
			// Allow 1 request per 10s
			throttle: 10000000,
		},
	});

	const sendEmail = (e) => {
		e.preventDefault();

		const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
		const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

		emailjs
			.send(SERVICE_ID, TEMPLATE_ID, {
				from_name: formState.name,
				to_name: "Odeh Mark Lozano",
				message: formState.message,
				reply_to: formState.email,
			})
			.then((result) => {
				console.log("Success:", result.text);
				alert("Email sent successfully!");
				form.current.reset(); // Clear the form after sending
				clearData();
			})
			.catch((error) => {
				console.error("Error:", error.text);
				alert("Failed to send email. Please try again.");
			});
	};

	return (
		<ContactContainer>
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
					GET IN TOUCH
				</Box>
			</Center>

			<Box
				margin="100px auto"
				width="500px"
				display="flex"
				flexDirection="column"
				justifyContent="flex-start">
				<form action="" method="POST" onSubmit={sendEmail} ref={form}>
					<VStack spacing={6}>
						{" "}
						{/* Adds 4 units of vertical spacing */}
						{/* NAME */}
						<label htmlFor="name" style={{ color: "darkgray", width: "100%" }}>
							Name
						</label>
						<Input
							placeholder="Please enter your name"
							type="text"
							color="black"
							name="name"
							id="name"
							maxLength="100"
							required
							value={formState.name}
							onChange={onChangeFormInput}
						/>
						{/* EMAIL */}
						<label htmlFor="email" style={{ color: "darkgray", width: "100%" }}>
							Email
						</label>
						<Input
							placeholder="Please enter your email"
							type="email"
							color="black"
							name="email"
							id="email"
							maxLength="100"
							required
							value={formState.email}
							onChange={onChangeFormInput}
						/>
						{/* MESSAGE */}
						<label
							htmlFor="message"
							style={{ color: "darkgray", width: "100%" }}>
							Message
						</label>
						<Textarea
							placeholder="Enter your message"
							size="md"
							rows={10}
							columns={10}
							resize="none" // Disables resizing
							focusBorderColor="blue.400"
							color="black"
							id="message"
							name="message"
							maxLength="2000"
							required
							value={formState.message}
							onChange={onChangeFormInput}
							marginBottom="2rem"
						/>
						<Input
							width="100%"
							backgroundColor="#3F8E00"
							color="#FFFFFF"
							value="Submit >"
							textAlign="center"
							_hover={{
								cursor: "pointer",
							}}
							type="submit"
						/>
					</VStack>
				</form>
			</Box>
		</ContactContainer>
	);
};

export default ContactComponent;
