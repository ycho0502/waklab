function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/logoshowcase", false, /\.(png|jpe?g|svg)$/)
);

export const companyData = [
  {
    name: "comp1",
    image: images["company1.png"].default,
  },
  {
    name: "comp2",
    image: images["company2.png"].default,
  },
  {
    name: "comp3",
    image: images["company3.png"].default,
  },
];
