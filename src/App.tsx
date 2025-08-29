// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { GithubTraining } from './pages/GithubTraining';
import ContactUs from './pages/ContactUs';
import { Sample } from './pages/Sample';
import { WebUIDesign } from './pages/WebUIDesign';
import { GraphicDesign } from './pages/GraphicDesign';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/sample" element={<Sample />} />
            <Route path="/github-training" element={<GithubTraining />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/web-ui-design" element={<WebUIDesign />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

