import React, { useState } from 'react'
import { Button, Input, Space } from 'antd'
const AddNewTodo = ({ dataSource }) => {

    const getdate = () => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        today = yyyy + '-' + mm + '-' + dd
        return today

    }

    const [time, setTime] = useState(getdate)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [tag, setTag] = useState('')
    const [status, setStatus] = useState('OPEN')
    const addnewtodo = (e) => {
        e.preventDefault()
        const newtodo = {
            id: Math.random() * 100,
            Timestamp: time,
            Title: title,
            Description: description,
            DueDate: dueDate,
            Tag: tag,
            Status: status

        }
        dataSource(pre => [...pre, newtodo])

    }
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add to-do</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={addnewtodo}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label fw-bold ">TimeStamp</label>
                                <Input value={time} disabled />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label fw-bold ">Title</label>
                                <Input  required onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label fw-bold ">Description</label>
                                <Input required  onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label fw-bold ">Due Date</label>
                                <Input required  min={time} type='date' onChange={(e) => setDueDate(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label fw-bold ">Tag</label>
                                <Input required  onChange={(e) => setTag(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <Space direction='vertical' className='w-100'>
                                <label for="exampleInputEmail1" className="form-label fw-bold ">Status</label>
                                <select onChange={(e)=>setStatus(e.target.value)} className='ant-input w-100'>
                                    <option selected>OPEN</option>
                                    <option value="WORKING">WORKING</option>
                                    <option value="DONE">DONE</option>
                                    <option value="OVERDUE">OVERDUE</option>
                                </select>
                                </Space>
                            </div>


                            <div className="modal-footer">
                                <Button size="large" type="primary" danger ghost className="rounded" data-bs-dismiss="modal" >Cancel</Button>
                                <Button id='submitButton' htmlType='submit' size="large" type="primary" ghost className="rounded" data-bs-dismiss="modal">Add</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddNewTodo