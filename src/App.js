import React from 'react'
import {Routes,Route} from 'react-router-dom'

// components
// header
import Header from './components/Header'
// pages
// home
import Home from './pages/Home'

const App = () => {
  return (
    <div className='w-screen h-screen max-w-[720px] mx-auto pt-3'>
      {/* header */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App