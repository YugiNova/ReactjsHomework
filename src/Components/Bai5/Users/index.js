import { useState } from "react"
import Products from "../Products";

const Users = () => {
    const users = [ 
        {
            name: "user1",
            email: "user1@gmail.com",
        },
        {
            name: "user2",
            email: "user2@gmail.com",
        },
        {
            name: "user3",
            email: "user31@gmail.com",
        },
    ]
    const [user,setUser] = useState({name: "", email: ""})

    const onChange = (e) => {
        const result = users.find(item => {
            return e.target.value === item.name
        })
        if(result)
            setUser(result);
    }

    return (
        <div>
            <input onChange={onChange}/>
            <div>name: {user.name}</div>
            <div>email: {user.email}</div>
            <Products name={user.name}></Products>
        </div>
    );
}

export default Users