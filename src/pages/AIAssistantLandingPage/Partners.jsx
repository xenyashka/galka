import React from 'react';
import '../../styles/partners.css';

const Partners = () => {
  const tags = [
    {
      text: 'Уверенная коммуникация',
      gradient: 'linear-gradient(to right, #e9edf0, #c5b9ff)',
    },
    {
      text: 'ИИ в продажах',
      gradient: 'linear-gradient(to right, #e3d0ee, #e9d6e7)',
    },
    {
      text: 'Оценка звонков',
      gradient: 'linear-gradient(to right, #b3d7fe, #e9d6e7)',
    },
    {
      text: 'Анализ диалога',
      gradient: 'linear-gradient(to right, #f4eaf9, #f9f9f9)',
    },
    {
      text: 'Переговоры',
      gradient: 'linear-gradient(to right, #b3feed, #e9d6e7)',
    },
    {
      text: 'Обработка возражений',
      gradient: 'linear-gradient(to right, #baffc4, #eeffe9)',
    },
    {
      text: 'Win-win решения',
      gradient: 'linear-gradient(to right, #b3d7fe, #e9d6e7)',
    },
  ];

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

        {/* Topic Tags */}
        <div className="topic-tags">
          {tags.map((tag, index) => (
            <div key={index} className="tag" style={{ background: tag.gradient }}>
              {tag.text}
            </div>
          ))}
        </div>

        {/* Partner Cards */}
        <div className="partners-container">
          <img src="/images/competences.svg" />
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
