import styled from 'styled-components';

export const ItemsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 100px;
`

export const Item = styled.div`
    width: 300px;
    height: 420px;
    border-radius: 10px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 10px;
`

export const Filler = styled.div`
    height: 100%;
`

export const ItemLabelText = styled.a`
    font-size: 24px;
    padding: 10px;
`

export const Button = styled.button`
    width: 150px;
    min-height: 40px;
    font-size: 12px;
    border-radius: 10px;
    border: 1px dotted;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 1rem;
    
    &:hover {
        cursor: pointer;
        transform: translateY(0.25rem);
    }
`

export const ItemDesc = styled.p`
    font-size: 12px;
    padding: 0 10px 0 10px;
`

export const Image = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 4px;
    align-items: center;
`