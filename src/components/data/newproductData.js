function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/newProducts", false, /\.(png|jpe?g|svg)$/)
);

export const newproductData = [
  {
    name: "1",
    image: images["banner1.png"].default,
  },
  {
    name: "2",
    image: images["banner2.png"].default,
  },
  {
    name: "3",
    image: images["banner3.png"].default,
  },
];
