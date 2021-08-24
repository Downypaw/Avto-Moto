import React from 'react';

export default function FeaturesTab() {
  return (
    <table className="features-table">
      <tbody>
        <tr className="features-table__row">
          <th className="features-table__title">Трансмиссия</th>
          <td className="features-table__value">Роботизированная</td>
        </tr>
        <tr className="features-table__row">
          <th className="features-table__title">Мощность двигателя, л.с.</th>
          <td className="features-table__value">249</td>
        </tr>
        <tr className="features-table__row">
          <th className="features-table__title">Тип двигателя</th>
          <td className="features-table__value">Бензиновый</td>
        </tr>
        <tr className="features-table__row">
          <th className="features-table__title">Привод</th>
          <td className="features-table__value">Полный</td>
        </tr>
        <tr className="features-table__row">
          <th className="features-table__title">Объем двигателя, л</th>
          <td className="features-table__value">2.4</td>
        </tr>
        <tr className="features-table__row">
          <th className="features-table__title">Макс. крутящий момент</th>
          <td className="features-table__value">370/4500</td>
        </tr>
        <tr className="features-table__row">
          <th className="features-table__title">Количество цилиндров</th>
          <td className="features-table__value">4</td>
        </tr>
      </tbody>
    </table>
  );
}
