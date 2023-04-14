
import './App.css';

import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>clinica</h1>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
