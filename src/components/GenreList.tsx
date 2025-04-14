import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroopedImageURL from "../services/image-url";
import { px } from "framer-motion";
import { SkeletonList } from "./SkeletonList";

const GenreList = () => {
  const { genres, error, isLoading } = useGenre();

  if (error) return null;
  // if (isLoading) return <Spinner></Spinner>;

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => (
          <SkeletonList key={skeleton}></SkeletonList>
        ))}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroopedImageURL(genre.image_background)}
              ></Image>
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
