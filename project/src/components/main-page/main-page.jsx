import React from 'react';
import Header from '../header/header';
import GoodPresentation from '../good-presentation/good-presentation';
import TabsSection from '../tabs-section/tabs-section';
import Footer from '../footer/footer';
import Popup from '../popup/popup';

export default function MainPage() {
  return (
    <>
      <Header />
      <GoodPresentation />
      <TabsSection />
      <Footer />
      <Popup />
    </>
  );
}
