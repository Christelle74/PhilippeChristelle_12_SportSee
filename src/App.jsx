import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import VerticalNavigation from './components/VerticalNavigation'
import Error from './pages/Error'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

/**
 * Creation of pages routes
 * @returns App component
 */
const App = () => {

  return (
     
    <Router>
        <Header/>
        <VerticalNavigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<Dashboard/>}/> 
          <Route path="*" element={<Error/>} />
        </Routes>
    </Router>
    
  )
}

export default App
