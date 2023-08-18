import './App.scss';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import Footer from './components/Footer/Footer';
import Search from './pages/Search/Search';

import { darkTheme } from './Themes/Themes';
import { GlobalStyles } from './Themes/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <div className="app">
        <BrowserRouter>
          <NavBar />
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
