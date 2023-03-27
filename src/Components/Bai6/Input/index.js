import { useState } from "react"
import List from "../List";

const Input = () => {
    const [data,setData] = useState({number: 0,text: ""})

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value,
        })
    }

    return (
        <div>
           <input onChange={onChange} name="number" placeholder="Nhập số tự nhiên n"/> 
           <input onChange={onChange} name="text" placeholder="Nhập đoạn text"/> 
           <List number={data.number} text={data.text}/>
        </div>
    );
}

export default Input