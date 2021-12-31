function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/calender/3P", false, /\.(png|jpe?g|svg)$/)
);

export const CalenderContent = [
  {
    Background: images["1.png"].default,
    Title: images["1t.png"].default,
    Front: images["1a.png"].default,
    Back: images["1b.png"].default,
  },
  {
    Background: images["2.png"].default,
    Title: images["2t.png"].default,
    Front: images["2a.png"].default,
    Back: images["2b.png"].default,
  },
  {
    Background: images["3.png"].default,
    Title: images["3t.png"].default,
    Front: images["3a.png"].default,
    Back: images["3b.png"].default,
  },
  {
    Background: images["4.png"].default,
    Title: images["4t.png"].default,
    Front: images["4a.png"].default,
    Back: images["4b.png"].default,
  },
  {
    Background: images["5.png"].default,
    Title: images["5t.png"].default,
    Front: images["5a.png"].default,
    Back: images["5b.png"].default,
  },
  {
    Background: images["6.png"].default,
    Title: images["6t.png"].default,
    Front: images["6a.png"].default,
    Back: images["6b.png"].default,
  },
  {
    Background: images["7.png"].default,
    Title: images["7t.png"].default,
    Front: images["7a.png"].default,
    Back: images["7b.png"].default,
  },
  {
    Background: images["8.png"].default,
    Title: images["8t.png"].default,
    Front: images["8a.png"].default,
    Back: images["8b.png"].default,
  },
  {
    Background: images["9.png"].default,
    Title: images["9t.png"].default,
    Front: images["9a.png"].default,
    Back: images["9b.png"].default,
  },
  {
    Background: images["10.png"].default,
    Title: images["10t.png"].default,
    Front: images["10a.png"].default,
    Back: images["10b.png"].default,
  },
  {
    Background: images["11.png"].default,
    Title: images["11t.png"].default,
    Front: images["11a.png"].default,
    Back: images["11b.png"].default,
  },
  {
    Background: images["12.png"].default,
    Title: images["12t.png"].default,
    Front: images["12a.png"].default,
    Back: images["12b.png"].default,
  },
];
