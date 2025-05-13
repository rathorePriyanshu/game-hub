import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenreId from "../hooks/useGenreId";
import usePlatformId from "../hooks/usePlatformId";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const genre = useGenreId(gameQuery.genreId);
  const platform = usePlatformId(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
