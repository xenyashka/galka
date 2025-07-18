import React from 'react';
import '../../styles/partners.css';

const Partners = () => {
  const partnerCards = [
    {
      title: 'Telegram-канал',
      image: '/images/img_logostelegram.png',
      color: 'blue',
      arrow: '/images/img_arrow_1_light_blue_400.svg',
      url: '',
    },
    {
      title: 'Стартап-дневник VC',
      image: '/images/img_image_54.png',
      color: 'accent',
      arrow: '/images/img_arrow_5.svg',
      url: '',
    },
    {
      title: 'Habr профиль',
      image: '/images/img_image_55.png',
      color: 'muted-2',
      arrow: '/images/img_arrow_3.svg',
      url: '',
    },
    {
      title: 'Т-журнал',
      image: '/images/img_image_56.png',
      color: 'primary',
      arrow: '/images/img_arrow_4.svg',
      url: '',
    },
  ];

  return (
    <div className="partners-section">
      <div className="container">
        <h2 className="section-title">Следить за полётами Галки</h2>
        <p className="section-description">
          Статьи, гайды и подборки — контент, который помогает прокачивать навыки общения и продаж
        </p>

        {/* Partner Cards */}
        <div className="partners-container">
          <img className="competencies" src="/images/competences.svg" />
          <div className="partner-cards">
            {partnerCards.map((card, index) => (
              <div className="partner-card" key={index}>
                <img src={card.image} alt={card.title} className="partner-logo" />
                <div className="flex items-center justify-center">
                  <span className={`text-${card.color} text-2xl font-bold`}>{card.title}</span>
                  <img src={card.arrow} alt="arrow" className="ml-2 arrow-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
