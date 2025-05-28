import React from "react";
import useTrailer from "../hooks/useTrailer";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailer(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video controls poster={first?.preview} src={first?.data[480]}></video>
  ) : null;
};

export default GameTrailer;
