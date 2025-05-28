import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroopedImageURL from "../services/image-url";
import useGameQueryStore from "../store";
import { SkeletonList } from "./SkeletonList";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  const SelectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  // if (isLoading) return <Spinner></Spinner>;

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => (
          <SkeletonList key={skeleton}></SkeletonList>
        ))}
      <Heading fontSize="2xl" marginBottom={3}>
        Genre
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit="cover"
                src={getCroopedImageURL(genre.image_background)}
              ></Image>
              <Button
                variant="link"
                fontWeight={genre.id === SelectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
