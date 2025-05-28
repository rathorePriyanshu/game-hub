import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailer } from "../Entities/Trailer";

const useTrailer = (Id: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${Id}/movies`);

  return useQuery({
    queryKey: ["trailers", Id],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
