import {
    TitleText,
    HomeWrapper,
    Image,
    TextWrapper,
    SideText,
    Species,
    ButtonWrapper,
    Button,
    ItemsWrapper
} from './Home.styles'
import ImgHome from "../../assets/insects_home.jpg";
import {HomeItems} from "../HomeItems/HomeItems.js";
import {useState} from "react";
import Insect1 from "../../assets/insect1.jpg";
import Insect2 from "../../assets/insect2.jpg";
import Insect3 from "../../assets/insect3.jpg";

export function Home() {
    const [view, setView] = useState(false);
    const [insects, setInsects] = useState([
        {
            name: "Coleoptera Linnaeus",
            image: Insect1,
            desc: "Beetles are insects that form the order Coleoptera (/koʊliːˈɒptərə/), in the superorder Endopterygota."
        },
        {
            name: "Lepidoptera",
            image: Insect2,
            desc: "Lepidoptera is an order of insects that includes butterflies and moths."
        },
        {
            name: "Colias palaeno",
            image: Insect3,
            desc: "Colias palaeno, known by the common names moorland clouded yellow, palaeno sulphur, and pale Arctic clouded yellow, is a butterfly in the family Pieridae."
        }
    ]);

    function viewMore() {
        if (!view) {
            setInsects(insects.concat(insects))
        } else
            setInsects(insects.slice(0, 3))
    }

    function toggleView() {
        setView(!view);
        viewMore();
    }

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
            <ItemsWrapper>
            {insects.map(insect => <HomeItems key={insect.name} name={insect.name} desc={insect.desc} image={insect.image}/>)}
            </ItemsWrapper>
            <ButtonWrapper>
                <Button onClick={toggleView}>Show more</Button>
            </ButtonWrapper>
        </div>
    )
}