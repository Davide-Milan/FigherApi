import logo from './logo512.png';
import './App.css';
/*components*/
import Navbar from './components/Navbar'
import ThemeSwitch from './components/ThemeSwitch';

/*pages*/
import ElencoArnie from './pages/Arnie/ElencoArnie'
import Arnie from './pages/Arnie/Arnie'
import Arnia from './pages/Arnie/Arnia'
import Home from './pages/Home'
import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link}
    from 'react-router-dom';



function App() {

  const [theme, setTheme] = React.useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark')

  const toggleDarkLight = (theme) =>{ 
    setTheme(prevTheme => {
      localStorage.setItem('theme', (prevTheme === 'dark' ? 'light' : 'dark'))
      return (prevTheme === 'dark' ? 'light' : 'dark')
    })
  }


  return (
    <div className={`${theme} App`}>
        <Router>
        <header className='App-header'>
          <Link to="/" className="App-header__logo-title__wrapper">
            <img src={logo} alt='logo image' className='App-header__logo'/>
            <h1 className='App-header__title'>FigherApi</h1>
          </Link>
          <ThemeSwitch
            className='switch'
            theme={theme}
            themeSwitch={toggleDarkLight}
          />
        </header>        
        <Routes>
            {/* <Route exact path='/' element={<Home />} />
            <Route path='/arnie' element={<ElencoArnie />}>
              <Route path='' element={<Arnie />}/>
              <Route path=':param' element={<Arnia />}/>
            </Route> */}    
            <Route path='/' element={<ElencoArnie />}>
              <Route path='' element={<Arnie />}/>
              <Route path='/arnia/:param' element={<Arnia />}/>
            </Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
