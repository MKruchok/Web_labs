import {
    TitleText,
    FilterWrapper,
    FilterSelector, Wrapper, Button, HorRule
} from './Filter.styles';

export function Filter() {
    return (
        <div>
            <HorRule/>
            <Wrapper>
                <FilterWrapper>
                    <TitleText>Sort by:</TitleText>
                    <FilterSelector>
                        <option selected>Choose filter</option>
                        <option>Price</option>
                        <option>Name</option>
                    </FilterSelector>
                    <TitleText>Order by:</TitleText>
                    <FilterSelector>
                        <option selected>Choose order</option>
                        <option>Ascending</option>
                        <option>Descending</option>
                    </FilterSelector>
                    <TitleText>Price:</TitleText>
                    <FilterSelector>
                        <option selected>Choose price</option>
                        <option>&lt;500</option>
                        <option>500-1000</option>
                        <option>&gt;1000</option>
                    </FilterSelector>
                </FilterWrapper>
                <Button>Apply</Button>
            </Wrapper>
            <HorRule style={{marginTop: '10px'}}/>
        </div>
    )
}