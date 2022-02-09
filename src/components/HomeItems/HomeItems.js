import {
    Image,
    ItemsWrapper,
    Item,
    ItemLabelText,
    ItemDesc
} from './HomeItems.styles'

export function HomeItems({name,image,desc}) {
    return (
            <Item>
                <Image src={image}/>
                <ItemLabelText>{name}</ItemLabelText>
                <ItemDesc>{desc}</ItemDesc>
            </Item>
    )
}