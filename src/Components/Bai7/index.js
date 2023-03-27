import { Button } from "antd";
import { useEffect, useState } from "react";
import ModalFormUser from "./ModalFormUser";
import TableUsers from "./TableUsers";

const DEFAULT_USER = {id:"",name:"",email:"",phone:""}

const Bai7 = () => {
    const [users,setUsers] = useState([])
    const [formData,setFormData] = useState(DEFAULT_USER)
    const [open,setOpen] = useState(false)

    useEffect(()=>{
        console.log(formData);
    },[formData])

    const onCreate = () => {
        setOpen(true)
    }
    const onCancel = () => {
        setOpen(false)
    }
    const onSubmit = (id,data) => {
        if(id){
            const newUsers = users.map(item => {
                if(item.id === id){
                    return data
                }
                return item
            })
            setUsers(newUsers)
        }
        else{
            setUsers([
                ...users,
                {

                    id: Math.random(),
                    ...data,
                }
            ])
            console.log("Add");
        }
        setFormData(DEFAULT_USER);
        setOpen(false)
    }
    const onEdit = (selectedUser) => {
        setFormData(selectedUser);
        setOpen(true);
    }
    const onDelete = (selectedUser) => {
        
    }

    return(
        <div>
            <ModalFormUser open={open} onCancel={onCancel} onSubmit={onSubmit} formData={formData} setFormData={setFormData} DEFAULT_USER= {DEFAULT_USER}/>
            <Button onClick={onCreate}>New User</Button>
            <TableUsers users={users} onDelete={onDelete} onEdit={onEdit}/>
        </div>
    );
}

export default Bai7