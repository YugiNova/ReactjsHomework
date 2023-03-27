import { Form, Input, InputNumber, Modal } from "antd";
import { useEffect } from "react";


const ModalFormUser = (props) => {
    const [form] = Form.useForm();
    
    useEffect(()=> {
        if(!props.open){
            form.resetFields();
            props.setFormData(props.DEFAULT_USER);
        }
    },[props.open])

    useEffect(()=> {
        if(props.open && props.formData.id){
            form.setFieldsValue(props.formData);
        }
    },[props.open,props.formData])

    const onFinish = async () => {
        const values = await form.validateFields();
        props.onSubmit(props.formData.id,values)
    }

    return(
        <Modal open={props.open} onCancel={props.onCancel} onOk={onFinish}>
            <Form layout="vertical" form={form}>
                <Form.Item name="name" label="Họ và tên:" rules={[{required: true,message: "Họ tên không được trống"}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name="email" label="Email:" rules={[{required: true,message: "Email không được trống"}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name="phone" label="Số điện thoại:" rules={[{required: true,message: "Số điện thoại không được trống"},{type: "number", message:"SĐT phải là số"}]}>
                    <InputNumber/>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalFormUser