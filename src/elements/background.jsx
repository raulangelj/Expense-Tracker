import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Dots } from '../assets/puntos.svg'

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`

const UpperDots = styled(Dots)`
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */
`

const LowerDots = styled(Dots)`
    position: fixed;
    z-index: 1;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
`

const Background = () => (
  <>
    <UpperDots />
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fillOpacity="1"
        d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,133.3C672,149,768,235,864,229.3C960,224,1056,128,1152,106.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </Svg>
    <LowerDots />
  </>
)

export default Background
