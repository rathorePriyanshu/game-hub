import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { game, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="10px"
        spacing={10}
      >
        {game.map((games) => (
          <GameCard key={games.id} game={games}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
