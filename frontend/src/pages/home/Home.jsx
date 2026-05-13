import React from 'react'
import CategoryDrillDown from '../../components/header/Header'

import Header from '../../components/header/Header'
import PartenaireList from '../../components/partenaireList/PartenaireList'
import Accordion from '../../components/accordion/Accordion'



const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Header />
      <Accordion />
      <PartenaireList />  
    </div>
  )
}

export default Home