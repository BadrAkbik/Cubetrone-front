import React from 'react'
import { Link } from 'react-router-dom'

export default function BlueBtn(props) {
    return (
        <>
            <Link to={`/course/${props.courseId}/lesson/${props.lessonId}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center 
        text-white rounded-lg bg-blue-600 hover:bg-orange-500 
        focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
                {props.name}
                {props.children}
            </Link>
        </>
    )
}