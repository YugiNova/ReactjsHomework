import { useState } from "react"

const Bai4 = () => {
    const [fullName,setFullName] = useState({firstName: "",lastName: ""});

    const onChange = (e) => {
        setFullName({
            ...fullName,
            [e.target.name] : e.target.value,
        })
    }

    return (
        <div>
            <input name="firstName" onChange={onChange}/>
            <input name="lastName" onChange={onChange}/>
            <div>{fullName.firstName + fullName.lastName}</div>
        </div>
    );
}

export default Bai4