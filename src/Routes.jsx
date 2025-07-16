import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import AIAssistantLandingPage from './pages/AIAssistantLandingPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AIAssistantLandingPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;