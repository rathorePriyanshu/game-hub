import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
export interface Platforms {
  name: string;
  id: number;
  slug: string;
}

const apiClient = new APIClient<Platforms>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
