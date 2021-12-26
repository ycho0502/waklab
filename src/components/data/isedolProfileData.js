function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/isedolProfile", false, /\.(png|jpe?g|svg)$/)
);

export const isedolProfileData = [
  {
    name: "gosegu",
    image: images["gosegu.png"].default,
  },
  {
    name: "ine",
    image: images["ine.png"].default,
  },
  {
    name: "jingberger",
    image: images["jingberger.png"].default,
  },
  {
    name: "lilpa",
    image: images["lilpa.png"].default,
  },
  {
    name: "viichan",
    image: images["viichan.png"].default,
  },
  {
    name: "jururu",
    image: images["jururu.png"].default,
  },
];
