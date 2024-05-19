import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { FavoritesProvider } from './context/FavoritesContext';

// ... other imports

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <Routes>
          {' '}
          {/* This should wrap your Route definitions or component tree */}
          <Route path='/' element={<HomePage />} />
          {/* other routes */}
          {/* This should wrap your Route definitions or component tree */}
        </Routes>
      </FavoritesProvider>{' '}
    </Router>
  );
}

export default App;
