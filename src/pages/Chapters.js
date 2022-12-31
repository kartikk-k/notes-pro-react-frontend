import React from 'react'
import { useState, useEffect } from 'react'
import '../styling/pages/chapters.css'
import CreatedDate from '../components/CreatedDate'
import AddNew from '../components/AddNew'
import ActionIcon from '../Assets/Icons/ActionIcon.svg'


const Chapters = ({ subject_id }) => {
    const [chapter, setChapters] = useState([])
    useEffect(() => {
        let FETCH_URL = ''
        if (subject_id) {
            FETCH_URL = `/api/subject/${subject_id}/chapters/`
        } else {
            FETCH_URL = '/api/chapter/'
        }
        getChapters(FETCH_URL)
    }, [])


    const getChapters = async (FETCH_URL) => {
        let response = await fetch(FETCH_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        let data = await response.json()
        setChapters(data)
    }
    return (
        <div className='Chapter'>
            {/* <div className="heading">Chapters</div> */}
            <div className="chapter-list">
                {chapter.map((chapter, index) => (
                    <div className="chapter" key={index}>
                        <div className="chapter-header">
                            <p className="chapter-name">{chapter.name}</p>
                            <img src={ActionIcon} alt="" />
                        </div>
                        <p className="chapter-description">{chapter.description}</p>
                        <button className='view-btn'>Open chapter</button>
                        <p className="created">{<CreatedDate created={chapter.created_at} />}</p>
                    </div>
                ))}
                <AddNew />
            </div>
        </div>
    )
}

export default Chapters