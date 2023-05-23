import Carousel from "react-spring-3d-carousel";
import React, { FC, useEffect, useState } from "react";
import { config } from "react-spring";

const ProjectCardTest: FC<any> = ({
  cardsArr,
  height,
  width,
  margin,
  offset,
  showArrows,
}) => {
  const table = cardsArr.map((element: any, index: any) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  console.log(cardsArr);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrowsP, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState<any>(null);
  const [cards] = useState<any>(table);

  useEffect(() => {
    setOffsetRadius(offset);
    setShowArrows(showArrows);
  }, [offset, showArrows]);

  return (
    <div style={{ width: width, height: height, margin: margin }}>
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrowsP}
        animationConfig={config.gentle}
      />
    </div>
  );
};

export default ProjectCardTest;
