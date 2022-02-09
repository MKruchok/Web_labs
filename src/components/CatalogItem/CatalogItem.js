import {Image, Button, Item, ItemLabelText, ItemDesc, Filler} from './CatalogItem.styles'

export function CatalogItem(props) {
    return (
        <Item>
            <Image src={props.image}/>
            <ItemLabelText>{props.name}</ItemLabelText>
            <ItemDesc>{props.desc}</ItemDesc>
            <ItemDesc>Price: {props.price}$</ItemDesc>
            <Filler/>
            <Button onClick={() => props.function(props)}>View more</Button>
        </Item>
    );
}