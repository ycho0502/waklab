function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/products/merchandise", false, /\.(png|jpe?g|svg)$/)
);
const content = importAll(
  require.context("../../assets/products/merchandise/content", false, /\.(png|jpe?g|svg)$/)
);

export const merchandiseData = [
  {id:1, caid:10, title: "GALTONG 반팔 티셔츠", image:images["galtong.png"].default, content:content["GALTONG.png"].default},
  {id:2, caid:10, title: "COME&SMITE 맨투맨", image:images["come.png"].default, content:content["COME_SMITE.png"].default} ,
  {id:3, caid:10, title: "WEEKET 슬러퍼", image:images["weeket.png"].default, content:content["WEEKET.png"].default}, 
  {id:4, caid:10, title: "OBJECTIVE EYE 민소매 크롭", image:images["objeye.png"].default, content:content["objective eye.png"].default}, 
  {id:5, caid:10, title: "MY BENGHAL TREE 반팔 크롭", image:images["mybenghal.png"].default, content:content["MY LOVELY TREE.png"].default}, 
  {id:6, caid:10, title: "SLOW STERTER 반바지", image:images["slowst.png"].default, content:content["slow starter.png"].default}, 

  {id:7, caid:20, title: "すいなうめ 반팔 티셔츠", image:images["ume.png"].default, content:content["SUI-NA-UME.png"].default}, 
  {id:8, caid:20, title: "BIG SKIPMAN 맨투맨", image:images["bigskip.png"].default, content:content["BIG SKIP MAN.png"].default},
  {id:9, caid:20, title: "ㅇㅇㄱ 추리닝 세트", image:images["oor.png"].default, content:content["ㅇㅇㄱ.png"].default},
  {id:10, caid:20, title: "PARABLE GAMING 트랙 슈트", image:images["pagame.png"].default, content:content["parable.png"].default},
  {id:11, caid:20, title: "O.B.A 플리츠", image:images["oba.png"].default, content:content["OBA 후리스.png"].default}, 
  {id:12, caid:20, title: "NOT W.W.G. 볼캡", image:images["wwg.png"].default, content:content["NOODLE.png"].default},
  {id:13, caid:20, title: "NATURE 양말", image:images["nature.png"].default, content:content["NATURE.png"].default},
  {id:14, caid:20, title: "ZOMBIE 니삭스", image:images["zombie.png"].default, content:content["ZOMBIE.png"].default},

  {id:15, caid:30, title: "JONGGUS 클러치백", image:images["jongus.png"].default, content:content["JONGGUS.png"].default},
  {id:16, caid:30, title: "ANGRY & CRAZY 폰케이스 & 폰스트랩", image:images["angry.png"].default, content:content["PHONECASE.png"].default} ,
  {id:17, caid:30, title: "POTATO PARTY 에코백", image:images["potato.png"].default, content:content["SAVE THE EARTH.png"].default}, 
  {id:18, caid:30, title: "TO THE ANIORI 장패드", image:images["aniori.png"].default, content:content["ANIORI.png"].default}, 
  {id:19, caid:30, title: "SECRET SOCIETY 담요", image:images["secret.png"].default, content:content["SECRET SOCIETY.png"].default}, 
];