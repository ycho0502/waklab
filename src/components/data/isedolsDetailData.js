function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/isedolsDetail", false, /\.(png|jpe?g|svg)$/)
);

export const isedolsDetailData = [
  {
    name: "gosegu",
    image: images["gosegu_profile_large.png"].default,
    sign: images["gosegu_sign.png"].default,
    write: images["gosegu_write.png"].default,
    text: images["gosegu_bg.png"].default,
  },
  {
    name: "ine",
    image: images["ine_profile_large.png"].default,
    sign: images["ine_sign.png"].default,
    write: images["ine_write.png"].default,
    text: images["ine_bg.png"].default,
  },
  {
    name: "jingburger",
    image: images["jingburger_profile_large.png"].default,
    sign: images["jingburger_sign.png"].default,
    write: images["jingburger_write.png"].default,
    text: images["jingburger_bg.png"].default,
  },
  {
    name: "lilpa",
    image: images["lilpa_profile_large.png"].default,
    sign: images["lilpa_sign.png"].default,
    write: images["lilpa_write.png"].default,
    text: images["lilpa_bg.png"].default,
  },
  {
    name: "viichan",
    image: images["viichan_profile_large.png"].default,
    sign: images["viichan_sign.png"].default,
    write: images["viichan_write.png"].default,
    text: images["viichan_bg.png"].default,
  },
  {
    name: "jururu",
    image: images["jururu_profile_large.png"].default,
    sign: images["jururu_sign.png"].default,
    write: images["jururu_write.png"].default,
    text: images["jururu_bg.png"].default,
  },
];
