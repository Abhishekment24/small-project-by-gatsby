import React from 'react'
import Axios from "axios";
import { useEffect, useState } from "react";
import  "./navbar.css"
const Crypto = () => {
    const [crypto, setCrypto] = useState([]);
    const [search, setSearch] = useState("");
 
  useEffect(()=>{
      Axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR`
      ).then((res) => {
        setCrypto(res.data.coins);
      });
  }, []);
  return (
    <div>
      <section className="cryptotable">
        <div className="container">
           
            <div className="row justify-content-center">
                <div className="col-lg-12 text-center ">
                <h1 className="mt-5 mb-5">All Cryptocurrencies</h1>
                <input
		type="text"
		placeholder="Search..."
		onChange={(e) => {
		setSearch(e.target.value);
		}}
	/>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Pair</th>
      <th scope="col">Price</th>
      <th scope="col">24H Change </th>
      <th scope="col">Price in BTC </th>
      <th scope="col">MarketCap</th>
      
      <th scope="col">24H Volume</th>
    </tr>
  </thead>
  <tbody>
  {crypto
			.filter((val) => {
			return val.name.toLowerCase().includes(search.toLowerCase());
			})
			.map((val, id) => {
  return (
     <>
     
      <tr>
      <th scope="row">{id}</th>
      <td className="logo d-flex justify-content-center">
                      <a href={val.websiteUrl}>
                        <img className="mx-2" src={val.icon} alt="logo" width="30px" />
                      </a>
                       
<p>{val.name}</p>
 
                    </td>
      <td>₹{val.price.toFixed(2)}</td>
      <td>{val.priceChange1d}%
</td>
<td>{val.priceBtc}</td>
	<td>₹{val.marketCap}</td>
<td>{val.volume}</td>
<td><a className="btn-white border-radius" href="#">Trade</a></td>
    </tr>
     </>
  );
})}
  </tbody>
      </table>
   
                </div>
            </div>
           
        </div>
    </section>
    </div>
  )
}

export default Crypto
