import {Wrapper} from './Catalog.styles'
import {CatalogItem} from "../CatalogItem/CatalogItem";
import Insect1 from "../../assets/insect1.jpg"
import Insect2 from "../../assets/insect2.jpg"
import Insect3 from "../../assets/insect3.jpg"
import axios from "axios";
import {useEffect, useState} from "react";
import {Filter} from "../Filter/Filter";
import {Header} from "../Header/Header";
import {Bars} from "react-loader-spinner";
import {BarsOutlined} from "@ant-design/icons";
import {CatalogItemPage} from "../CatalogItemPage/CatalogItemPage";


export function Catalog() {
    const [insects, setInsects] = useState(null);
    const [view, setView] = useState(null);
    useEffect( () => {
        axios.get(`http://localhost:5000/api/insects`).then((requested) => {
            setInsects(requested.data)
        })
        }, []);

    function updateItems(name, order, price, input) {
        console.log(name,order,price)
        axios.get(`http://localhost:5000/api/insects`,{
            params:
                {
                    name: name,
                    order: order,
                    price: price
                }
        }).then((requested) => {
            console.log(requested.data)
            filterInput(requested.data, input)
        })
    }

    function filterInput(arr, input) {
        setInsects(arr.filter(item => item.name.search(input.value) !== -1))
    }

    function getItems(items) {

        if (items)
            return <>
                <Filter function={updateItems}/>
                <Wrapper>
                    {
                        items.map(item => (
                            <CatalogItem key={item.name} name={item.name} desc={item.desc} price={item.price}
                                         image={item.image} function={toggleView}/>))
                    }
                </Wrapper>
            </>
        return <>
            <Wrapper>
                <Bars color="#00BFFF" height={200} width={200} />
            </Wrapper>
        </>
    }

    function toggleView(props) {
        setView(props)
    }

    if (view == null)
        return (getItems(insects))
    return <>
            <Header/>
            <CatalogItemPage item={view}/>
        </>
}
