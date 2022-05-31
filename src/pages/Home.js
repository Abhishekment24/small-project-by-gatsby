
import React from "react";

import Layout from '../components/layout'
import Foorter from '../components/Foorter'
import Crypto from '../components/Crypto'
import { StaticImage } from "gatsby-plugin-image"
import Sites from "../images/sites.jpeg"
import styles from "../components/index.module.css"
const Home = () => {
  
  return (
      <>
      <Layout />
      <section className="bg-dark pb-5 pt-5">
     
     <div className="container wide-block">
        <div className="row align-items-center pt-5">
           <div className="col-lg-8 text-white">
             
              <p className="mt-4">Ment Tech</p>
              <h1>CASE STUDY</h1>
              <span>
              From startups to enterprises, Ment Tech has helped companies rapidly scale their engineering teams with high-performing developers since 2006.
              </span>
           </div>
           <div className="col-lg-4">
              <img src={Sites} alt="" />
           </div>
        </div>
     </div>
  </section>
  <Crypto />
   <section className="case-listing pt-5 pb-5 ">
    <div className="container">
        <div className="row align-items-center mb-5 pb-5">
            <div className="col-lg-6 mb-4">
                <img src={Sites} alt="" />
            </div>
            <div className="col-lg-6 mt-4">
                <h2>EcoSwap</h2>
                <p>THE MOST EFFICIENT DEFI PLATFORM
Access the most liquidity, lowest slippage and best exchange rates across Ethereum, Binance SmartChain and Polygon.</p>
                <a href="#" className="btn btn-primary">View Case Study</a>
            </div>
        </div>
        <div className="row align-items-center">
            
            <div className="col-lg-6 mb-4">
                <h2>EcoSwap</h2>
                <p>Ecoswap is a leading international provider of education and career services with over 31,000 employees. X-Team helped Kaplan open opportunities for institutional testing that were previously impossible.</p>
                <a href="#" className="btn btn-primary">View Case Study</a>
            </div>
            <div className="col-lg-6">
                <img src={Sites} alt="" />
            </div>
        </div>
    </div>
   </section>
   <Foorter />
    </>
  )
}

export default Home
