import React from 'react';

export default function FeaturesTab() {
  return (
    <table className="features-table">
      <thead>
        <tr className="features-table__titles">
          <th className="features-table__title">Трансмиссия</th>
          <th className="features-table__title">Мощность двигателя, л.с.</th>
          <th className="features-table__title">Тип двигателя</th>
          <th className="features-table__title">Привод</th>
          <th className="features-table__title">Объем двигателя, л</th>
          <th className="features-table__title">Макс. крутящий момент</th>
          <th className="features-table__title">Количество цилиндров</th>
        </tr>
      </thead>
      <tbody>
        <tr className="features-table__values">
          <td className="features-table__value">Роботизированная</td>
          <td className="features-table__value">249</td>
          <td className="features-table__value">Бензиновый</td>
          <td className="features-table__value">Полный</td>
          <td className="features-table__value">2.4</td>
          <td className="features-table__value">370/4500</td>
          <td className="features-table__value">4</td>
        </tr>
      </tbody>
    </table>
  );
}
