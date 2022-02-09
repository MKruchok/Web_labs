import {HorRule, Logo, Socials, Text, Wrapper} from './Footer.styles'
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";
import LogoImg from "../../assets/logo.png"

export function Footer() {
    return (
        <div>
            <HorRule/>
            <Wrapper>
                <Logo src={LogoImg}/>
                <Socials>
                    <InstagramOutlined style={{margin: '12px'}}/>
                    <YoutubeOutlined style={{margin: '12px'}}/>
                    <FacebookOutlined style={{margin: '12px'}}/>
                </Socials>
            </Wrapper>
            <HorRule style={{margin: '0 12rem 0 12rem'}}/>
            <Text>2022 IoT @ Copyright all rights reserved</Text>
        </div>
    )
}