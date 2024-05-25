import React from 'react'

const ErrMessage = (props) => {
    return (
        props.errMsg && <p
            className="bg-red-600 font-meduim p-3 mb-3 rounded-lg max-w-fit text-white text-sm"
            aria-live="assertive">{props.errMsg}
        </p>
    )
}

export default ErrMessage