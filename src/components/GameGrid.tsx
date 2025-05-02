import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface GameGridProps {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: GameGridProps) => {
  const { game, error, isLoading } = useGames(
    selectedGenre,
    { params: { genres: selectedGenre?.id } },
    [selectedGenre?.id]
  );
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="10px"
        spacing={7}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <SkeletonCard></SkeletonCard>
            </GameCardContainer>
          ))}
        {game.map((games) => (
          <GameCardContainer key={games.id}>
            <GameCard game={games}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
