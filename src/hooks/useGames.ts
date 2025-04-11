import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Games {
  id: number;
  name: String;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

const useGames = () => {
  const [game, setGames] = useState<Games[]>([]);
  const [error, setErrors] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      });

    return () => controller.abort();
  });

  return { game, error };
};

export default useGames;
