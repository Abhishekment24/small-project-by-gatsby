import React from 'react'
import Layout from '../components/layout'
import Foorter from '../components/Foorter'
import { StaticImage } from "gatsby-plugin-image"
import Sites from "../images/sites.jpeg"
import styles from "../components/index.module.css"
const about = () => {
  return (
      <>
      <Layout />
    <section className="pt-5 pb-5 bg-dark">

      <div className="container">
   <div className="row pt-5">
   <div className="col-lg-6">
   <StaticImage
        src="../images/sites.jpeg"
        loading="eager"
        height={800}
        width={900}
       
        alt=""
       
      />
   </div>
   <div className="col-lg-6 pt-5 text-white ">
  <h1 className="text-white pt-5">Work Details</h1>
  <p>A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. </p>
</div>
   </div>
      </div>
    </section>
    <section className="p-5">
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={Sites}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={Sites}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={Sites}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
    </section>
    <section className="bg-dark pb-5">
     
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
   <section className="case-listing pt-5 pb-5">
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

export default about
