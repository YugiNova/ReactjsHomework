import { Button, Input } from "antd";
import { SearhContainer } from "./styles";
import search from "../../../assets/images/search.png"

const SearhBox = ({searchData,setSearchData, onSearch}) => {
    const onChange = (e) => {
        setSearchData(e.target.value);
    }

    return (
        <SearhContainer>
            <Input onChange={onChange} placeholder="type city name here..."/>
            <Button onClick={() => {onSearch(searchData)}}><img src={search}/></Button>
        </SearhContainer>
    );
}

export default SearhBox;