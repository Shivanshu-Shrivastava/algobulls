import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Card, Typography, Table, Button, Modal, Input, Space, Form, Tooltip } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined, SearchOutlined, SaveOutlined } from "@ant-design/icons";
import AddNewTodo from "./components/AddNewTodo";
import EditForm from "./components/EditForm";

function App() {
  const { Title } = Typography;
  const [dataSource, setDataSource] = useState([
    {
      id: '1',
      Timestamp: '2023-1-3',
      Title: 'Reading',
      Description: "Harry Potter",
      DueDate: '2023-1-13',
      Tag: 'Complete',
      Status: 'OPEN'
    },
    {
      id: '2',
      Timestamp: '2023-1-6',
      Title: 'car wash',
      Description: "please complete it",
      DueDate: '2023-1-18',
      Tag: 'Complete',
      Status: 'OPEN'
    }

  ])
  const [ismodalvisible, setIsmodalvisible] = useState(false)
  const [editTodu, setEditTodu] = useState(null)
  const [removeSearch, setRemoveSearch] = useState(false)



  const columns = [
    {
      key: '1',
      title: 'Timestamp',
      dataIndex: 'Timestamp',
      sorter: (a, b) => {
        return a.Timestamp.length - b.Timestamp.length

      },

    },
    {
      key: '2',
      title: 'Title',
      dataIndex: 'Title',
      sorter: (a, b) => {
        return a.Title.length - b.Title.length

      },
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <Space direction="vertical">
            <Input autoFocus placeholder="Search Title"
              value={selectedKeys}
              onChange={(e) => { setSelectedKeys(e.target.value ? [e.target.value] : []) }}
              onPressEnter={() => {
                confirm()
                setRemoveSearch(true)

              }}
            >

            </Input>
            <Space className="mx-auto pb-1" direction="horizontal">
              <Button onClick={() => {
                confirm()
                setRemoveSearch(true)

              }} type='primary' className="rounded" ghost >Search</Button>
              <Button onClick={() => {
                clearFilters()
                setRemoveSearch(false)

              }} type='primary' className="rounded" danger ghost >Clear</Button>

            </Space>
          </Space>

        )
      },
      filterIcon: () => {
        return <SearchOutlined />
      },
      onFilter: (value, record) => { return record.Title.toLowerCase().includes(value.toLowerCase()) },
    },
    {
      key: '3',
      title: 'Description',
      dataIndex: 'Description',
      sorter: (a, b) => {
        return a.Description.length - b.Description.length

      },
    },
    {
      key: '4',
      title: 'Due Date',
      dataIndex: 'DueDate',
      sorter: (a, b) => {
        console.log(a, b)
        return a.DueDate.length - b.DueDate.length

      },
    },
    {
      key: '5',
      title: 'Tag',
      dataIndex: 'Tag',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <Space direction="vertical">
            <Input autoFocus placeholder="Search Tag"
              value={selectedKeys}
              onChange={(e) => { setSelectedKeys(e.target.value ? [e.target.value] : []) }}
              onPressEnter={() => {
                confirm()
                setRemoveSearch(true)

              }}
            >

            </Input>
            <Space className="mx-auto pb-1" direction="horizontal">
              <Button onClick={() => {
                confirm()
                setRemoveSearch(true)

              }} type='primary' className="rounded" ghost >Search</Button>
              <Button onClick={() => {
                clearFilters()
                setRemoveSearch(false)

              }} type='primary' className="rounded" danger ghost >Clear</Button>

            </Space>
          </Space>

        )
      },
      filterIcon: () => {
        return <SearchOutlined />
      },
      onFilter: (value, record) => { return record.Tag.toLowerCase().includes(value.toLowerCase()) },
    },
    {
      key: '6',
      title: 'Status',
      dataIndex: 'Status',

    },
    {
      key: "7",
      title: "Actions",
      render: (record) => {

        return (
          <>
            <EditOutlined
              onClick={() => {
                oneditTodu(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeletetTodo(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    }
  ];

  //  on deleting the todo list 
  const onDeletetTodo = (record) => {
    Modal.confirm({
      title: 'Do you want to delete it?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => {
        const newtodo = dataSource.filter(num => num.id != record.id)
        setDataSource(newtodo)
      }
    })

  }

  const oneditTodu = (record) => {
    setIsmodalvisible(true)
    setEditTodu({ ...record })
  }
  return (
    <div className="container mt-5">
      <Card title={
        <div className="d-flex justify-content-between">
          <Title level={2}>To-Do List </Title>

          {/* If there are search filters, then user won't be able to add todo  */}

          {removeSearch ?
            <Tooltip title='Clear Search filters first.'>
              <Button disabled size="large" type="primary" className="rounded">Add To-do List</Button>
            </Tooltip>
            : <Button data-bs-toggle="modal" data-bs-target="#exampleModal" size="large" type="primary" className="rounded">Add To-do List</Button>}


        </div>} className="shadow-sm" >

        <Table dataSource={dataSource} columns={columns} />

      </Card>

      {/* Add new to do Modal */}
      <AddNewTodo dataSource={setDataSource}  />

      {/* Edit todo Modal */}
      <Modal title='Edit To-du' visible={ismodalvisible}
        onCancel={() => {
          setIsmodalvisible(false)
          setEditTodu(null)
        }}
        onOk={() => {
          setDataSource(pre => {
            return pre.map(num => {
              if (num.id == editTodu.id) {
                return editTodu
              } else {
                return num
              }
            })
          })
          setIsmodalvisible(false)
          setEditTodu(null)
        }}
        okText="Save"
      >

        {/* Edit todo Form */}
        <EditForm setEditTodu={setEditTodu} editTodu={editTodu} />

      </Modal>
    </div>
  );
}

export default App;

