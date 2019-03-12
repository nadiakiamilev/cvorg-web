import styled from "@emotion/styled";
import { Link } from "gatsby";
import * as React from "react";
import backgroundurl from "../assets/img/chip-1.jpg";
import Container from "../components/Container";
import Page from "../components/Page";
import IndexLayout from "../layouts";
import { colors } from "../styles/variables";

const StyledPage = styled(Page)`
  background-image: url(${backgroundurl});
  background-size: cover;
  background-repeate: no-repeat;
`

const StyledContainer = styled(Container)`
  margin-top: 5rem;
  p {
    max-width: 27em;

    a {
      color: ${colors.black};
      padding-bottom: 2px;
      text-decoration: none;
      border-bottom: 2px solid #05c46b;

      &:active,
      &:hover {
        text-decoration: none;
      }
    }
  }
`

const IndexPage = () => (
  <IndexLayout>
    <StyledPage>
      <StyledContainer>
        <h1>We are Chip Design Systems.</h1>
        <p>
          CDS is a small privately held company founded in 2013 as a spin-out of{' '}
          <a href="https://www.cvorg.ece.udel.edu/" target="_blank">
            CVORG Labs
          </a>{' '}
          in the Electrical and Computer Engineering department at the University of Delaware. We do R&D, including construction of
          prototype systems made to customer specifications.
        </p>
      </StyledContainer>
    </StyledPage>
  </IndexLayout>
)

export default IndexPage
