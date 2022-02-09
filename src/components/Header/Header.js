import {HeaderText, Nav, NavItem, Socials, HeaderWrapper} from './Header.styles'
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export function Header() {
    return (
        <div>
        <HeaderWrapper>
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
            <Socials>
                <InstagramOutlined style={{margin: '12px'}}/>
                <YoutubeOutlined style={{margin: '12px'}}/>
                <FacebookOutlined style={{margin: '12px'}}/>
            </Socials>

        </HeaderWrapper>
        </div>
    )
}