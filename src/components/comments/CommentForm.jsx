import React, { useState } from 'react'
import OrangeBtn from '../buttons/OrangeBtn'
import api from "./../../api/Url"


const CommentForm = (props) => {
    const [value, setValue] = useState(props.value)



    const handleSubmit = async (e) => {
        e.preventDefault()
        props.setLoading(true);

        const data = new FormData(e.target)
        try {
            if (props.type === "post") {
                data.append('lesson_id', props.lessonId);

                const response = await api.post('/comments', data,
                    {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('access-token')}`,
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
            } else if (props.type === "edit") {
                const response = await api.post(`/comments/${props.id}`, data,
                    {
                        headers: {
                            'X-HTTP-Method-Override': 'PATCH',
                            'Authorization': `Bearer ${localStorage.getItem('access-token')}`,
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
            } else {
                data.append('lesson_id', props.lessonId);
                data.append('parent_id', props.id);
                console.log(props.id)

                const response = await api.post('/comments', data,
                    {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('access-token')}`,
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
            }

        } catch (err) {
            console.log(err)
        } finally {
            if (props.setActiveComment) {
                props.setActiveComment({})
            }
            props.setLoading(false);
        }


    }

    const handlechange = (e) => {
        setValue(e.target.value)
    }

    return (
        <form className="mb-6" onSubmit={handleSubmit}>
            <div className="py-2 px-4 mb-4 rounded-lg rounded-t-lg border border-gray-200">
                <label htmlFor="comment" className="sr-only">Your comment</label>
                <textarea
                    id="comment"
                    value={value}
                    onChange={handlechange}
                    name="body"
                    rows={3}
                    className="px-0 w-full text-sm bg-gray-50 text-gray-900 border-0 focus:ring-0 focus:outline-none"
                    placeholder="Write a comment..."
                    required
                />
            </div>
            <div className='flex justify-between'>
                <OrangeBtn class='capitalize' loading={props.loading}>
                    {props.type} comment
                </OrangeBtn>
                {props.hasCancelButton &&
                    <OrangeBtn onClick={props.handleCancel} >
                        Cancel
                    </OrangeBtn>
                }
            </div>
        </form>
    )
}

export default CommentForm