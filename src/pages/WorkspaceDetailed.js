import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../styling/pages/workspaceDetailed.css'
import Subjects from '../pages/Subjects'

const WorkspaceDetailed = () => {
    let { workspace_id } = useParams()

    const [workspaceData, setWorkspaceData] = useState([])
    useEffect(() => {
        getWorkspaceData()
    }, [])

    const getWorkspaceData = async () => {
        let response = await fetch(`/api/workspaces/${workspace_id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setWorkspaceData(data)
    }

    const [subjectsData, setSubjectsData] = useState([])
    useEffect(() => {
        getsubjectsData()
    }, [])

    const getsubjectsData = async () => {
        let response = await fetch(`/api/workspace/${workspace_id}/subjects/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setSubjectsData(data)
    }

    return (
        <div className='workspace-detailed'>
            <div className="workspace-data">
                <div className="detailed-workspace-header">
                    <div className="detailed-workspace-info">
                        <h1>{workspaceData.name}</h1>
                        <p>{workspaceData.description}</p>
                    </div>
                    <div className="detailed-workspace-actions">
                        <p>Add New</p>
                        <p className='delete-btn'>Delete</p>
                    </div>
                </div>
                <div>
                    <Subjects workspace_id={workspace_id} />
                </div>
            </div>
        </div>
    )
}

export default WorkspaceDetailed