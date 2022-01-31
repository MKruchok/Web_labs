import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 100px;
`

export const TextWrapper = styled.div`
    padding: 48px;
`

export const TitleText = styled.a`
    color: black;
    text-decoration: none;
    font-size: 64px;
`

export const Species = styled.h1`
    color: black;
    text-decoration: none;
    font-size: 64px;
    font-weight: 700;
    text-align: center;
`

export const SideText = styled.p`
    color: black;
    text-decoration: none;
    font-size: 24px;
`

export const Image = styled.img`
    width: 600px;
    border-radius: 4px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`

export const Button = styled.button`
    width: 180px;
    height: 60px;
    font-size: 12px;
    border-radius: 10px;
    border: 1px dotted;
    
    &:hover {
        transform: translateY(0.25rem);
    }
`