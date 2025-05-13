import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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
  useInfiniteQuery<FetchResponse<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchGame,
          page: pageParam,
        },
      }),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
