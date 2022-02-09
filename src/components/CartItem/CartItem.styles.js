import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 20px;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid;
  border-radius: 10px;
  margin: 20px;
`

export const Text = styled.h3`
  font-weight: 500;
  margin: 0 0 0 32px;
  font-size: 32px;
  flex: 1;
`

export const Price = styled.h3`
  font-weight: 300;
  margin: 0 20px 0 0;
  font-size: 32px;
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20px;
`

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 30px;
`

export const InnerText = styled.h4`
  font-weight: 500;
  margin: 0;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Counter = styled.h3`
  font-weight: 500;
  font-size: 32px;
  margin: 10px 10px;
`

export const Button = styled.button`
  width: 80px;
  height: 60px;
  font-size: 12px;
  border-radius: 10px;
  border: 1px dotted;

  &:hover {
    transform: translateY(0.25rem);
  }
`