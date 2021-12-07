import styled from 'styled-components'

const Header = styled.div`
    width: 100%;
    padding: 2.5rem; /* 40px */
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`

const Title = styled.h1`
    font-weight: normal;
    text-transform: uppercase;
    font-size: 2.5rem; /* 40px */
    
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 2rem; /* 32px */
    }
`

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
 
    @media(max-width: 26.25rem){ /* 420px */
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
 
        & > div {
            display: flex;
            margin-bottom: 1.25rem; /* 20px */
            justify-content: end;
        }
    }
`

const BtnsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export {
  Header, Title, HeaderContainer, BtnsContainer,
}
