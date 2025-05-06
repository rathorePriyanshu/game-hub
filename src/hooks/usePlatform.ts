import useData from "./useData";
import platforms from "../data/platforms";
export interface Platforms {
  name: string;
  id: number;
  slug: string;
}

const usePlatform = () => ({ data: platforms, error: null });

export default usePlatform;
