import {TitleText, HomeWrapper, Image, TextWrapper, SideText, Species, ButtonWrapper, Button} from './Home.styles'
import ImgHome from "../../assets/insects_home.jpg";
import {HomeItems} from "../HomeItems/HomeItems.js";

export function Home() {
    return (
        <div>
        <HomeWrapper>
            <TextWrapper>
                <TitleText>Lviv Private Insects Collection</TitleText>
                <SideText>Collectable beauty</SideText>
            </TextWrapper>
            <Image src={ImgHome}/>
        </HomeWrapper>
            <Species>Available species:</Species>
            <HomeItems/>
            <ButtonWrapper>
                <Button>Show more</Button>
            </ButtonWrapper>
        </div>
    )
}