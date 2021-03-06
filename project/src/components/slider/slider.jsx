import React from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {getPopupStatus} from '../../store/selectors';
import {IMAGE_WIDTH, ControlType} from '../../const.js';

const images = [
  {
    fullImage: "desktop-slide-1.jpg",
    previewImage: "slide-1-preview.jpg",
  },
  {
    fullImage: "desktop-slide-2.jpg",
    previewImage: "slide-2-preview.jpg"
  },
  {
    fullImage: "desktop-slide-3.jpg",
    previewImage: "slide-3-preview.jpg"
  }
];

export default function Slider() {
  const [offset, setOffset] = useState(0);
  const [initialCordinate, setInitialCordinate] = useState(0);
  const [resultCordinate, setResultCordinate] = useState(0);

  const isPopupActive = useSelector(getPopupStatus);

  const onControlClick = (controlType) => {
    controlType === ControlType.PREV ? setOffset(offset + IMAGE_WIDTH) : setOffset(offset - IMAGE_WIDTH);
  };

  const makeSwipe = (evt) => {
    setResultCordinate(evt.changedTouches[0].clientX);
    if (initialCordinate < resultCordinate &&offset < 0) {
      setOffset(offset + IMAGE_WIDTH)
    }
    if (initialCordinate > resultCordinate && offset > -(images.length - 1) * IMAGE_WIDTH) {
      setOffset(offset - IMAGE_WIDTH)
    }
  }

  return (
    <div
      className="slider"
      onTouchStart={(evt) => setInitialCordinate(evt.touches[0].clientX)}
      onTouchEnd={makeSwipe}
    >
      <div className="slider__container">
        <span className="slider__new-model">New model</span>
        <ul className="slider__items" style={{left: `${offset}px`}}>
          {images.map((image, index) => (
            <li className="slider__item" key={`${image.previewImage}-${index}`}>
              <img className="slider__image" src={`img/${image.fullImage}`} alt="Изображение машины" width="600" height="375"/>
            </li>
          ))}
        </ul>
      </div>
      <div className="slider__down">
        <button
          href="#"
          className="slider__control"
          onClick={() => onControlClick(ControlType.PREV)}
          disabled={offset === 0}
          aria-label="previous"
          name="previous"
          tabIndex={isPopupActive ? -1 : 0}
        >
          <svg className="slider__arrow slider__arrow--prev" width="20" height="13">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
        <button
          href="#"
          className="slider__control"
          onClick={() => onControlClick(ControlType.NEXT)}
          disabled={offset === -(images.length - 1) * IMAGE_WIDTH}
          aria-label="next"
          name="next"
          tabIndex={isPopupActive ? -1 : 0}
        >
          <svg className="slider__arrow slider__arrow--next" width="20" height="13">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
        <ul className="slider__previews">
          {images.map((image, index) => (
            <li className={`slider__preview ${offset === - index * IMAGE_WIDTH ? 'slider__preview-current' : ''}`} key={`${image.previewImage}-${index}`}>
              <img className="slider__preview-image" src={`img/${image.previewImage}`} alt="Картинка-превью машины" width="128" height="80"/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
