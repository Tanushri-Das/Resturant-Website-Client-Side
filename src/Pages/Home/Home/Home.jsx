import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularMenu from '../PopularMenu/PopularMenu'
import Recommends from '../Recommends/Recommends'
import About from '../About/About'
import Featured from '../Featured/Featured'
import Testimonials from '../Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner/>
      <Category/>
      <PopularMenu/>
      <About/>
      <Recommends/>
      <Featured/>
      <Testimonials/>
    </div>
  )
}

export default Home