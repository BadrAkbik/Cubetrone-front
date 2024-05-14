import React from 'react'

export default function OrangeBtn(props) {
    return (
        <button
            type="submit"
            disabled={props.loading}
            className={
                props.class
                + " items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-orange-500 hover:bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800 disabled:bg-gray-400"
            }
        >
            {props.children}
        </button>
    )
}