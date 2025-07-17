import React from 'react';
import FeatureItem from './Feature';
import '../../../styles/price.css';

const PriceCard = ({ plan }) => {
  return (
    <div className={`price-card ${plan.highlight ? 'price-card--highlighted' : ''}`}>
      <div className="price-card-header">
        <h3 className="price-card-title">{plan.title}</h3>
        {plan.icon && <img src={plan.icon} alt={plan.title} className="price-card-icon" />}
      </div>

      <div className="price-card-features">
        {plan.features.map((feature, index) => (
          <FeatureItem key={index} text={feature} highlighted={plan.highlight} />
        ))}
      </div>

      <div className="price-card-price">{plan.price}</div>
    </div>
  );
};

export default PriceCard;
