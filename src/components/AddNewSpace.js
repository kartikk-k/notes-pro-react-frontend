import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styling/addnewspace.css'

const AddNewSpace = ({ workspace_id }) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState(
        { name: '', description: '' }
    );


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/workspaces/', formData)
            .then(response => {
                navigate('/workspaces/')
                console.log(response.data);

            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className='add-object-main'>
            <form onSubmit={handleSubmit} className="add-object-form">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <button className='add-workspace-btn' type="submit">Add Workspace</button>
            </form>
        </div>
    )
}

export default AddNewSpace