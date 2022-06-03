import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Footer from './components/Footer';
import Forms from './components/Forms';

function App() {
  const {isLight} = useContext(ThemeContext)
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <Navbar/>
      <Forms/>
      <Footer/>
    </div>
  );
}

export default App;
