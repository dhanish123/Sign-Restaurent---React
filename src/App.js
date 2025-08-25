import Header from './components/Header'
import './App.css';
import Footer from './components/Footer';
import Restaurantlist from './components/Restaurantlist';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import React from 'react'

// Lazy load components for better performance
const Viewrestaurant = React.lazy(() => import('./components/Viewrestaurant'))
const Home = React.lazy(() => import('./components/Home'))
const Menu = React.lazy(() => import('./components/Menu'))
const About = React.lazy(() => import('./components/About'))
const Contact = React.lazy(() => import('./components/Contact'))
const Reservation = React.lazy(() => import('./components/Reservation'))
const Gallery = React.lazy(() => import('./components/Gallery'))
const Blog = React.lazy(() => import('./components/Blog'))

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <main className="main-content">
          <React.Suspense fallback={
            <div className="loading-container">
              <div className="loader">
                <div className="loader-spinner"></div>
                <p>Loading...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/restaurants' element={<Restaurantlist/>}/>
              <Route path='/viewrestaurant/:id' element={<Viewrestaurant/>}/>
              <Route path='/menu' element={<Menu/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/reservation' element={<Reservation/>}/>
              <Route path='/gallery' element={<Gallery/>}/>
              <Route path='/blog' element={<Blog/>}/>
            </Routes>
          </React.Suspense>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
