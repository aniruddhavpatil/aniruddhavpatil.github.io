import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { Layout, Menu} from "antd"
const { Header, Footer, Content } = Layout

const CustomContainer = ({ defKey, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let headerColor = "Gray"
  return (
    <Layout>
      <Header
        style={{
          // position: "fixed",
          // display: "flex",
          height: "100vh",
          width: "100%",
          zIndex: 1,
          backgroundColor: headerColor,
        }}
      >
        <div style={{ maxWidth: "90%", margin: "0 auto" }}>
          <h1 style={{ margin: "margin 0", float: "left" }}>
            <Link to="/" style={{ color: "white" }}>
              {data.site.siteMetadata.title}
            </Link>
          </h1>
          <Menu
            style={{ backgroundColor: headerColor, float: "right" }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={defKey}
          >
            <Menu.Item key="1">
              <Link to="/page-2/">Page 2</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/404/">Secret page</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content
        style={{
          // position: "fixed",
          padding: "0px 50px",
          // marginTop: 64,
          background: `#fff`,
          minHeight: "calc(100vh - 64px)", //edit this to change minimum page height
        }}
      >
        <div style={{ height: "100vh",maxWidth: "80%", margin: "0 auto" }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: "center", backgroundColor: headerColor, color: "white"}}>
        {/* © {new Date().getFullYear()} */}
        anipatil.com
      </Footer>
    </Layout>
  )
}
CustomContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CustomContainer;
