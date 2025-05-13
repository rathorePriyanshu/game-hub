import usePlatforms from "./usePlatforms";

const usePlatformId = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((plat) => plat.id === id);
};

export default usePlatformId;
