import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { mediaQueries, colors } from "../../shared/config";

const StyledButton = styled.button`
  min-height: 40px;
  max-height: 80px;
  border: 1px solid black;

  background: ${props => props.highlight ? colors.navActiveBtnBackground : colors.navBtnBackground};
  ${mediaQueries.notTablet} {
    border-left: ${props => props.index === 0 ? 1:0};
    transition: 0.3s;
    &:hover {
      background: ${colors.navButtonHover};
    }
  }
  ${mediaQueries.tablet} {
    &:active {
      background: ${colors.navButtonHover};
    }
    margin-right: 10px;
    margin-bottom: 10px;
  }

  font-family: Roboto Mono, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: ${props => props.highlight ? 'white' : '#013B5A'};

  /* identical to box height */
  align-items: center;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  white-space: nowrap;

  line-height: 29px;
`

const NavButton = (props) => {
  const media = window.matchMedia('(max-width: 900px)')
  const [isMobile, setIsMobile] = useState(media.matches)

  media.addEventListener("change", () => {
    if (media.matches !== isMobile) {
      setIsMobile(media.matches)
    }
  })

  return (
    <StyledButton
      index={props.index}
      highlight={props.highlight}
      onClick={() => {
        const target = document.getElementById(props.section)
        if (target) {
          const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)
          const remDisplacement = isMobile ? 2 * rem : 7 * rem; 
          const top = target.getBoundingClientRect().top + window.pageYOffset - remDisplacement;
          window.scrollTo({ top, behavior: "smooth" })
        }
      }}
    >
      {props.section}
    </StyledButton>
  )
}

NavButton.propTypes = {
  section: PropTypes.string.isRequired,
  highlight: PropTypes.bool
}

export default NavButton
