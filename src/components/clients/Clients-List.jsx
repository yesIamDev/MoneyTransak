import React, {useState, useEffect} from "react";
import {Table} from 'antd'


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
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

export default function ClientsList() {

    const [clients, setClients] = useState([]); 
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
    <div className="m-5 max-h-scre">
        <Table columns={columns} dataSource={clients} size='middle'/>;
    </div>
  )
}
