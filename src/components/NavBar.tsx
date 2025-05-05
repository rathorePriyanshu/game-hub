import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import InputSearch from "./InputSearch";

interface NavBarProps {
  onSearchGame: (searchGame: string) => void;
}

const NavBar = ({ onSearchGame }: NavBarProps) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={"60px"}></Image>
      <InputSearch onSearchGame={onSearchGame} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
