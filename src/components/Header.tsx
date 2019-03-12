import styled from "@emotion/styled";
import { Link } from "gatsby";
import { transparentize } from "polished";
import * as React from "react";
import logo from "../assets/img/logo.png";
import { colors, dimensions, heights } from "../styles/variables";
import Container from "./Container";

const StyledHeader = styled.header`
  padding: ${dimensions.containerPaddingSmall}rem ${dimensions.containerPadding}rem;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`

const HomepageLink = styled(Link)`
  font-family: Oswald;
  font-size: 24px;
  color: #353e48;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const NavLinks = styled.div`
  a {
    font-size: 13px;
    margin: 0 10px;
    padding-bottom: 18px;
    color: #353e48;

    &:last-child {
      margin-right: 0px;
    }
    &:hover {
      text-decoration: none;
      border-bottom: 2px solid #05c46b;
    }
  }
`

const activeLinkStyles = {
  borderBottom: '2px solid #05c46b'
}

interface HeaderProps {
  navlinks: string[]
}

const Header: React.SFC<HeaderProps> = ({ navlinks }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">CDS</HomepageLink>
      <NavLinks>
        {navlinks.map((val, key) => (
          <Link to={val} key={key} activeStyle={activeLinkStyles}>
            {val.toUpperCase()}
          </Link>
        ))}
      </NavLinks>
    </HeaderInner>
  </StyledHeader>
)

export default Header
