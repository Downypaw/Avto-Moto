import React from 'react';

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
              <a className="navigation__link" href="#">
                Автомобили
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                Контакты
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                Услуги
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                Вакансии
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
