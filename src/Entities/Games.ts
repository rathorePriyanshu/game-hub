import { Platforms } from "./Platforms";

export interface Games {
  id: number;
  name: String;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
  rating_top: number;
}
