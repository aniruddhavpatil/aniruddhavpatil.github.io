import React from "react"
import Container from "../components/Container"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.scss"
import { Timeline, Divider } from 'antd';

const IndexPage = () => (
  <Container>
    <SEO title="Home" />
    {/* <div style={{ position: "relative", height: "100vh" }}>asdf</div> */}
    <div style={{ height: "100vh", overflowY: "scroll"}}>
    <h1>Hello there!</h1>
    <p>Welcome to anipatil.com!</p>
    <p>Developed with Gatsby.js + Ant Design</p>
    <p>Scroll down if you haven't already!</p>
    <div class="home-image">
      <Image />
    </div>
    <Divider style={{color: "blue"}} />
    <Timeline>
      <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color="red">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </Timeline.Item>
      <Timeline.Item>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </Timeline.Item>
      <Timeline.Item color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </Timeline.Item>
      <Timeline.Item color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </Timeline.Item>
    </Timeline>
    </div>
  </Container>
)

export default IndexPage
