import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { Platforms } from "../hooks/usePlatform";
import { GameQuery } from "../App";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <SkeletonCard></SkeletonCard>
          </GameCardContainer>
        ))}
      {data.map((games) => (
        <GameCardContainer key={games.id}>
          <GameCard game={games}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
