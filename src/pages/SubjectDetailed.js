import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Chapters from '../pages/Chapters'

const SubjectDetailed = () => {
    let { workspace_id, subject_id } = useParams()

    const [subjectData, setSubjectData] = useState([])
    useEffect(() => {
        getSubjectData()
    }, [])

    const getSubjectData = async () => {
        let response = await fetch(`/api/subject/${subject_id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setSubjectData(data)
    }

    const [chaptersData, setChaptersData] = useState([])
    useEffect(() => {
        getChaptersData()
    }, [])

    const getChaptersData = async () => {
        let response = await fetch(`/api/subject/${subject_id}/chapters/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data = await response.json()
        setChaptersData(data)
    }
    return (
        <div className='workspace-detailed'>
            <div className="workspace-data">
                <div className="detailed-workspace-header">
                    <div className="detailed-workspace-info">
                        <h1>{subjectData.name}</h1>
                        <p>{subjectData.description}</p>
                    </div>
                    <div className="detailed-workspace-actions">
                        <p>Add New</p>
                        <p className='delete-btn'>Delete</p>
                    </div>
                </div>
                <div>
                    <Chapters subject_id={subject_id} />
                </div>
            </div>
        </div>
    )
}

export default SubjectDetailed
