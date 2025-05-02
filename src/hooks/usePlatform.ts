import useData from "./useData";

export interface Platforms {
  name: string;
  id: number;
  slug: string;
}

const usePlatform = () => useData<Platforms>("/platforms/lists/parents");

export default usePlatform;
