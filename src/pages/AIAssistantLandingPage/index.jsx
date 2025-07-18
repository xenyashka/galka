import React, { useState } from 'react';
import FormApplication from './FormApplication';
import HowItWorks from './HowItWorks';
import Partners from './Partners';
import Preview from './Preview';
import Price from './priceBlock/Price';
import StartPage from './StartPage';
import Footer from '../../components/common/Footer';

const AIAssistantLandingPage = () => {
  return (
    <div className="w-full bg-white">
      <StartPage />
      <HowItWorks />
      <Preview />
      <Price />
      <Partners />
      <FormApplication />
      <Footer />
    </div>
  );
};

export default AIAssistantLandingPage;
