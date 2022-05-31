import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Home from "./Home"

const IndexPage = () => (
  <>
  <Layout>
    <Seo title="Home" />
  
     
   
  </Layout>

<Home />
</>

)

export default IndexPage
