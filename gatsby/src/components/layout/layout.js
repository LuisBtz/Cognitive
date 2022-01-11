import React,{useEffect} from "react"
import { Normalizer } from "../styles/Normalizer"
import { GlobalStyle } from "../styles/GlobalStyle"
import { Typography } from "../styles/Typography"
import Header from '../layout/header'
import Footer from '../layout/footer'
import AOS from "aos";
import 'aos/dist/aos.css';


function Layout({ children }) {

  useEffect(()=>{
    AOS.init({
      once: true
    })
    
  })
  return (
    <>
      <Normalizer />
      <Typography />
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer /> 
    </>
  )
}


export default Layout