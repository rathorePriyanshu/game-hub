import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
  game: Games;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image
        src={game.background_image}
        borderRadius={10}
        overflow="hidden"
      ></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
