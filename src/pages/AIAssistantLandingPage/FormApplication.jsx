import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from '../../components/ui/Button';
import '../../styles/application.css';

const Application = () => {
  const [state, handleSubmit] = useForm('myzpznzw');

  if (state.succeeded) {
    return (
      <div className="application-section">
        <div className="application-container">
          <h2 className="application-title">Заявка отправлена!</h2>
          <p className="application-success-message">
            Спасибо! Мы получили вашу заявку и свяжемся с вами в ближайшее время.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="contact" className="application-section">
      <div className="application-container">
        <h2 className="application-title">Оставить заявку</h2>

        <form onSubmit={handleSubmit} className="application-form">
          <div className="form-group">
            <label className="form-label">Email *</label>
            <input type="email" name="email" id="email" required className="form-input" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="form-error"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Имя *</label>
            <input type="text" name="name" id="name" required className="form-input" />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="form-error"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Комментарий</label>
            <textarea name="comment" id="comment" rows={4} className="form-textarea" />
            <ValidationError
              prefix="Comment"
              field="comment"
              errors={state.errors}
              className="form-error"
            />
          </div>

          <Button type="submit" className="form-button" disabled={state.submitting}>
            {state.submitting ? 'Отправка...' : 'Отправить'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Application;
