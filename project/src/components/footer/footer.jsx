import React from 'react';
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <ul className="extra-navigation">
          <li className="extra-navigation__item">
            <Link className="extra-navigation__link" to="/blank">
              Корпоративным клиентам
            </Link>
          </li>
          <li className="extra-navigation__item">
            <Link className="extra-navigation__link" to="/blank">
              Клиентам
            </Link>
          </li>
          <li className="extra-navigation__item">
            <Link className="extra-navigation__link" to="/blank">
              Аренда авто
            </Link>
          </li>
          <li className="extra-navigation__item">
            <Link className="extra-navigation__link" to="/blank">
              Каршеринг
            </Link>
          </li>
          <li className="extra-navigation__item">
            <Link className="extra-navigation__link" to="/blank">
              Как продать авто
            </Link>
          </li>
          <li className="extra-navigation__item">
            <Link className="extra-navigation__link" to="/blank">
              Trade-in
            </Link>
          </li>
          <li className="extra-navigation__item">
            <Link className="extra-navigation__link" to="/blank">
              Test drive
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
