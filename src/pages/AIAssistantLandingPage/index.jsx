import React, { useState } from 'react';
import Button from '../../components/ui/Button';

const AIAssistantLandingPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    comment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Заявка отправлена успешно!');
    setFormData({ email: '', name: '', comment: '' });
  };

  const handleDemoRequest = () => {
    alert('Запрос на демо отправлен!');
  };

  const handleTryFree = () => {
    alert('Переход к бесплатной версии!');
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[961px] bg-secondary" style={{
        backgroundImage: 'url(/images/img_image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Navigation */}
        <div className="absolute top-[46px] left-1/2 transform -translate-x-1/2 bg-overlay-3 rounded-lg px-8 py-2 shadow-lg">
          <nav className="flex items-center space-x-8">
            <a href="#features" className="text-white text-lg font-montserrat hover:opacity-80">Возможности</a>
            <a href="#pricing" className="text-white text-lg font-montserrat hover:opacity-80">Тарифы</a>
            <a href="#blog" className="text-white text-lg font-montserrat hover:opacity-80">Блог</a>
            <a href="#contact" className="text-white text-lg font-montserrat hover:opacity-80">Контакты</a>
          </nav>
        </div>

        {/* Header with Logo */}
        <div className="absolute top-[22px] left-[105px] flex items-center">
          <img src="/images/img_image_33.png" alt="Галка Logo" className="w-[58px] h-[53px]" />
          <h1 className="ml-4 text-white text-[35px] font-manrope font-light leading-[48px]">Галка</h1>
        </div>

        {/* Main Content */}
        <div className="absolute top-[235px] left-[105px] max-w-[884px]">
          <h2 className="text-white text-[84px] font-manrope font-semibold leading-[84px] tracking-[1px] mb-8">
            AI-помощник для переговоров
          </h2>
          <p className="text-white text-2xl font-manrope leading-8 mb-12 max-w-[724px]">
            Искусственный интеллект, который помогает в режиме реального времени: подсказывает нужные фразы, анализирует общение и ускоряет процесс обучения
          </p>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-8 mb-6">
            <Button 
              onClick={handleTryFree}
              className="bg-button text-button px-8 py-4 rounded-lg shadow-lg flex items-center"
            >
              Попробовать бесплатно
              <img src="/images/img_arrow_1.svg" alt="arrow" className="ml-3 w-[15px] h-[12px]" />
            </Button>
            <Button 
              onClick={handleDemoRequest}
              variant="secondary"
              className="bg-gray-3 text-dark-2 px-8 py-4 rounded-lg shadow-lg"
            >
              Запросить демо
            </Button>
          </div>

          {/* Free Card Badge */}
          <div className="flex items-center">
            <img src="/images/img_vector.svg" alt="check" className="w-4 h-4 mr-2" />
            <span className="text-green text-base font-medium">Без привязки карты</span>
          </div>
        </div>

        {/* Bottom Images */}
        <div className="absolute bottom-0 right-[473px] flex items-end">
          <img src="/images/img_image_42.png" alt="Company 1" className="w-[248px] h-[165px]" />
          <img src="/images/img_image_41.png" alt="Company 2" className="w-[228px] h-[152px] ml-4" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-white text-[23px] font-medium text-center">Галка уже кружит над:</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-dark-3 text-[60px] font-manrope font-bold leading-[82px] mb-4">
            Возможности AI-ассистента
          </h2>
          <p className="text-primary text-xl font-manrope leading-7 mb-16 max-w-[853px] mx-auto">
            Мы создали умного помощника, который cделает ваши переговоры более эффективными
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-b from-[#1b1b1b] to-[#050505] border border-[#2a2a2a] rounded-lg p-8">
              <div className="bg-light-3 rounded-lg p-3 w-11 h-11 mb-6">
                <img src="/images/img_group_20.svg" alt="Real-time suggestions" className="w-full h-full" />
              </div>
              <h3 className="text-dark-3 text-lg font-inter font-semibold leading-6 mb-4">
                Подсказки в реальном времени
              </h3>
              <p className="text-muted-1 text-sm font-inter leading-5">
                Галка анализирует разговор и мгновенно предлагает оптимальные ответы и стратегии ведения диалога
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#1b1b1b] to-[#050505] border border-[#2a2a2a] rounded-lg p-8">
              <div className="bg-light-3 rounded-lg p-3 w-11 h-11 mb-6">
                <img src="/images/img_group_18.svg" alt="Analytics" className="w-full h-full" />
              </div>
              <h3 className="text-dark-3 text-lg font-inter font-semibold leading-6 mb-4">
                Аналитика и обучение
              </h3>
              <p className="text-muted-1 text-sm font-inter leading-5">
                Автоматически оценивает аргументацию, логику, корректность данных — и формирует персонализированные рекомендации по улучшению
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#1b1b1b] to-[#050505] border border-[#2a2a2a] rounded-lg p-8">
              <div className="bg-light-3 rounded-lg p-3 w-11 h-11 mb-6">
                <img src="/images/img_group_16.svg" alt="Smart search" className="w-full h-full" />
              </div>
              <h3 className="text-dark-3 text-lg font-inter font-semibold leading-6 mb-4">
                Интеллектуальный поиск
              </h3>
              <p className="text-muted-1 text-sm font-inter leading-5">
                Быстро находит нужную информацию из корпоративных материалов, FAQ и документов, оперативно отвечая на нестандартные вопросы клиентов
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#1b1b1b] to-[#050505] border border-[#2a2a2a] rounded-lg p-8">
              <div className="bg-light-3 rounded-lg p-3 w-11 h-11 mb-6">
                <img src="/images/img_group_14.svg" alt="Data security" className="w-full h-full" />
              </div>
              <h3 className="text-dark-3 text-lg font-inter font-semibold leading-6 mb-4">
                Безопасность данных
              </h3>
              <p className="text-muted-1 text-sm font-inter leading-5">
                Все данные шифруются и обрабатываются с соблюдением высоких стандартов конфиденциальности и безопасных протоколов обработки
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-light-6 py-20 px-4 rounded-3xl mx-16 my-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-dark-4 text-[50px] font-manrope font-semibold leading-[69px] tracking-[1px] text-center mb-16">
            Как это работает?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="flex-1">
                  <h3 className="text-dark-3 text-[23px] font-inter font-semibold leading-7 mb-3">
                    Запустите Галку перед встречей
                  </h3>
                  <p className="text-primary text-lg font-manrope leading-7">
                    Сервис подключается к телефонии или легко встраивается в Zoom, Телемост и другие платформы
                  </p>
                </div>
                <img src="/images/img_image_47.png" alt="Setup" className="w-[72px] h-[72px]" />
              </div>

              <div className="relative">
                <h3 className="text-dark-3 text-[23px] font-inter font-semibold leading-7 mb-3">
                  Получайте подсказки в моменте
                </h3>
                <p className="text-primary text-lg font-manrope leading-7 mb-4">
                  Галка генерирует нужные фразы и информацию с помощью искусственного интеллекта, расшифровывая речь на звонке менее чем за 3 секунды
                </p>
                <div className="bg-primary text-xs font-inter font-bold leading-4 p-4 rounded max-w-[426px]">
                  Можно загрузить ваши файлы, документы и базу знаний прямо в сервис для более точных и контекстных ответов
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-dark-3 text-[23px] font-inter font-semibold leading-7 mb-3">
                  Смотрите отчёт после встречи
                </h3>
                <p className="text-primary text-lg font-manrope leading-7">
                  Сервис разбирает звонок на ключевые блоки и помогает понять, где можно говорить эффективнее
                </p>
              </div>

              <div>
                <h3 className="text-dark-3 text-[23px] font-inter font-semibold leading-7 mb-3">
                  Подстраивайте под себя
                </h3>
                <p className="text-primary text-lg font-manrope leading-7">
                  Ассистент адаптирует подсказки и выводы под ваш бизнес, анализируя предыдущие встречи, новые материалы и задачи
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mt-16">
            <Button 
              onClick={handleSubmit}
              className="bg-accent-1 text-white px-8 py-4 rounded-lg shadow-lg flex items-center"
            >
              Оставить заявку
              <img src="/images/img_arrow_1.svg" alt="arrow" className="ml-3 w-[15px] h-[12px]" />
            </Button>
            <Button 
              onClick={handleDemoRequest}
              variant="secondary"
              className="bg-gray-3 text-dark-2 px-8 py-4 rounded-lg shadow-lg"
            >
              Запросить демо
            </Button>
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Background Effects */}
          <div className="absolute top-[220px] left-[203px] w-[483px] h-[483px] bg-overlay-2 rounded-full shadow-2xl opacity-50"></div>
          <div className="absolute top-[399px] right-[200px] w-[483px] h-[483px] bg-overlay-2 rounded-full shadow-2xl opacity-50"></div>
          
          {/* Dashboard Interface */}
          <div className="relative z-10 bg-white rounded-lg shadow-xl p-8" style={{
            backgroundImage: 'url(/images/img_image_50.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            {/* Dashboard content would go here - simplified for brevity */}
            <div className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <img src="/images/img_image_57.png" alt="Галка" className="w-[28px] h-[28px] mx-auto mb-4" />
                <h3 className="text-2xl font-manrope font-light">Галка</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-16">
            <h2 className="text-dark-3 text-[60px] font-manrope font-semibold leading-[82px] mr-4">Тарифы</h2>
            <img src="/images/img_image_57.png" alt="Галка" className="w-[70px] h-[70px]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Start Plan */}
            <div className="bg-white border border-[#e6e8f4] rounded-3xl p-8">
              <div className="flex items-center mb-8">
                <h3 className="text-primary text-[46px] font-inter font-medium leading-[57px]">Старт</h3>
                <img src="/images/img_streamlinesharptagfreecircle.svg" alt="Free" className="w-[58px] h-[58px] ml-4" />
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <img src="/images/img_icon.svg" alt="check" className="w-8 h-8 mr-4 bg-gray-1 rounded-2xl p-2" />
                  <span className="text-primary text-2xl font-inter">80 бесплатных минут AI-подсказок</span>
                </div>
                <div className="flex items-center">
                  <img src="/images/img_icon.svg" alt="check" className="w-8 h-8 mr-4 bg-gray-1 rounded-2xl p-2" />
                  <span className="text-primary text-2xl font-inter">Простая аналитика по звонкам</span>
                </div>
                <div className="flex items-center">
                  <img src="/images/img_icon.svg" alt="check" className="w-8 h-8 mr-4 bg-gray-1 rounded-2xl p-2" />
                  <span className="text-primary text-2xl font-inter">150 минут загрузки аудиозаписей</span>
                </div>
                <div className="flex items-center">
                  <img src="/images/img_icon.svg" alt="check" className="w-8 h-8 mr-4 bg-gray-1 rounded-2xl p-2" />
                  <span className="text-primary text-2xl font-inter">Хранилище файлов для обучения 1 гб</span>
                </div>
                <div className="flex items-center">
                  <img src="/images/img_icon.svg" alt="check" className="w-8 h-8 mr-4 bg-gray-1 rounded-2xl p-2" />
                  <span className="text-primary text-2xl font-inter">Коммьюнити и поддержка</span>
                </div>
              </div>

              <div className="text-dark-1 text-4xl font-inter font-medium leading-11">0₽ / месяц</div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white border border-[#e6e8f4] rounded-3xl p-8">
              <h3 className="text-primary text-[46px] font-inter font-medium leading-[57px] mb-8">Про</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <img src="/images/img_icon.svg" alt="check" className="w-8 h-8 mr-4 bg-accent-1 rounded-2xl p-2" />
                  <span className="text-primary text-2xl font-inter">Безлимитная поддержка AI-подсказок</span>
                </div>
                <div className="flex items-center">
                  <img src="/images/img_icon.svg" alt="check" className="w-8 h-8 mr-4 bg-accent-1 rounded-2xl p-2" />
                  <span className="text-primary text-2xl font-inter">Глубокая аналитика по звонкам</span>
                </div>
                <div className="flex items-center">
                  <img src="/images/img_icon.svg" alt="check" className="w-8 h-8 mr-4 bg-accent-1 rounded-2xl p-2" />
                  <span className="text-primary text-2xl font-inter">Интеграция с CRM, API, телефония</span>
                </div>
                <div className="flex items-center">
                  <img src="/images/img_icon.svg" alt="check" className="w-8 h-8 mr-4 bg-purple rounded-2xl p-2" />
                  <span className="text-primary text-2xl font-inter">Хранилище файлов для обучения 10 гб</span>
                </div>
                <div className="flex items-center">
                  <img src="/images/img_icon.svg" alt="check" className="w-8 h-8 mr-4 bg-purple rounded-2xl p-2" />
                  <span className="text-primary text-2xl font-inter">Приоритетная поддержка</span>
                </div>
              </div>

              <div className="text-dark-1 text-4xl font-inter font-medium leading-11">2999 ₽ / месяц</div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white border border-[#e6e8f4] rounded-3xl p-8 relative">
              <h3 className="text-primary text-[46px] font-inter font-medium leading-[57px] mb-8">Премиум</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <img src="/images/img_icon.svg" alt="check" className="w-8 h-8 mr-4 bg-accent-1 rounded-2xl p-2" />
                  <span className="text-primary text-2xl font-inter">Всё из Про на максимум</span>
                </div>
                <div className="flex items-center">
                  <img src="/images/img_icon.svg" alt="check" className="w-8 h-8 mr-4 bg-accent-1 rounded-2xl p-2" />
                  <span className="text-primary text-2xl font-inter">Глубокая кастомная аналитика по звонкам</span>
                </div>
                <div className="flex items-center">
                  <img src="/images/img_icon.svg" alt="check" className="w-8 h-8 mr-4 bg-accent-1 rounded-2xl p-2" />
                  <span className="text-primary text-2xl font-inter">Кастомные интеграции (CRM, API и др.)</span>
                </div>
                <div className="flex items-center">
                  <img src="/images/img_icon.svg" alt="check" className="w-8 h-8 mr-4 bg-accent-1 rounded-2xl p-2" />
                  <span className="text-primary text-2xl font-inter">Выделенный менеджер и SLA</span>
                </div>
                <div className="flex items-center">
                  <img src="/images/img_icon.svg" alt="check" className="w-8 h-8 mr-4 bg-accent-1 rounded-2xl p-2" />
                  <span className="text-primary text-2xl font-inter">Дополнительные опции на обсуждении</span>
                </div>
              </div>

              <div className="text-dark-1 text-4xl font-inter font-medium leading-11 text-center">По запросу</div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Button 
              onClick={handleSubmit}
              className="bg-accent-1 text-white px-12 py-5 rounded-xl shadow-lg flex items-center text-2xl"
            >
              Оставить заявку
              <img src="/images/img_arrow_1.svg" alt="arrow" className="ml-4 w-[18px] h-[14px]" />
            </Button>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-light-5 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-dark-3 text-[60px] font-manrope font-semibold leading-[82px] text-center mb-8">
            Следить за полётами Галки
          </h2>
          <p className="text-primary text-2xl font-manrope leading-8 text-center mb-16 max-w-4xl mx-auto">
            Статьи, гайды и подборки -- контент, который помогает прокачивать навыки общения и продаж
          </p>

          {/* Topic Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="bg-gradient-to-r from-[#e9edf0] to-[#c5b9ff] rounded-xl px-6 py-4">
              <span className="text-primary text-lg font-manrope font-semibold">Уверенная коммуникация</span>
            </div>
            <div className="bg-gradient-to-r from-[#e3d0ee] to-[#e9d6e7] rounded-xl px-6 py-4">
              <span className="text-primary text-lg font-manrope font-semibold">ИИ в продажах</span>
            </div>
            <div className="bg-gradient-to-r from-[#b3d7fe] to-[#e9d6e7] rounded-xl px-6 py-4">
              <span className="text-primary text-lg font-manrope font-semibold">Оценка звонков</span>
            </div>
            <div className="bg-gradient-to-r from-[#f4eaf9] to-[#f9f9f9] rounded-xl px-6 py-4">
              <span className="text-primary text-lg font-manrope font-semibold">Анализ диалога</span>
            </div>
            <div className="bg-gradient-to-r from-[#b3feed] to-[#e9d6e7] rounded-xl px-6 py-4">
              <span className="text-primary text-lg font-manrope font-semibold">Переговоры</span>
            </div>
            <div className="bg-gradient-to-r from-[#baffc4] to-[#eeffe9] rounded-xl px-6 py-4">
              <span className="text-primary text-lg font-manrope font-semibold">Обработка возражений</span>
            </div>
            <div className="bg-gradient-to-r from-[#b3d7fe] to-[#e9d6e7] rounded-xl px-6 py-4">
              <span className="text-primary text-lg font-manrope font-semibold">Win-win решения</span>
            </div>
          </div>

          {/* Partner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 text-center">
                <img src="/images/img_logostelegram.png" alt="Telegram" className="w-[122px] h-[122px] mx-auto mb-6" />
                <div className="flex items-center justify-center">
                  <span className="text-blue text-2xl font-manrope font-bold">Telegram-канал</span>
                  <img src="/images/img_arrow_1_light_blue_400.svg" alt="arrow" className="ml-2 w-[18px] h-[14px]" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <img src="/images/img_image_54.png" alt="VC" className="w-[139px] h-[208px] mx-auto mb-6 rounded-[32px]" />
                <div className="flex items-center justify-center">
                  <span className="text-accent text-2xl font-manrope font-bold">Стартап-дневник VC</span>
                  <img src="/images/img_arrow_5.svg" alt="arrow" className="ml-2 w-[18px] h-[14px]" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 text-center">
                <img src="/images/img_image_55.png" alt="Habr" className="w-[128px] h-[251px] mx-auto mb-6" />
                <div className="flex items-center justify-center">
                  <span className="text-muted-2 text-2xl font-manrope font-bold">Habr профиль</span>
                  <img src="/images/img_arrow_3.svg" alt="arrow" className="ml-2 w-[18px] h-[14px]" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <img src="/images/img_image_56.png" alt="T-Journal" className="w-[165px] h-[210px] mx-auto mb-6" />
                <div className="flex items-center justify-center">
                  <span className="text-primary text-2xl font-manrope font-bold">Т-журнал</span>
                  <img src="/images/img_arrow_4.svg" alt="arrow" className="ml-2 w-[18px] h-[14px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-dark-3 text-[60px] font-raleway font-bold leading-[71px] text-center mb-16">
            Оставить заявку
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-dark-3 text-lg font-inter font-bold leading-6 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-[70px] px-4 border border-[#d6ddec] rounded-lg text-xl font-inter text-muted-3 focus:outline-none focus:border-accent-1"
                required
              />
            </div>

            <div>
              <label className="block text-dark-3 text-lg font-inter font-bold leading-6 mb-2">
                Имя
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full h-[70px] px-4 border border-[#d6ddec] rounded-lg text-xl font-inter text-muted-3 focus:outline-none focus:border-accent-1"
                required
              />
            </div>

            <div>
              <label className="block text-dark-3 text-lg font-inter font-bold leading-6 mb-2">
                Комментарий (опционально)
              </label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                rows={4}
                className="w-full h-[114px] px-4 py-3 border border-[#d6ddec] rounded-lg text-xl font-inter text-muted-3 focus:outline-none focus:border-accent-1 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent-2 text-white text-2xl font-raleway font-bold leading-8 py-6 rounded-lg"
            >
              Отправить
            </Button>
          </form>
        </div>
      </div>

      {/* Footer */}
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