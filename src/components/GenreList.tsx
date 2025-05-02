import {
  Button,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroopedImageURL from "../services/image-url";
import { SkeletonList } from "./SkeletonList";

interface GenreListProps {
  onSelectedGenre: (genre: Genre) => void;
  SelectedGenre: Genre | null;
}

const GenreList = ({ SelectedGenre, onSelectedGenre }: GenreListProps) => {
  const { data, error, isLoading } = useGenre();

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
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroopedImageURL(genre.image_background)}
              ></Image>
              <Button
                variant="link"
                fontWeight={genre.id === SelectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)}
                fontSize="lg"
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
