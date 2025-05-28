import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import InputSearch from "./InputSearch";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image
          src={logo}
          boxSize={"60px"}
          objectFit="cover"
          cursor="pointer"
        ></Image>
      </Link>
      <InputSearch />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
