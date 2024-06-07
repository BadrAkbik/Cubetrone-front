import React from 'react'

export default function OrangeBtn(props) {
    return (
        <button
            type="submit"
            disabled={props.loading}
            onClick={props.onClick}
            className={
                props.class
                + " items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-orange-500 hover:bg-blue-600 rounded-lg focus:ring-4 disabled:bg-gray-400 transition duration-200"
            }
        >
            {props.children}
        </button>
    )
}