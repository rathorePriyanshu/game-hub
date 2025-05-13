import useGenre from "./useGenre";

const useGenreId = (id?: number) => {
  const { data: genres } = useGenre();
  return genres?.results.find((gen) => gen.id === id);
};

export default useGenreId;
