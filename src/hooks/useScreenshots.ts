import { useQuery } from "@tanstack/react-query";
import Screenshot from "../Entities/Screenshot";
import APIClient from "../services/api-client";

const useScreenshot = (id: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${id}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", id],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshot;
