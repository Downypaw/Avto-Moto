import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import {getPopupStatus} from '../../store/selectors';

export default function Footer() {
  const isPopupActive = useSelector(getPopupStatus);

  return (
    <footer className="page-footer">
      <div className="container">
        <ul className="extra-navigation">
          <li className="extra-navigation__item">
            <Link className="extra-navigation__link" to="/blank" tabIndex={isPopupActive ? -1 : 0}>
              Корпоративным клиентам
            </Link>
          </li>
          <li className="extra-navigation__item">
            <Link className="extra-navigation__link" to="/blank" tabIndex={isPopupActive ? -1 : 0}>
              Клиентам
            </Link>
          </li>
          <li className="extra-navigation__item">
            <Link className="extra-navigation__link" to="/blank" tabIndex={isPopupActive ? -1 : 0}>
              Аренда авто
            </Link>
          </li>
          <li className="extra-navigation__item">
            <Link className="extra-navigation__link" to="/blank" tabIndex={isPopupActive ? -1 : 0}>
              Каршеринг
            </Link>
          </li>
          <li className="extra-navigation__item">
            <Link className="extra-navigation__link" to="/blank" tabIndex={isPopupActive ? -1 : 0}>
              Как продать авто
            </Link>
          </li>
          <li className="extra-navigation__item">
            <Link className="extra-navigation__link" to="/blank" tabIndex={isPopupActive ? -1 : 0}>
              Trade-in
            </Link>
          </li>
          <li className="extra-navigation__item">
            <Link className="extra-navigation__link" to="/blank" tabIndex={isPopupActive ? -1 : 0}>
              Test drive
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
