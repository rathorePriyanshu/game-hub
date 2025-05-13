import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
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
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatforms;
