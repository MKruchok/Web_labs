import {Image, Button, ItemPage, ItemLabelText, ItemDesc, Filler, Container} from './CatalogItemPage.styles'
import {useDispatch} from "react-redux";
import {addItem} from "../Redux/actions";

export function CatalogItemPage(props) {
    const dispatch = useDispatch();

    function addToCart(name, price){
        dispatch(addItem({
            name: name,
            price: price
        }))
    }

    return (
        <ItemPage>
            <Image src={props.item.image}/>
            <Container>
                <ItemLabelText>{props.item.name}</ItemLabelText>
                <ItemDesc>{props.item.desc}</ItemDesc>
                <ItemDesc>Price: {props.item.price}$</ItemDesc>
                <Filler/>
                <Button onClick={() => props.item.function(null)}>Go back</Button>
                <Button onClick={() => addToCart(props.item.name, props.item.price)}>Purchase</Button>
            </Container>
        </ItemPage>
    );
}