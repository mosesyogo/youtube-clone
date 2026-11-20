import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="app">
      <Router>
        <Header onMenuClick={() => setSidebarOpen(open => !open)} />

        {/* dark backdrop behind the drawer on phones; tap it to close */}
        <div
          className={`app__backdrop ${sidebarOpen ? 'show' : ''}`}
          onClick={closeSidebar}
        />

        <Routes>
          <Route
            path='/search/:searchTerm'
            element={
              <div className='app__page'>
                <Sidebar open={sidebarOpen} onClose={closeSidebar} />
                <SearchPage />
              </div>
            }
          />

          <Route
            path='/'
            element={
              <div className='app__page'>
                <Sidebar open={sidebarOpen} onClose={closeSidebar} />
                <RecommendedVideos />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;