import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15 ease-in",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
