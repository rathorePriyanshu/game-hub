import React from "react";
import { useParams } from "react-router-dom";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import Expandable from "./Expandable";
import GameAttributes from "./GameAttributes";
import GameTrailer from "./GameTrailer";
import GameScreenshots from "./GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid spacing={5} columns={{ base: 1, md: 2 }}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <Expandable>{game.description_raw}</Expandable>
          <GameAttributes game={game}></GameAttributes>
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id}></GameTrailer>
          <GameScreenshots gameId={game.id}></GameScreenshots>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
