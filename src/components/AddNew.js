import React from 'react'
import '../styling/addnew.css'
import { useNavigate } from 'react-router-dom'

// adding add-new btn url as object to be passed when called
const AddNew = () => {
    const navigate = useNavigate()
    return (
        <div className="add-new" >
            <p className='add-new-icon'>+</p>
            <p className='add-icon-text'>Add New</p>
        </div>
    )
}

export default AddNew
