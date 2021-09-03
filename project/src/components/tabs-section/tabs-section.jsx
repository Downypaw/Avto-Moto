import React from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {getPopupStatus} from '../../store/selectors';
import FeaturesTab from '../features-tab/features-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import ContactTab from '../contact-tab/contact-tab';
import {Tab} from '../../const.js';
import PropTypes from 'prop-types';

export default function TabsSection({onKeyDown}) {
  const [tab, setTab] = useState(Tab.FEATURES);

  const isPopupActive = useSelector(getPopupStatus);

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
            name="tab-features"
            tabIndex={isPopupActive ? -1 : 0}
          >
            Характеристики
          </button>
          <button
            className={`tabs__button ${tab === Tab.REVIEWS ? 'tabs__button--active' : ''}`}
            onClick={() => setTab(Tab.REVIEWS)}
            name="tab-reviews"
            tabIndex={isPopupActive ? -1 : 0}
            >
              Отзывы
            </button>
          <button
            className={`tabs__button ${tab === Tab.CONTACTS ? 'tabs__button--active' : ''}`}
            onClick={() => setTab(Tab.CONTACTS)}
            name="tab-contacts"
            tabIndex={isPopupActive ? -1 : 0}
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
