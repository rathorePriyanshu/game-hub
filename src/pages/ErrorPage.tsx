import React from "react";
import NavBar from "../components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>OOPS!!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page does not Exist"
            : "An Unexpected Error Occured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
