import React from 'react';
import Slider from '../slider/slider';
import GoodInformation from '../good-information/good-information';

export default function GoodPresentation() {
  return (
    <div className="presentation">
      <div className="presentation__container container">
        <Slider />
        <GoodInformation />
      </div>
    </div>
  );
}
