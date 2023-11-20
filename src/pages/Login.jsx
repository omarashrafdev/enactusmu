import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Container,
  FormControl,
  Input,
  Button,
  FormLabel,
  FormErrorMessage,
  Box,
  Heading,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export function Login() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    // TODO: Login logic and validation
    navigate('/');
  };

  return (
    <Container
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      h="80vh"
    >
      <Box
        p={8}
        maxW={"400px"}
        w={"full"}
        bg={"white"}
        boxShadow={"md"}
        rounded={"md"}
        textAlign={"center"}
      >
        <Heading color={"yellow.400"}>Enacter Space</Heading>
        <Text>Login to continue</Text>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field name="email">
              {({ field, form }) => (
                <FormControl mb={4} size="md" isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} type="email" size="md" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="password">
              {({ field, form }) => (
                <FormControl mb={4} size="md" isInvalid={form.errors.password && form.touched.password}>
                  <FormLabel>Password</FormLabel>
                  <Input {...field} type="password" size="md" />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button
              type="submit"
              colorScheme="yellow"
              size="md"
              width="full"
              mb={4}
            >
              Login
            </Button>
          </Form>
        </Formik>

        <Flex justifyContent="space-between" alignItems="center">
          <Link color={"grey"} href="#" textAlign="left">
            Create an account
          </Link>
          <Link color={"grey"} href="#" textAlign="right">
            Can't Login
          </Link>
        </Flex>
      </Box>
    </Container>
  );
}
