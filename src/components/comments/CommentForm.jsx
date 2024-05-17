import React from 'react'
import OrangeBtn from '../buttons/OrangeBtn'

const CommentForm = (props) => {

    const handleSubmit = () => {

    } 
    return (
        <form className="mb-6">
            <div className="py-2 px-4 mb-4 rounded-lg rounded-t-lg border border-gray-200">
                <label htmlFor="comment" className="sr-only">Your comment</label>
                <textarea id="comment" rows={3} className="px-0 w-full text-sm bg-gray-50 text-gray-900 border-0 focus:ring-0 focus:outline-none" placeholder="Write a comment..." required defaultValue={""} />
            </div>
            <OrangeBtn class='capitalize'>
                {props.type} comment
            </OrangeBtn>
        </form>
    )
}

export default CommentForm