import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatform";

function App() {
  const [Selectedgenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatfroms, setSelectedPlatfroms] = useState<Platforms | null>(
    null
  );

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
            SelectedGenre={Selectedgenre}
            onSelectedGenre={(genre) => setSelectedGenre(genre)}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatform={selectedPlatfroms}
          onSelectPlatform={(platform) => setSelectedPlatfroms(platform)}
        ></PlatformSelector>
        <GameGrid
          selectedPlatform={selectedPlatfroms}
          selectedGenre={Selectedgenre}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
