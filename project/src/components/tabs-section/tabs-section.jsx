import React from 'react';
import {useState} from 'react';
import FeaturesTab from '../features-tab/features-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import ContactTab from '../contact-tab/contact-tab';
import {Tab} from '../../const.js';
import PropTypes from 'prop-types';

export default function TabsSection({onKeyDown}) {
  const [tab, setTab] = useState(Tab.FEATURES);

  const setCurrentTab = (tab) => {
    switch(tab) {
      case Tab.REVIEWS:
        return <ReviewsTab onEscKeyDown={onKeyDown}/>;
      case Tab.CONTACTS:
        return <ContactTab />;
      default:
        return <FeaturesTab />;
    }
  };

  return (
    <div className="tabs">
      <div className="tabs__container container">
        <div className="tabs__buttons">
          <button
            className={`tabs__button ${tab === Tab.FEATURES ? 'tabs__button--active' : ''}`}
            onClick={() => setTab(Tab.FEATURES)}
          >
            Характеристики
          </button>
          <button
            className={`tabs__button ${tab === Tab.REVIEWS ? 'tabs__button--active' : ''}`}
            onClick={() => setTab(Tab.REVIEWS)}
            >
              Отзывы
            </button>
          <button
            className={`tabs__button ${tab === Tab.CONTACTS ? 'tabs__button--active' : ''}`}
            onClick={() => setTab(Tab.CONTACTS)}
          >
            Контакты
          </button>
        </div>
        {setCurrentTab(tab)}
      </div>
    </div>
  );
}

TabsSection.propTypes = {
  onKeyDown: PropTypes.func.isRequired,
}
