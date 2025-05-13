import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms, { Platforms } from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platforms) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatformId,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = data.results.find(
    (plat) => plat.id === selectedPlatformId
  );

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platfroms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platforms) => (
          <MenuItem
            onClick={() => onSelectPlatform(platforms)}
            key={platforms.id}
          >
            {platforms.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
