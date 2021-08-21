import React from 'react';

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <ul className="extra-navigation">
          <li className="extra-navigation__item">
            <a className="extra-navigation__link" href="#">
              Корпоративным клиентам
            </a>
          </li>
          <li className="extra-navigation__item">
            <a className="extra-navigation__link" href="#">
              Клиентам
            </a>
          </li>
          <li className="extra-navigation__item">
            <a className="extra-navigation__link" href="#">
              Аренда авто
            </a>
          </li>
          <li className="extra-navigation__item">
            <a className="extra-navigation__link" href="#">
              Каршеринг
            </a>
          </li>
          <li className="extra-navigation__item">
            <a className="extra-navigation__link" href="#">
              Как продать авто
            </a>
          </li>
          <li className="extra-navigation__item">
            <a className="extra-navigation__link" href="#">
              Trade-in
            </a>
          </li>
          <li className="extra-navigation__item">
            <a className="extra-navigation__link" href="#">
              Test drive
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
