function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const posterImages = importAll(
  require.context(
    "../../assets/isedolMarchandiseDetail/Poster_detail",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const stickerImages = importAll(
  require.context(
    "../../assets/isedolMarchandiseDetail/Sticker_detail",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const photoCardImages = importAll(
  require.context(
    "../../assets/isedolMarchandiseDetail/PhotoCard_detail",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const acrylicImages = importAll(
  require.context(
    "../../assets/isedolMarchandiseDetail/Acrylic_detail",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
console.log(posterImages);
export const isedolMarchandiseDetail = [
  {
    type: "poster",
    main: posterImages["poster_product.png"].default,
    texture: posterImages["poster_gold_texture.png"].default,
    top: posterImages["top_quote_edge.png"].default,
    bottom: posterImages["bottom_quote_edge.png"].default,
  },
  {
    type: "sticker",
    texture: stickerImages["sticker_gold_texture.png"].default,
    stickers: [
      stickerImages["sticker_product_gosegu.png"].default,
      stickerImages["sticker_product_ine.png"].default,
      stickerImages["sticker_product_jingburger.png"].default,
      stickerImages["sticker_product_jururu.png"].default,
      stickerImages["sticker_product_lilpa.png"].default,
      stickerImages["sticker_product_viichan.png"].default,
    ],
    top: stickerImages["top_quote_edge.png"].default,
  },
  {
    type: "photoCard",
    photoCardFrame: photoCardImages["photocard_frame.png"].default,
    texture: photoCardImages["photocard_texture.png"].default,
    top: photoCardImages["quote_top.png"].default,
    bottom: photoCardImages["quote_bottom.png"].default,
    photoCards: [
      {
        name: "JURURU",
        front: photoCardImages["jururu_front.png"].default,
        back: photoCardImages["jururu_back.png"].default,
        mini: photoCardImages["jururu_mini_card.png"].default,
        hover: photoCardImages["jururu_mini_hover.png"].default,
      },
      {
        name: "INE",
        front: photoCardImages["ine_front.png"].default,
        back: photoCardImages["ine_back.png"].default,
        mini: photoCardImages["ine_mini_card.png"].default,
        hover: photoCardImages["ine_mini_hover.png"].default,
      },
      {
        name: "VIICHAN",
        front: photoCardImages["viichan_front.png"].default,
        back: photoCardImages["viichan_back.png"].default,
        mini: photoCardImages["viichan_mini_card.png"].default,
        hover: photoCardImages["viichan_mini_hover.png"].default,
      },
      {
        name: "LILPA",
        front: photoCardImages["lilpa_front.png"].default,
        back: photoCardImages["lilpa_back.png"].default,
        mini: photoCardImages["lilpa_mini_card.png"].default,
        hover: photoCardImages["lilpa_mini_hover.png"].default,
      },
      {
        name: "GOSEGU",
        front: photoCardImages["gosegu_front.png"].default,
        back: photoCardImages["gosegu_back.png"].default,
        mini: photoCardImages["gosegu_mini_card.png"].default,
        hover: photoCardImages["gosegu_mini_hover.png"].default,
      },
      {
        name: "JINGBURGER",
        front: photoCardImages["jingburger_front.png"].default,
        back: photoCardImages["jingburger_back.png"].default,
        mini: photoCardImages["jingburger_mini_card.png"].default,
        hover: photoCardImages["jingburger_mini_hover.png"].default,
      },
    ],
  },
  {
    type: "acrylic",
    texture: acrylicImages["acrylic_gold_texture.png"].default,
    product: acrylicImages["acrylic_product.png"].default,
    top: acrylicImages["quote_top.png"].default,
  },
];
