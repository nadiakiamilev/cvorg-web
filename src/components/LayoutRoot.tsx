import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import * as React from "react";
import backgroundurl from "../assets/img/chip-1.jpg";
import normalize from "../styles/normalize";

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-size: cover;
`

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Global styles={() => css(normalize)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
)

export default LayoutRoot
