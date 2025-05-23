import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroopedImageURL = (url: string) => {
  if (!url) return noImage;

  const index = url.indexOf("media/") + "media/".length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroopedImageURL;
