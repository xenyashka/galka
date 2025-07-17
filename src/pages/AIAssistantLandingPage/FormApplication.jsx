import { useState } from 'react';
import Button from '../../components/ui/Button';
import '../../styles/application.css';

const Application = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    comment: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Заявка отправлена успешно!');
    setFormData({ email: '', name: '', comment: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div id="contact" className="application-section">
      <div className="application-container">
        <h2 className="application-title">Оставить заявку</h2>

        <form onSubmit={handleSubmit} className="application-form">
          <div className="form-group">
            <label className="form-label">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Имя *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Комментарий</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              rows={4}
              className="form-textarea"
            />
          </div>

          <Button type="submit" className="form-button">
            Отправить
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Application;
