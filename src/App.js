import Header from './components/Header'
import './App.css';
import Footer from './components/Footer';
import Restaurantlist from './components/Restaurantlist';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import React from 'react'
const Viewrestaurant = React.lazy(() => import('./components/Viewrestaurant'))
function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Header/>
        {/* <h4>Restaurant application</h4> */}
        <React.Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', padding: 24 }}><span className='loader'><span className='loader-dot'></span><span className='loader-dot'></span><span className='loader-dot'></span></span></div>}>
        <Routes>
        <Route path='/' element={<Restaurantlist/>}/>
        <Route path='/Viewrestaurant/:id' element={<Viewrestaurant/>}/>

        </Routes>
        </React.Suspense>
        
        <div className="app-footer">
          <Footer/>
        </div>
      </header>
      </Router>
    </div>
  );
}

export default App;
