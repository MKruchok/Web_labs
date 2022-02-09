import styled from 'styled-components';


export const ItemPage = styled.div`
    width: 50%;
    height: 300px;
    border-radius: 10px;
    display: flex;
    margin: 10px auto 10px auto;
`

export const Container = styled.div`
    height: 300px;
    flex: 100;
    display: flex;
    border: 1px solid;
    align-items: center;
    flex-direction: column;
    margin: 0 auto 10px auto;
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
    width: 400px;
    height: 300px;
    border-radius: 4px;
`