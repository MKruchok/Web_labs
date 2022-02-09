import styled from 'styled-components';

export const FilterWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 10
`

export const FilterSelector = styled.select`
  margin-right: 40px;
  padding: 10px 32px;
  border-radius: 10px;
  border: solid #c4c4c4 1px;
`

export const Wrapper = styled.div`
  display: flex;
  padding: 5px 100px;
`

export const HorRule = styled.hr`
    margin-top: 0px;
`

export const TitleText = styled.a`
    color: black;
    text-decoration: none;
    font-size: 24px;
    padding: 8px;
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