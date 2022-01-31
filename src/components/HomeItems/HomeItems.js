import {
    Image,
    ItemsWrapper,
    Item,
    ItemLabelText,
    ItemDesc
} from './HomeItems.styles'
import Insect1 from "../../assets/insect1.jpg";
import Insect2 from "../../assets/insect2.jpg";
import Insect3 from "../../assets/insect3.jpg";

export function HomeItems() {
    return (
        <ItemsWrapper>
            <Item>
                <Image src={Insect1}/>
                <ItemLabelText>Coleoptera Linnaeus</ItemLabelText>
                <ItemDesc>Beetles are insects that form the order Coleoptera (/koʊliːˈɒptərə/),
                    in the superorder Endopterygota.</ItemDesc>
            </Item>
            <Item>
                <Image src={Insect2}/>
                <ItemLabelText>Lepidóptera</ItemLabelText>
                <ItemDesc>Lepidoptera is an order of insects that includes butterflies and moths.</ItemDesc>
            </Item>
            <Item>
                <Image src={Insect3}/>
                <ItemLabelText>Colias palaeno</ItemLabelText>
                <ItemDesc>Colias palaeno, known by the common names moorland clouded yellow, palaeno sulphur,
                    and pale Arctic clouded yellow, is a butterfly in the family Pieridae.</ItemDesc>
            </Item>
        </ItemsWrapper>
    )
}