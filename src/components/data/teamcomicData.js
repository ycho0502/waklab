function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  
  const images = importAll(
    require.context("../../assets/teamcomic", false, /\.(png|jpe?g|svg)$/)
  );
  
  export const teamcomicData = [
    {
        name: "1",
        image: images["1.jpg"].default,
      },
      {
        name: "1",
        image: images["2.jpg"].default,
      },
      {
        name: "1",
        image: images["3.jpg"].default,
      },
      {
        name: "1",
        image: images["4.jpg"].default,
      },
      {
        name: "1",
        image: images["5.jpg"].default,
      },
      {
        name: "1",
        image: images["6.jpg"].default,
      },
      {
        name: "1",
        image: images["7.jpg"].default,
      },
      {
        name: "1",
        image: images["8.jpg"].default,
      },
      {
        name: "1",
        image: images["9.jpg"].default,
      },
      {
        name: "1",
        image: images["10.jpg"].default,
      },
  ];
  