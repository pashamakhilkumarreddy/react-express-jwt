 import React from 'react';
import Routes from './routes';
import AppHeader from './components/common/Header';
import AppFooter from './components/common/Footer';

function App() {
  return (
    <>
      <AppHeader />
        <main className="container mt-6">
          <Routes />
        </main>
      <AppFooter />
    </>
  );
}

export default App;
