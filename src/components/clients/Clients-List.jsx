import React, {useState, useEffect} from "react";
import {Table, Input} from 'antd'




export default function ClientsList() {

    const [clients, setClients] = useState([]); 
    const [seachedText, setSeachedText] = useState('');

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            filteredValue: [seachedText],
            onFilter: (value, record) => {
                return String(record.name)
                    .toLowerCase()
                    .includes(value.toLowerCase())
            },
            onchange: ((e) => {
                setSeachedText(e.target.value ? [e.target.value] : [])
            })

        },
        {
            title: 'Postname',
            dataIndex: 'postname',
            key: 'postname'
        },
        {
            title: 'Nationalite',
            dataIndex: 'nationalite',
            key:'nationalite'
        },
        {
            title: 'age',
            dataIndex: 'age',
            key:'age'
        }
    ]

    useEffect(() => {
        const fetchClients = async () => {
            const res = await fetch('http://localhost:3333/api/clients/',{
                method:'get',
            });
            const data = await res.json();
            setClients(data);   
        };
        fetchClients();
    })


  return (
    <div className="m-5 max-h-scre flex flex-col">
        <div className="flex justify-end my-2">
            <Input.Search
                className="w-[500px]"
                placeholder="Seach client ..."
                onSearch={(value) => {
                    setSeachedText(value)
                }}
            />
        </div>
        <Table columns={columns} dataSource={clients} size='small'/>;
    </div>
  )
}
