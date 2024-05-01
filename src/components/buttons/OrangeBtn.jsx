import React from 'react'

export default function OrangeBtn(props) {
    return (
        <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-orange-500 hover:bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
            {props.children}
        </button>
    )
}