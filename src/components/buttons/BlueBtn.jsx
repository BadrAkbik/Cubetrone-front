import React from 'react'
import { Link } from 'react-router-dom'

export default function BlueBtn(props) {
    return (
        <>
            <Link to={props.to}
                className="inline-flex items-center py-2 text-center px-4
                text-gray-100 rounded-lg bg-blue-600 hover:bg-orange-500 transition duration-200"
            >
                {props.children}
            </Link>
        </>
    )
}