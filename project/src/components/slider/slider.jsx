import React from 'react';

export default function Slider() {
  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__wrapper">
          <ul className="slider__items">
            <li className="slider__item">
              <img className="slider__image" src="img/desktop-slide-1"/>
            </li>
            <li className="slider__item">
              <img className="slider__image" src="img/desktop-slide-2"/>
            </li>
            <li className="slider__item">
              <img className="slider__image" src="img/desktop-slide-3"/>
            </li>
          </ul>
        </div>
      </div>
      <a href="#" className="slider__control" data-slide="prev"></a>
      <a href="#" className="slider__control" data-slide="next"></a>
      <ul className="slider__previews">
        <li className="slider__preview" data-preview="1">
          <img className="slider__preview-image" src="img/slide-1-preview"/>
        </li>
        <li className="slider__preview" data-preview="2">
          <img className="slider__preview-image" src="img/slide-2-preview"/>
        </li>
        <li className="slider__preview" data-preview="3">
          <img className="slider__preview-image" src="img/slide-3-preview"/>
        </li>
      </ul>
    </div>
  );
}
