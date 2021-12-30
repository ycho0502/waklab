import SwiperCore, { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { useState } from "react/cjs/react.development";

SwiperCore.use([Virtual]);

export const Poster = ({ main, texture, top, bottom }) => {
  return (
    <div className="poster_container">
      <div className="poster_left_container">
        <img src={texture} alt="gold_texture" />
        <img src={top} className="poster_top_quote" alt="top_quote" />
        <p align="center" className="marchandise_description">
          이세계 아이돌의 데뷔를 기념하여 만들어진 패브릭 포스터
          <br />
          세련된 분위기의 블랙골드 패션으로 멤버들의 매력을
          끌어올렸으며
          <br />
          벽에 장식하여 인테리어 소품으로 활용도 가능하다
        </p>
        <img
          src={bottom}
          className="poster_bottom_quote"
          alt="bottom_quote"
        />
      </div>
      <div className="poster_right_container">
        <img
          className="poster_detail_img"
          src={main}
          alt="poster_main"
        />
      </div>
    </div>
  );
};

export const Stricker = ({ texture, stickers, top }) => {
  const slides = Array.from({ length: stickers.length }).map(
    (el, index) => ({
      content: `Slide ${index + 1}`,
      image: stickers[index],
    }),
  );

  return (
    <div className="sticker_container">
      <div className="sticker_title">
        <img src={texture} alt="sticker_texture" />
      </div>
      <Swiper
        modules={[Virtual]}
        spaceBetween={50}
        slidesPerView={5}
        centeredSlides={true}
        grabCursor={true}
        loop={false}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide
            key={slideContent.content}
            virtualIndex={index}
          >
            <img
              className="sticker_product"
              src={slideContent.image}
              alt="slide_image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <img className="sticker_top_quote" src={top} alt="top" />
      <p
        align="center"
        className="marchandise_description sticker_description"
      >
        이세계 아이돌 멤버들의 밈과 아이덴티티를
        <br /> 귀여운 일러스트로 풀어낸 다이어리 꾸미기용 스티커입니다
      </p>
    </div>
  );
};

export const PhotoCard = ({
  photoCardFrame,
  photoCards,
  top,
  bottom,
  texture,
}) => {
  const [pickIsedol, setPickIsedol] = useState(photoCards[0]);
  const [flip, setFlip] = useState(false);

  return (
    <div className="photocard_container">
      <div className="photocard_left">
        <img
          className="photocard_frame"
          src={photoCardFrame}
          alt="photocard_frame"
        />
        <img
          src={pickIsedol.front}
          className={`pickIsedol_front ${flip ? "flip" : ""}`}
          alt="front"
        />
        <img
          src={pickIsedol.back}
          className={`pickIsedol_back ${flip ? "flip" : ""}`}
          alt="back"
        />
      </div>
      <div className="photocard_right">
        <img src={texture} />
        <img src={top} />
        <p>
          이세계 아이돌의 데뷔곡 RE:WIND의 테마로 제작된 포토카드
          <br />
          뒷면에는 이세계 아이돌이
          <strong>직접 쓴 손글씨 가사</strong>가 인쇄되어 있어
          <br /> 팬들의 소장욕구를 불러 일으킬 예정이다
        </p>
        <img src={bottom} />
        <div>
          {photoCards.map((photoCard) => (
            <img src={photoCard.mini} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Acrylic = ({ texture, product, top }) => {
  return (
    <div className="acrylic_container">
      <img
        className="acrylic_texture"
        src={texture}
        alt="acrylic_texture"
      />
      <img
        className="acrylic_product"
        src={product}
        alt="acrylic_product"
      />
      <img className="acrylic_quote" src={top} alt="acrylic_quote" />
      <p align="center" className="marchandise_description">
        각자의 퍼스널 컬러 의상을 입고 다양한 하트 포즈를 취하며
        <br />
        매력을 어필하는 멤버들의 모습이 담긴 아크릴스탠드 입니다
      </p>
    </div>
  );
};
