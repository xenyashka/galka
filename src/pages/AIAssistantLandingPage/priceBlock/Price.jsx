import React from 'react';
import PriceCard from './PriceCard';
import Button from '../../../components/ui/Button';
import '../../../styles/price.css';

const Price = () => {
  const plans = [
    {
      id: 'start',
      title: 'Старт',
      price: '0₽ / месяц',
      features: [
        '80 бесплатных минут AI-подсказок',
        'Простая аналитика по звонкам',
        '150 минут загрузки аудиозаписей',
        'Хранилище файлов для обучения 1 гб',
        'Коммьюнити и поддержка',
      ],
      icon: '/images/img_streamlinesharptagfreecircle.svg',
      highlight: false,
    },
    {
      id: 'pro',
      title: 'Про',
      price: '2999 ₽ / месяц',
      features: [
        'Безлимитная поддержка AI-подсказок',
        'Глубокая аналитика по звонкам',
        'Интеграция с CRM, API, телефония',
        'Хранилище файлов для обучения 10 гб',
        'Приоритетная поддержка',
      ],
      highlight: true,
    },
    {
      id: 'premium',
      title: 'Премиум',
      price: 'По запросу',
      features: [
        'Всё из Про на максимум',
        'Глубокая кастомная аналитика по звонкам',
        'Кастомные интеграции (CRM, API и др.)',
        'Выделенный менеджер и SLA',
        'Дополнительные опции на обсуждении',
      ],
      highlight: true,
    },
  ];

  const handleSubmit = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="price-section" id="pricing">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="section-title">Тарифы</h2>
          <img src="/images/logo_black.svg" className="title-icon" />
        </div>

        <div className="cards">
          {plans.map((plan) => (
            <PriceCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="action">
          <Button onClick={handleSubmit} variant="primary">
            Оставить заявку
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Price;
