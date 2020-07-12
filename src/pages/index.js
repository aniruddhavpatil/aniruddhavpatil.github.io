import React from "react"
import Container from "../components/container"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.scss"

const IndexPage = () => (
  <Container>
    <SEO title="Home" />
    <h1>Hello there!</h1>
    <p>Welcome to anipatil.com!</p>
    <p>Developed with Gatsby.js + Ant Design</p>
    <p>Scroll down if you haven't already!</p>
    <div class="home-image">
      <Image />
    </div>
  </Container>
)

export default IndexPage
