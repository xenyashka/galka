import React from 'react';
import '../../../styles/price.css';

const FeatureItem = ({ text, highlighted = false }) => {
  return (
    <div className="feature-item">
      <div
        className={`feature-item-icon ${highlighted ? 'feature-item-icon--accent' : 'feature-item-icon--default'}`}
      >
        <img src="/images/img_icon.svg" />
      </div>
      <span className="feature-item-text">{text}</span>
    </div>
  );
};

export default FeatureItem;
