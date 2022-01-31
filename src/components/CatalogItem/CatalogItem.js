import {Image, Button, Item, ItemLabelText, ItemDesc} from './CatalogItem.styles'

export function CatalogItem(props) {
    return (
        <Item>
            <Image src={props.image}/>
            <ItemLabelText>{props.name}</ItemLabelText>
            <ItemDesc>Price: {props.price}$</ItemDesc>
            <Button>View more</Button>
        </Item>
    );
}