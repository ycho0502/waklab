function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  
  const images = importAll(
    require.context("../../assets/merchanslider", false, /\.(png|jpe?g|svg)$/)
  );
  
  export const merchanSliderData = [
    {
      name: "1",
      image: images["mc_bn1.png"].default,
    },
    {
      name: "1",
      image: images["mc_bn1.png"].default,
    },
  ];
  