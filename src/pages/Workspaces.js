import React, { useEffect } from 'react'
import { useState } from 'react'
import CreatedDate from '../components/CreatedDate'
import '../styling/pages/workspaces.css'
import ActionIcon from '../Assets/Icons/ActionIcon.svg'
import { useNavigate } from 'react-router-dom'
import AddNew from '../components/AddNew'

const Workspaces = () => {
    const navigate = useNavigate()
    const [workspaces, setWorkspaces] = useState([])

    useEffect(() => {
        getWorkspaces()
    }, [])

    const getWorkspaces = async () => {
        let response = await fetch('/api/workspaces/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        let data = await response.json()
        setWorkspaces(data)
    }

    const expandWorkspace = (workspace_id) => {
        navigate(`/workspaces/${workspace_id}/`)
    }

    const deleteWorkspace = async (workspace_id) => {
        let response = await fetch(`/api/workspaces/${workspace_id}/`, {
            method: 'DELETE'
        })
        console.log("workspace deleted")
        window.location.reload()
    }

    const [isAction, setIsAction] = useState({})
    const handleAction = (key) => {
        setIsAction({ ...isAction, [key]: (!isAction[key]) })
    }


    return (
        <div className='Workspaces'>
            {/* <h1 className='heading'>Workspaces</h1> */}
            <div className="workspace-list">
                {workspaces.map((workspace, index) => (

                    <div className="space" key={index}>
                        <div className="header">
                            <h1 className='workspace-name'>{workspace.name}</h1>
                            <div className="actions">
                                {isAction[index] && (
                                    <div className="workspace-action-area">
                                        {/* <button id='view-btn'>View</button> */}
                                        <button id='delete-btn' onClick={() => deleteWorkspace(workspace.id)}>Delete</button>
                                    </div>
                                )}
                                <img src={ActionIcon} alt="actions" onClick={() => handleAction(index)} />
                            </div>
                        </div>
                        <p className='workspace-description'>{workspace.description}</p>
                        <button className='view-btn' onClick={() => expandWorkspace(workspace.id)}>View Workspace</button>
                        <p className='created'>{<CreatedDate created={workspace.created_at} />}</p>
                    </div>
                ))}
                <AddNew onClick={navigate('/workspaces/')}/>
            </div>
        </div>
    )
}

export default Workspaces