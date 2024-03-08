import React from 'react'
import Header from './Components/Header/Header'
import Filter from './Components/Filter/Filter'
import Filterbox from './Components/Filter/Filterbox'
import Navigation from './Components/Navigation/Navigation'

function App() {
  return (
    <div className='app'>
      <Header />
      <Filter />
      <Filterbox />
      <Navigation />
    </div>
  )
}

export default App
