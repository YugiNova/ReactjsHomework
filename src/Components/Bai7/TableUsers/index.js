import { Table,Button, Modal } from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';

const { confirm } = Modal;

const TableUsers = (props) => {
    const showConfirm = (item) => {
        confirm({
          title: 'Bạn có muốn xóa?',
          icon: <ExclamationCircleFilled />,
          content: 'Dữ liệu sẽ mất vĩnh viễn',
          onOk() {
            props.onDelete(item);
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      };

    
    const columns = [
        {
            title: 'Name',
            dataIndex:'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex:'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex:'phone',
            key: 'phone',
        },
        {
            title: "Action",
            render: (_,item) => {
                return(
                    <div>
                        <Button onClick={() => {props.onEdit(item)}}>Edit</Button>
                        <Button onClick={() => {showConfirm(item)}}>Delete</Button>
                    </div>
                );
            }
        }
    ]

    return(
        <Table dataSource={props.users} columns={columns}/>
    );
}

export default TableUsers