import React from 'react'
import Layout from '../components/layout'
import "./request.css"
const request = () => {
  return (
      <>
      <Layout />
      <section className="pt-5 pb-5">
    <div className="container">
     <div className="row mt-5  justify-content-center">
         <div className="col-lg-6 align-self-center">
         <div className="box-shadow-card bg-body p-5">
         <h1 className="text-center"> Contact Form</h1>
         <form>
         <div className="row mt-5 mx-auto">
             <div className="col-lg-8 form-group mx-auto">
        <label>Name</label>
        <input type="text" name="FullName"  className="form-control" placeholder="Your Name"/>
        </div>
         </div>
         <div className="row mt-5 mx-auto">
             <div className="col-lg-8 form-group mx-auto">
        <label>Email</label>
        <input type="email" name="email"  className="form-control" placeholder="Your Email address"/>
        </div>
         </div>
         <div className="row mt-5 mx-auto">
             <div className="col-lg-8 form-group mx-auto">
        <label>Phone</label>
        <input type="phone" name="phone"  className="form-control" placeholder="Your Phonenumber"/>
        </div>
         </div>
         <div className="row mt-5 mx-auto">
             <div className="col-lg-8 form-group mx-auto">
        <label>Message</label>
        <textarea name="message"  className="form-control" placeholder="Your Message" />
        </div>
         </div>
         <div className="row mt-5 mx-auto">
             <div className="col-lg-8 form-group mx-auto">
        
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
         </div>
    </form>
    </div>
         <div></div>
    </div>
         </div>
     </div>
     </section>
     </>
  )
}

export default request
