import {HeaderText, Nav, NavItem, Socials, Wrapper} from './Header.styles'
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";

export function Header() {
    return (
        <Wrapper>
            <HeaderText>Insects</HeaderText>
            <Nav>
                <NavItem>Home</NavItem>
                <NavItem>Catalog</NavItem>
                <NavItem>Cart</NavItem>
            </Nav>
            <Socials>
                <InstagramOutlined style={{margin: '12px'}}/>
                <YoutubeOutlined style={{margin: '12px'}}/>
                <FacebookOutlined style={{margin: '12px'}}/>
            </Socials>
        </Wrapper>
    )
}