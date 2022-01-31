import styled from 'styled-components';

export const ItemsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 100px;
`

export const Item = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 10px;
    border: 1px solid;
    display: block;
`

export const ItemLableText = styled.a`
    font-size: 24px;
    padding: 10px;
`

export const ItemDesc = styled.p`
    font-size: 16px;
    padding: 0 10px 0 10px;
`

export const Image = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 4px;
    align-items: center;
`