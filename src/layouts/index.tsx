import { graphql, StaticQuery } from "gatsby";
import "modern-normalize";
import * as React from "react";
import Helmet from "react-helmet";
import Header from "../components/Header";
import LayoutMain from "../components/LayoutMain";
import LayoutRoot from "../components/LayoutRoot";
import "../styles/normalize";

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const routes = ['technology', 'partners', 'news', 'contact']

const IndexLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[{ name: 'description', content: data.site.siteMetadata.description }, { name: 'keywords', content: 'cvorg' }]}
        />
        <Header navlinks={routes} />
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
