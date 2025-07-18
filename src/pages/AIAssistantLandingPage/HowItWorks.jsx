import Button from '../../components/ui/Button';
import '../../styles/howItWorks.css';

const HowItWorks = () => {
  const handleTryFree = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDemoRequest = () => {
    const url =
      'https://drive.google.com/file/d/1IzUeheZqu7BNeoyhP2-lKeGnbcib2rdl/view?usp=drivesdk';
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="body-container">
      <section className="features-section" id="features">
        <div className="container">
          <h2 className="section-title">Возможности AI-ассистента</h2>
          <p className="section-description">
            Мы создали умного помощника, который сделает ваши переговоры более эффективными
          </p>

          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/img_group_20.svg" alt="Подсказки в реальном времени" />
              </div>
              <h3 className="feature-title">Подсказки в реальном времени</h3>
              <p className="feature-text">
                Галка анализирует разговор и мгновенно предлагает оптимальные ответы и стратегии
                ведения диалога
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/img_group_18.svg" alt="Аналитика и обучение" />
              </div>
              <h3 className="feature-title">Аналитика и обучение</h3>
              <p className="feature-text">
                Автоматически оценивает аргументацию, логику, корректность данных — и формирует
                персонализированные рекомендации по улучшению
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/img_group_16.svg" alt="Интеллектуальный поиск" />
              </div>
              <h3 className="feature-title">Интеллектуальный поиск</h3>
              <p className="feature-text">
                Быстро находит нужную информацию из корпоративных материалов, FAQ и документов,
                оперативно отвечая на нестандартные вопросы клиентов
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/img_group_14.svg" alt="Безопасность данных" />
              </div>
              <h3 className="feature-title">Безопасность данных</h3>
              <p className="feature-text">
                Все данные шифруются и обрабатываются с соблюдением высоких стандартов
                конфиденциальности и безопасных протоколов обработки
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Как это работает?</h2>

          <div className="process-grid">
            <div className="process-item">
              <img className="point" src="/images/number_1.svg" />
              <div className="process-content">
                <h3 className="process-title">Запустите Галку перед встречей</h3>
                <p className="process-text">
                  Сервис подключается к телефонии или легко встраивается в Zoom, Телемост и другие
                  платформы
                </p>
                <div className="note-box">
                  Можно загрузить ваши файлы, документы и базу знаний прямо в сервис для более
                  точных и контекстных ответов
                </div>
              </div>
              <img src="/images/img_image_47.png" alt="Setup" className="process-image" />
            </div>

            <div className="process-item">
              <img className="point" src="/images/number_2.svg" />
              <div className="process-content">
                <h3 className="process-title">Получайте подсказки в моменте</h3>
                <p className="process-text">
                  Галка генерирует нужные фразы и информацию с помощью искусственного интеллекта,
                  расшифровывая речь на звонке менее чем за 3 секунды
                </p>
              </div>
            </div>

            <div className="process-item">
              <img className="point" src="/images/number_3.svg" />
              <div className="process-content">
                <h3 className="process-title">Смотрите отчёт после встречи</h3>
                <p className="process-text">
                  Сервис разбирает звонок на ключевые блоки и помогает понять, где можно говорить
                  эффективнее
                </p>
              </div>
            </div>

            <div className="process-item">
              <img className="point" src="/images/number_4.svg" />
              <div className="process-content">
                <h3 className="process-title">Подстраивайте под себя</h3>
                <p className="process-text">
                  Ассистент адаптирует подсказки и выводы под ваш бизнес, анализируя предыдущие
                  встречи, новые материалы и задачи
                </p>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <Button onClick={handleTryFree} variant="primary" theme="dark">
              Оставить заявку
            </Button>
            <Button
              variant="secondary"
              theme="light"
              onClick={handleDemoRequest}
              className="primary-button"
            >
              Посмотреть демо
              <img className="button-icon" src="/images/img_arrow_4.svg" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
