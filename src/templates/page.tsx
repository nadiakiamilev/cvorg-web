import styled from "@emotion/styled";
import { graphql } from "gatsby";
import * as React from "react";
import Container from "../components/Container";
import Page from "../components/Page";
import IndexLayout from "../layouts";

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const StyledHeader = styled.h1`
  margin: 3rem 0 1.5rem 0;
`

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <Container>
        <StyledHeader>{data.markdownRemark.frontmatter.title}</StyledHeader>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Container>
    </Page>
  </IndexLayout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
