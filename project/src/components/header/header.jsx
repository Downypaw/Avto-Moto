import React from 'react';
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="page-header">
      <div className="page-header__container container">
        <div className="page-header__left">
          <img className="page-header__logo" src="img/logo.svg" alt="Логотип компании Avto-Moto" width="134" height="55"/>
        </div>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link className="navigation__link" to="/blank">
                Автомобили
              </Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="/blank">
                Контакты
              </Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="/blank">
                Услуги
              </Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="/blank">
                Вакансии
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
