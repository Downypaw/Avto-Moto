import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import {getPopupStatus} from '../../store/selectors';

export default function Header() {
  const isPopupActive = useSelector(getPopupStatus);

  return (
    <header className="page-header">
      <div className="page-header__container container">
        <div className="page-header__left">
          <img className="page-header__logo" src="img/logo.svg" alt="Логотип компании Avto-Moto" width="134" height="55"/>
        </div>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link className="navigation__link" to="/blank" tabIndex={isPopupActive ? -1 : 0}>
                Автомобили
              </Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="/blank" tabIndex={isPopupActive ? -1 : 0}>
                Контакты
              </Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="/blank" tabIndex={isPopupActive ? -1 : 0}>
                Услуги
              </Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="/blank" tabIndex={isPopupActive ? -1 : 0}>
                Вакансии
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
