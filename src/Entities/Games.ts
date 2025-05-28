import { Genre } from "./Genre";
import { Platforms } from "./Platforms";
import { Publisher } from "./Publisher";

export interface Games {
  id: number;
  name: String;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
  rating_top: number;
}
