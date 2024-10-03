import { Box, Button, Snackbar } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const OurUsers = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const getUsers = async () => {
            const data = await axios.get("http://localhost:4500/users");
            setData(data.data);
        }
        getUsers();
    }, [])

    return (
        <div className="overflow-x-auto lg:w-[50%] m-auto">

            {/* alert messages */}
           
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {data.map(({ _id, email, name }, index) => (
                        <tr className="bg-base-200 hover:bg-slate-500 hover:text-white" key={_id}>
                            <th>{index + 1}</th>
                            <td>{name}</td>
                            <td>{email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default OurUsers