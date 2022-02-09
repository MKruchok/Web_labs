import {
    TitleText,
    FilterWrapper,
    FilterSelector, Wrapper, Button, HorRule
} from './Filter.styles';
import {useState} from "react";
import {HeaderText, HeaderWrapper, Nav, NavItem, Search} from "../Header/Header.styles";
import {Link} from "react-router-dom";
import {SearchOutlined} from "@ant-design/icons";

export function Filter(props) {
    const [name, setName] = useState(null);
    const [order, setOrder] = useState(1);
    const [price, setPrice] = useState(null);

    function handleName(item) {
        setName(item.target.value);
    }

    function handleOrder(item) {
        setOrder(item.target.value);
    }

    function handlePrice(item) {
        setPrice(item.target.value);
    }

    function updateItems() {
        const input = document.getElementById("catalog_search")
        props.function(name, order, price, input);
    }

    return (
        <>
            <div>
                <HeaderWrapper>
                    <HeaderText>Insects</HeaderText>
                    <Nav>
                        <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                            <NavItem>Home</NavItem>
                        </Link>
                        <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}>
                            <NavItem>Catalog</NavItem>
                        </Link>
                        <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}>
                            <NavItem>Cart</NavItem>
                        </Link>
                    </Nav>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Search id='catalog_search'/>
                        <SearchOutlined/>
                    </div>
                </HeaderWrapper>
            </div>
            <HorRule/>
            <Wrapper>
                <FilterWrapper>
                    <TitleText>Sort by:</TitleText>
                    <FilterSelector id={"name"} onChange={handleName}>
                        <option value={"null"} selected>Choose filter</option>
                        <option value={"name"}>Name</option>
                        <option value={"price"}>Price</option>
                    </FilterSelector>
                    <TitleText>Order by:</TitleText>
                    <FilterSelector id={"order"} onChange={handleOrder}>
                        <option selected value="1">Choose order</option>
                        <option value={"1"}>Ascending</option>
                        <option value={"-1"}>Descending</option>
                    </FilterSelector>
                    <TitleText>Price:</TitleText>
                    <FilterSelector id={"price"} onChange={handlePrice}>
                        <option selected value="null">Choose price</option>
                        <option value="2">&lt;=100</option>
                        <option value="1">&gt;100</option>
                    </FilterSelector>
                </FilterWrapper>
                <Button onClick={updateItems}>Apply</Button>
            </Wrapper>
            <HorRule style={{marginTop: '10px'}}/>
        </>
    )
}