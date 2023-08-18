import './App.scss';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import Footer from './components/Footer/Footer';
import Search from './pages/Search/Search';

import { darkTheme, lightTheme } from './Themes/Themes';
import { GlobalStyles } from './Themes/GlobalStyles';
import { useState } from 'react';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="app">
        <BrowserRouter>
          <NavBar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
          <div className="container-app">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="movie/:id" element={<Movie />} />
              <Route path="search" element={<Search />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
