import React from 'react'
import Main from "../../components/main/Main"
import Products from '../../components/products/Products'
import axios from '../../api'
import { useState , useEffect } from 'react'
import Banner from '../../components/banner/Banner'


const Home = () => {

  const [data , setData ] = useState(null)
  
    useEffect(() => {
      axios
        .get("/products?limit=9")
        .then(res => setData(res.data.products))
        .catch(err => console.log(err))
    } , [])
    
 

  return (
    <div>
      <Banner/>
      <Products data = {data} />
    </div>
  )
}

export default Home