import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import ms from "ms";
import Genre from "../Entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
    initialData: genres,
  });

export default useGenre;
