import React from 'react';

export default function ContactTab() {
  return (
    <div className="contacts">
      <dl className="contacts__information">
        <dt className="contacts__title">Адрес</dt>
        <dd className="contacts__value">Санкт-Петербург,<br/> набережная реки Карповки, дом 5</dd>
        <dt className="contacts__title">Режим работы</dt>
        <dd className="contacts__value">Ежедневно, с 10:00 до 21:00</dd>
        <dt className="contacts__title">Телефон</dt>
        <dd className="contacts__value">
          <a className="contacts__link" href="tel:+780033335599">8 (800) 333-55-99</a>
        </dd>
        <dt className="contacts__title">E-mail</dt>
        <dd className="contacts__value">
          <a className="contacts__link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
        </dd>
      </dl>
      <section className="map">
        <h2 className="visually-hidden">Карта</h2>
        <div className="map__frame">
          <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.830012543171!2d30.314303315544574!3d59.96814316668094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315bcebbd7f3%3A0xe0d833dfef898281!2z0L3QsNCxLiBQ0LXQutC4INCa0LDRgNC_0L7QstC60LgsIDUsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTcwMjI!5e0!3m2!1sru!2sru!4v1629719492373!5m2!1sru!2sru" width="431" height="271" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </section>
    </div>
  );
}
