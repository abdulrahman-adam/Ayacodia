import React from 'react'
import CategoryDrillDown from '../../components/header/Header'

import Header from '../../components/header/Header'
import PartenaireList from '../../components/partenaireList/PartenaireList'
import Accordion from '../../components/accordion/Accordion'
import ServicesData from '../../components/serviceData/ServiceData'



const Home = () => {
  return (
    <div className='bg-gray-100'>
      {/* <Hero /> */}
      <Header />
      <ServicesData />
      <Accordion />
      <PartenaireList />  
    </div>
  )
}

export default Home