export default function GetAvgRating(ratingArr) {
  if (ratingArr?.length === 0) return 0;
  const totalReviewCount = ratingArr?.reduce((acc, curr) => {
    acc += curr.rating;
    return acc;
  }, 0);

  const multiplier = Math.pow(10, 1);
  const avgReviewCount =
    Math.round((totalReviewCount / ratingArr?.length) * multiplier) /
    multiplier;

  return avgReviewCount;
}

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[\/]/g, "-") // replace slashes with dash
    .replace(/[^\w\s-]/g, "") // remove unwanted chars
    .replace(/\s+/g, "-") // spaces → dash
    .replace(/-+/g, "-"); // collapse multiple dashes
