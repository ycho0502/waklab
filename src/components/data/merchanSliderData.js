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
      image: images["mb1.png"].default,
    },
    {
      name: "2",
      image: images["mb2.png"].default,
    },
    {
      name: "3",
      image: images["mb3.png"].default,
    },
  ];
  