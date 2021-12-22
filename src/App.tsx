import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Search from './Components/Search';
import Results from './Components/Results';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StateContextProvider, {useDarkModeContext} from './Context';
function App() {
  const {darkMode} = useDarkModeContext();
  console.log(darkMode);
  return (
      <div className={darkMode? 'dark': ''}>
        <div className = "bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <StateContextProvider>
              <Router>
                <Navbar />
                <Routes>
                  <Route path = '/'         element={<Search />} /> 
                  <Route path = '/search'   element={<Search />} />
                  <Route path = '/images'   element={<Results />} />
                  <Route path = '/news'     element={<Results />} />
                  <Route path = '/videos'   element={<Results />} />
                </Routes>
              </Router>
              <Footer />
            </StateContextProvider>
        </div>
      </div>
  );
}

export default App;
