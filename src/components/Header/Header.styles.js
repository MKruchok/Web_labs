import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    background-color: skyblue;
`

export const HeaderText = styled.a`
    color: black;
    text-decoration: none;
    font-size: 28px;
`

export const Nav = styled.ul`
    display: flex;
    padding: 0;
    list-style: none;
`

export const NavItem = styled.li`
    margin: 10px 30px;  
`

export const Socials = styled.ul`
    display: flex;
`

export const Search = styled.input`
    width: 140px;
    height: 16px;
    margin: 4px;
`