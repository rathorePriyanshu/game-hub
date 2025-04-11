import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Games {
  id: number;
  name: String;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

const GameGrid = () => {
  const [game, setGames] = useState<Games[]>([]);
  const [error, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setErrors(err.message));
  });

  return (
    <>
      {error && <p>{error}</p>}
      {game.map((games) => (
        <li key={games.id}>{games.name}</li>
      ))}
    </>
  );
};

export default GameGrid;
