function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context(
    "../../assets/isedolProfile",
    false,
    /\.(png|jpe?g|svg)$/,
  ),
);

export const isedolProfileData = [
  {
    name: "GOSEGU",
    image: images["gosegu.png"].default,
  },
  {
    name: "INE",
    image: images["ine.png"].default,
  },
  {
    name: "JINGBURGER",
    image: images["jingburger.png"].default,
  },
  {
    name: "LILPA",
    image: images["lilpa.png"].default,
  },
  {
    name: "VIICHAN",
    image: images["viichan.png"].default,
  },
  {
    name: "JURURU",
    image: images["jururu.png"].default,
  },
];
