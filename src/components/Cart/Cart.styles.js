import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 50px;
  flex-wrap: wrap;
  flex-direction: column;
`

export const Label = styled.h2`
  font-weight: 300;
  margin: 0;
  font-size: 34px;
  text-align: center;
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 200px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 220px;
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

