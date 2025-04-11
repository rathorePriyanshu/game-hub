import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { game, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      {game.map((games) => (
        <li key={games.id}>{games.name}</li>
      ))}
    </>
  );
};

export default GameGrid;
