function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/portfolio", false, /\.(png|jpe?g|svg)$/)
);

export const portfolioData = [
  {
    name: "1",
    image: images["launch.png"].default,
  },
  {
    name: "2",
    image: images["2020.png"].default,
  },
  {
    name: "3",
    image: images["2021.png"].default,
  },
];
