function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/products/clothing", false, /\.(png|jpe?g|svg)$/)
);

export const SliderData = [
  {
    name: "Hood",
    image: images["20211124212457.png"].default,
  },
  {
    name: "Black Socks",
    image: images["20211124212410.png"].default,
  },
  {
    name: "White Socks",
    image: images["20211124212350.png"].default,
  },
  {
    name: "White Cap",
    image: images["20211124212401.png"].default,
  },
  {
    name: "5",
    image: images["20211124212227.png"].default,
  },
  {
    name: "6",
    image: images["20211124212249.png"].default,
  },
  {
    name: "7s",
    image: images["20211124212319.png"].default,
  },
  {
    name: "8",
    image: images["20211124212339.png"].default,
  },
];
