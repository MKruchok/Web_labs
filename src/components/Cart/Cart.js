import {Button, ButtonWrapper, ItemsWrapper, Label, Wrapper} from "./Cart.styles";
import {useSelector} from "react-redux";
import {CartItem} from "../CartItem/CartItem";

export function Cart() {
    const items = useSelector((state) => state.items);

    return (
        <Wrapper>
            <Label>
                Shopping cart
            </Label>
            <ItemsWrapper>
                {items.map(item => (
                    <CartItem key={item.name} name={item.name} price={item.price} desc={item.desc} />))}
            </ItemsWrapper>
            <ButtonWrapper>
                <Button>Back to Catalog</Button>
                <Button>Continue</Button>
            </ButtonWrapper>
        </Wrapper>
    );
}
