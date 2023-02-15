import React from 'react'
import { Form, Input } from 'antd'
const EditForm = ({ editTodu, setEditTodu }) => {
    return (
        <Form layout="vertical">
            <Form.Item
                label="Timestamp"
                className="fw-bold"

            >
                <Input value={editTodu?.Timestamp} disabled />
            </Form.Item>
            <Form.Item
                label="Title"
                className="fw-bold"

            >
                <Input onChange={e => {
                    setEditTodu(pre => {
                        return { ...pre, Title: e.target.value }
                    })
                }} value={editTodu?.Title} />
            </Form.Item>
            <Form.Item
                label="Description"
                className="fw-bold"

            >
                <Input onChange={e => {
                    setEditTodu(pre => {
                        return { ...pre, Description: e.target.value }
                    })
                }} value={editTodu?.Description} />
            </Form.Item>
            <Form.Item
                label="Due Date"
                className="fw-bold"

            >
                <Input onChange={e => {
                    setEditTodu(pre => {
                        return { ...pre, DueDate: e.target.value }
                    })
                }}min={editTodu?.Timestamp} type="date" defaultValue={editTodu?.DueDate} />
            </Form.Item>
            <Form.Item
                label="Tag"
                className="fw-bold"

            >
                <Input onChange={e => {
                    setEditTodu(pre => {
                        return { ...pre, Tag: e.target.value }
                    })
                }} value={editTodu?.Tag} />
            </Form.Item>
            <Form.Item
                label="Status"
                className="fw-bold"

            >
                <select onChange={e => {
                    setEditTodu(pre => {
                        return { ...pre, Status: e.target.value }
                    })
                }} value={editTodu?.Status} className='ant-input w-100'>
                    <option selected>OPEN</option>
                    <option value="WORKING">WORKING</option>
                    <option value="DONE">DONE</option>
                    <option value="OVERDUE">OVERDUE</option>
                </select>
            </Form.Item>
        </Form>
    )
}

export default EditForm