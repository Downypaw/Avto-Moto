import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../header/header';
import GoodPresentation from '../good-presentation/good-presentation';
import TabsSection from '../tabs-section/tabs-section';
import Footer from '../footer/footer';
import Popup from '../popup/popup';
import {getPopupStatus} from '../../store/selectors';
import {setPopupStatus} from '../../store/action';

export default function MainPage() {
  const isPopupActive = useSelector(getPopupStatus);
  const dispatch = useDispatch();

  const onEscKeyDown = (evt, func) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      dispatch(setPopupStatus(false));
    }
  };

  return (
    <>
      <Header />
      <div className="page-main">
        <h1 className="visually-hidden">Сайт компании "Авто-мото"</h1>
        <GoodPresentation />
        <TabsSection onKeyDown={onEscKeyDown}/>
      </div>
      <Footer />
      {isPopupActive && <Popup onKeyDown={onEscKeyDown}/>}
    </>
  );
}
