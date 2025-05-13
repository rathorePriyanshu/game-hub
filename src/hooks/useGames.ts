import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platforms } from "./usePlatforms";
import APIClient, { FetchResponse } from "../services/api-client";
export interface Games {
  id: number;
  name: String;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Games>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchGame,
        },
      }),
  });

export default useGames;
