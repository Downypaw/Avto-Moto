import React from 'react';
import {useSelector} from 'react-redux';
import {getPopupStatus} from '../../store/selectors';

export default function GoodInformation() {
  const isPopupActive = useSelector(getPopupStatus);

  return (
    <div className="good-information">
      <h2 className="good-information__name">Марпех 11</h2>
      <dl className="main-features">
        <dt className="main-features__feature visually-hidden">Тип двигателя</dt>
        <dd className="main-features__value">Бензин</dd>
        <dt className="main-features__feature visually-hidden">Коробка передачь</dt>
        <dd className="main-features__value">Механика</dd>
        <dt className="main-features__feature visually-hidden">Мощность</dt>
        <dd className="main-features__value">100 л.с.</dd>
        <dt className="main-features__feature visually-hidden">Объём</dt>
        <dd className="main-features__value">1.4 л</dd>
      </dl>
      <div className="good-information__price">
        <pre className="good-information__new-price">2 300 000 ₽</pre>
        <pre className="good-information__old-price">2  400 000 ₽</pre>
      </div>
      <button className="good-information__request" name="request" tabIndex={isPopupActive ? -1 : 0}>Оставить заявку</button>
      <button className="good-information__credit" name="credit" tabIndex={isPopupActive ? -1 : 0}>В кредит от <span>11 000 ₽</span></button>
    </div>
  );
}
