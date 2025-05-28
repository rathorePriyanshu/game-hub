import React from "react";
import { useParams } from "react-router-dom";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import Expandable from "./Expandable";
import GameAttributes from "./GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Expandable>{game.description_raw}</Expandable>
      <GameAttributes game={game}></GameAttributes>
    </>
  );
};

export default GameDetailPage;
