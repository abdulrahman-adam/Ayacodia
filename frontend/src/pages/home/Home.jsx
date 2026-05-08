import React from 'react'
import CategoryDrillDown from '../../components/header/Header'

import Header from '../../components/header/Header'
import PartenaireList from '../../components/partenaireList/PartenaireList'



const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Header />
      <PartenaireList />  
    </div>
  )
}

export default Home