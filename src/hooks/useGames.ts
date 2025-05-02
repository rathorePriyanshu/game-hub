import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { Genre } from "./useGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Games {
  id: number;
  name: String;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

const useGames = (
  genre: Genre | null,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [game, setGames] = useState<Games[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchGamesResponse>("/games", {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setGames(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setErrors(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { game, error, isLoading };
};

export default useGames;
