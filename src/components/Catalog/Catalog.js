import {Wrapper} from './Catalog.styles'
import {CatalogItem} from "../CatalogItem/CatalogItem";
import Insect1 from "../../assets/insect1.jpg"
import Insect2 from "../../assets/insect2.jpg"
import Insect3 from "../../assets/insect3.jpg"


let items = [
    {
        name: "Coleoptera Linnaeus",
        price: 135,
        image: Insect1
    },
    {
        name: "Lepidóptera",
        price: 34,
        image: Insect2
    },
    {
        name: "Colias palaeno",
        price: 567,
        image: Insect3
    },
]

export function Catalog() {
    return (
        <Wrapper>
            {
                items.map(item => (
                    <CatalogItem name={item.name} price={item.price} image={item.image}/>))
            }
        </Wrapper>
    );
}