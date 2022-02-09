import {
    Wrapper,
    Image,
    Text,
    Price,
    Button,
    Counter,
    CounterWrapper,
    InnerText,
} from "./CartItem.styles";
import {CloseOutlined} from '@ant-design/icons'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteItem} from "../Redux/actions";
import InsectDef from "../../assets/insect_default_item.jpg";

export function CartItem(item) {
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch();

    function decrement() {
        if (amount > 1)
            setAmount(amount - 1);
    }

    function increment() {
        setAmount(amount + 1);
    }

    function removeItem(name) {
        dispatch(deleteItem({name}))
    }

    return (
        <>
            <Wrapper>
                <Image src={InsectDef}/>
                <Text>{item.name}</Text>
                <CounterWrapper>
                    <InnerText>Amount:</InnerText>
                    <Button onClick={decrement}>-</Button>
                    <Counter>{amount}</Counter>
                    <Button onClick={increment}>+</Button>
                </CounterWrapper>
                <Price>Price: {item.price * amount}</Price>
                <CloseOutlined style={{alignSelf: "flex-start"}} onClick={() => removeItem(item.name)}/>
            </Wrapper>
        </>
    );
}
