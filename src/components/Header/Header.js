import {HeaderText, Nav, NavItem, Search, Socials, Wrapper} from './Header.styles'
import {FacebookOutlined, InstagramOutlined, SearchOutlined, YoutubeOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export function Header(props) {
    return (
        <div>
        <Wrapper>
            <HeaderText>Insects</HeaderText>
            <Nav>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                <NavItem>Home</NavItem>
                </Link>
                <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}>
                <NavItem>Catalog</NavItem>
                </Link>
                <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}>
                <NavItem>Cart</NavItem>
                </Link>
            </Nav>
                {check(props.isHomePage)}
        </Wrapper>
        </div>
    )
}

function check(bool){
    if (bool) {
        return(
            <Socials>
                <InstagramOutlined style={{margin: '12px'}}/>
                <YoutubeOutlined style={{margin: '12px'}}/>
                <FacebookOutlined style={{margin: '12px'}}/>
            </Socials>
        )
    }
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <Search id='SearchInput'/>
            <SearchOutlined/>
        </div>
    )
}