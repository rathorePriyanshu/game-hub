import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCArd";

const GameGrid = () => {
  const { game, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <SkeletonCard key={skeleton}></SkeletonCard>
          ))}
        {game.map((games) => (
          <GameCard key={games.id} game={games}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
