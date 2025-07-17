import React, { useState } from 'react';
import FormApplication from './FormApplication';
import HowItWorks from './HowItWorks';
import Partners from './Partners';
import Preview from './Preview';
import Price from './priceBlock/Price';
import StartPage from './StartPage';

const AIAssistantLandingPage = () => {
  return (
    <div className="w-full bg-white">
      <StartPage />
      <HowItWorks />
      <Preview />
      <Price />
      <Partners />
      <FormApplication />

      <div className="bg-light-4 py-16 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/images/img_image_57.png" alt="Галка" className="w-[35px] h-[35px] mr-3" />
            <span className="text-primary text-2xl font-manrope font-light">Галка</span>
          </div>

          <div className="text-right">
            <p className="text-primary text-[32px] font-sf-pro font-medium leading-10 mb-2">
              Связаться с нами:
            </p>
            <p className="text-primary text-[32px] font-sf-pro leading-10">
              icon-ai.tech@yandex.ru
            </p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-primary text-sm font-sf-pro font-medium">
            ©2025, Все права защищены.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantLandingPage;
