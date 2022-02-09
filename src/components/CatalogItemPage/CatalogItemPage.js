import {Image, Button, ItemPage, ItemLabelText, ItemDesc, Filler, Container} from './CatalogItemPage.styles'



export function CatalogItemPage(props) {

    return (
        <ItemPage>
            <Image src={props.item.image}/>
            <Container>
                <ItemLabelText>{props.item.name}</ItemLabelText>
                <ItemDesc>{props.item.desc}</ItemDesc>
                <ItemDesc>Price: {props.item.price}$</ItemDesc>
                <Filler/>
                <Button onClick={() => props.item.function(null)}>Go back</Button>
                <Button>Purchase</Button>
            </Container>
        </ItemPage>
    );
}