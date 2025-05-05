import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platforms | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // const [Selectedgenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatfroms, setSelectedPlatfroms] = useState<Platforms | null>(
  //   null
  // );

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "260px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area={"aside"}>
          <GenreList
            SelectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        ></PlatformSelector>
        <GameGrid
          gameQuery={gameQuery}
          // selectedPlatform={gameQuery.platform}
          // selectedGenre={gameQuery.genre}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
