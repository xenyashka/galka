import Button from '../../components/ui/Button';
import '../../styles/startPage.css';

const StartPage = () => {
  const handleDemoRequest = () => {
    const url =
      'https://drive.google.com/file/d/1IzUeheZqu7BNeoyhP2-lKeGnbcib2rdl/view?usp=drivesdk';
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const handleTryFree = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <div className="main-container">
        <div className="header">
          <div className="header-left">
            <div className="logo-container">
              <img src="/images/logo_white.svg" alt="Галка Logo" className="logo" />
              <h1 className="logo-text">Галка</h1>
            </div>
          </div>

          <div className="header-center">
            <nav className="navigation">
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('features');
                }}
                className="nav-link"
              >
                Возможности
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('pricing');
                }}
                className="nav-link"
              >
                Тарифы
              </a>
              <a
                href="#blog"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('blog');
                }}
                className="nav-link"
              >
                Блог
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('contact');
                }}
                className="nav-link"
              >
                Контакты
              </a>
            </nav>
          </div>

          <div className="header-right"></div>
        </div>

        <div className="main-content">
          <h2 className="main-title">AI-помощник для переговоров</h2>
          <p className="description">
            Искусственный интеллект, который помогает в режиме реального времени: подсказывает
            нужные фразы, анализирует общение и ускоряет процесс обучения
          </p>

          <div className="button-container">
            <div>
              <Button
                variant="primary"
                theme="dark"
                onClick={handleTryFree}
                className="white-button"
              >
                Попробовать бесплатно
              </Button>
              <div className="badge-container">
                <img src="/images/img_vector.svg" alt="Без привязки карты" />
                <span className="badge-text">Без привязки карты</span>
              </div>
            </div>
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
        <div className="users">
          <p className="users-title">Галка уже кружит над:</p>
          <div className="companies">
            <img src="/images/companies_logos.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
